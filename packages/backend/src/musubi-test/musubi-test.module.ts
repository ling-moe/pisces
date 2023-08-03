import { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { HelloService } from './hello.service';
import { MusubiModule } from './module';

@MusubiModule({
  providers: [
    HelloService
  ]
})
export class MusubiTestModule {

}


