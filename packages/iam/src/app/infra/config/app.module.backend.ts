import { Module } from "@nestjs/common";
import { NestFactory, RouterModule } from "@nestjs/core";
import { CoreBackendModule } from "@pisces/backend";
import { json } from "body-parser";
import { BigIntModule, initStandard } from '@pisces/common';
import { IamModuleBackend } from "./iam.module.backend";

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
