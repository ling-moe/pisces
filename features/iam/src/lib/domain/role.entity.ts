import { PageRequest, Page } from '@pisces/common';
import type { Role as PrismaRole } from '@prisma/client';
import type { GetResult } from '@prisma/client/runtime/library';

export type Role = PrismaRole extends GetResult<infer T, infer K> ? T : unknown;

export type RoleQuery = Pick<Role, 'roleCode' | 'roleName' | 'enabledFlag'>;

export interface RoleRemoteService {
  /**
   * 获取角色列表
   */
  page(pageRequest: PageRequest<Role>, query?: RoleQuery): Page<Role>;
  /**
   * 创建角色
   */
  create(user: Role): void;
  /**
   * 更新角色
   */
  update(user: Role): void;
}
