/*
  Warnings:

  - You are about to drop the column `menuOrder` on the `sys_menu` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "sys_menu" DROP COLUMN "menuOrder",
ADD COLUMN     "menuSort" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "sys_menu" ADD CONSTRAINT "sys_menu_pid_fkey" FOREIGN KEY ("pid") REFERENCES "sys_menu"("role_id") ON DELETE RESTRICT ON UPDATE CASCADE;
