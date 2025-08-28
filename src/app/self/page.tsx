import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { SignOutButton } from "@/app/components/SignOutButton";
import { prisma } from "@/lib/prisma";
import { courses } from "@/utils/courses";
import Image from "next/image";
import {
  Target,
  Heart,
  Users,
  Gift,
  Plus,
  GraduationCap,
  Calendar,
} from "lucide-react";

export default async function UserProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/login");
  }

  // Static data for demonstration
  const profileData = {
    name: session.user.name || "User",
    age: 12,
    gender: "Male",
    profession: "Student",
    goals: ["Complete Hifz", "Learn Arabic Grammar", "Memorize 40 Hadith"],
    location: "Dubai, UAE",
  };

  // Fetch course progress data
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      completedLessons: true,
      completedTasks: true,
    },
  });

  // Fetch today's todo statistics
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const todayTodos = await prisma.userTodo.findMany({
    where: {
      userId: session.user.id,
      date: {
        gte: today,
        lt: tomorrow,
      },
      archived: false,
    },
    include: {
      todo: true,
    },
  });

  const todayStats = {
    total: todayTodos.length,
    completed: todayTodos.filter((todo) => todo.completed).length,
    missed: todayTodos.filter((todo) => todo.missed).length,
    pending: todayTodos.filter((todo) => !todo.completed && !todo.missed)
      .length,
  };

  // Calculate category breakdown
  const categoryStats = todayTodos.reduce((acc, userTodo) => {
    const category = userTodo.todo.category || "personal";
    if (!acc[category]) {
      acc[category] = { total: 0, completed: 0, missed: 0 };
    }
    acc[category].total++;
    if (userTodo.completed) acc[category].completed++;
    if (userTodo.missed) acc[category].missed++;
    return acc;
  }, {} as Record<string, { total: number; completed: number; missed: number }>);

  // Get recent todo activity (last 7 days)
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);

  const recentTodos = await prisma.userTodo.findMany({
    where: {
      userId: session.user.id,
      date: {
        gte: weekAgo,
      },
      archived: false,
    },
    include: {
      todo: true,
    },
    orderBy: {
      date: "desc",
    },
    take: 5,
  });

  // Get overall todo statistics (all time)
  const overallStats = await prisma.userTodo.groupBy({
    by: ["completed", "missed", "archived"],
    where: {
      userId: session.user.id,
    },
    _count: {
      id: true,
    },
  });

  const overallTodoStats = {
    total: overallStats.reduce((sum, stat) => sum + stat._count.id, 0),
    completed:
      overallStats.find(
        (stat) => stat.completed && !stat.missed && !stat.archived
      )?._count.id || 0,
    missed:
      overallStats.find(
        (stat) => stat.missed && !stat.completed && !stat.archived
      )?._count.id || 0,
    archived: overallStats.find((stat) => stat.archived)?._count.id || 0,
    pending:
      overallStats.find(
        (stat) => !stat.completed && !stat.missed && !stat.archived
      )?._count.id || 0,
  };

  const progressData = {
    courses: Object.values(courses).map((course) => {
      const courseCompletedLessons = [...new Set(user?.completedLessons)];
      const totalLessons = course.lessons.length;
      const completedLessons = courseCompletedLessons.length;
      const progressPercentage =
        totalLessons > 0
          ? Math.round((completedLessons / totalLessons) * 100)
          : 0;

      return {
        name: course.name,
        progress: progressPercentage,
      };
    }),
    hifzProgress: {
      current: 15,
      total: 30,
      percentage: 50,
    },
    todayTodos: {
      completed: todayStats.completed,
      total: todayStats.total,
      percentage:
        todayStats.total > 0
          ? Math.round((todayStats.completed / todayStats.total) * 100)
          : 0,
    },
  };

  const actions = [
    {
      title: "Assign Goals",
      description: "Set new learning objectives",
      icon: Target,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Create Todo",
      description: "Add new tasks to your list",
      icon: Plus,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Donate",
      description: "Support Islamic causes",
      icon: Heart,
      color: "bg-red-50 text-red-600",
    },
    {
      title: "Request Charity",
      description: "Anonymous charity requests",
      icon: Gift,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Guide My Friend",
      description: "Help others in their journey",
      icon: Users,
      color: "bg-orange-50 text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Profile Card */}
        <Card className="p-6 sm:p-8 mb-8 bg-white/80 backdrop-blur-sm shadow-none border">
          <div className="flex flex-col lg:flex-row lg:items-start gap-6">
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 sm:mb-6">
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

              {/* Sign Out Button */}
              <div className="mt-6">
                <SignOutButton />
              </div>
            </div>

            {/* Profile Image */}
            {session.user.image && (
              <div className="flex-shrink-0">
                <Image
                  src={session.user.image}
                  alt="Profile"
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-lg"
                />
              </div>
            )}
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
                  Tracking Your Progress
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
          </div>
        </div>

        {/* Actions */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center gap-2">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            {actions.map((action, index) => (
              <Card
                key={index}
                className="p-4 sm:p-6 bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300 cursor-pointer group"
              >
                <div className="flex flex-row items-center gap-4">
                  {/* Image Placeholder */}
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-2xl flex items-center justify-center ${action.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                  >
                    <action.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-8 lg:h-8 xl:w-10 xl:h-10" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-lg xl:text-xl font-semibold text-gray-900 m-0 mb-1 sm:mb-2">
                      {action.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-sm xl:text-base text-gray-600">
                      {action.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
