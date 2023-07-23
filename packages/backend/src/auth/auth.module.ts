import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

/**
 * 用于配置 Passport 和身份验证策略
 */
@Module({
  providers: [AuthService],
  controllers:[
    AuthController
  ]
})
export class AuthModule {}
