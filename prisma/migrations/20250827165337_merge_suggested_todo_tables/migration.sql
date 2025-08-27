/*
  Warnings:

  - You are about to drop the `SuggestedTodo` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."Scope" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "public"."Todo" ADD COLUMN     "customLogic" TEXT,
ADD COLUMN     "frequency" TEXT,
ADD COLUMN     "scope" "public"."Scope" NOT NULL DEFAULT 'USER';

-- DropTable
DROP TABLE "public"."SuggestedTodo";

-- CreateIndex
CREATE INDEX "Todo_scope_idx" ON "public"."Todo"("scope");

-- CreateIndex
CREATE INDEX "Todo_frequency_idx" ON "public"."Todo"("frequency");
