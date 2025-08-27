-- CreateTable
CREATE TABLE "public"."Todo" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "time" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "missed" BOOLEAN NOT NULL DEFAULT false,
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "type" TEXT NOT NULL DEFAULT 'custom',
    "category" TEXT,
    "priority" TEXT NOT NULL DEFAULT 'medium',
    "timePriority" INTEGER,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Todo_userId_date_idx" ON "public"."Todo"("userId", "date");

-- CreateIndex
CREATE INDEX "Todo_userId_type_idx" ON "public"."Todo"("userId", "type");

-- CreateIndex
CREATE INDEX "Todo_userId_completed_idx" ON "public"."Todo"("userId", "completed");

-- CreateIndex
CREATE INDEX "Todo_userId_archived_idx" ON "public"."Todo"("userId", "archived");

-- AddForeignKey
ALTER TABLE "public"."Todo" ADD CONSTRAINT "Todo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
