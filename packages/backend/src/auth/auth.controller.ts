import { Body, Controller, Get, Post, Req, Request, UseGuards,Response, Res, HttpStatus, Header, Headers } from '@nestjs/common';
import { AuthService } from './auth.service';
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
    console.log("[protected]==>request")
  }
}
