import { Injectable } from '@nestjs/common';
import { UserServiceProvider } from './musubi.types';

@Injectable()
export class UserService implements UserServiceProvider {
  hello(person: string): string {
    return person;
  }
}
