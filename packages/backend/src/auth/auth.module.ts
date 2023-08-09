import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { TokenStrategy } from './token.strategy';
import { UserMoudule } from './user.module';
import { SelfController } from './self.controller';
import { MenuService } from './menu.service';

import { UserService } from './user.service';
import { CacheModule } from '@pisces/core/backend/cache/cache.module';

/**
 * 用于配置 Passport 和身份验证策略
 */
@Module({
  imports: [
    CacheModule,
    UserMoudule,
    PassportModule.register({ defaultStrategy: 'bearer' }),
  ],

  providers: [
    AuthService,
    TokenStrategy,
    MenuService, // 提供 UniqueTokenStrategy
    UserService
  ],
  controllers: [AuthController, SelfController],
})
export class AuthModule {}
