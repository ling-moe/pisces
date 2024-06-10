import { INestApplication, Logger } from "@nestjs/common";
import { Module } from "@nestjs/common";
import { NestFactory, RouterModule } from "@nestjs/core";
import { CoreBackendModule } from "@pisces/backend";
import { json } from "body-parser";
import { BigIntModule, initStandard } from '@pisces/common';
import { IamModuleBackend } from "./infra/config/iam.module.backend";
import * as express from 'express'
import path from "node:path";

@Module({
  imports: [
    CoreBackendModule,
    IamModuleBackend,
    RouterModule.register([
      {
        path: 'api',
        module: IamModuleBackend,
      },
    ]),
  ]
})
export class AppModuleBackend { }

export async function appInit() {
  initStandard();
  const app = await NestFactory.create(AppModuleBackend);
  app.use(json({ reviver: BigIntModule }));
  app.use(express.static(path.join(__dirname, './browser')));
  // 所有其他路由都指向 Angular 应用的入口文件
  app.getHttpServer().get(/^(?!\/api).*/, (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(__dirname, './browser/index.html'));
  });
  await app.init();
  return app;
}

async function bootstrap(app: INestApplication) {
  const port = process.env.PORT || 3100;
  await app.listen(port);
  Logger.log(
    `🚀 IamApplication is running on: http://localhost:${port}`
  );
}

appInit().then(app => bootstrap(app)) ;
