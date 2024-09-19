import { INestApplication, Injectable, Logger, OnModuleInit, Type } from '@nestjs/common';
import { ClsService } from "nestjs-cls";
import { green, lightYellow, red, yellow, } from 'ansicolor';

export interface AuditModel {
  id?: bigint;
  createBy: bigint;
  updateBy: bigint;
}

export type QueryEvent = {
  timestamp: Date;
  query: string;
  params: string;
  duration: number;
  target: string;
};

export type LogEvent = {
  timestamp: Date;
  message: string;
  target: string;
};

export function createPrismaService<ModelName extends string, T extends Type<any>>(
  client: T,
  Prisma: any) {
  @Injectable()
  class PrismaService extends client implements OnModuleInit {
    authClsStore!: ClsService<{ currentUser: { id: bigint; }; }>;
    constructor(
      ...args: any[]
    ) {
      super({
        ...args, log: [
          {
            emit: 'event',
            level: 'query',
          },
          {
            emit: 'event',
            level: 'error',
          },
          {
            emit: 'event',
            level: 'info',
          },
          {
            emit: 'event',
            level: 'warn',
          },
        ],
      });
    }

    init(authClsStore: ClsService<{ currentUser: { id: bigint; }; }>) {
      this.authClsStore = authClsStore;
      return this.$extends(this.createAutoFillAuditFieldsExt());
    }

    async onModuleInit() {
      this.initLog();
      await this.$connect();
    }

    async enableShutdownHooks(app: INestApplication) {
      this.$on('beforeExit' as never, async () => {
        await app.close();
      });
    }

    private initLog() {
      super.$on('query', (e: QueryEvent) => {
        let sql = e.query;
        JSON.parse(e.params)
          .forEach((v: unknown,i: number) => sql = sql.replace(`$${++i}`, JSON.stringify(v)));
        Logger.log(`${yellow('[Prisma]')} ${green(`Query[${e.duration}ms]: ${green(sql)}`)}`);
      });
      super.$on('info', (e: LogEvent) => {
        Logger.log(`${yellow('[Prisma]')} ${green(e.message)}`);
      });

      super.$on('warn', (e: LogEvent) => {
        Logger.warn(`${yellow('[Prisma]')} ${lightYellow(e.message)}`);
      });

      super.$on('error', (e: LogEvent) => {
        Logger.error(`${yellow('[Prisma]')} ${red(e.message)}`);
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
