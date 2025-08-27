/**
 * Converts 24-hour format time to 12-hour format
 * @param time - Time in 24-hour format (HH:MM)
 * @returns Time in 12-hour format (H:MM AM/PM)
 */
export const formatTime12Hour = (time: string): string => {
  if (!time) return "";

  const [hours, minutes] = time.split(":");
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;

  return `${displayHour}:${minutes} ${ampm}`;
};

/**
 * Converts 12-hour format time to 24-hour format
 * @param time - Time in 12-hour format (H:MM AM/PM)
 * @returns Time in 24-hour format (HH:MM)
 */
export const formatTime24Hour = (time: string): string => {
  if (!time) return "";

  // Remove AM/PM and get the time part
  const timeMatch = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!timeMatch) return time;

  let [_, hours, minutes, period] = timeMatch;
  let hour = parseInt(hours);

  if (period.toUpperCase() === "PM" && hour !== 12) {
    hour += 12;
  } else if (period.toUpperCase() === "AM" && hour === 12) {
    hour = 0;
  }

  return `${hour.toString().padStart(2, "0")}:${minutes}`;
};

/**
 * Formats a time string for display in 12-hour format
 * @param time - Time string (can be 24-hour or 12-hour format)
 * @returns Formatted time string
 */
export const formatTimeForDisplay = (time?: string): string => {
  if (!time) return "";

  // If already in 12-hour format (contains AM/PM), return as is
  if (time.match(/AM|PM/i)) {
    return time;
  }

  // Convert from 24-hour to 12-hour format
  return formatTime12Hour(time);
};

/**
 * Converts time string to minutes for comparison
 * @param time - Time string in HH:MM format
 * @returns Minutes since midnight
 */
export const timeToMinutes = (time: string): number => {
  if (!time) return 0;
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

/**
 * Gets current time in minutes since midnight
 * @returns Current time in minutes
 */
export const getCurrentTimeInMinutes = (): number => {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
};

/**
 * Checks if a time has expired (passed for today)
 * @param time - Time string in HH:MM format
 * @returns True if time has passed for today
 */
export const isTimeExpired = (time: string): boolean => {
  if (!time) return false;
  const currentMinutes = getCurrentTimeInMinutes();
  const timeMinutes = timeToMinutes(time);
  return currentMinutes > timeMinutes;
};

/**
 * Gets the current time period (morning, afternoon, evening, night)
 * @returns Current time period
 */
export const getCurrentTimePeriod = ():
  | "morning"
  | "afternoon"
  | "evening"
  | "night" => {
  const currentMinutes = getCurrentTimeInMinutes();

  if (currentMinutes >= 5 * 60 && currentMinutes < 12 * 60) {
    return "morning"; // 5:00 AM to 11:59 AM
  } else if (currentMinutes >= 12 * 60 && currentMinutes < 17 * 60) {
    return "afternoon"; // 12:00 PM to 4:59 PM
  } else if (currentMinutes >= 17 * 60 && currentMinutes < 21 * 60) {
    return "evening"; // 5:00 PM to 8:59 PM
  } else {
    return "night"; // 9:00 PM to 4:59 AM
  }
};

/**
 * Checks if a todo should be shown based on current time and category
 * @param todo - Todo object
 * @param prayerTimes - Current prayer times
 * @returns True if todo should be shown
 */
export const shouldShowTodo = (userTodo: any, prayerTimes?: any): boolean => {
  const todo = userTodo.todo;

  // If no time specified, always show
  if (!todo.time) return true;

  const currentPeriod = getCurrentTimePeriod();

  // For prayer todos, check against actual prayer times
  if (todo.category === "prayer" && prayerTimes) {
    const prayerTimeMap: { [key: string]: string } = {
      "Fajr Prayer": prayerTimes.fajr,
      "Dhuhr Prayer": prayerTimes.dhuhr,
      "Asr Prayer": prayerTimes.asr,
      "Maghrib Prayer": prayerTimes.maghrib,
      "Isha Prayer": prayerTimes.isha,
    };

    const actualPrayerTime = prayerTimeMap[todo.title];
    if (actualPrayerTime) {
      // Use the actual prayer time from API, not the hardcoded time
      return !isTimeExpired(actualPrayerTime);
    }
  }

  // For dhikr todos, check time periods
  if (todo.category === "dhikr") {
    if (todo.title.includes("Morning") && currentPeriod !== "morning") {
      return false;
    }
    if (todo.title.includes("Evening") && currentPeriod !== "evening") {
      return false;
    }
  }

  // For other time-based todos, check if expired using their own time
  return !isTimeExpired(todo.time);
};

/**
 * Sorts todos by time (earliest first)
 * @param todos - Array of todos
 * @param prayerTimes - Current prayer times for accurate sorting
 * @returns Sorted array of todos
 */
export const sortTodosByTime = (todos: any[], prayerTimes?: any): any[] => {
  return todos.sort((a, b) => {
    // If no time, put at the end
    if (!a.time && !b.time) return 0;
    if (!a.time) return 1;
    if (!b.time) return -1;

    // For prayer todos, use actual prayer times for sorting
    let timeA = timeToMinutes(a.time);
    let timeB = timeToMinutes(b.time);

    if (a.category === "prayer" && prayerTimes) {
      const prayerTimeMap: { [key: string]: string } = {
        "Fajr Prayer": prayerTimes.fajr,
        "Dhuhr Prayer": prayerTimes.dhuhr,
        "Asr Prayer": prayerTimes.asr,
        "Maghrib Prayer": prayerTimes.maghrib,
        "Isha Prayer": prayerTimes.isha,
      };
      const actualTimeA = prayerTimeMap[a.title];
      if (actualTimeA) {
        timeA = timeToMinutes(actualTimeA);
      }
    }

    if (b.category === "prayer" && prayerTimes) {
      const prayerTimeMap: { [key: string]: string } = {
        "Fajr Prayer": prayerTimes.fajr,
        "Dhuhr Prayer": prayerTimes.dhuhr,
        "Asr Prayer": prayerTimes.asr,
        "Maghrib Prayer": prayerTimes.maghrib,
        "Isha Prayer": prayerTimes.isha,
      };
      const actualTimeB = prayerTimeMap[b.title];
      if (actualTimeB) {
        timeB = timeToMinutes(actualTimeB);
      }
    }

    return timeA - timeB;
  });
};
