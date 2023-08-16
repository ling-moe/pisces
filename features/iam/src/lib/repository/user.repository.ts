import { PrismaService } from '@pisces/core/backend/prisma/prisma.module';
import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UserRemoteService } from '../domain/user.remote';
import { Provider } from '@pisces/musubi/server';
import { AuthService } from 'packages/backend/src/auth/auth.service'
import { BizException } from 'libs/core/src/lib/backend/config/exception/biz-exception'


@Injectable()
export class UserRepository implements Provider<UserRemoteService>{
  constructor(private prisma: PrismaService,
    private authService: AuthService,
    private bizException: BizException) { }
  /**
   * 查询列表
   */
  async listRpc(): Promise<User[]> {
    // TODO 需要分页实现
    return await this.prisma.user.findMany();
  }
  /**
   * 创建用户信息
   */
  async createRpc(user: User): Promise<void> {
    console.log("[User][createRpc]==>", JSON.stringify(user))
    // 处理密码
    const pwd = await this.authService.hashPassword(user.password);
    user.password = pwd;
    // TODO 必填校验怎么统一处理
    // 处理用户唯一 不能重复
    const dbUser = await this.findByUsername(user.username);
    if (dbUser !== null) {
      throw new BizException("该用户信息已存在,不能重复创建!")
    }
    await this.prisma.user.create({ data: user });
  }
  /**
   * 更新用户信息
   */
  async updateRpc(user: User): Promise<void> {
    // 必填校验
    const dbUser = await this.findByUserId(user.userId);
    if (dbUser === null) {
      throw new BizException("您操作的用户信息异常,请检查后重试!")
    }
    await this.prisma.user.update({ where: { userId: user.userId }, data: user });
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: {
        username: {
          equals: username,
        },
      },
    });
  }

  async findByUserId(userId: string): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: {
        userId: {
          equals: userId,
        },
      },
    });
  }

  async user(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async users(options: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = options;

    return await this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }


  async updateUser(options: { where: Prisma.UserWhereUniqueInput; data: Prisma.UserUpdateInput }) {
    const { where, data } = options;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({
      where,
    });
  }
}
