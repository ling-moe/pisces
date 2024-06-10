import { PageRequest, Page, AuditDomain, OCC } from '@pisces/common';
import { Domain as PrismaDomain } from "@prisma/client";

export type Domain = PrismaDomain & AuditDomain & OCC;
export type DomainSummary = {name: string, fields: string[], methods: string[]};
export type DomainQuery = Pick<Domain, 'name' | 'desc'>;

export interface DomainDomainService {
  /**
   * 获取领域列表
   */
  pageDomain(pageRequest: PageRequest<Domain>, query?: DomainQuery): Page<Domain>;
  /**
   * 创建领域
   */
  createDomain(domain: Domain): void;
  /**
   * 更新领域
   */
  updateDomain(domain: Domain): void;
  /**
   * 删除领域
   */
  deleteDomain(id: bigint): void;
}
