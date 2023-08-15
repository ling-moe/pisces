import { PrismaService } from '@pisces/core/backend/prisma/prisma.module';
import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UserRemoteService } from '../domain/user.remote';
import { Provider } from '@pisces/musubi/server';
import _ = require('lodash');

@Injectable()
export class UserRepository implements Provider<UserRemoteService>{
  constructor(private prisma: PrismaService) {}
  async create(user: User): Promise<void> {
    await this.prisma.user.create({data: user});
  }
  async list(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async createUser(data: User): Promise<User>  {
    console.log(data)
    const userCreateInput = _.cloneDeep(data);
    return this.prisma.user.create({
      data:userCreateInput,
    });
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
