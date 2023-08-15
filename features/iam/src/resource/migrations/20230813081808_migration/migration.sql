/*
  Warnings:

  - You are about to drop the `Menu` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MenuPerm` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Perm` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PermRole` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Menu";

-- DropTable
DROP TABLE "MenuPerm";

-- DropTable
DROP TABLE "Perm";

-- DropTable
DROP TABLE "PermRole";

-- DropTable
DROP TABLE "Role";

-- CreateTable
CREATE TABLE "sys_role" (
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

    CONSTRAINT "sys_role_pkey" PRIMARY KEY ("role_id")
);

-- CreateTable
CREATE TABLE "sys_perm" (
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

    CONSTRAINT "sys_perm_pkey" PRIMARY KEY ("permission_id")
);

-- CreateTable
CREATE TABLE "sys_menu" (
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

    CONSTRAINT "sys_menu_pkey" PRIMARY KEY ("role_id")
);

-- CreateTable
CREATE TABLE "sys_perm_role" (
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

    CONSTRAINT "sys_perm_role_pkey" PRIMARY KEY ("perm_role_id")
);

-- CreateTable
CREATE TABLE "sys_menu_perm" (
    "menu_perm_id" BIGSERIAL NOT NULL,
    "perm_code" VARCHAR(120) NOT NULL,
    "menu_id" BIGINT NOT NULL,
    "remark" VARCHAR(120),
    "version_num" BIGINT NOT NULL DEFAULT 1,
    "create_by" BIGINT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" BIGINT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sys_menu_perm_pkey" PRIMARY KEY ("menu_perm_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sys_perm_role_role_id_perm_code_key" ON "sys_perm_role"("role_id", "perm_code");

-- CreateIndex
CREATE UNIQUE INDEX "sys_menu_perm_perm_code_menu_id_key" ON "sys_menu_perm"("perm_code", "menu_id");
