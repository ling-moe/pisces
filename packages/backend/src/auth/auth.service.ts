import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  getUser(token: string) {
    throw new Error("Method not implemented.");
  }
}
