/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import * as bodyParser from 'body-parser';
import { BigIntModule, initStandard } from "../../../libs/common/src/index";

async function bootstrap() {
  initStandard();
  const app = await NestFactory.create<NestApplication>(AppModule);
  app.use(bodyParser.json({ reviver: BigIntModule }))
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3100;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
