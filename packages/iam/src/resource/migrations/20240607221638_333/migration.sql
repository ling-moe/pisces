/*
  Warnings:

  - Changed the type of `isRequired` on the `ddd_entity_field` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ddd_entity_field" ALTER COLUMN "defaultValue" DROP NOT NULL,
DROP COLUMN "isRequired",
ADD COLUMN     "isRequired" BOOLEAN NOT NULL;
