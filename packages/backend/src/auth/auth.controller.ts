import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { UniqueTokenAuthGuard } from './token.guard';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Request() req) {
    // 登录请求逻辑
    console.log(req.user);
    return this.authService.login(req.user);
  }

  @Get('/hello')
  async hello() {
    // 登录请求逻辑
    return this.authService.getUser();
  }
}
