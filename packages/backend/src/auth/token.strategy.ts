import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import UniqueTokenStrategy from 'passport-unique-token';
import { AuthService } from './auth.service';

/**
 * 用于实现本地身份验证逻辑。在 validate 方法中，可以编写自定义的身份验证逻辑
 */
@Injectable()
export class TokenStrategy extends PassportStrategy(UniqueTokenStrategy) {
  constructor(private authService: AuthService) {
    super((token) => this.authService.getUser(token));
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser( {username, password});
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
  
}
