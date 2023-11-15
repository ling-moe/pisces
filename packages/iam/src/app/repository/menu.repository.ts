import { PrismaService } from '@pisces/backend';
import { Injectable } from '@nestjs/common';
import { Provider } from '@pisces/musubi/server';
import { Menu, MenuNode, MenuRemoteService } from '../domain/menu.entity';
import { camelCase, groupBy, mapKeys } from 'lodash';
import { HasPermission, Perm } from '../infra/permission';
import { prems } from "../infra/permission";
import { ClsService } from 'nestjs-cls';
import { User } from '../domain/user.entity';

@Injectable()
export class MenuRepository implements Provider<MenuRemoteService> {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authClsStore: ClsService<{ 'currentUser': User; }>,
  ) { }

  async delete$menu(menuId: bigint): Promise<void> {
    await this.prisma.menu.delete({ where: { menuId: menuId } });
  };

  @HasPermission('保存菜单中的权限')
  async savePerms$menu(menuId: bigint, addPerms: Perm[], removeMenus: Menu[]): Promise<void> {
    const menus = addPerms.map(perm => {
      return <Menu>{ menuCode: perm.code, menuName: perm.desc, menuType: 'FUNCTION', pid: menuId };
    });
    await this.prisma.$transaction([
      this.prisma.menu.createMany({ data: menus }),
      this.prisma.menu.deleteMany({ where: { menuId: { in: removeMenus.map(menu => menu.menuId) } } })
    ]);
  };

  @HasPermission('获取菜单中已分配的权限')
  listAssignedPermByMenuId$menu(menuId: bigint): Menu[] | Promise<Menu[]> {
    return this.prisma.menu.findMany({ where: { pid: menuId } });
  };

  @HasPermission('获取权限列表')
  listPerm$menu(): Perm[] {
    return prems;
  }

  @HasPermission('树状查询菜单')
  async tree$menu(isIncludeFunction: boolean) {
    const list1 = await this.prisma.$queryRawUnsafe<MenuNode[]>(`WITH RECURSIVE result AS (
      SELECT *, 1 as level FROM sys_menu WHERE menu_id = 1
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
  async create$menu(menu: Menu) {
    await this.prisma.menu.create({ data: menu });
  }

  @HasPermission('更新菜单')
  async update$menu(menu: Menu) {
    await this.prisma.menu.update({ where: { menuId: menu.menuId }, data: menu });
  }

  @HasPermission('当前用户的菜单')
  async querySelf$menu() {
    const user = this.authClsStore.get('currentUser');

    const roleMenus = await this.prisma.roleMenu.findMany({ where: { roleId: { in: user.roles } } });
    const menus = await this.prisma.menu.findMany({ where: { menuId: { in: roleMenus.map(i => i.menuId) } } }) as MenuNode[];
    const group = groupBy(menus, 'pid');
    return menus.filter((father) => {
      father.children = group[father.menuId.toString()];
      return father.pid === 0n;
    });
  }
}
