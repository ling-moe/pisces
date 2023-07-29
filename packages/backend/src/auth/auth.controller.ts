import { Body, Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { TokenStrategy } from './token.strategy';
import { UserDto } from './user';
import { AuthGuard } from '@nestjs/passport';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Body() user: UserDto) {
    // 登录请求逻辑
    return this.authService.login(user);
  }

  @Get('protected')
  @UseGuards(AuthGuard('unique-token'))
  protectedRoute() {
    // 需要收保护的路由 
  }

  @Get('getUserInfo')
  async getUserInfo(@Req() req: Request) {
    const authHeader = req.headers['authorization'];
    console.log("[TokenStrategy][getTokenFromHeader]==>request",authHeader)
    const user = this.authService.validate(authHeader);
    return user;
  }
  
}
