import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { v4 as uuidv4 } from 'uuid';
import { User } from '@prisma/client';
import { UserService } from '../prisma/user.service';

/**
 * 用于处理用户身份验证和生成令牌
 */
@Injectable()
export class AuthService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache, private userService: UserService) {}

  async validateUser(username: string, password: string): Promise<any> {
    // 在此处实现用户身份验证逻辑（例如从数据库中验证用户凭据） 如果验证成功，返回用户对象；否则返回 null
    const user = await this.userService.findByUsername(username);
    // TODO 密码需要使用bcrypt进行加密处理然后进行比较（加盐）
    if (user && user.password === password) {
      console.log('user==>', user);
      // TODO BigInt序列化问题 缓存中先排除掉BigInteger字段
      const { password,userId,createBy,updateBy, ...result } = user;
      console.log('result==>', result);
      return result;
    }
    throw new Error('Incorrect username or password');
  }

  async login(user: User) {
    const userData = await this.validateUser(user.username, user.password);
    const token = uuidv4(); // Generate a unique token (you can use other token generation methods)
    console.log('result==>', userData);
    // TODO 需要处理bigInt序列化问题
    await this.cacheManager.set(token, userData, 3600000); // Cache the user data with the token (ttl is in seconds)
    return { access_token: token, token_type: 'bearer' };
  }

  async getUser(token: string) {
    // throw new Error("Method not implemented.");
    return (await this.cacheManager.get(token.split(' ')[1])) as User;
  }

  async validate(token: string) {
    console.log('[validate]this.toke==>', token);
    // 根据token查询缓存信息中是否存在用户信息，不存在直接抛异常
    if (token === null || token === '') {
      throw new UnauthorizedException();
    }
    const user = await this.cacheManager.get(token);
    if (user === null) {
      // 如果验证失败，抛出未授权异常
      throw new UnauthorizedException();
    }
    return user;
  }
}
