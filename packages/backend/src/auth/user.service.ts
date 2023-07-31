import { Injectable } from '@nestjs/common';
import exp from 'constants';
import { UserDto } from './user';

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
  ];

  async findOne(username: string): Promise<UserDto | undefined> {
    return this.userList.find((user) => user.username == username);
  }
}
