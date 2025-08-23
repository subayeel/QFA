import React from "react";

export interface Lesson {
  id: string;
  lessonName: string;
  lessonDescription?: string;
  lessonContent: React.ComponentType | string;
  duration: string;
}

export interface Task {
  id: string;
  taskName: string;
  taskContent: React.ComponentType | string;
}

export interface CourseDetailsType {
  id: string;
  name: string;
  description: string;
  color: string;
  image: string;
  duration: string;
  lessons: Lesson[];
  tasks: Task[];
}
