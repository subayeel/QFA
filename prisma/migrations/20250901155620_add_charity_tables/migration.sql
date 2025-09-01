-- CreateEnum
CREATE TYPE "public"."DonationType" AS ENUM ('ZAKAH', 'QURAN', 'ONE_PLATE', 'OLD_CLOTHES', 'OLD_BOOKS', 'CUSTOM');

-- CreateEnum
CREATE TYPE "public"."DonationStatus" AS ENUM ('PENDING', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "public"."HelpRequestStatus" AS ENUM ('PENDING', 'APPROVED', 'FULFILLED', 'REJECTED');

-- CreateEnum
CREATE TYPE "public"."HelpRequestType" AS ENUM ('BOOKS', 'CLOTHES', 'FOOD', 'EDUCATION', 'MEDICAL', 'SHELTER', 'OTHER');

-- CreateTable
CREATE TABLE "public"."Donation" (
    "id" TEXT NOT NULL,
    "type" "public"."DonationType" NOT NULL,
    "amount" DOUBLE PRECISION,
    "description" TEXT,
    "status" "public"."DonationStatus" NOT NULL DEFAULT 'PENDING',
    "userId" TEXT,
    "anonymous" BOOLEAN NOT NULL DEFAULT false,
    "donorName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Donation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."HelpRequest" (
    "id" TEXT NOT NULL,
    "type" "public"."HelpRequestType" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "urgency" TEXT NOT NULL DEFAULT 'medium',
    "status" "public"."HelpRequestStatus" NOT NULL DEFAULT 'PENDING',
    "contactName" TEXT,
    "contactEmail" TEXT,
    "contactPhone" TEXT,
    "location" TEXT,
    "quantity" TEXT,
    "preferredDelivery" TEXT,
    "additionalNotes" TEXT,
    "adminNotes" TEXT,
    "fulfilledBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HelpRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Donation_type_idx" ON "public"."Donation"("type");

-- CreateIndex
CREATE INDEX "Donation_status_idx" ON "public"."Donation"("status");

-- CreateIndex
CREATE INDEX "Donation_userId_idx" ON "public"."Donation"("userId");

-- CreateIndex
CREATE INDEX "Donation_createdAt_idx" ON "public"."Donation"("createdAt");

-- CreateIndex
CREATE INDEX "HelpRequest_type_idx" ON "public"."HelpRequest"("type");

-- CreateIndex
CREATE INDEX "HelpRequest_status_idx" ON "public"."HelpRequest"("status");

-- CreateIndex
CREATE INDEX "HelpRequest_urgency_idx" ON "public"."HelpRequest"("urgency");

-- CreateIndex
CREATE INDEX "HelpRequest_createdAt_idx" ON "public"."HelpRequest"("createdAt");

-- AddForeignKey
ALTER TABLE "public"."Donation" ADD CONSTRAINT "Donation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
