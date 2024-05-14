import { PageRequest, Page, AuditDomain, OCC } from '@pisces/common';
import { Product as PrismaProduct } from "@prisma/client";

export type Product = PrismaProduct & AuditDomain & OCC;

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

  /**
   * 保存产品文档数据
   * @param id 产品id
   * @param data 文档二进制数据
   */
  saveProductDocData(id: bigint, data: string): void;
    /**
   * 获取产品列表
   */
  detailProduct(id: bigint): Product | null;
}
