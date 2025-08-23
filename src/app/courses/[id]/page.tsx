"use client";

import { useParams } from "next/navigation";
import CourseDetails from "./CourseDetails";
import { CourseDetailsType } from "@/types/course.types";
import { courses } from "@/utils/courses";

function CourseDetailsLayout() {
  const { id } = useParams();
  const completedLessons = ["1"];
  const completedTasks = ["1"];

  const getCourseDetailsFromId = (id: string): CourseDetailsType | null => {
    return Object.values(courses).find((course) => course.id === id) || null;
  };

  console.log(id, "id");

  if (!id || !getCourseDetailsFromId(id as string)) {
    return <div>Course not found</div>;
  }
  return (
    <CourseDetails
      courseDetails={getCourseDetailsFromId(id as string)!}
      completedLessons={completedLessons}
      completedTasks={completedTasks}
    />
  );
}

export default CourseDetailsLayout;
