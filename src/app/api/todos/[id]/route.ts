import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";
import { UpdateTodoData } from "@/types/todos.types";

const prisma = new PrismaClient();

// PATCH /api/todos/[id] - Update a todo
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body: UpdateTodoData = await request.json();

    // Verify the userTodo belongs to the user
    const existingUserTodo = await prisma.userTodo.findFirst({
      where: {
        id: params.id,
        userId: session.user.id,
      },
      include: {
        todo: true,
      },
    });

    if (!existingUserTodo) {
      return NextResponse.json({ error: "Todo not found" }, { status: 404 });
    }

    // Update the todo definition
    const updatedTodo = await prisma.todo.update({
      where: {
        id: existingUserTodo.todoId,
      },
      data: {
        title: body.title,
        description: body.description,
        time: body.time,
        category: body.category,
        priority: body.priority,
        timePriority: body.timePriority,
        updatedAt: new Date(),
      },
    });

    // Update the userTodo instance
    const updatedUserTodo = await prisma.userTodo.update({
      where: {
        id: params.id,
      },
      data: {
        updatedAt: new Date(),
      },
      include: {
        todo: true,
      },
    });

    return NextResponse.json(updatedUserTodo);
  } catch (error) {
    console.error("Error updating todo:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE /api/todos/[id] - Delete a todo
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Verify the userTodo belongs to the user
    const existingUserTodo = await prisma.userTodo.findFirst({
      where: {
        id: params.id,
        userId: session.user.id,
      },
      include: {
        todo: true,
      },
    });

    if (!existingUserTodo) {
      return NextResponse.json({ error: "Todo not found" }, { status: 404 });
    }

    // Delete the userTodo instance
    await prisma.userTodo.delete({
      where: {
        id: params.id,
      },
    });

    // Check if this todo is used by other users
    const otherUserTodos = await prisma.userTodo.findFirst({
      where: {
        todoId: existingUserTodo.todoId,
      },
    });

    // If no other users are using this todo, delete the todo definition
    if (!otherUserTodos) {
      await prisma.todo.delete({
        where: {
          id: existingUserTodo.todoId,
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting todo:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
