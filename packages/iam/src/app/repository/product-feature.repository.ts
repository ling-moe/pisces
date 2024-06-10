import { PrismaService } from "@pisces/backend";
import { Injectable } from "@nestjs/common";
import { Provider } from "@pisces/musubi/server";
import { ProductFeature, ProductFeatureDomainService } from "../domain/product-feature.entity";
import { groupBy } from "lodash";

@Injectable()
export class ProductFeatureRepository implements Provider<ProductFeatureDomainService> {
  constructor(
    private prisma: PrismaService
  ) {
  }
  listProductFeature(productId: bigint): Promise<ProductFeature[]> {
    return this.prisma.productFeature.findMany({
      where: {
        productId: productId
      }
    });
  }
  saveProductFeature(productId: bigint, list: ProductFeature[]): Promise<void> {
    return this.prisma.$transaction(async client => {
      const group = groupBy(list, i => i.isRemove);
      await client.productFeature.deleteMany({
        where: {
          id: {
            in: group['true'].map(i => i.id)
          }
        }
      });
      const idGroup = groupBy(group['false'], i => i.id);
      await client.productFeature.createMany({data: idGroup['false']});
      await client.productFeature.updateMany({data: idGroup['true']});
    })
  }

}
