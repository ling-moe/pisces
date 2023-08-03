import { Injectable } from '@nestjs/common';
import { UserServiceProvider } from './musubi.types';

@Provider
@Injectable()
export class UserService implements UserServiceProvider {
  hello(person: string): string {
    return person;
  }
}

function Provider(constructor: any){
  constructor.prototype.thinFaceFeature = function() {
    console.log('瘦脸功能')
  }
}
