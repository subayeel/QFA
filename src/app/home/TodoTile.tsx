/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { UserTodo } from "@/types/todos.types";
import { TodoService } from "@/services/todoService";
import UpdateTodoDrawer from "./UpdateTodoDrawer";
import {
  Check,
  MoreVertical,
  Clock,
  Archive,
  Edit,
  CheckCircle,
  XCircle,
  Trash,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import {
  formatTimeForDisplay,
  getCurrentTimeInMinutes,
  timeToMinutes,
} from "@/utils/timeUtils";

interface TodoTileProps {
  todo: UserTodo;
  onUpdate: (todo: UserTodo) => void;
  onDelete: (id: string) => void;
  onTodoUpdated: () => void;
  prayerTimes?: any;
}

function TodoTile({
  todo,
  onUpdate,
  onDelete,
  onTodoUpdated,
  prayerTimes,
}: TodoTileProps) {
  const tileRef = useRef<HTMLDivElement>(null);

  const handleToggleComplete = async () => {
    try {
      const updatedTodo = await TodoService.toggleComplete(todo.id);
      if (updatedTodo) {
        onUpdate(updatedTodo);
      }
    } catch (error) {
      console.error("Error toggling todo completion:", error);
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Failed to update todo. Please try again.");
      }
    }
  };

  const handleMarkAsMissed = async () => {
    try {
      const updatedTodo = await TodoService.markAsMissed(todo.id);
      if (updatedTodo) {
        onUpdate(updatedTodo);
      }
    } catch (error) {
      console.error("Error marking todo as missed:", error);
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Failed to update todo. Please try again.");
      }
    }
  };

  const handleArchive = async () => {
    try {
      const updatedTodo = await TodoService.archiveTodo(todo.id);
      if (updatedTodo) {
        onUpdate(updatedTodo);
      }
    } catch (error) {
      console.error("Error archiving todo:", error);
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Failed to archive todo. Please try again.");
      }
    }
  };

  const handleDelete = async () => {
    try {
      const success = await TodoService.deleteTodo(todo.id);
      if (success) {
        onDelete(todo.id);
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Failed to delete todo. Please try again.");
      }
    }
  };

  const getDisplayTime = (userTodo: UserTodo) => {
    const todo = userTodo.todo;
    // For prayer todos, use actual prayer times
    if (todo.category === "prayer" && prayerTimes) {
      const prayerTimeMap: { [key: string]: string } = {
        "Fajr Prayer": prayerTimes.fajr,
        "Dhuhr Prayer": prayerTimes.dhuhr,
        "Asr Prayer": prayerTimes.asr,
        "Maghrib Prayer": prayerTimes.maghrib,
        "Isha Prayer": prayerTimes.isha,
      };
      const actualTime = prayerTimeMap[todo.title];
      if (actualTime) {
        return formatTimeForDisplay(actualTime);
      }
    }
    // For other todos, use their own time
    return formatTimeForDisplay(todo.time);
  };

  const getTimeStatus = (userTodo: UserTodo) => {
    const todo = userTodo.todo;
    let timeToCheck = todo.time;

    // For prayer todos, use actual prayer times
    if (todo.category === "prayer" && prayerTimes) {
      const prayerTimeMap: { [key: string]: string } = {
        "Fajr Prayer": prayerTimes.fajr,
        "Dhuhr Prayer": prayerTimes.dhuhr,
        "Asr Prayer": prayerTimes.asr,
        "Maghrib Prayer": prayerTimes.maghrib,
        "Isha Prayer": prayerTimes.isha,
      };
      const actualTime = prayerTimeMap[todo.title];
      if (actualTime) {
        timeToCheck = actualTime;
      }
    }

    if (!timeToCheck) return null;

    const currentMinutes = getCurrentTimeInMinutes();
    const timeMinutes = timeToMinutes(timeToCheck);
    const timeDiff = timeMinutes - currentMinutes;

    if (timeDiff <= 0) return "expired";
    if (timeDiff <= 30) return "urgent"; // Within 30 minutes
    if (timeDiff <= 60) return "soon"; // Within 1 hour
    return "normal";
  };

  const getTimeRemaining = (userTodo: UserTodo) => {
    const todo = userTodo.todo;
    let timeToCheck = todo.time;

    // For prayer todos, use actual prayer times
    if (todo.category === "prayer" && prayerTimes) {
      const prayerTimeMap: { [key: string]: string } = {
        "Fajr Prayer": prayerTimes.fajr,
        "Dhuhr Prayer": prayerTimes.dhuhr,
        "Asr Prayer": prayerTimes.asr,
        "Maghrib Prayer": prayerTimes.maghrib,
        "Isha Prayer": prayerTimes.isha,
      };
      const actualTime = prayerTimeMap[todo.title];
      if (actualTime) {
        timeToCheck = actualTime;
      }
    }

    if (!timeToCheck) return null;

    const currentMinutes = getCurrentTimeInMinutes();
    const timeMinutes = timeToMinutes(timeToCheck);
    const timeDiff = timeMinutes - currentMinutes;

    if (timeDiff <= 0) return null;

    const hours = Math.floor(timeDiff / 60);
    const minutes = timeDiff % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  const getCategoryIcon = (category?: string) => {
    switch (category) {
      case "prayer":
        return "🕌";
      case "quran":
        return "📖";
      case "dhikr":
        return "📿";
      case "charity":
        return "🤲";
      case "learning":
        return "📚";
      default:
        return "📝";
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Todo Tile */}
      <div
        ref={tileRef}
        className={cn(
          "relative bg-white border rounded-2xl p-4 transition-transform duration-200 ease-out",

          todo.completed && "opacity-60",
          todo.missed && "opacity-40 bg-red-50"
        )}
      >
        <div className="flex items-start gap-3">
          {/* Checkbox */}
          <button
            onClick={handleToggleComplete}
            className={cn(
              "flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors",
              todo.completed
                ? "bg-green-500 border-green-500"
                : "border-gray-300 hover:border-green-500"
            )}
          >
            {todo.completed && <Check className="w-3 h-3 text-white" />}
          </button>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <h3
                  className={cn(
                    "text-sm font-medium text-gray-900 truncate",
                    todo.completed && "line-through",
                    todo.missed && "text-red-600"
                  )}
                >
                  {getCategoryIcon(todo.todo.category)} {todo.todo.title}
                </h3>
                {todo.todo.description && (
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {todo.todo.description}
                  </p>
                )}
              </div>

              {/* Time */}
              {todo.todo.time && (
                <div
                  className={cn(
                    "flex items-center gap-1 text-xs flex-shrink-0",
                    getTimeStatus(todo) === "expired" && "text-red-500",
                    getTimeStatus(todo) === "urgent" && "text-orange-500",
                    getTimeStatus(todo) === "soon" && "text-yellow-600",
                    getTimeStatus(todo) === "normal" && "text-gray-500"
                  )}
                >
                  <Clock size={12} />
                  <span>{getDisplayTime(todo)}</span>
                  {getTimeStatus(todo) === "urgent" && (
                    <span className="ml-1 text-xs">⚡</span>
                  )}
                  {getTimeStatus(todo) === "urgent" &&
                    getTimeRemaining(todo) && (
                      <span className="ml-1 text-xs font-medium">
                        ({getTimeRemaining(todo)})
                      </span>
                    )}
                </div>
              )}
            </div>
          </div>

          {/* Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex-shrink-0 p-1 hover:bg-gray-100 rounded">
                <MoreVertical size={16} className="text-gray-500" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {todo.todo.type !== "suggested" && (
                <DropdownMenuItem asChild>
                  <UpdateTodoDrawer todo={todo} onTodoUpdated={onTodoUpdated} />
                </DropdownMenuItem>
              )}
              <DropdownMenuItem onClick={handleArchive}>
                <Archive className="mr-2 h-4 w-4" />
                Archive
              </DropdownMenuItem>

              <DropdownMenuItem onClick={handleToggleComplete}>
                <CheckCircle className="mr-2 h-4 w-4" />
                {todo.completed ? "Mark as Incomplete" : "Mark as Completed"}
              </DropdownMenuItem>

              {!todo.completed && (
                <DropdownMenuItem onClick={handleMarkAsMissed}>
                  <XCircle className="mr-2 h-4 w-4" />
                  Mark as Missed
                </DropdownMenuItem>
              )}

              <DropdownMenuItem onClick={handleDelete} className="text-red-600">
                <Trash className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default TodoTile;
