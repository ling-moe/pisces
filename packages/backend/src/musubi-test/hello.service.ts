import { Injectable } from '@nestjs/common';
import { UserService } from '@pisces/musubi/server';

@Injectable()
export class HelloService implements UserService{

  hello(person: string){
    console.log(`hello ${person}`);
    return `hello ${person}`
  }
}
