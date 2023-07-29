import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import UniqueTokenStrategy from 'passport-unique-token';
import { AuthService } from './auth.service';

/**
 * 用于实现本地身份验证逻辑。在 validate 方法中，可以编写自定义的身份验证逻辑
 */
@Injectable()
export class TokenStrategy extends PassportStrategy(UniqueTokenStrategy,"unique-token") {
  constructor(private authService: AuthService) {
    // TODO
    // super((token) => this.authService.getUser());
    // super({
    //   tokenField: 'authorization',
    // });
    super();
  }

  async validate(token: string,done:(error:Error,user: any )=> void) {
    // const user = await this.authService.validateUser( username, password);
    // console.log("[TokenStrategy][validate]==>request",request)
    // const token = this.getTokenFromHeader(request);
    console.log("[TokenStrategy][validate]==>",token)
    const user = await this.authService.validate(token);
    if (!user) {
      done(null,false);
    }
    done(null,user);
  }


  // async validate(request: any) {
  //   // const user = await this.authService.validateUser( username, password);
  //   console.log("[TokenStrategy][validate]==>request",request)
  //   const token = this.getTokenFromHeader(request);
  //   const user = await this.authService.validate(token);
  //   if (!user) {
  //     throw new UnauthorizedException();
  //   }
  //   return user;
  // }

  private getTokenFromHeader(request: any): string | null {
    console.log("[TokenStrategy][getTokenFromHeader]==>request",request)
    const authHeader = request.headers['authorization'];
    if (authHeader) {
      return authHeader;
    }
    throw new UnauthorizedException();
  }
}
