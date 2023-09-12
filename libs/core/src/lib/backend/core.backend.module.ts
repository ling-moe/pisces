import { Module } from '@nestjs/common';
import { CacheModule } from './cache/cache.module';
import { PrismaModule } from './prisma/prisma.module';
import { APP_FILTER } from '@nestjs/core';
import { GlobalExceptionFilter } from './config/exception/filters/global-exception.filter';

@Module({
  imports: [CacheModule, PrismaModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    }
  ],
})
export class CoreBackendModule {}
