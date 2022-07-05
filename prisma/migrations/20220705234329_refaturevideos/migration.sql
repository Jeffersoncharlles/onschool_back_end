/*
  Warnings:

  - You are about to drop the column `extendedVideosId` on the `classes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "classes" DROP COLUMN "extendedVideosId";

-- AlterTable
ALTER TABLE "extendedvideos" ADD COLUMN     "modulesCoursesId" TEXT;

-- AddForeignKey
ALTER TABLE "extendedvideos" ADD CONSTRAINT "extendedvideos_modulesCoursesId_fkey" FOREIGN KEY ("modulesCoursesId") REFERENCES "modulesCourses"("id") ON DELETE SET NULL ON UPDATE CASCADE;
