import { Injectable, UnauthorizedException } from '@nestjs/common';
import { hash } from 'bcrypt';
import { CacheHelper } from '../cache/cache.helper';
import { User } from './auth.types';

/**
 * 用于处理用户身份验证和生成令牌
 */
@Injectable()
export class AuthService {
  constructor(
    private cachehelper: CacheHelper
  ) {}

  async getUser(token: string) {
    const user = await this.cachehelper.get(token.split(' ')[1]);
    if (user === null) {
      throw new UnauthorizedException();
    }
    return user as User;
  }

  async getUserByToken(token: string) {
    // 根据token查询缓存信息中是否存在用户信息，不存在直接抛异常
    if (token === null || token === '') {
      throw new UnauthorizedException();
    }
    const user = await this.cachehelper.get(token);
    if (user === null) {
      // 如果验证失败，抛出未授权异常
      throw new UnauthorizedException();
    }
    return user;
  }

  async hashPassword(password: string): Promise<string> {
    return hash(password, 10);
  }


}
