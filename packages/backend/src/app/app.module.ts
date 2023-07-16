import { Module } from '@nestjs/common';
import { RedisModule } from 'nestjs-redis';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    RedisModule.register({
      //Redis配置
      host: 'localhost',
      port: 6379,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
