import { NextRequest, NextResponse } from "next/server";

// POST /api/todos/[id]/actions - Perform actions on a todo (Prisma removed)
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // Prisma removed - returning error
  return NextResponse.json(
    { error: "Database not available" },
    { status: 503 }
  );
}
