"use client";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Calendar as CalendarIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  hasSpecialEvents,
  getSpecialEventsForDate,
} from "@/utils/hijriToGregorian";
import {
  getRemindersForDate,
  getProphetPracticesForDate,
} from "@/utils/calendarReminders";

// Types for calendar data
interface HijriDate {
  date: string;
  format: string;
  day: string;
  weekday: {
    en: string;
    ar: string;
  };
  month: {
    number: number;
    en: string;
    ar: string;
    days: number;
  };
  year: string;
  designation: {
    abbreviated: string;
    expanded: string;
  };
  holidays: string[];
  adjustedHolidays: string[];
  method: string;
}

interface GregorianDate {
  date: string;
  format: string;
  day: string;
  weekday: {
    en: string;
  };
  month: {
    number: number;
    en: string;
  };
  year: string;
  designation: {
    abbreviated: string;
    expanded: string;
  };
  lunarSighting: boolean;
}

interface CalendarData {
  hijri: HijriDate;
  gregorian: GregorianDate;
}

interface CalendarResponse {
  code: number;
  status: string;
  data: CalendarData[];
}

// Custom Calendar Component
interface CustomCalendarProps {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
  currentMonth: Date;
  onMonthChange: (date: Date) => void;
}

function CustomCalendar({
  selectedDate,
  onDateSelect,
  currentMonth,
  onMonthChange,
}: CustomCalendarProps) {
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get calendar days for current month
  const getCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(firstDay.getDate() - firstDay.getDay());

    const days = [];
    const currentDate = new Date(startDate);

    // Generate 6 weeks of dates
    for (let week = 0; week < 6; week++) {
      const weekDays = [];
      for (let day = 0; day < 7; day++) {
        weekDays.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }
      days.push(weekDays);
    }

    return days;
  };

  const calendarDays = getCalendarDays();

  // Check if date has special events using the utility function
  const hasSpecialEventsForDate = (date: Date) => {
    return hasSpecialEvents(date);
  };

  // Check if date is today
  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  // Check if date is selected
  const isSelected = (date: Date) => {
    return date.toDateString() === selectedDate.toDateString();
  };

  // Check if date is in current month
  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentMonth.getMonth();
  };

  // Check if date is in current week
  const isInCurrentWeek = (date: Date) => {
    const selectedDayOfWeek = selectedDate.getDay();
    const weekStart = new Date(selectedDate);
    weekStart.setDate(selectedDate.getDate() - selectedDayOfWeek);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 4); // 5 days (Sunday to Thursday)

    return date >= weekStart && date <= weekEnd;
  };

  const navigateMonth = (direction: "prev" | "next") => {
    const newMonth = new Date(currentMonth);
    if (direction === "prev") {
      newMonth.setMonth(newMonth.getMonth() - 1);
    } else {
      newMonth.setMonth(newMonth.getMonth() + 1);
    }
    onMonthChange(newMonth);
  };

  return (
    <div className="w-full">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigateMonth("prev")}
          className="text-black hover:bg-black-700 p-2 md:p-3"
        >
          <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
        </Button>

        <h3 className="text-black font-semibold text-lg md:text-xl lg:text-2xl">
          {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h3>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigateMonth("next")}
          className="text-black hover:bg-black-700 p-2 md:p-3"
        >
          <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
        </Button>
      </div>

      {/* Week Days Header */}
      <div className="grid grid-cols-7 gap-1 mb-2 md:mb-4">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center text-black-300 text-xs md:text-sm font-medium py-2 md:py-3"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 md:gap-2">
        {calendarDays.map((week, weekIndex) =>
          week.map((date, dayIndex) => {
            const isCurrentMonthDay = isCurrentMonth(date);
            const isTodayDate = isToday(date);
            const isSelectedDate = isSelected(date);
            const hasEvents = hasSpecialEventsForDate(date);
            const isInWeek = isInCurrentWeek(date);

            return (
              <button
                key={`${weekIndex}-${dayIndex}`}
                onClick={() => onDateSelect(date)}
                className={cn(
                  "relative h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-lg text-sm md:text-base font-medium transition-all duration-200 flex items-center justify-center",
                  !isCurrentMonthDay && "text-black-500 opacity-50",
                  isCurrentMonthDay && "text-black",
                  isTodayDate &&
                    "bg-black-500 text-black ring-2 ring-black-300",
                  isSelectedDate && "bg-black-600 text-black",
                  isInWeek &&
                    !isTodayDate &&
                    !isSelectedDate &&
                    "bg-black-800/30",
                  hasEvents && "ring-1 ring-yellow-400",
                  "hover:bg-black-700 hover:text-black"
                )}
              >
                {date.getDate()}
                {hasEvents && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-yellow-400 rounded-full"></div>
                )}
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}

function CalendarLayout() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [calendarData, setCalendarData] = useState<CalendarData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Function to navigate weeks
  const navigateWeek = (direction: "prev" | "next") => {
    const newDate = new Date(selectedDate);
    if (direction === "prev") {
      newDate.setDate(selectedDate.getDate() - 7);
    } else {
      newDate.setDate(selectedDate.getDate() + 7);
    }
    setSelectedDate(newDate);
  };

  // Get current date info
  const currentDate = new Date();
  const currentMonthName = currentDate.toLocaleDateString("en-US", {
    month: "long",
  });
  const currentYear = currentDate.getFullYear();

  // Format date for API comparison
  const formatDateForAPI = (date: Date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Get Islamic date from calendar data
  const getIslamicDate = () => {
    const today = calendarData.find(
      (day) => day.gregorian.date === formatDateForAPI(currentDate)
    );
    if (today) {
      return {
        month: today.hijri.month.en,
        year: today.hijri.year,
      };
    }
    return { month: "Loading...", year: "..." };
  };

  const islamicDate = getIslamicDate();

  // Fetch calendar data for current month
  useEffect(() => {
    const fetchCalendarData = async () => {
      setLoading(true);
      setError(null);
      try {
        const month = currentMonth.getMonth() + 1;
        const year = currentMonth.getFullYear();
        const response = await fetch(
          `https://api.aladhan.com/v1/gToHCalendar/${month}/${year}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch calendar data");
        }
        const data: CalendarResponse = await response.json();
        setCalendarData(data.data);
      } catch (error) {
        console.error("Error fetching calendar data:", error);
        setError("Failed to load calendar data");
      } finally {
        setLoading(false);
      }
    };

    fetchCalendarData();
  }, [currentMonth]);

  // Get special days for selected date using the utility function
  const getSpecialDaysForDate = (date: Date) => {
    return getSpecialEventsForDate(date);
  };

  // Get current week dates (5 days of the week containing selected date)
  const getCurrentWeekDates = () => {
    const dates = [];
    const selectedDayOfWeek = selectedDate.getDay(); // 0 = Sunday, 1 = Monday, etc.

    // Find the start of the week (Sunday)
    const weekStart = new Date(selectedDate);
    weekStart.setDate(selectedDate.getDate() - selectedDayOfWeek);

    // Generate 5 days starting from Sunday
    for (let i = 0; i < 5; i++) {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const weekDates = getCurrentWeekDates();

  // Get Islamic date for selected date
  const getSelectedDateIslamic = () => {
    const selected = calendarData.find(
      (day) => day.gregorian.date === formatDateForAPI(selectedDate)
    );
    if (selected) {
      return {
        day: selected.hijri.day,
        month: selected.hijri.month.en,
        year: selected.hijri.year,
      };
    }
    return null;
  };

  const selectedIslamicDate = getSelectedDateIslamic();

  if (error) {
    return (
      <div className="min-h-screen p-4 md:p-8 flex items-center justify-center">
        <Card className="max-w-md md:max-w-lg">
          <CardContent className="p-6 md:p-8 text-center">
            <CalendarIcon className="h-12 w-12 md:h-16 md:w-16 text-black-400 mx-auto mb-4" />
            <h3 className="text-black font-semibold mb-2 md:text-lg">
              Error Loading Calendar
            </h3>
            <p className="text-black-300 mb-4 md:text-base">{error}</p>
            <Button
              onClick={() => window.location.reload()}
              className="bg-black-600 hover:bg-black-700"
            >
              Try Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-6 md:mb-8 lg:mb-12">
          <div className="flex justify-between items-start mb-4 md:mb-6">
            <div>
              <h1 className="text-black text-xl md:text-2xl lg:text-3xl font-bold leading-none tracking-wide">
                {islamicDate.month}, {islamicDate.year}H
              </h1>
              <p className="text-black text-sm md:text-base leading-none tracking-wide">
                {currentMonthName}.{currentYear}
              </p>
            </div>
            <Button
              variant="outline"
              className="bg-secondary text-black-900 border-yellow-500 hover:bg-yellow-400 rounded-full px-4 md:px-6 py-2 md:py-3"
            >
              {currentMonthName}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Custom Gregorian Calendar */}
          <Card className="bg-white shadow-none md:shadow-lg">
            <CardContent className="p-4 md:p-6 lg:p-8">
              {loading ? (
                <div className="flex items-center justify-center h-64 md:h-80">
                  <div className="animate-spin rounded-full h-8 w-8 md:h-12 md:w-12 border-b-2 border-black-400"></div>
                </div>
              ) : (
                <CustomCalendar
                  selectedDate={selectedDate}
                  onDateSelect={setSelectedDate}
                  currentMonth={currentMonth}
                  onMonthChange={setCurrentMonth}
                />
              )}
            </CardContent>
          </Card>
        </div>

        {/* Detail Reminder Section */}
        <div className="mb-6 md:mb-8">
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <h2 className="text-black text-xl md:text-2xl font-medium tracking-normal">
              Detail Reminder
            </h2>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-black hover:bg-black-700 p-2 md:p-3"
                onClick={() => navigateWeek("prev")}
              >
                <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-black hover:bg-black-700 p-2 md:p-3"
                onClick={() => navigateWeek("next")}
              >
                <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </div>
          </div>

          {/* Day Selector */}
          <div className="flex space-x-2 mb-4 md:mb-6 overflow-x-auto md:overflow-visible">
            {weekDates.map((date, index) => (
              <Button
                key={index}
                variant={
                  selectedDate.toDateString() === date.toDateString()
                    ? "default"
                    : "outline"
                }
                className={cn(
                  "rounded-lg w-full h-12 md:h-16 lg:h-20 flex-shrink-0 md:flex-shrink",
                  selectedDate.toDateString() === date.toDateString()
                    ? "bg-secondary text-black"
                    : "bg-black-800/50 text-black-300 border-black-600"
                )}
                onClick={() => setSelectedDate(date)}
              >
                <div className="text-center">
                  <div className="text-xs md:text-sm font-medium">
                    {date
                      .toLocaleDateString("en-US", { weekday: "short" })
                      .toUpperCase()}
                  </div>
                  <div
                    className={cn(
                      "text-sm md:text-lg lg:text-xl font-bold text-black"
                    )}
                  >
                    {date.getDate()}
                  </div>
                </div>
              </Button>
            ))}
          </div>

          {/* Selected Date Info */}
          {selectedIslamicDate && (
            <div className="text-center mb-4 md:mb-6">
              <p className="text-black font-medium text-base md:text-lg lg:text-xl">
                {selectedIslamicDate.day} {selectedIslamicDate.month},{" "}
                {selectedIslamicDate.year}H (
                <span className="text-black-300 text-sm md:text-base tracking-wide ml-2">
                  {selectedDate.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                )
              </p>
            </div>
          )}

          {/* 2-Day Advance Reminders */}
          {!loading &&
            calendarData.length > 0 &&
            getRemindersForDate(selectedDate, calendarData).length > 0 && (
            <div className="mb-6 md:mb-8">
              <h3 className="text-black text-lg md:text-xl font-semibold mb-4">
                ⏰ Upcoming Reminders (2 Days Ahead)
              </h3>
              <div className="space-y-3 md:space-y-4">
                {getRemindersForDate(selectedDate, calendarData).map(
                  (reminder, index) => (
                    <Card
                      key={index}
                      className="bg-yellow-50 border-yellow-200 border-2"
                    >
                      <CardContent className="p-4 md:p-6">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-black font-semibold text-base md:text-lg">
                            {reminder.name}
                          </h4>
                          <Badge
                            variant={
                              reminder.importance === "high"
                                ? "default"
                                : "secondary"
                            }
                            className={
                              reminder.importance === "high"
                                ? "bg-yellow-500 text-black"
                                : "bg-yellow-200 text-black"
                            }
                          >
                            {reminder.importance === "high"
                              ? "High Priority"
                              : "Medium Priority"}
                          </Badge>
                        </div>
                        <p className="text-black-700 text-sm md:text-base mb-2">
                          {reminder.reminderMessage}
                        </p>
                        <p className="text-black-600 text-xs md:text-sm">
                          {reminder.description}
                        </p>
                      </CardContent>
                    </Card>
                  )
                )}
              </div>
            </div>
          )}

          {/* Prophet Practices Section */}
          {!loading &&
            calendarData.length > 0 &&
            getProphetPracticesForDate(selectedDate, calendarData).length >
              0 && (
            <div className="mb-6 md:mb-8">
              <h3 className="text-black text-lg md:text-xl font-semibold mb-4">
                📿 Prophet's (PBUH) Practice on This Day
              </h3>
              <div className="space-y-3 md:space-y-4">
                {getProphetPracticesForDate(
                  selectedDate,
                  calendarData
                ).map((practice, index) => (
                  <Card
                    key={index}
                    className="bg-green-50 border-green-200 border-2"
                  >
                    <CardContent className="p-4 md:p-6">
                      <p className="text-black-800 text-sm md:text-base mb-4 leading-relaxed">
                        {practice.practice}
                      </p>
                      <div className="mb-3">
                        <p className="text-black-600 text-xs md:text-sm font-medium mb-2">
                          Recommended Actions:
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                          {practice.actions.map((action, actionIndex) => (
                            <li
                              key={actionIndex}
                              className="text-black-700 text-xs md:text-sm"
                            >
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="text-black-500 text-xs italic mt-3">
                        Source: {practice.source}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Special Days List */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-black text-lg md:text-xl font-semibold mb-4">
              📅 Special Events
            </h3>
            {getSpecialDaysForDate(selectedDate).map((specialDay, index) => (
              <Card key={index} className="bg-white border-black-200">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 flex items-center justify-between flex-col md:flex-row md:space-x-4">
                      <h4 className="text-black font-medium mb-1 text-xl md:text-2xl lg:text-3xl">
                        {specialDay.name}
                      </h4>
                      <div className="flex items-center space-x-2 mt-2 md:mt-0">
                        <Badge
                          variant="secondary"
                          className="bg-black-600 text-black text-xs md:text-sm"
                        >
                          Special Day
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-black-400 text-black-300 text-xs md:text-sm"
                        >
                          Islamic Calendar
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {getSpecialDaysForDate(selectedDate).length === 0 &&
              (!loading && calendarData.length > 0
                ? getRemindersForDate(selectedDate, calendarData).length ===
                    0 &&
                  getProphetPracticesForDate(selectedDate, calendarData)
                    .length === 0
                : true) && (
                <Card className="bg-black-800/50 border-black-700">
                  <CardContent className="p-4 md:p-6 text-center">
                    <CalendarIcon className="h-8 w-8 md:h-12 md:w-12 text-black-400 mx-auto mb-2 md:mb-4" />
                    <p className="text-black-300 text-sm md:text-base">
                      No special events for this day
                    </p>
                  </CardContent>
                </Card>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarLayout;
