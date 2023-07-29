import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { TokenStrategy } from './token.strategy';
import { UserMoudule } from './user.module';
import { LocalStrategy } from './local.strategy';

/**
 * 用于配置 Passport 和身份验证策略
 */
@Module({
  imports: [
    CacheModule.register(), // Initialize cache manager module
    UserMoudule,
    PassportModule.register({ defaultStrategy: 'unique-token' }),
  ],

  providers: [
    AuthService,
    TokenStrategy, // 提供 UniqueTokenStrategy
    LocalStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
