import { Module } from '@nestjs/common';
// import { RedisModule } from 'nestjs-redis';

import { AppController } from './app.controller';

@Module({
  imports: [
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
