import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";
import { CreateTodoData } from "@/types/todos.types";

const prisma = new PrismaClient();

// GET /api/todos - Get todos for authenticated user
export async function GET(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const filter = searchParams.get("filter") as
      | "today"
      | "upcoming"
      | "archived"
      | undefined;
    const date = searchParams.get("date");

    let whereClause: any = {
      userId: session.user.id,
    };

    if (filter === "today") {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      whereClause.date = {
        gte: today,
        lt: tomorrow,
      };
      whereClause.archived = false;
    } else if (filter === "upcoming") {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const dayAfterTomorrow = new Date(today);
      dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 3);

      whereClause.date = {
        gte: tomorrow,
        lte: dayAfterTomorrow,
      };
      whereClause.archived = false;
    } else if (filter === "archived") {
      whereClause.archived = true;
    } else if (date) {
      const targetDate = new Date(date);
      targetDate.setHours(0, 0, 0, 0);
      const nextDay = new Date(targetDate);
      nextDay.setDate(nextDay.getDate() + 1);

      whereClause.date = {
        gte: targetDate,
        lt: nextDay,
      };
    }

    const userTodos = await prisma.userTodo.findMany({
      where: whereClause,
      include: {
        todo: true,
      },
      orderBy: [
        { date: "asc" },
        { todo: { timePriority: "asc" } },
        { createdAt: "asc" },
      ],
    });

    return NextResponse.json(userTodos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST /api/todos - Create a new todo
export async function POST(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body: CreateTodoData = await request.json();

    // First, create the todo definition
    const todo = await prisma.todo.create({
      data: {
        title: body.title,
        description: body.description,
        time: body.time,
        category: body.category,
        priority: body.priority || "medium",
        type: "custom",
      },
    });

    // Then, create the user-specific todo instance
    const userTodo = await prisma.userTodo.create({
      data: {
        date: new Date(body.date),
        userId: session.user.id,
        todoId: todo.id,
      },
      include: {
        todo: true,
      },
    });

    return NextResponse.json(userTodo, { status: 201 });
  } catch (error) {
    console.error("Error creating todo:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
