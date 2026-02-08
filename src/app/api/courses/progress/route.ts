import { NextRequest, NextResponse } from "next/server";

// GET - Get course progress (Prisma removed)
export async function GET() {
  // Prisma removed - returning empty progress
  return NextResponse.json({
    courseProgress: {
      completedLessons: [],
      completedTasks: [],
    },
  });
}

// POST - Mark lesson/task as complete (Prisma removed)
export async function POST(request: NextRequest) {
  // Prisma removed - returning error
  return NextResponse.json(
    { error: "Database not available" },
    { status: 503 }
  );
}
