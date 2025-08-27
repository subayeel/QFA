import { UserTodo } from "@/types/todos.types";
import { timeToMinutes } from "./prayerTimes";

export interface SmartSortingContext {
  currentTime: Date;
  prayerTimes?: {
    fajr: string;
    dhuhr: string;
    asr: string;
    maghrib: string;
    isha: string;
  };
  currentPrayer?: string;
}

// Default prayer times (fallback if location is not available)
const DEFAULT_PRAYER_TIMES = {
  fajr: "05:30",
  dhuhr: "12:30",
  asr: "15:45",
  maghrib: "18:30",
  isha: "20:00",
};

// Get current time of day category
const getTimeOfDay = (
  currentTime: Date
): "morning" | "afternoon" | "evening" | "night" => {
  const hour = currentTime.getHours();

  if (hour >= 5 && hour < 12) return "morning";
  if (hour >= 12 && hour < 17) return "afternoon";
  if (hour >= 17 && hour < 21) return "evening";
  return "night";
};

// Calculate time priority for a todo based on current context
const calculateTimePriority = (
  userTodo: UserTodo,
  context: SmartSortingContext
): number => {
  const todo = userTodo.todo;
  const { currentTime, prayerTimes, currentPrayer } = context;
  const timeOfDay = getTimeOfDay(currentTime);
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const currentTimeInMinutes = currentHour * 60 + currentMinute;

  // Base priority starts with the todo's priority
  let priority =
    todo.priority === "high" ? 1000 : todo.priority === "medium" ? 500 : 100;

  // Prayer-specific prioritization with enhanced logic
  if (todo.category === "prayer") {
    let prayerTimeInMinutes = 0;

    // Use actual prayer times if available
    if (prayerTimes && todo.title) {
      const prayerTimeMap: { [key: string]: string } = {
        "Fajr Prayer": prayerTimes.fajr,
        "Dhuhr Prayer": prayerTimes.dhuhr,
        "Asr Prayer": prayerTimes.asr,
        "Maghrib Prayer": prayerTimes.maghrib,
        "Isha Prayer": prayerTimes.isha,
      };
      const actualTime = prayerTimeMap[todo.title];
      if (actualTime) {
        prayerTimeInMinutes = timeToMinutes(actualTime);
      } else if (todo.time) {
        prayerTimeInMinutes = timeToMinutes(todo.time);
      }
    } else if (todo.time) {
      prayerTimeInMinutes = timeToMinutes(todo.time);
    }

    if (prayerTimeInMinutes > 0) {
      const timeDiff = Math.abs(prayerTimeInMinutes - currentTimeInMinutes);

      // If it's currently prayer time (within 30 minutes), give highest priority
      if (timeDiff <= 30) {
        priority += 20000; // Increased priority for prayer time
      }
      // If prayer time is approaching (within 2 hours), give high priority
      else if (timeDiff <= 120) {
        priority += 10000;
      }

      // Specific prayer time prioritization - current prayer gets highest priority
      if (
        currentPrayer &&
        todo.title.toLowerCase().includes(currentPrayer.toLowerCase())
      ) {
        priority += 25000; // Highest priority for current prayer
      }
    }
  }

  // Enhanced time-based prioritization for different activities
  if (todo.category === "dhikr") {
    if (
      timeOfDay === "morning" &&
      todo.title.toLowerCase().includes("morning")
    ) {
      priority += 12000; // Morning dhikr during morning time
    } else if (
      timeOfDay === "evening" &&
      todo.title.toLowerCase().includes("evening")
    ) {
      priority += 12000; // Evening dhikr during evening time
    } else if (
      timeOfDay === "night" &&
      todo.title.toLowerCase().includes("evening")
    ) {
      priority += 8000; // Evening dhikr during night time (still relevant)
    }
  }

  if (todo.category === "quran") {
    // Night time prioritization for Surah Al-Mulk
    if (timeOfDay === "night" && todo.title.toLowerCase().includes("mulk")) {
      priority += 15000; // High priority for night recitation
    }
    // Morning prioritization for general Quran recitation
    else if (
      timeOfDay === "morning" &&
      !todo.title.toLowerCase().includes("mulk")
    ) {
      priority += 10000; // Good time for Quran recitation
    }
    // Afternoon/Evening for general recitation
    else if (
      (timeOfDay === "afternoon" || timeOfDay === "evening") &&
      !todo.title.toLowerCase().includes("mulk")
    ) {
      priority += 6000;
    }
  }

  // Enhanced time-specific prioritization
  if (todo.time) {
    const todoTimeInMinutes = timeToMinutes(todo.time);
    const timeDiff = Math.abs(todoTimeInMinutes - currentTimeInMinutes);

    // If it's the exact time or very close, give high priority
    if (timeDiff <= 15) {
      priority += 15000; // Very urgent
    }
    // If it's approaching the time, give medium priority
    else if (timeDiff <= 60) {
      priority += 8000; // Soon
    }
    // If it's within 2 hours, give some priority
    else if (timeDiff <= 120) {
      priority += 3000; // Approaching
    }
  }

  // Penalize completed and missed todos
  if (todo.completed) {
    priority -= 50000;
  }
  if (todo.missed) {
    priority -= 20000;
  }

  return priority;
};

// Smart sorting function
export const smartSortTodos = (
  userTodos: UserTodo[],
  context?: SmartSortingContext
): UserTodo[] => {
  const currentContext: SmartSortingContext = context || {
    currentTime: new Date(),
    prayerTimes: DEFAULT_PRAYER_TIMES,
  };

  // If no prayer times provided, try to get them
  if (!currentContext.prayerTimes) {
    try {
      // This would need to be called with actual location data
      // For now, we'll use default times
      currentContext.prayerTimes = DEFAULT_PRAYER_TIMES;
    } catch (error) {
      currentContext.prayerTimes = DEFAULT_PRAYER_TIMES;
    }
  }

  // Calculate time priority for each todo and update the todo definition
  const userTodosWithPriority = userTodos.map((userTodo) => ({
    ...userTodo,
    todo: {
      ...userTodo.todo,
      timePriority: calculateTimePriority(userTodo, currentContext),
    },
  }));

  // Sort by time priority (highest first), then by creation time
  return userTodosWithPriority.sort((a, b) => {
    const aPriority = a.todo.timePriority || 0;
    const bPriority = b.todo.timePriority || 0;

    if (aPriority !== bPriority) {
      return bPriority - aPriority;
    }
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });
};

// Get current prayer context for sorting
export const getCurrentPrayerContext =
  async (): Promise<SmartSortingContext> => {
    const currentTime = new Date();

    try {
      // Try to get user location and prayer times
      // This would need to be implemented with actual location data
      // For now, return with default prayer times
      return {
        currentTime,
        prayerTimes: DEFAULT_PRAYER_TIMES,
        currentPrayer: getCurrentPrayerFromTime(
          currentTime,
          DEFAULT_PRAYER_TIMES
        ),
      };
    } catch (error) {
      return {
        currentTime,
        prayerTimes: DEFAULT_PRAYER_TIMES,
        currentPrayer: getCurrentPrayerFromTime(
          currentTime,
          DEFAULT_PRAYER_TIMES
        ),
      };
    }
  };

// Enhanced version that accepts prayer times from the app
export const getCurrentPrayerContextWithTimes = (
  prayerTimes: any
): SmartSortingContext => {
  const currentTime = new Date();

  return {
    currentTime,
    prayerTimes: prayerTimes || DEFAULT_PRAYER_TIMES,
    currentPrayer: getCurrentPrayerFromTime(
      currentTime,
      prayerTimes || DEFAULT_PRAYER_TIMES
    ),
  };
};

// Helper function to determine current prayer from time
const getCurrentPrayerFromTime = (
  currentTime: Date,
  prayerTimes: any
): string => {
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const currentTimeInMinutes = currentHour * 60 + currentMinute;

  const prayers = [
    { name: "Fajr", time: timeToMinutes(prayerTimes.fajr) },
    { name: "Dhuhr", time: timeToMinutes(prayerTimes.dhuhr) },
    { name: "Asr", time: timeToMinutes(prayerTimes.asr) },
    { name: "Maghrib", time: timeToMinutes(prayerTimes.maghrib) },
    { name: "Isha", time: timeToMinutes(prayerTimes.isha) },
  ];

  // Find the current prayer period
  for (let i = 0; i < prayers.length; i++) {
    const nextPrayer = prayers[(i + 1) % prayers.length];
    const currentPrayer = prayers[i];

    if (
      currentTimeInMinutes >= currentPrayer.time &&
      currentTimeInMinutes < nextPrayer.time
    ) {
      return currentPrayer.name;
    }
  }

  // If it's after Isha, return Isha
  return "Isha";
};
