import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET /api/admin/suggested-todos - Get all suggested todos (admin only)
export async function GET() {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // TODO: Add admin role check here
    // For now, allow any authenticated user to access

    const suggestedTodos = await prisma.suggestedTodo.findMany({
      orderBy: [
        { frequency: "asc" },
        { timePriority: "asc" },
        { title: "asc" },
      ],
    });

    return NextResponse.json(suggestedTodos);
  } catch (error) {
    console.error("Error fetching suggested todos:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST /api/admin/suggested-todos - Create a new suggested todo (admin only)
export async function POST(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // TODO: Add admin role check here
    // For now, allow any authenticated user to access

    const body = await request.json();

    const suggestedTodo = await prisma.suggestedTodo.create({
      data: {
        id: body.id,
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

    return NextResponse.json(suggestedTodo, { status: 201 });
  } catch (error) {
    console.error("Error creating suggested todo:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
