import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { CacheModule } from './cache/cache.module';
import { GlobalExceptionFilter } from './config/exception/filters/global-exception.filter';
import { PrismaModule } from './prisma/prisma.module';

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

