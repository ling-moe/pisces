/*
  Warnings:

  - You are about to drop the column `title` on the `ddd_product` table. All the data in the column will be lost.
  - Added the required column `data` to the `ddd_product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ddd_product" DROP COLUMN "title",
ADD COLUMN     "data" BYTEA NOT NULL;
