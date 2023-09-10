import { PrismaService } from '@pisces/core/backend/prisma/prisma.module';
import { Injectable } from '@nestjs/common';
import { Provider } from '@pisces/musubi/server';
import { Menu, MenuNode, MenuRemoteService } from '../domain/menu.entity';
import { camelCase, groupBy, mapKeys } from 'lodash';

@Injectable()
export class MenuRepository implements Provider<MenuRemoteService> {
  constructor(private prisma: PrismaService) {}

  async treeRpc() {
    const list1 = await this.prisma.$queryRaw<MenuNode[]>`WITH RECURSIVE result AS (
      SELECT *, 1 as level FROM sys_menu WHERE menu_id = 1
      UNION
      SELECT m.*, p.level + 1 as level FROM sys_menu m JOIN result p ON m.pid = p.menu_id)
      SELECT * FROM result;`;
    const list = list1.map((i) => mapKeys(i, (_, v) => camelCase(v))) as MenuNode[];
    const group = groupBy(list, 'pid');
    return list.filter((father) => {
      father.children = group[father.menuId.toString()];
      return father.pid === 0n;
    });
  }
  async createRpc(menu: Menu) {
    await this.prisma.menu.create({ data: menu });
  }
  async updateRpc(menu: Menu) {
    await this.prisma.menu.update({ where: { menuId: menu.menuId }, data: menu });
  }
}
