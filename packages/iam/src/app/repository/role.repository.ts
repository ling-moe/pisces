import { PrismaService } from '@pisces/backend';
import { Injectable } from '@nestjs/common';
import { Provider } from '@pisces/musubi/server';
import { Role, RoleMenu, RoleQuery, RoleUser, RoleDomainService } from '../domain/role.entity';
import { Page, PageRequest, paginator } from '@pisces/common';

@Injectable()
export class RoleRepository implements Provider<RoleDomainService> {
  constructor(
    private prisma: PrismaService
    ) {}
  async listUserByRoleId(roleId: bigint): Promise<RoleUser[]>{
    return await this.prisma.roleUser.findMany({where: {roleId}});
  }

  async saveRoleUser(list: RoleUser[]): Promise<void>{
    const removeList = list.filter(roleMenu => roleMenu.roleUserId).map(roleMenu => roleMenu.roleUserId);
    const addList = list.filter(roleMenu => !roleMenu.roleUserId)
    await this.prisma.$transaction([
      this.prisma.roleUser.deleteMany({where: {roleUserId: {in: removeList}}}),
      this.prisma.roleUser.createMany({data: addList})
    ]);
  }

  async listMenuByRoleId(roleId: bigint): Promise<RoleMenu[]>{
    return await this.prisma.roleMenu.findMany({where: {roleId}});
  }

  async saveRoleMenu(list: RoleMenu[]): Promise<void>{
    const removeList = list.filter(roleMenu => roleMenu.roleMenuId).map(roleMenu => roleMenu.roleMenuId);
    const addList = list.filter(roleMenu => !roleMenu.roleMenuId)
    await this.prisma.$transaction([
      this.prisma.roleMenu.deleteMany({where: {roleMenuId: {in: removeList}}}),
      this.prisma.roleMenu.createMany({data: addList})
    ]);
  };
  /**
   * 分页查询角色列表
   * @param pageRequest 分页参数
   * @param query 查询条件
   * @returns 角色list
   */
  async page(pageRequest: PageRequest<Role>, query?: RoleQuery): Promise<Page<Role>> {
    return await paginator(pageRequest)(this.prisma.role, {where: query});
  }
  async create(role: Role) {
    await this.prisma.role.create({ data: role });
  }
  async update(role: Role) {
    await this.prisma.role.update({ where: { roleId: role.roleId }, data: role });
  }
}
