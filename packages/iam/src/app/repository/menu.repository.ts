import { PrismaService } from '@pisces/backend';
import { Injectable } from '@nestjs/common';
import { Provider } from '@pisces/musubi/server';
import { Menu, MenuNode, MenuDomainService } from '../domain/menu.entity';
import { camelCase, groupBy, mapKeys } from 'lodash';
import { HasPermission, Perm } from '../infra/permission';
import { prems } from "../infra/permission";
import { ClsService } from 'nestjs-cls';
import { User } from '../domain/user.entity';

@Injectable()
export class MenuRepository implements Provider<MenuDomainService> {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authClsStore: ClsService<{ 'currentUser': User; }>,
  ) { }

  async delete(menuId: bigint): Promise<void> {
    await this.prisma.menu.delete({ where: { menuId: menuId } });
  };

  @HasPermission('保存菜单中的权限')
  async savePerms(menuId: bigint, addPerms: Perm[], removeMenus: Menu[]): Promise<void> {
    const menus = addPerms.map(perm => {
      return <Menu>{ menuCode: perm.code, menuName: perm.desc, menuType: 'FUNCTION', pid: menuId };
    });
    await this.prisma.$transaction([
      this.prisma.menu.createMany({ data: menus }),
      this.prisma.menu.deleteMany({ where: { menuId: { in: removeMenus.map(menu => menu.menuId) } } })
    ]);
  };

  @HasPermission('获取菜单中已分配的权限')
  listAssignedPermByMenuId(menuId: bigint): Menu[] | Promise<Menu[]> {
    return this.prisma.menu.findMany({ where: { pid: menuId } });
  };

  @HasPermission('获取权限列表')
  listPerm(): Perm[] {
    return prems;
  }

  @HasPermission('树状查询菜单')
  async tree(isIncludeFunction: boolean) {
    const list1:MenuNode[] = await this.prisma.$queryRawUnsafe<MenuNode[]>(`WITH RECURSIVE result AS (
      SELECT *, 1 as level FROM sys_menu WHERE pid = 0
      UNION
      SELECT m.*, p.level + 1 as level FROM sys_menu m JOIN result p ON m.pid = p.menu_id ${isIncludeFunction ? '' : 'AND m.menu_type != \'FUNCTION\''})
      SELECT * FROM result;`);

    const list = list1.map((i) => mapKeys(i, (_, v) => camelCase(v))) as unknown as MenuNode[];
    const group = groupBy(list, 'pid');
    return list.filter((father) => {
      father.children = group[father.menuId.toString()];
      return father.pid === 0n;
    });
  }

  @HasPermission('创建菜单')
  async create(menu: Menu) {
    await this.prisma.menu.create({ data: menu });
  }

  @HasPermission('更新菜单')
  async update(menu: Menu) {
    await this.prisma.menu.update({ where: { menuId: menu.menuId }, data: menu });
  }

  @HasPermission('当前用户的菜单')
  async querySelf() {
    // const user = this.authClsStore.get('currentUser');
    // const roleMenus = await this.prisma.roleMenu.findMany({ where: { roleId: { in: user.roles } } });
    // const menus = await this.prisma.menu.findMany({ where: { menuId: { in: roleMenus.map(i => i.menuId) } } }) as MenuNode[];
    const menus = await this.prisma.menu.findMany() as MenuNode[];
    const group = groupBy(menus, 'pid');
    return menus.filter((father) => {
      father.children = group[father.menuId.toString()];
      return father.pid === 0n;
    });
  }
}
