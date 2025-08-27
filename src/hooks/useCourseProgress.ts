import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import {
  CourseProgressService,
  CourseProgressData,
} from "@/services/courseProgressService";

export interface UseCourseProgressReturn {
  courseProgress: CourseProgressData | null;
  isLoading: boolean;
  error: string | null;
  completeLesson: (lessonId: string) => Promise<void>;
  completeTask: (taskId: string) => Promise<void>;
  refreshProgress: () => Promise<void>;
}

export function useCourseProgress(): UseCourseProgressReturn {
  const { data: session } = useSession();
  const [courseProgress, setCourseProgress] =
    useState<CourseProgressData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProgress = useCallback(async () => {
    if (!session?.user?.id) {
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      const progress = await CourseProgressService.getAllCourseProgress();
      setCourseProgress(progress);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch progress");
    } finally {
      setIsLoading(false);
    }
  }, [session?.user?.id]);

  const completeLesson = useCallback(
    async (lessonId: string) => {
      if (!session?.user?.id) {
        setError("User not authenticated");
        return;
      }

      try {
        setError(null);
        await CourseProgressService.completeLesson(lessonId);
        // Refresh progress after completing lesson
        await fetchProgress();
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to complete lesson"
        );
      }
    },
    [session?.user?.id, fetchProgress]
  );

  const completeTask = useCallback(
    async (taskId: string) => {
      if (!session?.user?.id) {
        setError("User not authenticated");
        return;
      }

      try {
        setError(null);
        await CourseProgressService.completeTask(taskId);
        // Refresh progress after completing task
        await fetchProgress();
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to complete task"
        );
      }
    },
    [session?.user?.id, fetchProgress]
  );

  const refreshProgress = useCallback(async () => {
    await fetchProgress();
  }, [fetchProgress]);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  return {
    courseProgress,
    isLoading,
    error,
    completeLesson,
    completeTask,
    refreshProgress,
  };
}
