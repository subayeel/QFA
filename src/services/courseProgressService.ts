// Service for course progress operations using API endpoints

export interface CourseProgressData {
  completedLessons: string[];
  completedTasks: string[];
}

export class CourseProgressService {
  // Get all course progress for a user
  static async getAllCourseProgress(): Promise<CourseProgressData> {
    try {
      const response = await fetch("/api/courses/progress", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch all course progress");
      }

      const data = await response.json();

      return (
        data.courseProgress || { completedLessons: [], completedTasks: [] }
      );
    } catch (error) {
      console.error("Error fetching all course progress:", error);
      throw error;
    }
  }

  // Mark a lesson as complete
  static async completeLesson(lessonId: string): Promise<void> {
    try {
      const response = await fetch("/api/courses/progress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "complete_lesson",
          lessonId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to complete lesson");
      }
    } catch (error) {
      console.error("Error completing lesson:", error);
      throw error;
    }
  }

  // Mark a task as complete
  static async completeTask(taskId: string): Promise<void> {
    try {
      const response = await fetch("/api/courses/progress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "complete_task",
          taskId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to complete task");
      }
    } catch (error) {
      console.error("Error completing task:", error);
      throw error;
    }
  }

  // Calculate course completion percentage
  static calculateCompletionPercentage(
    completedLessons: string[],
    totalLessons: number
  ): number {
    if (totalLessons === 0) return 0;
    return Math.round((completedLessons.length / totalLessons) * 100);
  }

  // Get completed lessons for a specific course
  static getCompletedLessonsForCourse(
    allCompletedLessons: string[],
    courseId: string
  ): string[] {
    return allCompletedLessons.filter((lessonId) =>
      lessonId.startsWith(courseId.replace("COURSE_", ""))
    );
  }

  // Get completed tasks for a specific course
  static getCompletedTasksForCourse(
    allCompletedTasks: string[],
    courseId: string
  ): string[] {
    return allCompletedTasks.filter((taskId) =>
      taskId.startsWith(courseId.replace("COURSE_", ""))
    );
  }
}
