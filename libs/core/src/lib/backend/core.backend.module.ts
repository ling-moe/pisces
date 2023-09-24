import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { CacheModule } from './cache/cache.module';
import { GlobalExceptionFilter } from './config/exception/filters/global-exception.filter';
import { PrismaModule } from './prisma/prisma.module';
import { LoggingInterceptor } from './config/log.interceptor';

@Module({
  imports: [CacheModule, PrismaModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    }
  ],
})
export class CoreBackendModule {}

