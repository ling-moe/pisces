import { Page, PageRequest } from '@pisces/common';
import { User as PrismaUser } from "@prisma/client";
import type { GetResult } from '@prisma/client/runtime/library';

export type User = PrismaUser extends GetResult<infer T, infer K> ? T : unknown;
export type UserQuery = Pick<User, 'username' | 'displayName' | 'enabledFlag'>;


export interface UserRemoteService {
  /**
   * 获取用户列表
   */
  page(pageRequest: PageRequest<User>, query?: UserQuery): Page<User>
  /**
   * 创建用户
   */
  create(user: User): void;
  /**
   * 更新用户信息
   */
  update(user: User): void;
}
