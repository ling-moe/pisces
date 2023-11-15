import { CoreBackendModule } from '@pisces/core/backend/core.backend.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClsModule } from "nestjs-cls";

@Module({
  imports: [
    CoreBackendModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ClsModule.forRoot({
      global: true,
      middleware: { mount: true },
    })
  ]
})
export class AppModule {}
