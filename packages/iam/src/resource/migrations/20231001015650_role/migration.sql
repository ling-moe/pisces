/*
  Warnings:

  - You are about to drop the column `remark` on the `sys_role_menu` table. All the data in the column will be lost.
  - You are about to drop the column `version_num` on the `sys_role_menu` table. All the data in the column will be lost.
  - You are about to drop the column `remark` on the `sys_role_user` table. All the data in the column will be lost.
  - You are about to drop the column `version_num` on the `sys_role_user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "sys_role_menu" DROP COLUMN "remark",
DROP COLUMN "version_num";

-- AlterTable
ALTER TABLE "sys_role_user" DROP COLUMN "remark",
DROP COLUMN "version_num";
