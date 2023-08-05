import { Module } from '@nestjs/common';
// import { RedisModule } from 'nestjs-redis';

import { AppController } from './app.controller';
import { AuthModule } from '../auth/auth.module';
import { MusubiTestModule } from '../musubi-test/musubi-test.module';

@Module({
  imports: [
    AuthModule,
    MusubiTestModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
