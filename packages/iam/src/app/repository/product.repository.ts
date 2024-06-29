import { Injectable } from "@nestjs/common";
import { Page, PageRequest, paginator } from "@pisces/common";
import { Provider } from "@pisces/musubi/server";
import { fromUint8Array, toUint8Array } from 'js-base64';
import { Product, ProductDomainService, ProductQuery } from "../domain/product.entity";
import { Domain, DomainSummary } from "../domain/domain.entity";
import { PrismaService } from '../infra/config/prisma.module.backend';
import { EntityField } from "../domain/entity.entity";

@Injectable()
export class ProductRepository implements Provider<ProductDomainService> {
  constructor(
    private prisma: PrismaService,
  ) {
  }
  listProduct(query?: ProductQuery): Promise<Product[]> {
    return this.prisma.product.findMany({ where: query });
  }
  async detailProduct(id: bigint) {
    const product: Product & { base64Data?: string, domains?: DomainSummary[]; } | null = await this.prisma.product.findUnique({
      where: {
        id: id
      }
    });

    if (!product) {
      return product;
    }
    if (product?.data) {
      product.base64Data = fromUint8Array(product.data);
    }
    const domains = await this.prisma.domain.findMany({ where: { productId: id } });
    const dm = await Promise.all(domains.map(async domain => {
      const fields = await this.prisma.entityField.findMany({ where: { domainId: domain.id } });
      return { name: domain.name, fields: fields.map(i => i.name), methods: [] };
    }));
    product.domains = dm;
    return product;
  }

  async saveProductDocData(id: bigint, data: string, domains: DomainSummary[]): Promise<void> {
    this.prisma.$transaction(async tx => {
      const {
        product: productMapper,
        domain: domainMapper,
        entityField: entityFieldMapper
      } = tx;
      await productMapper.update({
        data: { data: Buffer.from(toUint8Array(data)) },
        where: { id: id }
      });
      for (const doamin of domains) {
        let existDomain = await domainMapper.findFirst({ where: { name: doamin.name, productId: id } });
        if (!existDomain) {
          existDomain = await domainMapper.create({ data: <Domain>{ name: doamin.name, productId: id } });
        }
        for (const field of doamin.fields) {
          const existField = await entityFieldMapper.findFirst({ where: { domainId: existDomain.id, name: field } });
          if (!existField) {
            await entityFieldMapper.create({ data: <EntityField>{ name: field, domainId: existDomain.id, type: 'text', isRequired: false, desc: field } });
          }
        }
      }
    });
  }

  async deleteProduct(id: bigint) {
    await this.prisma.product.delete({ where: { id: id } });
  }

  /**
   * 分页查询角色列表
   * @param pageRequest 分页参数
   * @param query 查询条件
   * @returns 角色list
   */
  async pageProduct(pageRequest: PageRequest<Product>, query?: ProductQuery): Promise<Page<Product>> {
    return await paginator(pageRequest)(this.prisma.product, { where: query });
  }

  async createProduct(product: Product) {
    await this.prisma.product.create({ data: product });
  }

  async updateProduct(product: Product) {
    await this.prisma.product.update({ where: { id: product.id }, data: product });
  }
}
