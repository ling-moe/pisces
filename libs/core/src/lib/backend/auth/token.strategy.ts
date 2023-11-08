import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Strategy } from 'passport-http-bearer';

/**
 * 用于实现本地身份验证逻辑。在 validate 方法中，可以编写自定义的身份验证逻辑
 */
@Injectable()
export class TokenStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(token: string) {
    // 接口鉴权实现逻辑
    console.log("[TokenStrategy][validate]==>",token)
    return await this.authService.validate(token);
  }
}
