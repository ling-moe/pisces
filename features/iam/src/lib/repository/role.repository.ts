import { PrismaService } from '@pisces/core/backend/prisma/prisma.module';
import { Injectable } from '@nestjs/common';
import { Provider } from '@pisces/musubi/server';
import { Role, RoleRemoteService } from '../domain/role.entity';

@Injectable()
export class RoleRepository implements Provider<RoleRemoteService> {
  constructor(private prisma: PrismaService) {}
  async listRpc() {
    return await this.prisma.role.findMany();
  }
  async createRpc(role: Role) {
    await this.prisma.role.create({ data: role });
  }
  async updateRpc(role: Role) {
    await this.prisma.role.update({ where: { roleId: role.roleId }, data: role });
  }
}
