-- CreateTable
CREATE TABLE "public"."CourseProgress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CourseProgress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CompletedLesson" (
    "id" TEXT NOT NULL,
    "courseProgressId" TEXT NOT NULL,
    "lessonId" TEXT NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CompletedLesson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CompletedTask" (
    "id" TEXT NOT NULL,
    "courseProgressId" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CompletedTask_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CourseProgress_userId_idx" ON "public"."CourseProgress"("userId");

-- CreateIndex
CREATE INDEX "CourseProgress_courseId_idx" ON "public"."CourseProgress"("courseId");

-- CreateIndex
CREATE UNIQUE INDEX "CourseProgress_userId_courseId_key" ON "public"."CourseProgress"("userId", "courseId");

-- CreateIndex
CREATE INDEX "CompletedLesson_courseProgressId_idx" ON "public"."CompletedLesson"("courseProgressId");

-- CreateIndex
CREATE INDEX "CompletedLesson_lessonId_idx" ON "public"."CompletedLesson"("lessonId");

-- CreateIndex
CREATE UNIQUE INDEX "CompletedLesson_courseProgressId_lessonId_key" ON "public"."CompletedLesson"("courseProgressId", "lessonId");

-- CreateIndex
CREATE INDEX "CompletedTask_courseProgressId_idx" ON "public"."CompletedTask"("courseProgressId");

-- CreateIndex
CREATE INDEX "CompletedTask_taskId_idx" ON "public"."CompletedTask"("taskId");

-- CreateIndex
CREATE UNIQUE INDEX "CompletedTask_courseProgressId_taskId_key" ON "public"."CompletedTask"("courseProgressId", "taskId");

-- AddForeignKey
ALTER TABLE "public"."CourseProgress" ADD CONSTRAINT "CourseProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CompletedLesson" ADD CONSTRAINT "CompletedLesson_courseProgressId_fkey" FOREIGN KEY ("courseProgressId") REFERENCES "public"."CourseProgress"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CompletedTask" ADD CONSTRAINT "CompletedTask_courseProgressId_fkey" FOREIGN KEY ("courseProgressId") REFERENCES "public"."CourseProgress"("id") ON DELETE CASCADE ON UPDATE CASCADE;
