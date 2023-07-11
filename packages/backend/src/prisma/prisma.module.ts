import { INestApplication, Injectable, Module, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [],
  providers: [],
  exports: [],
})
export class PrismaModule {}

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
