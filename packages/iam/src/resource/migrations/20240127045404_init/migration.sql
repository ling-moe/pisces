-- CreateTable
CREATE TABLE "iam_user" (
    "id" BIGSERIAL NOT NULL,
    "username" VARCHAR(30) NOT NULL,
    "display_name" VARCHAR(30) NOT NULL,
    "lang" VARCHAR(30) NOT NULL,
    "locale" VARCHAR(30) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "phone" VARCHAR(11) NOT NULL,
    "sex" VARCHAR(5) NOT NULL,
    "avatar" VARCHAR(100),
    "password" VARCHAR(100) NOT NULL,
    "effective_start_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "effective_end_date" TIMESTAMP(3),
    "actived_flag" BOOLEAN NOT NULL DEFAULT true,
    "locked_time" TIMESTAMP(3),
    "enabled_flag" BOOLEAN NOT NULL DEFAULT true,
    "version_num" BIGINT NOT NULL DEFAULT 1,
    "create_by" BIGINT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" BIGINT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "iam_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "iam_role" (
    "id" BIGSERIAL NOT NULL,
    "role_code" VARCHAR(60) NOT NULL,
    "role_name" VARCHAR(60) NOT NULL,
    "enabled_flag" BOOLEAN NOT NULL DEFAULT true,
    "remark" VARCHAR(120),
    "version_num" BIGINT NOT NULL DEFAULT 1,
    "create_by" BIGINT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" BIGINT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "iam_role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "iam_menu" (
    "id" BIGSERIAL NOT NULL,
    "menu_code" VARCHAR(120) NOT NULL,
    "menu_name" VARCHAR(60) NOT NULL,
    "menu_type" VARCHAR(10) NOT NULL,
    "pid" BIGINT NOT NULL DEFAULT 0,
    "icon" VARCHAR(30),
    "route" VARCHAR(120),
    "menuSort" INTEGER NOT NULL DEFAULT 0,
    "enabled_flag" BOOLEAN NOT NULL DEFAULT true,
    "remark" VARCHAR(120),
    "version_num" BIGINT NOT NULL DEFAULT 1,
    "create_by" BIGINT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" BIGINT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "iam_menu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "iam_role_menu" (
    "id" BIGSERIAL NOT NULL,
    "role_id" BIGINT NOT NULL,
    "menu_id" BIGINT NOT NULL,
    "create_by" BIGINT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" BIGINT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "iam_role_menu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "iam_role_user" (
    "id" BIGSERIAL NOT NULL,
    "role_id" BIGINT NOT NULL,
    "user_id" BIGINT NOT NULL,
    "create_by" BIGINT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" BIGINT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "iam_role_user_pkey" PRIMARY KEY ("id")
);

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
    "event" TEXT NOT NULL,
    "command" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "version_num" BIGINT NOT NULL DEFAULT 1,
    "create_by" BIGINT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" BIGINT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ddd_product_feature_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "iam_user_username_key" ON "iam_user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "iam_user_email_key" ON "iam_user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "iam_user_phone_key" ON "iam_user"("phone");

-- CreateIndex
CREATE INDEX "iam_role_menu_menu_id_idx" ON "iam_role_menu"("menu_id");

-- CreateIndex
CREATE UNIQUE INDEX "iam_role_menu_role_id_menu_id_key" ON "iam_role_menu"("role_id", "menu_id");

-- CreateIndex
CREATE INDEX "iam_role_user_user_id_idx" ON "iam_role_user"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "iam_role_user_role_id_user_id_key" ON "iam_role_user"("role_id", "user_id");

-- CreateIndex
CREATE INDEX "ddd_product_domain_product_id_idx" ON "ddd_product_domain"("product_id");

-- CreateIndex
CREATE INDEX "ddd_product_feature_product_id_idx" ON "ddd_product_feature"("product_id");

-- CreateIndex
CREATE INDEX "ddd_product_feature_product_domain_id_idx" ON "ddd_product_feature"("product_domain_id");
