import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

// GET - Get course progress for a user
export async function GET(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get user with completed lessons and tasks
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: {
        completedLessons: true,
        completedTasks: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Return all completed lessons and tasks
    return NextResponse.json({
      courseProgress: {
        completedLessons: user.completedLessons,
        completedTasks: user.completedTasks,
      },
    });
  } catch (error) {
    console.error("Error fetching course progress:", error);
    return NextResponse.json(
      { error: "Failed to fetch course progress" },
      { status: 500 }
    );
  }
}

// POST - Mark lesson/task as complete
export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { action, lessonId, taskId } = body;

    switch (action) {
      case "complete_lesson":
        // Mark a lesson as complete
        if (!lessonId) {
          return NextResponse.json(
            { error: "Lesson ID is required" },
            { status: 400 }
          );
        }

        // Add lesson to completed lessons array
        const updatedUserWithLesson = await prisma.user.update({
          where: { id: session.user.id },
          data: {
            completedLessons: {
              push: lessonId,
            },
          },
          select: {
            completedLessons: true,
            completedTasks: true,
          },
        });

        return NextResponse.json({
          completedLesson: lessonId,
          courseProgress: {
            completedLessons: updatedUserWithLesson.completedLessons,
            completedTasks: updatedUserWithLesson.completedTasks,
          },
        });

      case "complete_task":
        // Mark a task as complete
        if (!taskId) {
          return NextResponse.json(
            { error: "Task ID is required" },
            { status: 400 }
          );
        }

        // Add task to completed tasks array
        const updatedUserWithTask = await prisma.user.update({
          where: { id: session.user.id },
          data: {
            completedTasks: {
              push: taskId,
            },
          },
          select: {
            completedLessons: true,
            completedTasks: true,
          },
        });

        return NextResponse.json({
          completedTask: taskId,
          courseProgress: {
            completedLessons: updatedUserWithTask.completedLessons,
            completedTasks: updatedUserWithTask.completedTasks,
          },
        });

      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }
  } catch (error) {
    console.error("Error updating course progress:", error);
    return NextResponse.json(
      { error: "Failed to update course progress" },
      { status: 500 }
    );
  }
}
