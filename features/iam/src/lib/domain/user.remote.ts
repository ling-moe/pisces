import { User } from "@prisma/client";

export interface UserRemoteService {
  /**
   * 获取用户列表
   */
  list(): User[]
  /**
   * 创建用户
   */
  create(user: User): void;
  /**
   * 更新用户信息
   */
  update(user: User): void;
}
