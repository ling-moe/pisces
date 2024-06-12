import { INestApplication, Injectable, OnModuleInit, Type } from '@nestjs/common';
import { ClsService } from "nestjs-cls";

export interface AuditModel {
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
      super(args);
    }

    init(authClsStore: ClsService<{currentUser: {id: bigint}}>) {
      this.authClsStore = authClsStore;
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
              (this: T, args: A) {
              const userId = that.authClsStore.get('currentUser')?.id ?? BigInt(1);
              args.data.createBy = userId;
              args.data.updateBy = userId;
              return (that[this.name] as any).create(args);
            },
            async createMany<T extends { name: ModelName; }, A extends { data: AuditModel[]; }>
              (this: T, args: A) {
              const userId = that.authClsStore.get('currentUser')?.id ?? BigInt(1);
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
