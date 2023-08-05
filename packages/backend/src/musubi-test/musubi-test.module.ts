import { HelloService } from './hello.service';
import { MusubiModule } from "@pisces/musubi/server";

@MusubiModule({
  providers: [
    HelloService
  ]
})
export class MusubiTestModule {

}


