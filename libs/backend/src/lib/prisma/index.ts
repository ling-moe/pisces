import { INestApplication, Injectable, Logger, OnModuleInit, Type } from '@nestjs/common';
import { ClsService } from "nestjs-cls";

export interface AuditModel {
  id?: bigint;
  createBy: bigint;
  updateBy: bigint;
}

export function createPrismaService<ModelName extends string, T extends Type<any>>(
  client: T,
  Prisma: any){
  @Injectable()
  class PrismaService extends client implements OnModuleInit {
    authClsStore!: ClsService<{currentUser: {id: bigint}}>
    constructor(
      ...args: any[]
    ) {
      super({...args,log: [
        {
          emit: 'event',
          level: 'query',
        },
        {
          emit: 'stdout',
          level: 'error',
        },
        {
          emit: 'stdout',
          level: 'info',
        },
        {
          emit: 'stdout',
          level: 'warn',
        },
      ],});
    }

    init(authClsStore: ClsService<{currentUser: {id: bigint}}>) {
      this.authClsStore = authClsStore;
      return this.$extends(this.createAutoFillAuditFieldsExt());
    }
    async onModuleInit() {
      super.$on('query', (e: { query: string; params: string; duration: string; }) => {
        Logger.log('Prisma Query: ' + e.query)
        Logger.log('Prisma Params: ' + e.params)
        Logger.log('Prisma Duration: ' + e.duration + 'ms')
      })
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
              (this: T, args: A) {
              const userId = that.authClsStore.get('currentUser')?.id ?? BigInt(1);
              args.data.id = undefined;
              args.data.createBy = userId;
              args.data.updateBy = userId;
              return (that[this.name] as any).create(args);
            },
            async createMany<T extends { name: ModelName; }, A extends { data: AuditModel[]; }>
              (this: T, args: A) {
              const userId = that.authClsStore.get('currentUser')?.id ?? BigInt(1);
              args.data.forEach(item => item.id = undefined);
              args.data.forEach(item => item.createBy = userId);
              args.data.forEach(item => item.updateBy = userId);
              return (that[this.name] as any).createMany(args);
            },
            async update<T extends { name: ModelName; }, A extends { data: AuditModel; }>
              (this: T, args: A) {
              const userId = that.authClsStore.get('currentUser')?.id ?? BigInt(1);
              args.data.createBy = userId;
              args.data.updateBy = userId;
              return (that[this.name] as any).update(args);
            },
            async updateMany<T extends { name: ModelName; }, A extends { data: AuditModel[]; }>
              (this: T, args: A) {
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
  return PrismaService;
}
