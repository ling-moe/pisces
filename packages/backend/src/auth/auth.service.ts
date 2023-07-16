import { Injectable } from '@nestjs/common';

/**
 * 用于处理用户身份验证和生成令牌
 */
@Injectable()
export class AuthService {
  getUser(token: string) {
    throw new Error("Method not implemented.");
  }

  async validateUser(username: string, password: string): Promise<any> {
    // 在此处实现用户身份验证逻辑（例如从数据库中验证用户凭据）
    // 如果验证成功，返回用户对象；否则返回 null
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      // access_token: this.jwtService.sign(payload),
    };
  }

  
}

