/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  UserTodo,
  CreateTodoData,
  UpdateTodoData,
  TodoFilter,
  TodoStats,
} from "@/types/todos.types";
import {
  smartSortTodos,
  getCurrentPrayerContext,
  getCurrentPrayerContextWithTimes,
} from "@/utils/smartSorting";
import { PrayerTimes } from "@/utils/prayerTimes";

export class TodoService {
  // Helper function to convert database UserTodo to UserTodo interface
  private static convertDbUserTodoToUserTodo(dbUserTodo: any): UserTodo {
    return {
      id: dbUserTodo.id,
      date:
        typeof dbUserTodo.date === "string"
          ? dbUserTodo.date
          : dbUserTodo.date.toISOString(),
      completed: dbUserTodo.completed,
      missed: dbUserTodo.missed,
      archived: dbUserTodo.archived,
      todo: {
        id: dbUserTodo.todo.id,
        title: dbUserTodo.todo.title,
        description: dbUserTodo.todo.description || undefined,
        time: dbUserTodo.todo.time || undefined,
        category:
          (dbUserTodo.todo.category as
            | "prayer"
            | "quran"
            | "dhikr"
            | "charity"
            | "learning"
            | "personal") || undefined,
        priority: dbUserTodo.todo.priority as "high" | "medium" | "low",
        timePriority: dbUserTodo.todo.timePriority || undefined,
        type: dbUserTodo.todo.type as "custom" | "suggested",
        scope: dbUserTodo.todo.scope as "USER" | "ADMIN",
        frequency: dbUserTodo.todo.frequency || undefined,
        customLogic: dbUserTodo.todo.customLogic || undefined,
        createdAt:
          typeof dbUserTodo.todo.createdAt === "string"
            ? dbUserTodo.todo.createdAt
            : dbUserTodo.todo.createdAt.toISOString(),
        updatedAt:
          typeof dbUserTodo.todo.updatedAt === "string"
            ? dbUserTodo.todo.updatedAt
            : dbUserTodo.todo.updatedAt.toISOString(),
      },
      createdAt:
        typeof dbUserTodo.createdAt === "string"
          ? dbUserTodo.createdAt
          : dbUserTodo.createdAt.toISOString(),
      updatedAt:
        typeof dbUserTodo.updatedAt === "string"
          ? dbUserTodo.updatedAt
          : dbUserTodo.updatedAt.toISOString(),
    };
  }

  // Helper function to check if user is authenticated
  private static async checkAuthentication(): Promise<boolean> {
    try {
      const response = await fetch("/api/todos/check-auth");
      if (response.ok) {
        const data = await response.json();
        return data.authenticated;
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
    }
    return false;
  }

  // Helper function to handle API errors
  private static handleApiError(error: any, operation: string): never {
    console.error(`Error in ${operation}:`, error);
    throw new Error(`Failed to ${operation}. Please try again.`);
  }

  static async getAllTodos(): Promise<UserTodo[]> {
    const isAuthenticated = await this.checkAuthentication();
    if (!isAuthenticated) {
      throw new Error("User must be authenticated to fetch todos");
    }

    try {
      const response = await fetch("/api/todos");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const dbUserTodos = await response.json();
      return dbUserTodos.map(this.convertDbUserTodoToUserTodo);
    } catch (error) {
      this.handleApiError(error, "fetch all todos");
    }
  }

  static async getTodosByFilter(
    filter: TodoFilter,
    prayerTimes?: PrayerTimes
  ): Promise<UserTodo[]> {
    const isAuthenticated = await this.checkAuthentication();
    if (!isAuthenticated) {
      throw new Error("User must be authenticated to fetch todos");
    }

    try {
      const response = await fetch(`/api/todos?filter=${filter}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const dbUserTodos = await response.json();
      const convertedUserTodos = dbUserTodos.map(
        this.convertDbUserTodoToUserTodo
      );

      // Apply smart sorting for non-archived todos
      if (filter !== "archived") {
        const context = prayerTimes
          ? await getCurrentPrayerContextWithTimes(prayerTimes)
          : await getCurrentPrayerContext();
        return smartSortTodos(convertedUserTodos, context);
      }

      return convertedUserTodos;
    } catch (error) {
      this.handleApiError(error, "fetch todos by filter");
    }
  }

  static async createTodo(todoData: CreateTodoData): Promise<UserTodo> {
    const isAuthenticated = await this.checkAuthentication();
    if (!isAuthenticated) {
      throw new Error("User must be authenticated to create todos");
    }

    try {
      const response = await fetch("/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todoData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const dbUserTodo = await response.json();
      return this.convertDbUserTodoToUserTodo(dbUserTodo);
    } catch (error) {
      this.handleApiError(error, "create todo");
    }
  }

  static async updateTodo(
    id: string,
    updates: UpdateTodoData
  ): Promise<UserTodo | null> {
    const isAuthenticated = await this.checkAuthentication();
    if (!isAuthenticated) {
      throw new Error("User must be authenticated to update todos");
    }

    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updates),
      });

      if (!response.ok) {
        if (response.status === 404) {
          return null; // Todo not found
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const dbUserTodo = await response.json();
      return this.convertDbUserTodoToUserTodo(dbUserTodo);
    } catch (error) {
      this.handleApiError(error, "update todo");
    }
  }

  static async deleteTodo(id: string): Promise<boolean> {
    const isAuthenticated = await this.checkAuthentication();
    if (!isAuthenticated) {
      throw new Error("User must be authenticated to delete todos");
    }

    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        if (response.status === 404) {
          return false; // Todo not found
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return true;
    } catch (error) {
      this.handleApiError(error, "delete todo");
    }
  }

  static async toggleComplete(id: string): Promise<UserTodo | null> {
    const isAuthenticated = await this.checkAuthentication();
    if (!isAuthenticated) {
      throw new Error("User must be authenticated to update todos");
    }

    try {
      const response = await fetch(`/api/todos/${id}/actions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action: "toggle_complete" }),
      });

      if (!response.ok) {
        if (response.status === 404) {
          return null; // Todo not found
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const dbUserTodo = await response.json();
      return this.convertDbUserTodoToUserTodo(dbUserTodo);
    } catch (error) {
      this.handleApiError(error, "toggle todo completion");
    }
  }

  static async markAsMissed(id: string): Promise<UserTodo | null> {
    const isAuthenticated = await this.checkAuthentication();
    if (!isAuthenticated) {
      throw new Error("User must be authenticated to update todos");
    }

    try {
      const response = await fetch(`/api/todos/${id}/actions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action: "mark_missed" }),
      });

      if (!response.ok) {
        if (response.status === 404) {
          return null; // Todo not found
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const dbUserTodo = await response.json();
      return this.convertDbUserTodoToUserTodo(dbUserTodo);
    } catch (error) {
      this.handleApiError(error, "mark todo as missed");
    }
  }

  static async archiveTodo(id: string): Promise<UserTodo | null> {
    const isAuthenticated = await this.checkAuthentication();
    if (!isAuthenticated) {
      throw new Error("User must be authenticated to update todos");
    }

    try {
      const response = await fetch(`/api/todos/${id}/actions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action: "archive" }),
      });

      if (!response.ok) {
        if (response.status === 404) {
          return null; // Todo not found
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const dbUserTodo = await response.json();
      return this.convertDbUserTodoToUserTodo(dbUserTodo);
    } catch (error) {
      this.handleApiError(error, "archive todo");
    }
  }

  static async unarchiveTodo(id: string): Promise<UserTodo | null> {
    const isAuthenticated = await this.checkAuthentication();
    if (!isAuthenticated) {
      throw new Error("User must be authenticated to update todos");
    }

    try {
      const response = await fetch(`/api/todos/${id}/actions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action: "unarchive" }),
      });

      if (!response.ok) {
        if (response.status === 404) {
          return null; // Todo not found
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const dbUserTodo = await response.json();
      return this.convertDbUserTodoToUserTodo(dbUserTodo);
    } catch (error) {
      this.handleApiError(error, "unarchive todo");
    }
  }

  static async getStats(): Promise<TodoStats> {
    const isAuthenticated = await this.checkAuthentication();
    if (!isAuthenticated) {
      throw new Error("User must be authenticated to fetch todo stats");
    }

    try {
      const response = await fetch("/api/todos/stats");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      this.handleApiError(error, "fetch todo stats");
    }
  }

  static async getSuggestedTodos(
    date?: Date,
    filter?: "today" | "upcoming"
  ): Promise<UserTodo[]> {
    const isAuthenticated = await this.checkAuthentication();
    if (!isAuthenticated) {
      throw new Error("User must be authenticated to fetch suggested todos");
    }

    try {
      const params = new URLSearchParams();
      if (date) {
        params.append("date", date.toISOString());
      }
      if (filter) {
        params.append("filter", filter);
      }

      const response = await fetch(`/api/todos/suggested?${params.toString()}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const suggestedUserTodos = await response.json();
      return suggestedUserTodos;
    } catch (error) {
      this.handleApiError(error, "fetch suggested todos");
    }
  }

  static async getSuggestedTodosForDate(date: Date): Promise<UserTodo[]> {
    return this.getSuggestedTodos(date, "today");
  }

  static async getUpcomingSuggestedTodos(): Promise<UserTodo[]> {
    return this.getSuggestedTodos(new Date(), "upcoming");
  }

  static async getCombinedTodos(
    filter: TodoFilter,
    prayerTimes?: PrayerTimes
  ): Promise<UserTodo[]> {
    const isAuthenticated = await this.checkAuthentication();
    if (!isAuthenticated) {
      throw new Error("User must be authenticated to fetch todos");
    }

    try {
      // Get user todos
      const userTodos = await this.getTodosByFilter(filter, prayerTimes);

      // Get suggested todos based on filter
      let suggestedTodos: UserTodo[] = [];
      if (filter !== "archived") {
        const today = new Date();
        suggestedTodos = await this.getSuggestedTodos(today, filter);
      }

      // Combine user todos with suggested todos
      const combinedTodos = [...suggestedTodos, ...userTodos];

      // Apply smart sorting for non-archived todos
      if (filter !== "archived") {
        const context = prayerTimes
          ? await getCurrentPrayerContextWithTimes(prayerTimes)
          : await getCurrentPrayerContext();
        return smartSortTodos(combinedTodos, context);
      }

      return combinedTodos;
    } catch (error) {
      this.handleApiError(error, "fetch combined todos");
    }
  }
}
