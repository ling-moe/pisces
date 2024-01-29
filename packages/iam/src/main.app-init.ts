import { Module } from "@nestjs/common";
import { NestFactory, RouterModule } from "@nestjs/core";
import { CoreBackendModule } from "@pisces/backend";
import { json } from "body-parser";
import { BigIntModule, initStandard } from "@pisces/common";
import { IamBackendModule } from "./app/iam.backend.module";

@Module({
  imports: [
    CoreBackendModule,
    IamBackendModule,
    RouterModule.register([
      {
        path: 'api',
        module: IamBackendModule,
      },
    ]),
  ]
})
export class IamModule { }

export async function appInit() {
  initStandard();
  const app = await NestFactory.create(IamModule);
  app.use(json({ reviver: BigIntModule }));
  await app.init();
  return app;
}
