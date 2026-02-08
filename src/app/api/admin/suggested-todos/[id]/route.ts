import { NextRequest, NextResponse } from "next/server";

// GET /api/admin/suggested-todos/[id] - Get a specific suggested todo (Prisma removed)
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // Prisma removed - returning 404
  return NextResponse.json(
    { error: "Suggested todo not found" },
    { status: 404 }
  );
}

// PUT /api/admin/suggested-todos/[id] - Update a specific suggested todo (Prisma removed)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // Prisma removed - returning error
  return NextResponse.json(
    { error: "Database not available" },
    { status: 503 }
  );
}

// DELETE /api/admin/suggested-todos/[id] - Delete a specific suggested todo (Prisma removed)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // Prisma removed - returning error
  return NextResponse.json(
    { error: "Database not available" },
    { status: 503 }
  );
}
