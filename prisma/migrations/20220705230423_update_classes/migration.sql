/*
  Warnings:

  - You are about to drop the column `classOrder` on the `classes` table. All the data in the column will be lost.
  - You are about to drop the `quizs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `videos` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "classes" DROP COLUMN "classOrder",
ADD COLUMN     "extendedVideosId" TEXT;

-- DropTable
DROP TABLE "quizs";

-- DropTable
DROP TABLE "videos";

-- CreateTable
CREATE TABLE "extendedvideos" (
    "id" TEXT NOT NULL,
    "classesId" TEXT,
    "name" TEXT,
    "slug" TEXT,
    "description" TEXT,
    "url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "extendedvideos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "extendedquiz" (
    "id" TEXT NOT NULL,
    "classesId" TEXT,
    "question" TEXT,
    "option1" TEXT,
    "option2" TEXT,
    "option3" TEXT,
    "option4" TEXT,
    "answer" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "extendedquiz_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "extendedvideos_classesId_key" ON "extendedvideos"("classesId");

-- CreateIndex
CREATE UNIQUE INDEX "extendedquiz_classesId_key" ON "extendedquiz"("classesId");

-- AddForeignKey
ALTER TABLE "extendedvideos" ADD CONSTRAINT "extendedvideos_classesId_fkey" FOREIGN KEY ("classesId") REFERENCES "classes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "extendedquiz" ADD CONSTRAINT "extendedquiz_classesId_fkey" FOREIGN KEY ("classesId") REFERENCES "classes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
