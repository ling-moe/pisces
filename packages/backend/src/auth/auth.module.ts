import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { TokenStrategy } from './token.strategy';

/**
 * 用于配置 Passport 和身份验证策略
 */
@Module({
  imports: [
    CacheModule.register(), // Initialize cache manager module
  ],

  providers: [
    AuthService,
    TokenStrategy, // 提供 UniqueTokenStrategy
  ],
  controllers:[
    AuthController
  ]
  
})
export class AuthModule {}
