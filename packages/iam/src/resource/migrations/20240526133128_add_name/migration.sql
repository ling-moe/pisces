/*
  Warnings:

  - Added the required column `name` to the `ddd_product_domain` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ddd_product_domain" ADD COLUMN     "name" TEXT NOT NULL;
