export interface Todo {
  id: string;
  title: string;
  description?: string;
  time?: string;
  category?: "prayer" | "quran" | "dhikr" | "charity" | "learning" | "personal";
  priority: "high" | "medium" | "low";
  timePriority?: number; // For smart sorting based on current time
  type: "custom" | "suggested";
  scope: "USER" | "ADMIN";
  frequency?: "daily" | "weekly" | "monthly" | "custom";
  customLogic?: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserTodo {
  id: string;
  date: string; // ISO date string
  completed: boolean;
  missed: boolean;
  archived: boolean;
  todo: Todo;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTodoData {
  title: string;
  description?: string;
  time?: string;
  date: string;
  category?: "prayer" | "quran" | "dhikr" | "charity" | "learning" | "personal";
  priority?: "high" | "medium" | "low";
}

export interface UpdateTodoData {
  title?: string;
  description?: string;
  time?: string;
  category?: "prayer" | "quran" | "dhikr" | "charity" | "learning" | "personal";
  priority?: "high" | "medium" | "low";
  timePriority?: number;
}

export type TodoFilter = "today" | "upcoming" | "archived";

export interface TodoStats {
  total: number;
  completed: number;
  missed: number;
  pending: number;
}
