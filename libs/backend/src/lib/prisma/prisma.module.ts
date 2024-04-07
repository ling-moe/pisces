import { Global, INestApplication, Injectable, Logger, Module, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient, User } from '@prisma/client';
import { CacheModule } from '../cache/cache.module';
import { ClsService } from "nestjs-cls";

interface AuditModel {
  createBy: bigint;
  updateBy: bigint;
}


type ModelName = Prisma.TypeMap['meta']['modelProps'];

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor(
    private readonly authClsStore: ClsService<{ 'currentUser': User; }>,
  ) {
    super();
  }
  init() {
    return this.$extends(this.createAutoFillAuditFieldsExt());
  }
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit' as never, async () => {
      await app.close();
    });
  }

  createAutoFillAuditFieldsExt() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this;
    return Prisma.defineExtension({
      name: 'AutoFillAuditFields',
      model: {
        $allModels: {
          async create<T extends { name: ModelName; }, A extends { data: AuditModel; }>
            (this: T, args: A): Promise<Prisma.Result<T, A, 'create'>> {
            const userId = that.authClsStore.get('currentUser')?.id ?? BigInt(1);
            args.data.createBy = userId;
            args.data.updateBy = userId;
            return (that[this.name] as any).create(args);
          },
          async createMany<T extends { name: ModelName; }, A extends { data: AuditModel[]; }>
            (this: T, args: A): Promise<Prisma.Result<T, A, 'createMany'>> {
            const userId = that.authClsStore.get('currentUser')?.id ?? BigInt(1);
            args.data.forEach(item => item.createBy = userId);
            args.data.forEach(item => item.updateBy = userId);
            return (that[this.name] as any).createMany(args);
          },
          async update<T extends { name: ModelName; }, A extends { data: AuditModel; }>
            (this: T, args: A): Promise<Prisma.Result<T, A, 'update'>> {
            const userId = that.authClsStore.get('currentUser')?.id ?? BigInt(1);
            args.data.createBy = userId;
            args.data.updateBy = userId;
            return (that[this.name] as any).update(args);
          },
          async updateMany<T extends { name: ModelName; }, A extends { data: AuditModel[]; }>
            (this: T, args: A): Promise<Prisma.Result<T, A, 'updateMany'>> {
            const userId = that.authClsStore.get('currentUser')?.id ?? BigInt(1);
            args.data.forEach(item => item.createBy = userId);
            args.data.forEach(item => item.updateBy = userId);
            return (that[this.name] as any).updateMany(args);
          },
        }
      }
    });
  }
}

@Global()
@Module({
  imports: [
    CacheModule
  ],
  providers: [{
    provide: PrismaService,
    useFactory: (authClsStore: ClsService<{ 'currentUser': User; }>) => new PrismaService(authClsStore).init(),
    inject: [ClsService]
  }],
  exports: [PrismaService],
})
export class PrismaModule { }
