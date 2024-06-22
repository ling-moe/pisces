import { Injectable } from "@nestjs/common";
import { Provider } from "@pisces/musubi/server";
import { Entity, EntityDomainService, EntityField, EntityFieldSaveVO } from "../domain/entity.entity";
import { PrismaService } from '../infra/config/prisma.module.backend';
import { Assert } from "../infra/util/assert";


@Injectable()
export class EntityRepository implements Provider<EntityDomainService> {
  constructor(
    private prisma: PrismaService,
  ) {
  }
  async saveDomainFields(fields: EntityFieldSaveVO[]): Promise<void> {
    await this.prisma.$transaction(async tx => {
      const {entityField} = tx;
      fields.forEach(field => Assert.notNull(field.entityId));
       // 删除字段
      const removes = fields.filter(i => i.isRemove && i.id).map(i => i.id);
      await entityField.deleteMany({where: { id: {in: removes} }})
      // 新增字段
      const adds = fields.filter(i => !i.isRemove && !i.id).map(i => {
        const {isRemove, ...props} = i;
        return props;
      });
      await entityField.createMany({data: adds});
       // 更新字段
       const updates = fields.filter(i => !i.isRemove && i.id).map(i => {
        const {isRemove, ...props} = i;
        return props;
      });
      for (const update of updates) {
        await entityField.update({data: update, where: {id: update.id}});
      }
    })

  }
  async listFieldsByDomain(domainId: bigint): Promise<EntityField[]> {
    return this.prisma.entityField.findMany({where: {AND: [{domainId: domainId}, {entityId: null}]}});
  }

  async listFieldsByEntity(entityId: bigint): Promise<EntityField[]> {
    return this.prisma.entityField.findMany({where: {entityId: entityId}});
  }
  async listEntity(domainId: bigint): Promise<Entity[]> {
    return this.prisma.entity.findMany({where: {domainId: domainId}, include: {domain: true}})
  }

  async deleteEntity(id: bigint) {
    await this.prisma.entity.delete({ where: { id: id } });
  }

  async createEntity(entity: Entity) {
    await this.prisma.entity.create({ data: entity });
  }

  async updateEntity(entity: Entity) {
    await this.prisma.entity.update({ where: { id: entity.id }, data: entity });
  }
}
