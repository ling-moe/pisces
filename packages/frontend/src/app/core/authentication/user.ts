import { User } from './interface';

export const admin: User = {
  userId: 1,
  username: 'Zongbin',
  email: 'nzb329@163.com',
  avatar: './assets/images/avatar.jpg',
};

export const guest: User = {
  userId: 2,
  username: 'unknown',
  email: 'unknown',
  avatar: './assets/images/avatar-default.jpg',
};
