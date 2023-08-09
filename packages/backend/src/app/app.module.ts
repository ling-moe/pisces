import { CoreBackendModule } from '@pisces/core/backend/core.backend.module';
import { IamBackendModule } from '@pisces/iam/iam.backend.module';
import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    CoreBackendModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    IamBackendModule,
  ],
  controllers: [],

})
export class AppModule {}
