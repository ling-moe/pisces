import { Injectable } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Injectable()
export class HelloService {

  hello(person: string){
    console.log(`hello ${person}`);
    return `hello ${person}`
  }
}
