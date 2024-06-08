-- AlterTable
ALTER TABLE "ddd_entity_field" ADD COLUMN     "domain_id" BIGINT,
ALTER COLUMN "entity_id" DROP NOT NULL;
