"use client";
import { CourseDetailsType, Lesson } from "@/types/course.types";
import {
  Bookmark,
  CheckCircle,
  ChevronLeft,
  Clock,
  Play,
  Check,
} from "lucide-react";
import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import Link from "next/link";

function CourseDetails({
  courseDetails,
}: {
  courseDetails: CourseDetailsType;
}) {
  const { toast } = useToast();
  const { courseProgress, completeLesson, completeTask } = useCourseProgress();

  // Filter completed lessons and tasks for this specific course
  const completedLessons = [...new Set(courseProgress?.completedLessons)];
  const completedTasks = [...new Set(courseProgress?.completedTasks)];

  const [selectedContent, setSelectedContent] = useState<
    "lessons" | "tasks" | "details"
  >("lessons");
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleLessonClick = async (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setIsDrawerOpen(true);
  };

  const renderContent = (contentType: "lessons" | "tasks" | "details") => {
    switch (contentType) {
      case "lessons":
        return (
          <div className="space-y-2 md:space-y-3">
            {courseDetails.lessons.map((lesson) => (
              <div
                key={lesson.id}
                className={`flex gap-2 py-3 px-4 md:py-4 md:px-6 items-center justify-between rounded-2xl cursor-pointer transition-colors duration-200 ${
                  completedLessons.includes(lesson.id)
                    ? "bg-green-50 hover:bg-green-100 border border-green-200"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => handleLessonClick(lesson)}
              >
                <div className="flex gap-2 md:gap-4 items-center flex-1">
                  <div>
                    {completedLessons.includes(lesson.id) ? (
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                        <CheckCircle size={20} className="md:w-6 md:h-6" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center">
                        <Play
                          size={20}
                          className="text-amber-500 md:w-6 md:h-6"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-md md:text-lg font-medium truncate max-w-[200px] text-wrap ${
                        completedLessons.includes(lesson.id)
                          ? "text-green-800"
                          : "text-gray-900"
                      }`}
                    >
                      {lesson.lessonName}
                    </p>
                    {lesson.lessonDescription && (
                      <p
                        className={`text-sm mt-1 hidden md:block line-clamp-2 ${
                          completedLessons.includes(lesson.id)
                            ? "text-green-600"
                            : "text-gray-600"
                        }`}
                      >
                        {lesson.lessonDescription}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <div>
                    <p className="text-sm text-gray-500 font-semibold text-end w-full bg-white shadow rounded-full flex gap-1 items-center px-2 py-1 md:px-3 md:py-2">
                      <Clock
                        size={12}
                        className="text-gray-500 md:w-4 md:h-4"
                      />
                      <p className="text-xs md:text-sm text-nowrap">
                        {lesson.duration}
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case "tasks":
        return (
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg md:text-xl font-semibold">
                Your {courseDetails.tasks.length > 1 ? "Tasks" : "Task"}
              </h3>
              <span className="text-sm md:text-base text-gray-500">
                {courseDetails.tasks.length}{" "}
                {courseDetails.tasks.length > 1 ? "tasks" : "task"}
              </span>
            </div>
            <div className="space-y-3 md:space-y-4 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
              {courseDetails.tasks.map((task) => (
                <div
                  key={task.id}
                  className="p-4 md:p-6 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-2 md:mb-3 md:text-lg">
                        {task.taskName}
                      </h4>
                      {typeof task.taskContent === "string" ? (
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                          {task.taskContent}
                        </p>
                      ) : (
                        <task.taskContent />
                      )}
                    </div>
                    <div className="ml-4">
                      {completedTasks.includes(task.id) ? (
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                        </div>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={async () => {
                            try {
                              await completeTask(task.id);
                              toast({
                                title: "Task completed!",
                                description: `You've completed "${task.taskName}"`,
                              });
                            } catch (error) {
                              toast({
                                title: "Error",
                                description: "Failed to mark task as complete",
                                variant: "destructive",
                              });
                            }
                          }}
                          className="w-8 h-8 md:w-10 md:h-10 p-0"
                        >
                          <Check className="w-3 h-3 md:w-4 md:h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "details":
        return (
          <div className="space-y-6 md:space-y-8">
            <div>
              <div className="space-y-4 md:space-y-6">
                <div className="p-4 md:p-6 rounded-xl bg-gray-50">
                  <h4 className="font-medium text-gray-900 mb-2 md:mb-3 md:text-lg">
                    Description
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {courseDetails.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  <div className="p-4 md:p-6 rounded-xl bg-gray-50">
                    <h4 className="font-medium text-gray-900 mb-1 md:mb-2 md:text-lg">
                      Duration
                    </h4>
                    <p className="text-sm md:text-base text-gray-600">
                      {courseDetails.duration}
                    </p>
                  </div>

                  <div className="p-4 md:p-6 rounded-xl bg-gray-50">
                    <h4 className="font-medium text-gray-900 mb-1 md:mb-2 md:text-lg">
                      Total Lessons
                    </h4>
                    <p className="text-sm md:text-base text-gray-600">
                      {courseDetails.lessons.length}
                    </p>
                  </div>

                  <div className="p-4 md:p-6 rounded-xl bg-gray-50 md:col-span-2 lg:col-span-1">
                    <h4 className="font-medium text-gray-900 mb-1 md:mb-2 md:text-lg">
                      Completed
                    </h4>
                    <p className="text-sm md:text-base text-gray-600">
                      {completedLessons.length} lessons
                    </p>
                  </div>

                  <div className="p-4 md:p-6 rounded-xl bg-gray-50 md:col-span-2 lg:col-span-1">
                    <h4 className="font-medium text-gray-900 mb-1 md:mb-2 md:text-lg">
                      Remaining
                    </h4>
                    <p className="text-sm md:text-base text-gray-600">
                      {courseDetails.lessons.length - completedLessons.length}{" "}
                      lessons
                    </p>
                  </div>
                </div>

                <div className="p-4 md:p-6 rounded-xl bg-gray-50">
                  <h4 className="font-medium text-gray-900 mb-2 md:mb-3 md:text-lg">
                    Progress
                  </h4>
                  <div className="flex items-center justify-between mb-2 md:mb-3">
                    <span className="text-sm md:text-base text-gray-600">
                      {completedLessons.length} of{" "}
                      {courseDetails.lessons.length} completed
                    </span>
                    <span className="text-sm md:text-lg font-medium text-gray-900">
                      {Math.round(
                        (completedLessons.length /
                          courseDetails.lessons.length) *
                          100
                      )}
                      %
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 md:h-3">
                    <div
                      className="bg-teal-600 h-2 md:h-3 rounded-full transition-all duration-300"
                      style={{
                        width: `${
                          (completedLessons.length /
                            courseDetails.lessons.length) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      className={`relative min-h-screen`}
      style={{ background: courseDetails.color }}
    >
      {/* Header */}
      <div className="flex items-start justify-between w-full p-8 md:p-12 gap-4 min-h-[100px] md:min-h-[120px]">
        <Link
          href="/courses"
          className="cursor-pointer bg-white rounded-full p-2 md:p-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          <ChevronLeft size={28} className="md:w-8 md:h-8" />
        </Link>
        <div className="cursor-pointer bg-white rounded-full p-2 md:p-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
          <Bookmark size={28} className="md:w-8 md:h-8" />
        </div>
      </div>

      <div className="px-6 py-4 md:px-12 md:py-8 rounded-t-3xl bg-white flex flex-col h-[calc(100vh-100px)] md:h-[calc(100vh-240px)] max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <p className="text-lg md:text-xl text-gray-600">Ongoing Course</p>
          <h2 className="font-semibold tracking-wide text-2xl md:text-4xl text-gray-900">
            {courseDetails.name}
          </h2>
        </div>

        {/* Navbar */}
        <div className="bg-teal-100 rounded-full flex items-center justify-between px-6 py-1 md:px-8 md:py-2 mb-6 md:mb-8">
          <p
            className={`uppercase font-semibold text-sm md:text-base cursor-pointer transition-colors duration-200 ${
              selectedContent === "lessons"
                ? "text-black/80"
                : "text-black/50 hover:text-black/70"
            }`}
            onClick={() => setSelectedContent("lessons")}
          >
            Lessons
          </p>
          <p
            className={`uppercase font-semibold text-sm md:text-base cursor-pointer transition-colors duration-200 ${
              selectedContent === "tasks"
                ? "text-black/80"
                : "text-black/50 hover:text-black/70"
            }`}
            onClick={() => setSelectedContent("tasks")}
          >
            Your Tasks
          </p>
          <p
            className={`uppercase font-semibold text-sm md:text-base cursor-pointer transition-colors duration-200 ${
              selectedContent === "details"
                ? "text-black/80"
                : "text-black/50 hover:text-black/70"
            }`}
            onClick={() => setSelectedContent("details")}
          >
            Details
          </p>
        </div>

        {/* Selected Content */}
        <div className="py-4 md:py-6 flex-1 overflow-y-auto">
          {renderContent(selectedContent)}
        </div>
      </div>

      {/* Lesson Content Drawer */}
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="h-[90vh] md:h-[95vh] md:max-w-4xl md:mx-auto">
          <DrawerHeader className="border-b md:px-8 md:py-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <DrawerTitle className="text-xl md:text-2xl">
                  {selectedLesson?.lessonName}
                </DrawerTitle>
                {selectedLesson?.lessonDescription && (
                  <DrawerDescription className="mt-2 md:mt-3 text-base">
                    {selectedLesson.lessonDescription}
                  </DrawerDescription>
                )}
              </div>
            </div>
          </DrawerHeader>
          <div className="flex-1 overflow-y-auto p-4 md:p-8">
            {selectedLesson && (
              <div className="max-w-none">
                {typeof selectedLesson.lessonContent === "string" ? (
                  <div className="prose prose-lg md:prose-xl max-w-none">
                    <p className="text-base md:text-lg leading-relaxed">
                      {selectedLesson.lessonContent}
                    </p>
                  </div>
                ) : (
                  <selectedLesson.lessonContent />
                )}

                {/* Complete Lesson Button */}
                <div className="mt-8 pt-6 border-t">
                  {completedLessons.includes(selectedLesson.id) ? (
                    <div className="flex items-center justify-center gap-2 text-green-600 bg-green-50 py-3 px-4 rounded-lg">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">Lesson Completed</span>
                    </div>
                  ) : (
                    <Button
                      onClick={async () => {
                        try {
                          await completeLesson(selectedLesson.id);
                          toast({
                            title: "Lesson completed!",
                            description: `You've completed "${selectedLesson.lessonName}"`,
                          });
                        } catch (error) {
                          toast({
                            title: "Error",
                            description: "Failed to mark lesson as complete",
                            variant: "destructive",
                          });
                        }
                      }}
                      className="w-full"
                    >
                      <Check className="w-4 h-4 mr-2" />
                      Mark as Complete
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default CourseDetails;
