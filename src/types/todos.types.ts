export interface Todo {
  id: string;
  title: string;
  description?: string;
  time?: string;
  date: string; // ISO date string
  completed: boolean;
  missed: boolean;
  archived: boolean;
  type: "custom" | "suggested";
  category?: "prayer" | "quran" | "dhikr" | "charity" | "learning" | "personal";
  priority: "high" | "medium" | "low";
  timePriority?: number; // For smart sorting based on current time
  createdAt: string;
  updatedAt: string;
}

export interface CreateTodoData {
  title: string;
  description?: string;
  time?: string;
  date: string;
  category?: "prayer" | "quran" | "dhikr" | "charity" | "learning" | "personal";
  priority: "high" | "medium" | "low";
}

export type TodoFilter = "today" | "upcoming" | "archived";

export interface TodoStats {
  total: number;
  completed: number;
  missed: number;
  pending: number;
}
