import { PrismaService, CacheHelper, BizException, Token } from '@pisces/backend';
import { Injectable } from '@nestjs/common';
import { Prisma, RoleUser } from '@prisma/client';
import { Provider } from '@pisces/musubi/server';
import { hash, compare } from 'bcrypt';
import { User, UserQuery, UserDomainService } from '../domain/user.entity';
import { PageRequest, DEFAULT_PAGE, paginator, Page } from '@pisces/common';
import { camelCase, mapKeys } from 'lodash';
import { ClsService } from 'nestjs-cls';
import { HasPermission } from '../infra/permission';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserRepository implements Provider<UserDomainService>{

  constructor(
    private readonly prisma: PrismaService,
    private readonly authClsStore: ClsService<{ 'currentUser': User; }>,
    private readonly cachehelper: CacheHelper
  ) { }

  async listUnassignedUser(roleId: bigint): Promise<(User & RoleUser)[]> {
    return (await this.prisma
      .$queryRaw<(User & RoleUser)[]>`SELECT su.username, su.display_name, su.user_id, sru.role_id, sru.role_user_id FROM sys_user su LEFT JOIN sys_role_user sru ON su.user_id = sru.user_id AND sru.role_id = ${roleId};`
    ).map((i) => mapKeys(i, (_, v) => camelCase(v)) as unknown as (User & RoleUser));
  }
  /**
   * 查询列表
   */
  async pageUser(pageRequest: PageRequest<User> = DEFAULT_PAGE, query?: UserQuery): Promise<Page<User>> {
    return await paginator(pageRequest)(this.prisma.user, { where: query });
  }
  /**
   * 创建用户信息
   */
  async createUser(user: User): Promise<void> {
    // 处理密码
    const pwd = await hash(user.password, 10);
    user.password = pwd;
    // TODO 必填校验怎么统一处理
    // 处理用户唯一 不能重复
    const dbUser = await this.findByUsername(user.username);
    if (dbUser !== null) {
      throw new BizException("该用户信息已存在,不能重复创建!");
    }
    await this.prisma.user.create({ data: user });
  }
  /**
   * 更新用户信息
   */
  @HasPermission('当前用户信息')
  async updateUser(user: User): Promise<void> {
    // 必填校验
    await this.validUserId(user.userId);
    await this.prisma.user.update({ where: { userId: user.userId }, data: user });
  }

  querySelfUser(): User {
    return this.authClsStore.get('currentUser');
  }

  async login(user: User): Promise<Token> {
    const userData = await this.$validateUser(user.username, user.password);
    const token = uuidv4();
    await this.cachehelper.set(token, userData, 3600000);
    return { access_token: token, token_type: 'bearer' };
  }

  async $validateUser(username: string, password: string): Promise<User> {
    // 在此处实现用户身份验证逻辑（例如从数据库中验证用户凭据） 如果验证成功，返回用户对象；否则返回 null
    const user = await this.findByUsername(username);
    // 校验用户信息
    if (!user || !await this.$comparePasswords(password, user.password)) {
      throw new BizException('Incorrect username or password');
    }
    const roleUsers = await this.prisma.roleUser.findMany({ where: { userId: user.userId } });
    user.roles = roleUsers.map(roleUser => roleUser.roleId);
    return user;
  }

  async $comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
    return compare(password, hashedPassword);
  }

  /**
   * 重置用户密码
   */
  async $resetPassword(userId: string, user: User): Promise<void> {
    this.validUserId(user.userId);
  }

  async validUserId(userId: bigint): Promise<void> {
    const dbUser = await this.findByUserId(userId);
    if (dbUser === null) {
      throw new BizException("您操作的用户信息异常,请检查后重试!");
    }
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

  async findByUserId(userId: bigint): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: {
        userId: {
          equals: userId,
        },
      },
    });
  }

  async $user(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async $users(options: {
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

  async $updateUser(options: { where: Prisma.UserWhereUniqueInput; data: Prisma.UserUpdateInput; }) {
    const { where, data } = options;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async $deleteUser(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({
      where,
    });
  }
}
