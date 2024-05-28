import { INestApplication, Logger } from "@nestjs/common";
import { Module } from "@nestjs/common";
import { NestFactory, RouterModule } from "@nestjs/core";
import { CoreBackendModule } from "@pisces/backend";
import { json } from "body-parser";
import { BigIntModule, initStandard } from '@pisces/common';
import { IamModuleBackend } from "./infra/config/iam.module.backend";

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
