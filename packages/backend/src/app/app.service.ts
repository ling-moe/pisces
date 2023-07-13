import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRemoteService implements UserRemoteService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
