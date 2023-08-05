import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import exp from 'constants';

@Injectable()
export class UserService {
  private readonly userList = [
    {
      userId: 1,
      username: 'admin',
      password: '123456',
      email: 'nzb329@163.com',
      avatar: './assets/images/avatar.jpg',
    },
    {
      userId: 2,
      username: 'test',
      password: '123456',
    },
  ] as unknown as User[];

  async findOne(username: string): Promise<User | undefined> {
    return this.userList.find((user) => user.username == username);
  }
}
