import { NextRequest, NextResponse } from "next/server";

// GET /api/admin/suggested-todos - Get all suggested todos (Prisma removed)
export async function GET() {
  // Prisma removed - returning empty array
  return NextResponse.json([]);
}

// POST /api/admin/suggested-todos - Create a new suggested todo (Prisma removed)
export async function POST(request: NextRequest) {
  // Prisma removed - returning error
  return NextResponse.json(
    { error: "Database not available" },
    { status: 503 }
  );
}
