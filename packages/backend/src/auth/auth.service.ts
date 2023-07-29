import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { v4 as uuidv4 } from 'uuid';
import { UserDto } from './user';
import { UserService } from './user.service';

/**
 * 用于处理用户身份验证和生成令牌
 */
@Injectable()
export class AuthService {
  token = '';

  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private userService: UserService
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    // 在此处实现用户身份验证逻辑（例如从数据库中验证用户凭据） 如果验证成功，返回用户对象；否则返回 null
    const user = await this.userService.findOne(username);
    if (user && user.password === password) {
      console.log("user==>" + user);
      const { password, ...result } = user;
      console.log("result==>" + result);
      return result;
    }
    throw new Error('Incorrect username or password');
  }


  async login(user: any) {
    const userData = this.validateUser(user.username, user.password);
    const token = uuidv4(); // Generate a unique token (you can use other token generation methods)
    this.token = token;
    await this.cacheManager.set(token, userData, 3600); // Cache the user data with the token (ttl is in seconds)
    return token;
  }

  async getUser() {
    // throw new Error("Method not implemented.");
    return await this.cacheManager.get(this.token);
  }

  

  async validate(token: string) {
    try {
      // 假设这里使用简单的静态数据来模拟查询数据库验证 token 的过程
      // const validTokens = ['token123', 'token456'];
      if (token == this.token) {
        // 如果验证通过，将用户对象传递给回调函数
        return { id: 1, username: 'example' };
      } else {
        // 如果验证失败，抛出未授权异常
        new UnauthorizedException();
      }
    } catch (error) {
      new UnauthorizedException();
    }
  }

}
