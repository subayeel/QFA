import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // Prisma removed - returning error
  return NextResponse.json(
    { message: "Database not available" },
    { status: 503 }
  );
}
