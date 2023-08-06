import { Injectable } from '@nestjs/common';
import { Remotable, UserService } from '@pisces/musubi/server';

@Remotable()
@Injectable()
export class HelloService implements UserService{

  hello(person: string){
    console.log(`hello ${person}`);
    return `hello ${person}`
  }
}
