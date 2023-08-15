import { Prisma, User } from "@prisma/client";

export interface UserRemoteService{
  /**
   * 获取用户列表
   */
  list(): User[]

  createUser(data: User): Promise<User>;
}
