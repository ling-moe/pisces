/*
  Warnings:

  - You are about to drop the column `product_domain_id` on the `ddd_product_feature` table. All the data in the column will be lost.
  - You are about to drop the `ddd_product_domain` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "ddd_product_feature_product_domain_id_idx";

-- AlterTable
ALTER TABLE "ddd_product" ALTER COLUMN "desc" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ddd_product_feature" DROP COLUMN "product_domain_id",
ADD COLUMN     "domain_id" BIGINT;

-- DropTable
DROP TABLE "ddd_product_domain";

-- CreateTable
CREATE TABLE "ddd_domain" (
    "id" BIGSERIAL NOT NULL,
    "product_id" BIGINT,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "version_num" BIGINT NOT NULL DEFAULT 1,
    "create_by" BIGINT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" BIGINT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ddd_domain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ddd_entity" (
    "id" BIGSERIAL NOT NULL,
    "domain_id" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "version_num" BIGINT NOT NULL DEFAULT 1,
    "create_by" BIGINT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" BIGINT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ddd_entity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ddd_entity_field" (
    "id" BIGSERIAL NOT NULL,
    "entity_id" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "defaultValue" TEXT NOT NULL,
    "isRequired" TEXT NOT NULL,
    "dict" TEXT,
    "desc" TEXT NOT NULL,
    "version_num" BIGINT NOT NULL DEFAULT 1,
    "create_by" BIGINT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" BIGINT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ddd_entity_field_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ddd_domain_product_id_idx" ON "ddd_domain"("product_id");

-- CreateIndex
CREATE INDEX "ddd_entity_domain_id_idx" ON "ddd_entity"("domain_id");

-- CreateIndex
CREATE INDEX "ddd_entity_field_entity_id_idx" ON "ddd_entity_field"("entity_id");

-- CreateIndex
CREATE INDEX "ddd_product_feature_domain_id_idx" ON "ddd_product_feature"("domain_id");
