import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CacheModule as CacheManagerModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import { CacheHelper } from './cache.helper';
import { RedisClientOptions } from 'redis';

@Module({
  imports: [
    CacheManagerModule.registerAsync<RedisClientOptions>({
      imports: [],
      useFactory: async (cfg: ConfigService) => ({
        store: await redisStore({
          socket: {
            host: cfg.get('REDIS_HOST'),
            port: cfg.get('REDIS_PORT'),
            tls: true,
          },
          username: cfg.get('REDIS_USERNAME'),
          password: cfg.get('REDIS_PASSWORD'),
          ttl: cfg.get('REDIS_TTL'),
        }),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [CacheHelper],
  exports: [CacheHelper],
})
export class CacheModule {}
