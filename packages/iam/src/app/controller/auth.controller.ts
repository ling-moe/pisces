import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { Public } from '@pisces/backend';
import { UserRepository } from '../repository/user.repository';

@Controller('/auth')
export class AuthController {
  constructor(
    private readonly userRepository: UserRepository
    ) {}

  @Post('/login')
  @Public()
  async login(@Body() user: User) {
    // 登录请求逻辑
    return this.userRepository.login(user);
  }
}
