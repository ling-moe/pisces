import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { UserService } from './user.service';
import { CacheModule } from '@pisces/core/backend/cache/cache.module';
import { TokenStrategy } from './token.strategy';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './roles.guard';

/**
 * TODO   @UseGuards(RolesGuard()) 备份
 * 用于配置 Passport 和身份验证策略
 */
@Global()
@Module({
  imports: [
    CacheModule,
    PassportModule,
  ],

  providers: [
    AuthService,
    UserService,
    TokenStrategy,
    {
      provide: APP_GUARD,
      useClass: RolesGuard(),
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
