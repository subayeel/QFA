import { NextRequest, NextResponse } from "next/server";

// GET /api/todos - Get todos (Prisma removed)
export async function GET(request: NextRequest) {
  // Prisma removed - returning empty array
  return NextResponse.json([]);
}

// POST /api/todos - Create a new todo (Prisma removed)
export async function POST(request: NextRequest) {
  // Prisma removed - returning error
  return NextResponse.json(
    { error: "Database not available" },
    { status: 503 }
  );
}
