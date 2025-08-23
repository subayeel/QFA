import {
  Todo,
  CreateTodoData,
  TodoFilter,
  TodoStats,
} from "@/types/todos.types";
import {
  getTodaysSuggestedTodos,
  getUpcomingSuggestedTodos,
  SuggestedTodo,
} from "@/utils/suggestedTodos";
import {
  smartSortTodos,
  getCurrentPrayerContext,
  getCurrentPrayerContextWithTimes,
} from "@/utils/smartSorting";
import { PrayerTimes } from "@/utils/prayerTimes";

const TODO_STORAGE_KEY = "quranforall_todos";

export class TodoService {
  private static getTodosFromStorage(): Todo[] {
    try {
      const stored = localStorage.getItem(TODO_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Error reading todos from localStorage:", error);
      return [];
    }
  }

  private static saveTodosToStorage(todos: Todo[]): void {
    try {
      localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
      console.error("Error saving todos to localStorage:", error);
    }
  }

  static async getAllTodos(): Promise<Todo[]> {
    const todos = this.getTodosFromStorage();
    const context = await getCurrentPrayerContext();
    return smartSortTodos(todos, context);
  }

  static async getTodosByFilter(
    filter: TodoFilter,
    prayerTimes?: PrayerTimes
  ): Promise<Todo[]> {
    const todos = this.getTodosFromStorage();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

    let filteredTodos: Todo[];

    switch (filter) {
      case "today":
        filteredTodos = todos.filter((todo) => {
          const todoDate = new Date(todo.date);
          todoDate.setHours(0, 0, 0, 0);
          return todoDate.getTime() === today.getTime() && !todo.archived;
        });
        break;

      case "upcoming":
        filteredTodos = todos.filter((todo) => {
          const todoDate = new Date(todo.date);
          todoDate.setHours(0, 0, 0, 0);
          return (
            todoDate >= tomorrow &&
            todoDate <= dayAfterTomorrow &&
            !todo.archived
          );
        });
        break;

      case "archived":
        filteredTodos = todos.filter((todo) => todo.archived);
        break;

      default:
        filteredTodos = todos;
    }

    // Apply smart sorting for non-archived todos
    if (filter !== "archived") {
      const context = prayerTimes
        ? getCurrentPrayerContextWithTimes(prayerTimes)
        : await getCurrentPrayerContext();
      return smartSortTodos(filteredTodos, context);
    }

    return filteredTodos;
  }

  static createTodo(todoData: CreateTodoData): Todo {
    const todos = this.getTodosFromStorage();
    const newTodo: Todo = {
      id: `todo_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      ...todoData,
      completed: false,
      missed: false,
      archived: false,
      type: "custom",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    todos.push(newTodo);
    this.saveTodosToStorage(todos);
    return newTodo;
  }

  static updateTodo(id: string, updates: Partial<Todo>): Todo | null {
    const todos = this.getTodosFromStorage();
    const index = todos.findIndex((todo) => todo.id === id);

    if (index === -1) return null;

    todos[index] = {
      ...todos[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    this.saveTodosToStorage(todos);
    return todos[index];
  }

  static deleteTodo(id: string): boolean {
    const todos = this.getTodosFromStorage();
    const filteredTodos = todos.filter((todo) => todo.id !== id);

    if (filteredTodos.length === todos.length) return false;

    this.saveTodosToStorage(filteredTodos);
    return true;
  }

  static toggleComplete(id: string): Todo | null {
    const todos = this.getTodosFromStorage();
    const index = todos.findIndex((todo) => todo.id === id);

    if (index === -1) return null;

    todos[index] = {
      ...todos[index],
      completed: !todos[index].completed,
      missed: false, // Reset missed when completing
      updatedAt: new Date().toISOString(),
    };

    this.saveTodosToStorage(todos);
    return todos[index];
  }

  static markAsMissed(id: string): Todo | null {
    const todos = this.getTodosFromStorage();
    const index = todos.findIndex((todo) => todo.id === id);

    if (index === -1) return null;

    todos[index] = {
      ...todos[index],
      missed: true,
      completed: false,
      updatedAt: new Date().toISOString(),
    };

    this.saveTodosToStorage(todos);
    return todos[index];
  }

  static archiveTodo(id: string): Todo | null {
    const todos = this.getTodosFromStorage();
    const index = todos.findIndex((todo) => todo.id === id);

    if (index === -1) return null;

    todos[index] = {
      ...todos[index],
      archived: true,
      updatedAt: new Date().toISOString(),
    };

    this.saveTodosToStorage(todos);
    return todos[index];
  }

  static getStats(): TodoStats {
    const todos = this.getTodosFromStorage();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayTodos = todos.filter((todo) => {
      const todoDate = new Date(todo.date);
      todoDate.setHours(0, 0, 0, 0);
      return todoDate.getTime() === today.getTime() && !todo.archived;
    });

    return {
      total: todayTodos.length,
      completed: todayTodos.filter((todo) => todo.completed).length,
      missed: todayTodos.filter((todo) => todo.missed).length,
      pending: todayTodos.filter((todo) => !todo.completed && !todo.missed)
        .length,
    };
  }

  static async initializeSuggestedTodos(): Promise<void> {
    const todos = this.getTodosFromStorage();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Check if we already have today's suggested todos
    const hasTodaySuggested = todos.some((todo) => {
      const todoDate = new Date(todo.date);
      todoDate.setHours(0, 0, 0, 0);
      return (
        todoDate.getTime() === today.getTime() && todo.type === "suggested"
      );
    });

    if (!hasTodaySuggested) {
      const suggestedTodos = getTodaysSuggestedTodos();

      suggestedTodos.forEach((suggested) => {
        const newTodo: Todo = {
          id: `suggested_${suggested.id}_${Date.now()}`,
          title: suggested.title,
          description: suggested.description,
          time: suggested.time,
          date: today.toISOString(),
          completed: false,
          missed: false,
          archived: false,
          type: "suggested",
          category: suggested.category,
          priority: suggested.priority,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        todos.push(newTodo);
      });

      this.saveTodosToStorage(todos);
    }
  }

  static getUpcomingSuggestedTodos(): SuggestedTodo[] {
    return getUpcomingSuggestedTodos();
  }
}
