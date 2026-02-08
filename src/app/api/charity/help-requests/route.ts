import { NextRequest, NextResponse } from "next/server";

// POST: Create a new help request (Prisma removed)
export async function POST(request: NextRequest) {
  // Prisma removed - returning error
  return NextResponse.json(
    { error: "Database not available" },
    { status: 503 }
  );
}

// GET: Retrieve help requests (Prisma removed)
export async function GET(request: NextRequest) {
  // Prisma removed - returning empty array
  return NextResponse.json({ helpRequests: [] });
}
