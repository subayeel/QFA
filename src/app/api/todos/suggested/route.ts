import { NextRequest, NextResponse } from "next/server";

// GET /api/todos/suggested - Get suggested todos (Prisma removed)
export async function GET(request: NextRequest) {
  // Prisma removed - returning empty array
  return NextResponse.json([]);
}
