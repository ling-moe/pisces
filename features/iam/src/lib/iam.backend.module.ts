import { Module } from '@nestjs/common';
import { UserModule } from './user/domain/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class IamBackendModule {}
