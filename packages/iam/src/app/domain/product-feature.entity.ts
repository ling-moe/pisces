import { ProductFeature as PrismaProductFeature } from '@prisma/client';
import { AuditDomain, OCC, RemoveMark } from '@pisces/common';

export type ProductFeature = PrismaProductFeature & AuditDomain & OCC & RemoveMark;


export interface ProductFeatureDomainService {
  /**
   * 获取产品特性集合
   */
  listProductFeature(productId: bigint): ProductFeature[];
  /**
   * 保存产品特性
   */
  saveProductFeature(productId: bigint, list: ProductFeature[]): void;
}
