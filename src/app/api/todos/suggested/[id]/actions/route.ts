import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";
import { getTodayDate } from "@/utils/timeUtils";

const prisma = new PrismaClient();

// POST /api/todos/suggested/[id]/actions - Perform actions on a suggested todo
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

    // Parse the suggested todo ID: ${todoId}_${timestamp}_${index}
    const parts = id.split("_");
    if (parts.length < 3) {
      return NextResponse.json(
        { error: "Invalid suggested todo ID format" },
        { status: 400 }
      );
    }

    const originalTodoId = parts[0];
    const timestamp = parts[1];
    const index = parts[2];

    // Find the original suggested todo
    const suggestedTodo = await prisma.todo.findUnique({
      where: {
        id: originalTodoId,
        type: "suggested",
      },
    });

    if (!suggestedTodo) {
      return NextResponse.json(
        { error: "Suggested todo not found" },
        { status: 404 }
      );
    }

    // Get today's date using the utility function for consistency
    const today = getTodayDate();

    // Check if a UserTodo already exists for this user and suggested todo for today
    let existingUserTodo = await prisma.userTodo.findFirst({
      where: {
        userId: session.user.id,
        todoId: suggestedTodo.id,
        date: today,
      },
      include: {
        todo: true,
      },
    });

    // If no UserTodo exists, create one for today
    if (!existingUserTodo) {
      existingUserTodo = await prisma.userTodo.create({
        data: {
          userId: session.user.id,
          todoId: suggestedTodo.id,
          date: today,
          completed: false,
          missed: false,
          archived: false,
        },
        include: {
          todo: true,
        },
      });
    }

    let updatedUserTodo;

    switch (action) {
      case "toggle_complete":
        updatedUserTodo = await prisma.userTodo.update({
          where: { id: existingUserTodo.id },
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
          where: { id: existingUserTodo.id },
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
          where: { id: existingUserTodo.id },
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
          where: { id: existingUserTodo.id },
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
    console.error("Error performing suggested todo action:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
