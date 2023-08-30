import type { Menu as PrismaMenu } from '@prisma/client';
import type { GetResult } from '@prisma/client/runtime/library';

export type Menu = PrismaMenu extends GetResult<infer T, infer K> ? T : unknown;

export interface MenuRemoteService {
  /**
   * 获取用户列表
   */
  tree(): Menu[]
  /**
   * 创建用户
   */
  create(user: Menu): void;
  /**
   * 更新用户信息
   */
  update(user: Menu): void;
}
