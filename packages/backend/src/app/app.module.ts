import { Module } from '@nestjs/common';
// import { RedisModule } from 'nestjs-redis';

import { AppController } from './app.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    AuthModule
    // RedisModule.register({
    //   //Redis配置
    //   host: 'localhost',
    //   port: 6379,
    // }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
