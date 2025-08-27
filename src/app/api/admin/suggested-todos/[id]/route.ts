import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET /api/admin/suggested-todos/[id] - Get a specific suggested todo
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // TODO: Add admin role check here

    const suggestedTodo = await prisma.suggestedTodo.findUnique({
      where: { id: params.id },
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

// PATCH /api/admin/suggested-todos/[id] - Update a suggested todo
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // TODO: Add admin role check here

    const body = await request.json();

    const updatedSuggestedTodo = await prisma.suggestedTodo.update({
      where: { id: params.id },
      data: {
        title: body.title,
        description: body.description,
        time: body.time,
        category: body.category,
        priority: body.priority,
        timePriority: body.timePriority,
        frequency: body.frequency,
        customLogic: body.customLogic,
        updatedAt: new Date(),
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

// DELETE /api/admin/suggested-todos/[id] - Delete a suggested todo
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // TODO: Add admin role check here

    await prisma.suggestedTodo.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting suggested todo:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
