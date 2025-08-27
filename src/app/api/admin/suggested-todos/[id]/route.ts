import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET /api/admin/suggested-todos/[id] - Get a specific suggested todo (admin only)
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // TODO: Add admin role check here
    // For now, allow any authenticated user to access

    const { id } = await params;
    const suggestedTodo = await prisma.todo.findUnique({
      where: {
        id: id,
        type: "suggested",
        scope: "ADMIN",
      },
    });

    if (!suggestedTodo) {
      return NextResponse.json(
        { error: "Suggested todo not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(suggestedTodo);
  } catch (error) {
    console.error("Error fetching suggested todo:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// PUT /api/admin/suggested-todos/[id] - Update a specific suggested todo (admin only)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // TODO: Add admin role check here
    // For now, allow any authenticated user to access

    const { id } = await params;
    const body = await request.json();

    const updatedSuggestedTodo = await prisma.todo.update({
      where: {
        id: id,
        type: "suggested",
        scope: "ADMIN",
      },
      data: {
        title: body.title,
        description: body.description,
        time: body.time,
        category: body.category,
        priority: body.priority,
        timePriority: body.timePriority,
        frequency: body.frequency,
        customLogic: body.customLogic,
      },
    });

    return NextResponse.json(updatedSuggestedTodo);
  } catch (error) {
    console.error("Error updating suggested todo:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/suggested-todos/[id] - Delete a specific suggested todo (admin only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // TODO: Add admin role check here
    // For now, allow any authenticated user to access

    const { id } = await params;
    await prisma.todo.delete({
      where: {
        id: id,
        type: "suggested",
        scope: "ADMIN",
      },
    });

    return NextResponse.json({
      message: "Suggested todo deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting suggested todo:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
