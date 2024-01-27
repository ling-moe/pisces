-- CreateTable
CREATE TABLE "ddd_product" (
    "id" BIGSERIAL NOT NULL,
    "code" VARCHAR(60) NOT NULL,
    "name" VARCHAR(120) NOT NULL,
    "title" VARCHAR(240) NOT NULL,
    "desc" TEXT NOT NULL,
    "version_num" BIGINT NOT NULL DEFAULT 1,
    "create_by" BIGINT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" BIGINT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ddd_product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ddd_product_domain" (
    "id" BIGSERIAL NOT NULL,
    "product_id" BIGINT NOT NULL,
    "entity" TEXT NOT NULL DEFAULT '',
    "aggregateRoot" TEXT NOT NULL DEFAULT '',
    "desc" TEXT NOT NULL,
    "version_num" BIGINT NOT NULL DEFAULT 1,
    "create_by" BIGINT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" BIGINT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ddd_product_domain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ddd_product_feature" (
    "id" BIGSERIAL NOT NULL,
    "product_id" BIGINT NOT NULL,
    "product_domain_id" BIGINT,
    "title" VARCHAR(240) NOT NULL,
    "desc" TEXT NOT NULL,
    "event" TEXT NOT NULL DEFAULT '',
    "command" TEXT NOT NULL DEFAULT '',
    "role" TEXT NOT NULL DEFAULT '',
    "version_num" BIGINT NOT NULL DEFAULT 1,
    "create_by" BIGINT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" BIGINT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ddd_product_feature_pkey" PRIMARY KEY ("id")
);
