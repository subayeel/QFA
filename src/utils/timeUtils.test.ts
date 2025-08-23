// Simple test file to verify time-based filtering logic
// This can be run manually to test the functionality

import {
  timeToMinutes,
  getCurrentTimeInMinutes,
  isTimeExpired,
  getCurrentTimePeriod,
  shouldShowTodo,
  sortTodosByTime,
} from "./timeUtils";

// Mock prayer times for testing
const mockPrayerTimes = {
  fajr: "05:30",
  dhuhr: "12:30",
  asr: "15:45",
  maghrib: "18:30",
  isha: "20:00",
};

// Test todos
const testTodos = [
  {
    id: "1",
    title: "Fajr Prayer",
    category: "prayer",
    time: "05:30",
  },
  {
    id: "2",
    title: "Morning Dhikr",
    category: "dhikr",
    time: "06:00",
  },
  {
    id: "3",
    title: "Dhuhr Prayer",
    category: "prayer",
    time: "12:30",
  },
  {
    id: "4",
    title: "Evening Dhikr",
    category: "dhikr",
    time: "18:00",
  },
  {
    id: "5",
    title: "Study Quran",
    category: "quran",
    time: "14:00",
  },
];

// Test function
export function testTimeBasedFiltering() {
  console.log("=== Testing Time-Based Filtering ===");

  console.log("Current time in minutes:", getCurrentTimeInMinutes());
  console.log("Current time period:", getCurrentTimePeriod());

  console.log("\n=== Testing Individual Functions ===");

  // Test timeToMinutes
  console.log("timeToMinutes('14:30'):", timeToMinutes("14:30"));
  console.log("timeToMinutes('09:15'):", timeToMinutes("09:15"));

  // Test isTimeExpired
  console.log("isTimeExpired('05:30'):", isTimeExpired("05:30"));
  console.log("isTimeExpired('23:59'):", isTimeExpired("23:59"));

  console.log("\n=== Testing Todo Filtering ===");

  // Test shouldShowTodo for each todo
  testTodos.forEach((todo) => {
    const shouldShow = shouldShowTodo(todo, mockPrayerTimes);
    console.log(
      `${todo.title} (${todo.time}): ${shouldShow ? "SHOW" : "HIDE"}`
    );
  });

  console.log("\n=== Testing Prayer Time Filtering ===");

  // Test with current time simulation
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  console.log(
    `Current time: ${currentHour}:${currentMinute.toString().padStart(2, "0")}`
  );

  // Test prayer todos specifically
  const prayerTodos = testTodos.filter((todo) => todo.category === "prayer");
  prayerTodos.forEach((todo) => {
    const shouldShow = shouldShowTodo(todo, mockPrayerTimes);
    const prayerKey = todo.title
      .toLowerCase()
      .replace(" prayer", "") as keyof typeof mockPrayerTimes;
    const actualPrayerTime = mockPrayerTimes[prayerKey];
    console.log(
      `${todo.title} (API time: ${actualPrayerTime}): ${
        shouldShow ? "SHOW" : "HIDE"
      }`
    );
  });

  console.log("\n=== Testing Todo Sorting ===");

  // Test sorting
  const sortedTodos = sortTodosByTime([...testTodos]);
  console.log("Sorted todos by time:");
  sortedTodos.forEach((todo) => {
    console.log(`- ${todo.title}: ${todo.time}`);
  });

  console.log("\n=== Testing Filtered and Sorted Todos ===");

  // Test complete filtering and sorting
  const filteredTodos = testTodos.filter((todo) =>
    shouldShowTodo(todo, mockPrayerTimes)
  );
  const finalTodos = sortTodosByTime(filteredTodos, mockPrayerTimes);

  console.log("Final todos to display:");
  finalTodos.forEach((todo) => {
    console.log(`- ${todo.title}: ${todo.time}`);
  });
}

// Run test if this file is executed directly
if (typeof window !== "undefined") {
  // Browser environment - can be called from console
  (window as any).testTimeBasedFiltering = testTimeBasedFiltering;
}
