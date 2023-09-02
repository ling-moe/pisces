/*
  Warnings:

  - The primary key for the `sys_menu` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `role_id` on the `sys_menu` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "sys_menu" DROP CONSTRAINT "sys_menu_pkey",
DROP COLUMN "role_id",
ADD COLUMN     "menu_id" BIGSERIAL NOT NULL,
ADD CONSTRAINT "sys_menu_pkey" PRIMARY KEY ("menu_id");
