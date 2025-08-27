import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET /api/todos/suggested - Get suggested todos for authenticated user
export async function GET(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");
    const filter = searchParams.get("filter") as
      | "today"
      | "upcoming"
      | undefined;

    const targetDate = date ? new Date(date) : new Date();
    const dayOfWeek = targetDate.getDay();

    // Fetch suggested todos from database based on frequency
    const suggestedTodos = await prisma.suggestedTodo.findMany({
      where: {
        OR: [
          { frequency: "daily" },
          {
            frequency: "weekly",
            customLogic: {
              in: [
                dayOfWeek === 0
                  ? "sunday"
                  : dayOfWeek === 1
                  ? "monday"
                  : dayOfWeek === 2
                  ? "tuesday"
                  : dayOfWeek === 3
                  ? "wednesday"
                  : dayOfWeek === 4
                  ? "thursday"
                  : dayOfWeek === 5
                  ? "friday"
                  : "saturday",
              ],
            },
          },
          {
            frequency: "monthly",
            customLogic: "monthly",
          },
        ],
      },
      orderBy: [
        { timePriority: "asc" },
        { priority: "desc" },
        { title: "asc" },
      ],
    });

    // Convert suggested todos to UserTodo format
    const userTodos = suggestedTodos.map((suggested, index) => ({
      id: `suggested_${suggested.id}_${Date.now()}_${index}`,
      date: targetDate.toISOString(),
      completed: false,
      missed: false,
      archived: false,
      todo: {
        id: `suggested_${suggested.id}`,
        title: suggested.title,
        description: suggested.description,
        time: suggested.time,
        category: suggested.category,
        priority: suggested.priority,
        timePriority: suggested.timePriority,
        type: "suggested" as const,
        createdAt: targetDate.toISOString(),
        updatedAt: targetDate.toISOString(),
      },
      createdAt: targetDate.toISOString(),
      updatedAt: targetDate.toISOString(),
    }));

    // Filter based on request
    let filteredUserTodos = userTodos;
    if (filter === "upcoming") {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const dayAfterTomorrow = new Date(today);
      dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

      filteredUserTodos = userTodos.filter((userTodo) => {
        const todoDate = new Date(userTodo.date);
        return todoDate >= tomorrow && todoDate <= dayAfterTomorrow;
      });
    }

    return NextResponse.json(filteredUserTodos);
  } catch (error) {
    console.error("Error fetching suggested todos:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
