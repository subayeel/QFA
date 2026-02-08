// Utility functions for calendar reminders and Prophet practices

import importantDatesData from "@/data/important-dates-reminders.json";
import prophetPracticesData from "@/data/prophet-practices.json";

interface ImportantDate {
  hijriMonth: number;
  hijriDay: number;
  name: string;
  description: string;
  reminderMessage: string;
  importance: "high" | "medium" | "low";
}

interface ProphetPractice {
  hijriMonth: number;
  hijriDay: number;
  practice: string;
  source: string;
  actions: string[];
}

interface CalendarData {
  hijri: {
    month: {
      number: number;
    };
    day: string;
  };
  gregorian: {
    date: string;
  };
}

/**
 * Convert Gregorian date to Hijri date using calendar data
 */
function getHijriDateFromCalendarData(
  date: Date,
  calendarData: CalendarData[]
): { month: number; day: number } | null {
  const formattedDate = formatDateForAPI(date);
  const dayData = calendarData.find(
    (day) => day.gregorian.date === formattedDate
  );

  if (dayData) {
    return {
      month: dayData.hijri.month.number,
      day: Number.parseInt(dayData.hijri.day, 10),
    };
  }

  return null;
}

/**
 * Format date for API comparison (DD-MM-YYYY)
 */
function formatDateForAPI(date: Date): string {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

/**
 * Get reminders for dates 2 days in advance
 * This function checks if there are important dates 2 Hijri days from the given date
 */
export function getRemindersForDate(
  date: Date,
  calendarData: CalendarData[]
): ImportantDate[] {
  const reminders: ImportantDate[] = [];
  
  // Calculate the date 2 days from now
  const twoDaysLater = new Date(date);
  twoDaysLater.setDate(date.getDate() + 2);
  
  // Get the Hijri date for 2 days later
  const hijriDateTwoDaysLater = getHijriDateFromCalendarData(
    twoDaysLater,
    calendarData
  );

  if (!hijriDateTwoDaysLater) {
    return reminders;
  }

  // Check each important date to see if it matches the date 2 days from now
  importantDatesData.importantDates.forEach((importantDate) => {
    if (
      importantDate.hijriMonth === hijriDateTwoDaysLater.month &&
      importantDate.hijriDay === hijriDateTwoDaysLater.day
    ) {
      reminders.push(importantDate);
    }
  });

  return reminders;
}

/**
 * Get Prophet practices for a specific date
 */
export function getProphetPracticesForDate(
  date: Date,
  calendarData: CalendarData[]
): ProphetPractice[] {
  const practices: ProphetPractice[] = [];
  const hijriDate = getHijriDateFromCalendarData(date, calendarData);

  if (!hijriDate) {
    return practices;
  }

  // Find practices matching the Hijri date
  prophetPracticesData.prophetPractices.forEach((practice) => {
    if (
      practice.hijriMonth === hijriDate.month &&
      practice.hijriDay === hijriDate.day
    ) {
      practices.push(practice);
    }
  });

  return practices;
}


/**
 * Check if a date has upcoming reminders (2 days in advance)
 */
export function hasUpcomingReminders(
  date: Date,
  calendarData: CalendarData[]
): boolean {
  return getRemindersForDate(date, calendarData).length > 0;
}

/**
 * Check if a date has Prophet practices
 */
export function hasProphetPractices(
  date: Date,
  calendarData: CalendarData[]
): boolean {
  return getProphetPracticesForDate(date, calendarData).length > 0;
}
