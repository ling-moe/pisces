import { Prisma, User } from "@prisma/client";

export interface UserRemoteService{
  /**
   * 获取用户列表
   */
  list(): User[]

  create(user: User): void;
  update(user:User): void;
}
