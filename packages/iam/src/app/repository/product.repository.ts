import { fromUint8Array, toUint8Array } from 'js-base64';
import { PrismaService } from "@pisces/backend";
import { Injectable, Logger } from "@nestjs/common";
import { Provider } from "@pisces/musubi/server";
import { Product, ProductQuery, ProductDomainService } from "../domain/product.entity";
import { Page, PageRequest, paginator } from "@pisces/common";

@Injectable()
export class ProductRepository implements Provider<ProductDomainService> {
  constructor(
    private prisma: PrismaService
  ) {
  }
  async detailProduct(id: bigint) {
    const product = await this.prisma.product.findUnique({where: {
      id: id
    }})

    if(!product){
      return product;
    }
    if(product?.data){
      (product as any).base64Data = fromUint8Array(product.data)
    }
    return product
  }
  async saveProductDocData(id: bigint, data: string): Promise<void> {
    await this.prisma.product.update({data: {data: Buffer.from(toUint8Array(data))}, where: {
      id: id
    }})
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
