import { PageRequest, Page, AuditDomain, OCC } from '@pisces/common';

export type Product = {
  id: bigint;
  code: string;
  name: string;
  desc: string;
} & AuditDomain & OCC;

export type ProductQuery = Pick<Product, 'code' | 'name' | 'desc'>;

export interface ProductDomainService {
  /**
   * 获取产品列表
   */
  pageProduct(pageRequest: PageRequest<Product>, query?: ProductQuery): Page<Product>;
  /**
   * 创建产品
   */
  createProduct(product: Product): void;
  /**
   * 更新产品
   */
  updateProduct(product: Product): void;
  /**
   * 删除产品
   */
  deleteProduct(id: bigint): void;
}
