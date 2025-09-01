-- CreateTable
CREATE TABLE "public"."HifzProgress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "surahNumber" INTEGER NOT NULL,
    "surahName" TEXT NOT NULL,
    "totalVerses" INTEGER NOT NULL,
    "memorizedVerses" INTEGER NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "lastUpdated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HifzProgress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "HifzProgress_userId_idx" ON "public"."HifzProgress"("userId");

-- CreateIndex
CREATE INDEX "HifzProgress_surahNumber_idx" ON "public"."HifzProgress"("surahNumber");

-- CreateIndex
CREATE INDEX "HifzProgress_isCompleted_idx" ON "public"."HifzProgress"("isCompleted");

-- CreateIndex
CREATE INDEX "HifzProgress_lastUpdated_idx" ON "public"."HifzProgress"("lastUpdated");

-- CreateIndex
CREATE UNIQUE INDEX "HifzProgress_userId_surahNumber_key" ON "public"."HifzProgress"("userId", "surahNumber");

-- AddForeignKey
ALTER TABLE "public"."HifzProgress" ADD CONSTRAINT "HifzProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
