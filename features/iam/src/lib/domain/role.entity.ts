import type { Role as PrismaRole } from '@prisma/client';
import type { GetResult } from '@prisma/client/runtime/library';

export type Role = PrismaRole extends GetResult<infer T, infer K> ? T : unknown;

export interface RoleRemoteService {
  /**
   * 获取用户列表
   */
  list(): Role[]
  /**
   * 创建用户
   */
  create(user: Role): void;
  /**
   * 更新用户信息
   */
  update(user: Role): void;
}
