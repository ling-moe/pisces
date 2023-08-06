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
    const user = await this.authService.getUser(token);
    return user;
  }

  @Get('/menu')
  @UseGuards(AuthGuard('unique-token'))
  async menu(@Headers('Authorization') token) {
    const user = this.menuService.menu(await this.authService.getUser(token));
    console.log("[getUserInfo]user==> ",JSON.stringify(user))
    return user;
  }
}
