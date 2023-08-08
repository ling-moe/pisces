-- CreateTable
CREATE TABLE "sys_user" (
    "user_id" BIGSERIAL NOT NULL,
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

    CONSTRAINT "sys_user_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Role" (
    "role_id" BIGSERIAL NOT NULL,
    "role_code" VARCHAR(60) NOT NULL,
    "role_name" VARCHAR(60) NOT NULL,
    "enabled_flag" BOOLEAN NOT NULL DEFAULT true,
    "remark" VARCHAR(120),
    "version_num" BIGINT NOT NULL DEFAULT 1,
    "create_by" BIGINT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" BIGINT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("role_id")
);

-- CreateTable
CREATE TABLE "Perm" (
    "permission_id" BIGSERIAL NOT NULL,
    "perm_code" VARCHAR(120) NOT NULL,
    "perm_name" VARCHAR(60) NOT NULL,
    "uri" VARCHAR(240) NOT NULL,
    "module" VARCHAR(30) NOT NULL,
    "public_access" BOOLEAN NOT NULL DEFAULT false,
    "login_access" BOOLEAN NOT NULL DEFAULT false,
    "remark" VARCHAR(120),
    "create_by" BIGINT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" BIGINT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Perm_pkey" PRIMARY KEY ("permission_id")
);

-- CreateTable
CREATE TABLE "Menu" (
    "role_id" BIGSERIAL NOT NULL,
    "menu_code" VARCHAR(30) NOT NULL,
    "menu_name" VARCHAR(30) NOT NULL,
    "menu_type" VARCHAR(10) NOT NULL,
    "pid" BIGINT NOT NULL DEFAULT 0,
    "menu_globle_code" VARCHAR(120) NOT NULL,
    "icon" VARCHAR(30),
    "route" VARCHAR(120),
    "menuOrder" INTEGER NOT NULL DEFAULT 0,
    "enabled_flag" BOOLEAN NOT NULL DEFAULT true,
    "remark" VARCHAR(120),
    "version_num" BIGINT NOT NULL DEFAULT 1,
    "create_by" BIGINT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" BIGINT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("role_id")
);

-- CreateTable
CREATE TABLE "PermRole" (
    "perm_role_id" BIGSERIAL NOT NULL,
    "perm_code" VARCHAR(120) NOT NULL,
    "perm_type" VARCHAR(30) NOT NULL,
    "menu_id" BIGINT,
    "role_id" BIGINT NOT NULL,
    "enabled_flag" BOOLEAN NOT NULL DEFAULT true,
    "remark" VARCHAR(120),
    "version_num" BIGINT NOT NULL DEFAULT 1,
    "create_by" BIGINT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" BIGINT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PermRole_pkey" PRIMARY KEY ("perm_role_id")
);

-- CreateTable
CREATE TABLE "MenuPerm" (
    "menu_perm_id" BIGSERIAL NOT NULL,
    "perm_code" VARCHAR(120) NOT NULL,
    "menu_id" BIGINT NOT NULL,
    "remark" VARCHAR(120),
    "version_num" BIGINT NOT NULL DEFAULT 1,
    "create_by" BIGINT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" BIGINT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MenuPerm_pkey" PRIMARY KEY ("menu_perm_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sys_user_username_key" ON "sys_user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "sys_user_email_key" ON "sys_user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "sys_user_phone_key" ON "sys_user"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "PermRole_role_id_perm_code_key" ON "PermRole"("role_id", "perm_code");

-- CreateIndex
CREATE UNIQUE INDEX "MenuPerm_perm_code_menu_id_key" ON "MenuPerm"("perm_code", "menu_id");
