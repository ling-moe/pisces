import { User } from "@prisma/client";

export interface UserRemoteService{
  list(): User[]
  create(user: User): void;
}
