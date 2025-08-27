"use client";
import { Card } from "@/components/ui/card";
import { courses } from "@/utils/courses";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  CourseProgressService,
  CourseProgressData,
} from "@/services/courseProgressService";
import Link from "next/link";

function CoursesLayout() {
  const { data: session } = useSession();
  const [courseProgress, setCourseProgress] = useState<CourseProgressData>({
    completedLessons: [],
    completedTasks: [],
  });

  useEffect(() => {
    const fetchCourseProgress = async () => {
      if (!session?.user?.id) {
        return;
      }

      try {
        const progress = await CourseProgressService.getAllCourseProgress();

        setCourseProgress(progress);
      } catch (error) {
        console.error("Error fetching course progress:", error);
      }
    };

    fetchCourseProgress();
  }, [session?.user?.id]);
  return (
    <div>
      {/* Header */}
      <div className="p-6 md:p-10 space-y-2 pb-28 bg-teal-800">
        <p className="text-2xl md:text-3xl lg:text-4xl max-w-[220px] md:max-w-none tracking-wider leading-none text-white font-semibold">
          Find Your matching Courses
        </p>
        <p className="text-sm md:text-base text-white/80">
          10 Courses available
        </p>
      </div>

      <div className="px-6 md:px-8 lg:px-12 mt-[-60px] pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          {Object.values(courses).map((course) => {
            const courseCompletedLessons = [
              new Set(courseProgress.completedLessons),
            ];
            const completedLessons = courseCompletedLessons.length;
            const totalLessons = course.lessons.length;
            const completionPercentage =
              totalLessons > 0
                ? Math.round((completedLessons / totalLessons) * 100)
                : 0;

            return (
              <Link href={`/courses/${course.id}`} key={course.id}>
                <Card
                  key={course.id}
                  style={{ backgroundColor: course.color }}
                  className={`p-3 md:p-6 shadow-none relative cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-inner min-h-[120px] md:min-h-[180px]`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-3xl md:text-2xl lg:text-3xl font-semibold tracking-wide text-black/80">
                      {course.name}
                    </p>
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    <p className="text-sm md:text-base text-black/50 font-medium">
                      {course.lessons.length} Lessons ({course.duration})
                    </p>

                    {
                      <div className="mt-2">
                        <div className="flex items-center gap-2">
                          <div className="w-full bg-black/10 rounded-full h-2 max-w-[50vw]">
                            <div
                              className="bg-black/40 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${completionPercentage}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-medium text-black/80">
                              {completionPercentage}%
                            </span>
                          </div>
                        </div>
                        <p className="text-xs text-black/60 mt-1">
                          {completedLessons} of {totalLessons} completed
                        </p>
                      </div>
                    }
                  </div>
                  <Image
                    src={course.image}
                    alt={course.name}
                    className="object-contain absolute bottom-2 right-4 h-20 sm:h-32 md:h-24 lg:h-32"
                  />
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CoursesLayout;
