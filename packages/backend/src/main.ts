/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestApplication, NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { GlobalExceptionFilter } from './common/filters/global-exception';

(BigInt as any).prototype.toJSON = function() { return this.toString() }
async function bootstrap() {
  const app = await NestFactory.create(AppModule) as NestApplication;
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  // 注册全局异常过滤器
  app.useGlobalFilters(new GlobalExceptionFilter());
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
