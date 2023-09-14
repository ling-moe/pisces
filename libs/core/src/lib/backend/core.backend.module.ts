import { Module } from '@nestjs/common';
import { CacheModule } from './cache/cache.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CacheModule, PrismaModule],
  providers: [
    // {
    //   provide: APP_FILTER,
    //   useClass: GlobalExceptionFilter,
    // }
  ],
})
export class CoreBackendModule {}

