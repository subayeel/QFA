import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET /api/todos/stats - Get todo statistics
export async function GET(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");

    const whereClause: Prisma.UserTodoWhereInput = {
      userId: session.user.id,
      archived: false,
    };

    if (date) {
      const targetDate = new Date(date);
      targetDate.setHours(0, 0, 0, 0);
      const nextDay = new Date(targetDate);
      nextDay.setDate(nextDay.getDate() + 1);

      whereClause.date = {
        gte: targetDate,
        lt: nextDay,
      };
    } else {
      // Default to today
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      whereClause.date = {
        gte: today,
        lt: tomorrow,
      };
    }

    const [total, completed, missed] = await Promise.all([
      prisma.userTodo.count({ where: whereClause }),
      prisma.userTodo.count({
        where: { ...whereClause, completed: true },
      }),
      prisma.userTodo.count({
        where: { ...whereClause, missed: true },
      }),
    ]);

    const pending = total - completed - missed;

    return NextResponse.json({
      total,
      completed,
      missed,
      pending,
    });
  } catch (error) {
    console.error("Error fetching todo stats:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
