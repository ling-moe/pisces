
import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { TokenStrategy } from './token.strategy';
import { UserMoudule } from './user.module';
import { SelfController } from './self.controller';
import { MenuService } from './menu.service';
import { RedisClientOptions } from 'redis';
import { redisStore } from 'cache-manager-redis-yet';
import { ConfigModule, ConfigService } from '@nestjs/config';


/**
 * 用于配置 Passport 和身份验证策略
 */
@Module({
  imports: [
    CacheModule.registerAsync<RedisClientOptions>({
      imports: [ConfigModule],
      useFactory: async (cfg: ConfigService) => ({
        store: await redisStore({
         socket: {
           host: cfg.get('REDIS_HOST') || 'singapore-redis.render.com',
           port: parseInt(cfg.get('REDIS_PORT ') || '6379'),
           tls: true
         },
         username: 'red-cj6v6g4l975s73b41p60',
         password: cfg.get('REDIS_PASSWORD') || 'KZMdBNea7Q1bXFVUBQr8Z9XZrlsuK820',
         ttl: cfg.get('REDIS_TTL'),
       }),
      }),
      inject: [ConfigService]
     }),
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
