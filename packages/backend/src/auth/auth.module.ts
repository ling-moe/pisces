import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { TokenStrategy } from './token.strategy';
import { UserMoudule } from './user.module';
import { SelfController } from './self.controller';
import { MenuService } from './menu.service';

import { UserService } from '../prisma/user.service';
import { PrismaModule } from '../prisma/prisma.module';
import { CacheModule } from '../cache/cache.module';
import { ConfigModule } from '@nestjs/config';

/**
 * 用于配置 Passport 和身份验证策略
 */
@Module({
  imports: [
    CacheModule,
    UserMoudule,
    PrismaModule,

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
