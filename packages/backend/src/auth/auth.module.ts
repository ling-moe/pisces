import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

/**
 * 用于配置 Passport 和身份验证策略
 */
@Module({
  providers: [AuthService],
})
export class AuthModule {}
