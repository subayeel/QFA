/*
  Warnings:

  - You are about to drop the column `archived` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the column `completed` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the column `missed` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Todo` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Todo" DROP CONSTRAINT "Todo_userId_fkey";

-- DropIndex
DROP INDEX "public"."Todo_userId_archived_idx";

-- DropIndex
DROP INDEX "public"."Todo_userId_completed_idx";

-- DropIndex
DROP INDEX "public"."Todo_userId_date_idx";

-- DropIndex
DROP INDEX "public"."Todo_userId_type_idx";

-- AlterTable
ALTER TABLE "public"."Todo" DROP COLUMN "archived",
DROP COLUMN "completed",
DROP COLUMN "date",
DROP COLUMN "missed",
DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "public"."UserTodo" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "missed" BOOLEAN NOT NULL DEFAULT false,
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    "todoId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserTodo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SuggestedTodo" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "time" TEXT,
    "category" TEXT NOT NULL,
    "priority" TEXT NOT NULL DEFAULT 'medium',
    "timePriority" INTEGER,
    "frequency" TEXT NOT NULL DEFAULT 'daily',
    "customLogic" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SuggestedTodo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "UserTodo_userId_date_idx" ON "public"."UserTodo"("userId", "date");

-- CreateIndex
CREATE INDEX "UserTodo_userId_completed_idx" ON "public"."UserTodo"("userId", "completed");

-- CreateIndex
CREATE INDEX "UserTodo_userId_archived_idx" ON "public"."UserTodo"("userId", "archived");

-- CreateIndex
CREATE INDEX "UserTodo_todoId_idx" ON "public"."UserTodo"("todoId");

-- CreateIndex
CREATE UNIQUE INDEX "UserTodo_userId_todoId_date_key" ON "public"."UserTodo"("userId", "todoId", "date");

-- CreateIndex
CREATE INDEX "SuggestedTodo_category_idx" ON "public"."SuggestedTodo"("category");

-- CreateIndex
CREATE INDEX "SuggestedTodo_frequency_idx" ON "public"."SuggestedTodo"("frequency");

-- CreateIndex
CREATE INDEX "Todo_type_idx" ON "public"."Todo"("type");

-- CreateIndex
CREATE INDEX "Todo_category_idx" ON "public"."Todo"("category");

-- AddForeignKey
ALTER TABLE "public"."UserTodo" ADD CONSTRAINT "UserTodo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserTodo" ADD CONSTRAINT "UserTodo_todoId_fkey" FOREIGN KEY ("todoId") REFERENCES "public"."Todo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
