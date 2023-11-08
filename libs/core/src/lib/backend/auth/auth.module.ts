import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { TokenStrategy } from './token.strategy';
import { CacheModule } from '../cache/cache.module';

/**
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
    TokenStrategy,
  ],
})
export class AuthModule {}
