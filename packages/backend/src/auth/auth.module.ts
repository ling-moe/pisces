import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { TokenStrategy } from './token.strategy';
import { UserMoudule } from './user.module';
import { SelfController } from './self.controller';
import { MenuService } from './menu.service';

/**
 * 用于配置 Passport 和身份验证策略
 */
@Module({
  imports: [
    CacheModule.register(), // Initialize cache manager module
    UserMoudule,
    PassportModule.register({ defaultStrategy: 'bearer' }),
  ],

  providers: [
    AuthService,
    TokenStrategy,
    MenuService, // 提供 UniqueTokenStrategy
  ],
  controllers: [AuthController, SelfController],
})
export class AuthModule {}
