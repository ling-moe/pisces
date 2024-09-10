import { PageRequest, Page, AuditDomain, OCC } from '@pisces/common';
import { Domain as PrismaDomain,Form as PrismaForm } from "../infra/config/prisma.module.backend";

export type Domain = PrismaDomain & AuditDomain & OCC;
export type DomainSummary = {name: string, fields: string[], methods: string[]};
export type DomainQuery = Pick<Domain, 'name' | 'desc'>;
export type DomainSave = Pick<Domain, 'id'| 'name' | 'productId' | 'desc'>;

export type Form = PrismaForm & AuditDomain & OCC;

export interface DomainDomainService {
  /**
   * 获取领域列表
   */
  pageDomain(pageRequest: PageRequest<Domain>, query?: DomainQuery): Page<Domain>;
  /**
   * 创建领域
   */
  createDomain(domain: DomainSave & Domain): void;
  /**
   * 更新领域
   */
  updateDomain(domain: DomainSave & Domain): void;
  /**
   * 删除领域
   */
  deleteDomain(id: bigint): void;

  /**
   * 查询领域中的表单
   * @param entityId 实体id
   */
  listForms(domainId: bigint): Form[];

  /**
   * 保存表单
   * @param form 表单对象
   */
  saveForm(form: Form): void;
}
