import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { UserMoudule } from './user.module';

import { UserService } from './user.service';
import { CacheModule } from '@pisces/core/backend/cache/cache.module';

/**
 * TODO   @UseGuards(RolesGuard()) 备份
 * 用于配置 Passport 和身份验证策略
 */
@Module({
  imports: [
    CacheModule,
    UserMoudule,
    PassportModule,
  ],

  providers: [
    AuthService,
    UserService
  ],
  controllers: [AuthController],
})
export class AuthModule {}
