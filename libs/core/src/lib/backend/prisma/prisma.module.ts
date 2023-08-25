import { Global, INestApplication, Injectable, Module, OnModuleInit } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import { RequestCacheHelper } from './request-cache.helper';
import { CacheModule } from '../cache/cache.module';
import { ClsService } from "nestjs-cls";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor(
    private readonly authClsStore: ClsService<{'currentUser': User}>,
  ){
    super();
  }
  async onModuleInit() {
    // 注册拦截器
    this.$use(async (params, next) => {
      // TODO 获取当前用户id
      const userId = this.authClsStore.get('currentUser')?.userId ?? 1;
      if (params.action === 'create') {
        params.args.data['createBy'] = userId;
        params.args.data['updateBy'] = userId;
      } else if (params.action === 'update') {
        params.args.data['updateBy'] = userId;
      }
      return await next(params);
    });
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit' as never, async () => {
      await app.close();
    });
  }
}

@Global()
@Module({
  imports: [
    CacheModule
  ],
  providers: [PrismaService, RequestCacheHelper],
  exports: [PrismaService],
})
export class PrismaModule {}
