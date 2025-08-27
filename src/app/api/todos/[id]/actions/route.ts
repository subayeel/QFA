import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// POST /api/todos/[id]/actions - Perform actions on a todo
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const { action } = await request.json();

    // Verify the userTodo belongs to the user
    const existingUserTodo = await prisma.userTodo.findFirst({
      where: {
        id,
        userId: session.user.id,
      },
      include: {
        todo: true,
      },
    });

    if (!existingUserTodo) {
      return NextResponse.json({ error: "Todo not found" }, { status: 404 });
    }

    let updatedUserTodo;

    switch (action) {
      case "toggle_complete":
        updatedUserTodo = await prisma.userTodo.update({
          where: { id },
          data: {
            completed: !existingUserTodo.completed,
            missed: false, // Reset missed when completing
            updatedAt: new Date(),
          },
          include: {
            todo: true,
          },
        });
        break;

      case "mark_missed":
        updatedUserTodo = await prisma.userTodo.update({
          where: { id },
          data: {
            missed: true,
            completed: false, // Reset completed when marking as missed
            updatedAt: new Date(),
          },
          include: {
            todo: true,
          },
        });
        break;

      case "archive":
        updatedUserTodo = await prisma.userTodo.update({
          where: { id },
          data: {
            archived: true,
            updatedAt: new Date(),
          },
          include: {
            todo: true,
          },
        });
        break;

      case "unarchive":
        updatedUserTodo = await prisma.userTodo.update({
          where: { id },
          data: {
            archived: false,
            updatedAt: new Date(),
          },
          include: {
            todo: true,
          },
        });
        break;

      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

    return NextResponse.json(updatedUserTodo);
  } catch (error) {
    console.error("Error performing todo action:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
