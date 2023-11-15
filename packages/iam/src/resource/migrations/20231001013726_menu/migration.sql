/*
  Warnings:

  - You are about to drop the `sys_menu_perm` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sys_perm` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sys_perm_role` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "sys_menu_perm";

-- DropTable
DROP TABLE "sys_perm";

-- DropTable
DROP TABLE "sys_perm_role";

-- CreateTable
CREATE TABLE "sys_role_menu" (
    "role_menu_id" BIGSERIAL NOT NULL,
    "role_id" BIGINT NOT NULL,
    "menu_id" BIGINT NOT NULL,
    "remark" VARCHAR(120),
    "version_num" BIGINT NOT NULL DEFAULT 1,
    "create_by" BIGINT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" BIGINT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sys_role_menu_pkey" PRIMARY KEY ("role_menu_id")
);

-- CreateTable
CREATE TABLE "sys_role_user" (
    "role_user_id" BIGSERIAL NOT NULL,
    "role_id" BIGINT NOT NULL,
    "user_id" BIGINT NOT NULL,
    "remark" VARCHAR(120),
    "version_num" BIGINT NOT NULL DEFAULT 1,
    "create_by" BIGINT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" BIGINT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sys_role_user_pkey" PRIMARY KEY ("role_user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sys_role_menu_role_id_menu_id_key" ON "sys_role_menu"("role_id", "menu_id");

-- CreateIndex
CREATE UNIQUE INDEX "sys_role_user_role_id_user_id_key" ON "sys_role_user"("role_id", "user_id");
