import { AuditDomain, OCC } from '@pisces/common';
import { Entity as PrismaEntity, EntityField as PrismaEntityField } from "../infra/config/prisma.module.backend";

export type Entity = PrismaEntity & AuditDomain & OCC;
export type EntityField = PrismaEntityField & AuditDomain & OCC;


export interface EntityDomainService {
  /**
   * 获取领域列表
   */
  listEntity(domainId: bigint): Entity[];
  /**
   * 创建领域
   */
  createEntity(entity: Entity): void;
  /**
   * 更新领域
   */
  updateEntity(entity: Entity): void;
  /**
   * 删除领域
   */
  deleteEntity(id: bigint): void;

  /**
   * 查询实体中的字段
   * @param entityId 实体id
   */
  listFieldsByEntity(entityId: bigint): EntityField[]

    /**
   * 查询领域中未分配实体的字段
   * @param domainId 领域id
   */
    listFieldsByDomain(domainId: bigint): EntityField[]
}
