import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { v4 as uuidv4 } from 'uuid';

/**
 * 用于处理用户身份验证和生成令牌
 */
@Injectable()
export class AuthService {

  token = '';

  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ){}
  async getUser() {
    // throw new Error("Method not implemented.");
    return await this.cacheManager.get(this.token)

  }

  async validateUser(user: any): Promise<any> {
    if (user.username === "admin" && user.password === "123456") {
      const user = { id: 1, username: 'example' };
        return user;
    }
    throw new Error("Incorrect username or password");
    // 在此处实现用户身份验证逻辑（例如从数据库中验证用户凭据）
    // 如果验证成功，返回用户对象；否则返回 null
  }

  async validate(token: string, done: (error: Error, user?: any) => void) {
    try {
      // 假设这里使用简单的静态数据来模拟查询数据库验证 token 的过程
      const validTokens = ['token123', 'token456'];

      if (validTokens.includes(token)) {
        // 如果验证通过，将用户对象传递给回调函数
        const user = { id: 1, username: 'example' };
        done(null, user);
      } else {
        // 如果验证失败，抛出未授权异常
        done(new UnauthorizedException(), false);
      }
    } catch (error) {
      done(error);
    }
  }

  async login(user: any) {
    this.validateUser(user);
    const userData = { username: user.username, sub: user.userId };
    const token = uuidv4(); // Generate a unique token (you can use other token generation methods)
    this.token = token;
    await this.cacheManager.set(token, userData, 3600); // Cache the user data with the token (ttl is in seconds)
    return token;
  }

  
}

