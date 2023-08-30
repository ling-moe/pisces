import { PrismaService } from '@pisces/core/backend/prisma/prisma.module';
import { Injectable } from '@nestjs/common';
import { Provider } from '@pisces/musubi/server';
import { Menu, MenuRemoteService } from '../domain/menu.entity';
import type { Menu as PrismaMenu } from '@prisma/client';

@Injectable()
export class MenuRepository implements Provider<MenuRemoteService> {
  constructor(private prisma: PrismaService) {}

  async treeRpc() {
    return await this.prisma.$queryRaw<PrismaMenu[]>`WITH RECURSIVE result AS (
      SELECT * FROM menu WHERE menu = 1
      UNION
      SELECT m.* FROM menu m JOIN result p ON m.pid = p.menu_id)
      SELECT * FROM result;`;
  }
  async createRpc(menu: Menu) {
    await this.prisma.menu.create({ data: menu });
  }
  async updateRpc(menu: Menu) {
    await this.prisma.menu.update({ where: { menuId: menu.menuId }, data: menu });
  }
}
