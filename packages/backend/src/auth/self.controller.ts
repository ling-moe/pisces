import { Controller, Get, Headers, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { MenuService } from './menu.service';

@Controller('/self')
export class SelfController {
  constructor(
    private readonly authService: AuthService,
    private readonly menuService: MenuService
    ) {}

  @Get()
  @UseGuards(AuthGuard('unique-token'))
  async self(@Headers('Authorization') token) {
    // ! TODO 莉桑，如果拿不到用户记得返回401,另外全局异常拦截器你也要配，现在登录的时候如果失败，返回的http错误码有问题
    const user = await this.authService.getUser(token);
    return user;
  }

  @Get('/menu')
  @UseGuards(AuthGuard('unique-token'))
  async menu(@Headers('Authorization') token) {
    const user = this.menuService.menu(await this.authService.getUser(token));
    console.log("[getUserInfo]user ==> ",JSON.stringify(user))
    return user;
  }
}
