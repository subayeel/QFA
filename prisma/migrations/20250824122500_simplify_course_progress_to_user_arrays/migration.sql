/*
  Warnings:

  - You are about to drop the `CompletedLesson` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CompletedTask` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CourseProgress` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."CompletedLesson" DROP CONSTRAINT "CompletedLesson_courseProgressId_fkey";

-- DropForeignKey
ALTER TABLE "public"."CompletedTask" DROP CONSTRAINT "CompletedTask_courseProgressId_fkey";

-- DropForeignKey
ALTER TABLE "public"."CourseProgress" DROP CONSTRAINT "CourseProgress_userId_fkey";

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "completedLessons" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "completedTasks" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- DropTable
DROP TABLE "public"."CompletedLesson";

-- DropTable
DROP TABLE "public"."CompletedTask";

-- DropTable
DROP TABLE "public"."CourseProgress";
