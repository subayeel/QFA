import { NextRequest, NextResponse } from "next/server";

// GET /api/todos/stats - Get todo statistics (Prisma removed)
export async function GET(request: NextRequest) {
  // Prisma removed - returning empty stats
  return NextResponse.json({
    total: 0,
    completed: 0,
    missed: 0,
    pending: 0,
  });
}
