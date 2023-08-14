import { Global, INestApplication, Injectable, Module, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { RequestCacheHelper } from './request-cache.helper';
import { CacheModule } from '../cache/cache.module';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor(
     requestCacheHelper: RequestCacheHelper,
  ){
    super();
  }
  async onModuleInit() {
    // 注册拦截器
    this.$use(async (params, next) => {
      // TODO 获取当前用户id
      const userId =  1;
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
