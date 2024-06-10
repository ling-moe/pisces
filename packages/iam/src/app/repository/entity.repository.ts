import { Injectable } from "@nestjs/common";
import { PrismaService } from "@pisces/backend";
import { Provider } from "@pisces/musubi/server";
import { Entity, EntityDomainService, EntityField } from "../domain/entity.entity";

@Injectable()
export class EntityRepository implements Provider<EntityDomainService> {
  constructor(
    private prisma: PrismaService,
  ) {
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
