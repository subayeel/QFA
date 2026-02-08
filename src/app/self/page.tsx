import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { courses } from "@/utils/courses";
import {
  Target,
  Heart,
  Gift,
  Plus,
  GraduationCap,
  Calendar,
  User,
  BookOpen,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import HifzProgressWidget from "./HifzProgressWidget";
import { signOutAction } from "@/lib/actions/auth";
import { Button } from "@/components/ui/button";

export default async function UserProfilePage() {
  // Authentication and Prisma removed

  // Static data for demonstration
  const profileData = {
    name: "User",
    age: 12,
    gender: "Male",
    profession: "Student",
    goals: ["Complete Hifz", "Learn Arabic Grammar", "Memorize 40 Hadith"],
    location: "Dubai, UAE",
  };

  // Prisma removed - using empty progress data
  const user = {
    completedLessons: [],
    completedTasks: [],
  };

  // Fetch today's todo statistics
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Get recent todo activity (last 7 days)
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);

  const progressData = {
    courses: Object.values(courses).map((course) => {
      const courseCompletedLessons = [...new Set(user?.completedLessons)];
      const totalLessons = course.lessons.length;
      let count = 0;
      courseCompletedLessons.forEach((lesson) => {
        if (course.lessons.flatMap((l) => l.id).includes(lesson)) {
          count++;
        }
      });
      const progressPercentage =
        totalLessons > 0 ? Math.round((count / totalLessons) * 100) : 0;

      return {
        name: course.name,
        progress: progressPercentage,
      };
    }),
  };

  const actions = [
    {
      title: "Create Todo",
      description: "Add new tasks to your list",
      icon: Plus,
      color: "bg-green-50 text-green-600",
      href: "/home",
    },
    {
      title: "Hifz Tracking",
      description: "Track your Quran memorization",
      icon: BookOpen,
      color: "bg-teal-50 text-teal-600",
      href: "/hifz-tracking",
    },
    {
      title: "Donate",
      description: "Support Islamic causes",
      icon: Heart,
      color: "bg-red-50 text-red-600",
      href: "/charity/donate",
    },
    {
      title: "Request Charity",
      description: "Anonymous charity requests",
      icon: Gift,
      color: "bg-purple-50 text-purple-600",
      href: "/charity/request-help",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Profile Card */}
        <Card className="p-6 sm:p-8 mb-8 bg-white/80 backdrop-blur-sm shadow-none border">
          <div className="flex flex-col lg:flex-row lg:items-start gap-6">
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    {profileData.name}
                  </h2>
                  <Badge
                    variant="secondary"
                    className="bg-teal-100 text-teal-800 w-fit"
                  >
                    {profileData.age} years old
                  </Badge>
                </div>
                <form action={signOutAction}>
                  <Button
                    type="submit"
                    variant="outline"
                    className="w-full sm:w-auto border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </form>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-600">{profileData.gender}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">
                    {profileData.profession}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">{profileData.location}</span>
                </div>
              </div>

              {/* Goals */}
              <div className="mt-4">
                <h3 className="text-sm sm:text-base font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Current Goals
                </h3>
                <div className="flex flex-wrap gap-2">
                  {profileData.goals.map((goal, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-white text-sm"
                    >
                      {goal}
                    </Badge>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </Card>

        {/* Progress Tracking */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            Progress
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Courses Progress */}
            <Card className="p-6 sm:p-8 bg-white/80 backdrop-blur-sm border shadow-none lg:col-span-1 xl:col-span-2">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Course Progress
                </h3>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {progressData.courses.map((course, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2 sm:mb-3">
                      <span className="text-sm sm:text-base font-medium text-gray-700">
                        {course.name}
                      </span>
                      <span className="text-sm sm:text-base text-gray-500">
                        {course.progress}%
                      </span>
                    </div>
                    <Progress value={course.progress} className="h-2 sm:h-3" />
                  </div>
                ))}
              </div>
            </Card>

            {/* Hifz Progress Widget */}
            <HifzProgressWidget />
          </div>
        </div>

        {/* Actions */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center gap-2">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            <Link href="/guide">
              <Card className="p-4 sm:p-6 bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300 cursor-pointer group h-full">
                <div className="flex flex-row sm:flex-col lg:flex-row xl:flex-col items-center gap-4">
                  {/* Image Placeholder */}
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 bg-amber-100 text-amber-500 transition-transform duration-300 flex-shrink-0`}
                  >
                    <User className="w-8 h-8 sm:w-10 sm:h-10 lg:w-8 lg:h-8 xl:w-10 xl:h-10" />
                  </div>

                  <div className="flex-1 min-w-0 text-center sm:text-center lg:text-left xl:text-center">
                    <h3 className="text-lg sm:text-xl lg:text-lg xl:text-xl font-semibold text-gray-900 m-0 mb-1 sm:mb-2">
                      Guide My Friend
                    </h3>
                    <p className="text-sm sm:text-base lg:text-sm xl:text-base text-gray-600">
                      Help others in their journey
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
            {actions.map((action, index) => (
              <Link key={index} href={action.href}>
                <Card className="p-4 sm:p-6 bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300 cursor-pointer group h-full">
                  <div className="flex flex-row sm:flex-col lg:flex-row xl:flex-col items-center gap-4">
                    {/* Image Placeholder */}
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-2xl flex items-center justify-center ${action.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                    >
                      <action.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-8 lg:h-8 xl:w-10 xl:h-10" />
                    </div>

                    <div className="flex-1 min-w-0 text-center sm:text-center lg:text-left xl:text-center">
                      <h3 className="text-lg sm:text-xl lg:text-lg xl:text-xl font-semibold text-gray-900 m-0 mb-1 sm:mb-2">
                        {action.title}
                      </h3>
                      <p className="text-sm sm:text-base lg:text-sm xl:text-base text-gray-600">
                        {action.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
