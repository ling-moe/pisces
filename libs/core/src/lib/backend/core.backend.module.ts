import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { CacheModule } from './cache/cache.module';
import { GlobalExceptionFilter } from './config/exception/filters/global-exception.filter';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { RolesGuard } from './auth/roles.guard';

@Module({
  imports: [
    CacheModule,
    PrismaModule,
    AuthModule
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard(),
    },
  ],
})
export class CoreBackendModule {}

