import { INestApplication, Injectable, Module, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { UserService } from './user.service';


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit' as never, async () => {
      await app.close();
    });
  }
}


@Module({
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}