/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `modulesCourses` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "modulesCourses_name_key" ON "modulesCourses"("name");
