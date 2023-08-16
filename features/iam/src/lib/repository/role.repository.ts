import { PrismaService } from '@pisces/core/backend/prisma/prisma.module';
import { Injectable } from '@nestjs/common';
import { Provider } from '@pisces/musubi/server';
import { Role, RoleRemoteService } from '../domain/role.entity';


@Injectable()
export class RoleRepository implements Provider<RoleRemoteService>{
  constructor(
    private prisma: PrismaService
    ) { }
  listRpc(): Role[] {
    throw new Error('Method not implemented.');
  }
  createRpc(user: Role): void {
    throw new Error('Method not implemented.');
  }
  updateRpc(user: Role): void {
    throw new Error('Method not implemented.');
  }
}
