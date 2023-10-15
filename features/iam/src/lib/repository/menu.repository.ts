import { PrismaService } from '@pisces/core/backend/prisma/prisma.module';
import { Injectable } from '@nestjs/common';
import { Provider } from '@pisces/musubi/server';
import { Menu, MenuNode, MenuRemoteService } from '../domain/menu.entity';
import { camelCase, groupBy, mapKeys } from 'lodash';
import { HasPermission, Perm } from '../infra/permission';
import { prems } from "../infra/permission";

@Injectable()
export class MenuRepository implements Provider<MenuRemoteService> {
  constructor(private prisma: PrismaService) {}

  async delete$menu(menuId: bigint): Promise<void>{
    await this.prisma.menu.delete({where: {menuId: menuId}});
  };

  @HasPermission('保存菜单中的权限')
  async savePerms$menu(currentMenu: Menu, addPerms: Perm[], removeMenus: Menu[]): Promise<void> {
    const menus = addPerms.map(perm => {
      return <Menu>{menuCode: perm.code, menuName: perm.desc, menuType: 'FUNCTION', pid: currentMenu.menuId};
    })
    await this.prisma.$transaction([
      this.prisma.menu.createMany({data:menus}),
      this.prisma.menu.deleteMany({where:{menuId: {in: removeMenus.map(menu => menu.menuId)}}})
    ]);
  };

  @HasPermission('获取菜单中已分配的权限')
  listAssignedPermByMenuId$menu(menuId: bigint): Menu[] | Promise<Menu[]>{
    return this.prisma.menu.findMany({where: {pid: menuId}});
  };

  @HasPermission('获取权限列表')
  listPerm$menu(): Perm[] {
    return prems;
  }

  @HasPermission('树状查询菜单')
  async tree$menu() {
    const list1 = await this.prisma.$queryRaw<MenuNode[]>`WITH RECURSIVE result AS (
      SELECT *, 1 as level FROM sys_menu WHERE menu_id = 1
      UNION
      SELECT m.*, p.level + 1 as level FROM sys_menu m JOIN result p ON m.pid = p.menu_id)
      SELECT * FROM result;`;
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
    // const user = this.menu();
    // console.log("[getUserInfo]user==> ",JSON.stringify(user))
    return {
      "menu": [
        {
          "route": "iam/user",
          "name": "user",
          "type": "link",
          "icon": "dashboard",
        },
        {
          "route": "iam/role",
          "name": "role",
          "type": "link",
          "icon": "dashboard",
        },
        {
          "route": "iam/menu",
          "name": "menu",
          "type": "link",
          "icon": "dashboard",
        },
        {
          "route": "/",
          "name": "sessions",
          "type": "sub",
          "icon": "question_answer",
          "children": [
            {
              "route": "403",
              "name": "403",
              "type": "link"
            },
            {
              "route": "404",
              "name": "404",
              "type": "link"
            },
            {
              "route": "500",
              "name": "500",
              "type": "link"
            }
          ]
        }
      ]
    }
  }
}
