import { PrismaService } from "@pisces/backend";
import { Injectable } from "@nestjs/common";
import { Provider } from "@pisces/musubi/server";
import { Product, ProductQuery, ProductDomainService } from "../domain/product.entity";
import { Page, PageRequest, paginator } from "@pisces/common";

@Injectable()
export class ProductRepository implements Provider<ProductDomainService> {
  constructor(
    private prisma: PrismaService
  ) {
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
