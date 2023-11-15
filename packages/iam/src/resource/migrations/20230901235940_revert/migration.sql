/*
  Warnings:

  - You are about to drop the column `menu_globle_code` on the `sys_menu` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "sys_menu" DROP CONSTRAINT "sys_menu_pid_fkey";

-- AlterTable
ALTER TABLE "sys_menu" DROP COLUMN "menu_globle_code";
