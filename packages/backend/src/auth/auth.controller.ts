import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { RolesGuard } from './roles.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(RolesGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
