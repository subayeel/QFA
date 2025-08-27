"use client";
/* eslint-disable react/no-unescaped-entities */
import { Card } from "@/components/ui/card";
import {
  Bell,
  ChevronDown,
  ChevronRight,
  Clock,
  Download,
  MapPin,
} from "lucide-react";

import { useState, useEffect, useCallback } from "react";
import { UserTodo, TodoFilter } from "@/types/todos.types";
import { TodoService } from "@/services/todoService";
import TodoTile from "./TodoTile";
import CreateTodoDrawer from "./CreateTodoDrawer";
import { cn } from "@/lib/utils";
import {
  getUserLocation,
  calculatePrayerTimes,
  getCurrentPrayerInfo,
  getIslamicDate,
  timeToMinutes,
  PrayerTimes,
  LocationData,
  CurrentPrayerInfo,
} from "@/utils/prayerTimes";
import { shouldShowTodo } from "@/utils/timeUtils";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { SignOutButton } from "@/app/components/SignOutButton";
import Image from "next/image";

function Home() {
  const [todos, setTodos] = useState<UserTodo[]>([]);
  const [currentFilter, setCurrentFilter] = useState<TodoFilter>("today");
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | undefined>();
  const [location, setLocation] = useState<LocationData | undefined>();
  const [currentPrayerInfo, setCurrentPrayerInfo] =
    useState<CurrentPrayerInfo | null>(null);
  const [islamicDate, setIslamicDate] = useState<{
    day: number;
    month: string;
    year: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [userInfo, setUserInfo] = useState<{
    name?: string;
    email?: string;
  } | null>(null);

  // Function to determine current prayer time
  const getCurrentPrayer = () => {
    if (!prayerTimes) return "fajr";

    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour * 60 + currentMinute;

    const prayerTimesInMinutes = {
      fajr: timeToMinutes(prayerTimes.fajr),
      dhuhr: timeToMinutes(prayerTimes.dhuhr),
      asr: timeToMinutes(prayerTimes.asr),
      maghrib: timeToMinutes(prayerTimes.maghrib),
      isha: timeToMinutes(prayerTimes.isha),
    };

    if (
      currentTime >= prayerTimesInMinutes.fajr &&
      currentTime < prayerTimesInMinutes.dhuhr
    )
      return "fajr";
    if (
      currentTime >= prayerTimesInMinutes.dhuhr &&
      currentTime < prayerTimesInMinutes.asr
    )
      return "dhuhr";
    if (
      currentTime >= prayerTimesInMinutes.asr &&
      currentTime < prayerTimesInMinutes.maghrib
    )
      return "asr";
    if (
      currentTime >= prayerTimesInMinutes.maghrib &&
      currentTime < prayerTimesInMinutes.isha
    )
      return "maghrib";
    if (
      currentTime >= prayerTimesInMinutes.isha ||
      currentTime < prayerTimesInMinutes.fajr
    )
      return "isha";

    return "fajr"; // default
  };

  const currentPrayer = getCurrentPrayer();

  // Check authentication status
  const checkAuthStatus = useCallback(async () => {
    try {
      const response = await fetch("/api/todos/check-auth");
      if (response.ok) {
        const data = await response.json();
        setIsAuthenticated(data.authenticated);
        if (data.authenticated && data.user) {
          setUserInfo(data.user);
        }
      } else {
        setIsAuthenticated(false);
        setUserInfo(null);
      }
    } catch (error) {
      console.error("Error checking auth status:", error);
      setIsAuthenticated(false);
      setUserInfo(null);
    } finally {
      setAuthLoading(false);
    }
  }, []);

  const loadTodos = useCallback(async () => {
    // Only load todos if user is authenticated
    if (!isAuthenticated) {
      setTodos([]);
      return;
    }

    try {
      // Use the new combined todos method that handles both user and suggested todos
      const combinedTodos = await TodoService.getCombinedTodos(
        currentFilter,
        prayerTimes || undefined
      );

      // Filter out expired todos and apply time-based logic
      const filteredTodos = combinedTodos.filter((todo) =>
        shouldShowTodo(todo, prayerTimes)
      );

      setTodos(filteredTodos);
    } catch (error) {
      console.error("Error loading todos:", error);
      // Show error to user
      setError("Failed to load todos. Please try again.");
    }
  }, [currentFilter, prayerTimes, isAuthenticated]);

  const handleTodoUpdate = async (updatedTodo: UserTodo) => {
    try {
      setTodos((prev) =>
        prev.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
      );
      await loadTodos(); // Reload to update stats
    } catch (error) {
      console.error("Error updating todo:", error);
      setError("Failed to update todo. Please try again.");
    }
  };

  const handleTodoDelete = async (id: string) => {
    try {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
      await loadTodos(); // Reload to update stats
    } catch (error) {
      console.error("Error deleting todo:", error);
      setError("Failed to delete todo. Please try again.");
    }
  };

  const handleFilterChange = (filter: TodoFilter) => {
    setCurrentFilter(filter);
  };

  const handleTodoCreated = useCallback(async () => {
    try {
      await loadTodos();
    } catch (error) {
      console.error("Error after creating todo:", error);
      setError("Failed to refresh todos. Please try again.");
    }
  }, [loadTodos]);

  // Check authentication status on mount
  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  // Load location and prayer times
  useEffect(() => {
    const loadLocationAndPrayerTimes = async () => {
      try {
        setLoading(true);
        setError(null);

        // Get user location
        const userLocation = await getUserLocation();
        setLocation(userLocation);

        // Calculate prayer times
        const times = calculatePrayerTimes(
          userLocation.latitude,
          userLocation.longitude
        );
        setPrayerTimes(times);

        // Get current prayer info
        const prayerInfo = getCurrentPrayerInfo(times);
        setCurrentPrayerInfo(prayerInfo);

        // Get Islamic date
        const islamicDate = getIslamicDate();
        setIslamicDate(islamicDate);
      } catch (err) {
        console.error("Error loading location and prayer times:", err);
        setError(
          err instanceof Error ? err.message : "Failed to load prayer times"
        );

        // Fallback to default location (Mecca)
        const defaultLocation = {
          latitude: 21.4225,
          longitude: 39.8262,
          city: "Mecca",
          country: "Saudi Arabia",
        };
        setLocation(defaultLocation);

        const times = calculatePrayerTimes(
          defaultLocation.latitude,
          defaultLocation.longitude
        );
        setPrayerTimes(times);

        const prayerInfo = getCurrentPrayerInfo(times);
        setCurrentPrayerInfo(prayerInfo);

        const islamicDate = getIslamicDate();
        setIslamicDate(islamicDate);
      } finally {
        setLoading(false);
      }
    };

    loadLocationAndPrayerTimes();
  }, [retryCount]);

  // Update prayer info and todos every minute
  useEffect(() => {
    if (!prayerTimes) return;

    const interval = setInterval(async () => {
      const prayerInfo = getCurrentPrayerInfo(prayerTimes);
      setCurrentPrayerInfo(prayerInfo);

      // Reload todos to handle time-based changes (only if authenticated)
      if (isAuthenticated) {
        await loadTodos();
      }
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [prayerTimes, loadTodos, isAuthenticated]);

  useEffect(() => {
    loadTodos();
  }, [currentFilter, prayerTimes, loadTodos, isAuthenticated]);

  // Carousel auto-scroll effect
  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    api.on("init", () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

    if (date.toDateString() === today.toDateString()) {
      return "Today";
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return "Tomorrow";
    } else if (date.toDateString() === dayAfterTomorrow.toDateString()) {
      return "Day After Tomorrow";
    } else {
      return date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
      });
    }
  };

  const groupTodosByDate = (todos: UserTodo[]) => {
    const groups: { [key: string]: UserTodo[] } = {};

    todos.forEach((todo) => {
      const dateKey = todo.date.split("T")[0];
      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      groups[dateKey].push(todo);
    });

    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
  };

  const groupedTodos = groupTodosByDate(todos);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center px-6 pt-12 pb-8 z-[99] lg:px-8 lg:pt-16 lg:pb-12">
        <div className="text-black/80">
          <p className="text-xl lg:text-2xl">Assalamualaikum,</p>
          <p className="text-3xl lg:text-4xl font-semibold tracking-wide">
            {!authLoading && isAuthenticated && userInfo?.name
              ? userInfo.name
              : "Abdul Qadir"}
          </p>
        </div>

        <div className="flex text-greyText gap-4 items-center">
          <Bell size={24} className="lg:w-6 lg:h-6" />
          {!authLoading && isAuthenticated && <SignOutButton />}
        </div>
      </div>

      {/* Hifz Card, Status, Announcement - Mobile Carousel / Desktop Grid */}
      <div className="px-0 lg:px-8">
        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: false,
            }}
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/2">
                <Card className="bg-white relative p-4 overflow-hidden h-[140px] mx-12">
                  <div className="flex gap-2 justify-between h-full">
                    <div className="flex flex-col justify-between mb-4 col-span-2">
                      <div>
                        <p className="text-lg sm:text-2xl font-semibold">
                          Today's Status
                        </p>
                        <p className="text-xs sm:text-sm">
                          Hadeeth on importance of Charity
                        </p>
                        <div>
                          <Button
                            className="p-1 px-2 mt-2"
                            variant="outline"
                            size="sm"
                          >
                            <Download size={4} /> Download
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="h-full flex items-end justify-end bg-gray-100 border rounded-2xl">
                      <Image
                        src={"/salah-icon.png"}
                        className="object-contain h-24"
                        alt="salah"
                      />
                    </div>
                  </div>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2">
                <Card className="bg-white relative p-4 overflow-hidden h-[140px] mx-12">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <p className="text-lg sm:text-2xl font-semibold">
                        Announcement
                      </p>
                      <div className="space-y-2 mt-2">
                        <p className="text-sm max-w-[350px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quisquam, quos.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2">
                <Card className="bg-white relative p-4 overflow-hidden h-[150px] mx-12">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="flex gap-2 items-center mb-4">
                        <p className="text-lg sm:text-2xl font-semibold">
                          Hifz Completion
                        </p>
                        <ChevronRight className="text-textGray" size={20} />
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm">Last read Al-Baqrah 117</p>

                        <div className="flex gap-2 items-center">
                          <div className="h-2 rounded-full flex w-full relative overflow-hidden bg-gray-200 max-w-[140px] sm:max-w-[220px]">
                            <div className="absolute top-0 bg-teal-900 h-2 w-[20%] z-[10]"></div>
                          </div>
                          <p className="font-semibold">4%</p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute right-0 bottom-0">
                      <Image
                        src={"/home-quran.png"}
                        className="object-contain h-16 sm:h-24"
                        alt="quran"
                      />
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>

          {/* Carousel indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  current === index ? "bg-teal-600 w-6" : "bg-gray-300"
                )}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6 lg:max-w-6xl lg:mx-auto">
          <Card className="bg-white relative p-6 overflow-hidden h-[180px]">
            <div className="flex gap-4 justify-between h-full">
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-xl font-semibold">Today's Status</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Hadeeth on importance of Charity
                  </p>
                  <div className="mt-4">
                    <Button className="px-4 py-2" variant="outline" size="sm">
                      <Download size={16} className="mr-2" /> Download
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex items-end justify-end bg-gray-100 border rounded-2xl p-2">
                <Image
                  src={"/salah-icon.png"}
                  className="object-contain h-20"
                  alt="salah"
                />
              </div>
            </div>
          </Card>

          <Card className="bg-white relative p-6 overflow-hidden h-[180px]">
            <div className="flex flex-col justify-between h-full">
              <div>
                <p className="text-xl font-semibold">Announcement</p>
                <div className="space-y-3 mt-4">
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quos. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-white relative p-6 overflow-hidden h-[180px]">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex gap-2 items-center mb-4">
                  <p className="text-xl font-semibold">Hifz Completion</p>
                  <ChevronRight className="text-textGray" size={20} />
                </div>

                <div className="space-y-3">
                  <p className="text-base text-gray-600">
                    Last read Al-Baqrah 117
                  </p>

                  <div className="flex gap-3 items-center">
                    <div className="h-3 rounded-full flex w-full relative overflow-hidden bg-gray-200 max-w-[200px]">
                      <div className="absolute top-0 bg-teal-900 h-3 w-[20%] z-[10]"></div>
                    </div>
                    <p className="font-semibold text-lg">4%</p>
                  </div>
                </div>
              </div>

              <div className="absolute right-4 bottom-4">
                <Image
                  src="/home-quran.png"
                  className="object-contain h-16"
                  alt="quran"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Prayer Time */}
      <div className="px-6 py-8 lg:px-8 lg:py-12">
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded lg:p-4">
            <p className="text-sm lg:text-base">⚠️ {error}</p>
            <p className="text-xs mt-1 lg:text-sm">
              Using default location (Mecca) for prayer times.
            </p>
            <button
              onClick={() => {
                setError(null);
                setRetryCount((prev) => prev + 1);
              }}
              className="mt-2 px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 lg:px-4 lg:py-2 lg:text-sm"
            >
              Retry Location Access
            </button>
          </div>
        )}
        <div className="flex justify-between pb-4 lg:pb-6">
          <p className="text-xl font-semibold text-black/70 lg:text-2xl">
            Prayer Time
          </p>
          <div className="flex gap-1 items-center">
            <MapPin color="red" size={18} className="lg:w-5 lg:h-5" />{" "}
            <span className="text-md text-greyText font-semibold lg:text-lg">
              {loading ? "Loading..." : location?.city || "Unknown Location"}
            </span>
            <ChevronDown size={18} className="text-greyText lg:w-5 lg:h-5" />
          </div>
        </div>
        <Card className="bg-white lg:max-w-4xl lg:mx-auto">
          <Card className="bg-white overflow-hidden relative">
            {loading && (
              <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600 mx-auto mb-2"></div>
                  <p className="text-sm text-gray-600 lg:text-base">
                    Loading prayer times...
                  </p>
                </div>
              </div>
            )}
            <div className="bg-teal-600 text-white px-6 py-4 lg:px-8 lg:py-6">
              <p className="text-xl text-white font-medium tracking-wide lg:text-2xl">
                {islamicDate
                  ? `${islamicDate.month} ${islamicDate.day}`
                  : "Loading..."}
              </p>
              <p className="text-sm text-white font-light lg:text-base">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>

              <div className="space-y-2 lg:space-y-3">
                <p className="text-xl sm:text-3xl lg:text-4xl text-white mt-8 font-semibold">
                  {loading
                    ? "Loading..."
                    : currentPrayerInfo
                    ? `${currentPrayerInfo.nextPrayer} ${
                        prayerTimes?.[
                          currentPrayerInfo.nextPrayer.toLowerCase() as keyof PrayerTimes
                        ] || ""
                      }`
                    : ""}
                </p>
                <div className="rounded-full px-2 py-1 bg-white/30 backdrop-blur-sm flex items-center gap-1 w-fit lg:px-3 lg:py-2">
                  <Clock size={20} className="lg:w-6 lg:h-6" />{" "}
                  {loading
                    ? "Loading..."
                    : currentPrayerInfo?.timeUntilNext || ""}
                </div>
              </div>
            </div>

            <div className="absolute bottom-2 right-0 lg:bottom-4 lg:right-4">
              <Image
                src={"/home-mosque.png"}
                alt="mosque"
                className="object-contain h-28 sm:h-40 lg:h-48"
              />
            </div>
          </Card>
          <div className="px-6 py-5 lg:px-8 lg:py-6">
            <div className="grid grid-cols-5 gap-4 lg:gap-6">
              <div className="space-y-2 text-center">
                <p className={`text-sm font-medium text-gray-500 lg:text-base`}>
                  Fajr
                </p>
                <div className="flex justify-center">
                  <Image
                    src={"/fajr-icon.svg"}
                    alt="Fajr"
                    className={`w-8 h-8 lg:w-10 lg:h-10 ${
                      currentPrayer === "fajr"
                        ? "filter brightness-0 saturate-100 invert-[0.5] sepia-[1] saturate-[5] hue-rotate-[160deg]"
                        : "filter brightness-0 saturate-100 invert-[0.6] sepia-[0] saturate-[0] hue-rotate-[0deg]"
                    }`}
                  />
                </div>
                <p className={`text-sm text-gray-500 lg:text-base`}>
                  {loading ? "..." : prayerTimes?.fajr || "--:--"}
                </p>
              </div>
              <div className="space-y-2 text-center">
                <p className={`text-sm font-medium text-gray-500 lg:text-base`}>
                  Dhuhr
                </p>
                <div className="flex justify-center">
                  <Image
                    src={"/dhuhr-icon.svg"}
                    alt="Dhuhr"
                    className={`w-8 h-8 lg:w-10 lg:h-10 ${
                      currentPrayer === "dhuhr"
                        ? "filter brightness-0 saturate-100 invert-[0.5] sepia-[1] saturate-[5] hue-rotate-[240deg]"
                        : "filter brightness-0 saturate-100 invert-[0.6] sepia-[0] saturate-[0] hue-rotate-[0deg]"
                    }`}
                  />
                </div>
                <p className={`text-sm text-gray-500 lg:text-base`}>
                  {loading ? "..." : prayerTimes?.dhuhr || "--:--"}
                </p>
              </div>
              <div className="space-y-2 text-center">
                <p className={`text-sm font-medium text-gray-500 lg:text-base`}>
                  Asr
                </p>
                <div className="flex justify-center">
                  <Image
                    src={"/asr-icon.svg"}
                    alt="Asr"
                    className={`w-8 h-8 lg:w-10 lg:h-10 ${
                      currentPrayer === "asr"
                        ? "filter brightness-0 saturate-100 invert-[0.5] sepia-[1] saturate-[5] hue-rotate-[160deg]"
                        : "filter brightness-0 saturate-100 invert-[0.6] sepia-[0] saturate-[0] hue-rotate-[0deg]"
                    }`}
                  />
                </div>
                <p className={`text-sm text-gray-500 lg:text-base`}>
                  {loading ? "..." : prayerTimes?.asr || "--:--"}
                </p>
              </div>
              <div className="space-y-2 text-center">
                <p className={`text-sm font-medium text-gray-500 lg:text-base`}>
                  Maghrib
                </p>
                <div className="flex justify-center">
                  <Image
                    src={"/maghrib-icon.svg"}
                    alt="Maghrib"
                    className={`w-8 h-8 lg:w-10 lg:h-10 ${
                      currentPrayer === "maghrib"
                        ? "filter brightness-0 saturate-100 invert-[0.5] sepia-[1] saturate-[5] hue-rotate-[160deg]"
                        : "filter brightness-0 saturate-100 invert-[0.6] sepia-[0] saturate-[0] hue-rotate-[0deg]"
                    }`}
                  />
                </div>
                <p className={`text-sm text-gray-500 lg:text-base`}>
                  {loading ? "..." : prayerTimes?.maghrib || "--:--"}
                </p>
              </div>
              <div className="space-y-2 text-center">
                <p className={`text-sm font-medium text-gray-500 lg:text-base`}>
                  Isha
                </p>
                <div className="flex justify-center">
                  <Image
                    src={"/isha-icon.svg"}
                    alt="Isha"
                    className={`w-8 h-8 lg:w-10 lg:h-10 ${
                      currentPrayer === "isha"
                        ? "filter brightness-0 saturate-100 invert-[0.5] sepia-[1] saturate-[5] hue-rotate-[160deg]"
                        : "filter brightness-0 saturate-100 invert-[0.6] sepia-[0] saturate-[0] hue-rotate-[0deg]"
                    }`}
                  />
                </div>
                <p className={`text-sm text-gray-500 lg:text-base`}>
                  {loading ? "..." : prayerTimes?.isha || "--:--"}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Task For today - Only show if authenticated */}
      {!authLoading && isAuthenticated && (
        <div className="px-6 space-y-4 lg:px-8 lg:space-y-6">
          <div className="flex justify-between items-center lg:max-w-4xl lg:mx-auto">
            <div className="flex gap-2 py-1">
              <span
                className={cn(
                  "px-3 py-1 shadow rounded-full text-sm border font-medium hover:cursor-pointer hover:bg-secondary/50 lg:px-4 lg:py-2 lg:text-base",
                  currentFilter === "today"
                    ? "bg-secondary text-black"
                    : "bg-white text-black"
                )}
                onClick={() => handleFilterChange("today")}
              >
                Today
              </span>
              <span
                className={cn(
                  "px-3 py-1 shadow rounded-full text-sm border font-medium hover:cursor-pointer hover:bg-secondary/50 lg:px-4 lg:py-2 lg:text-base",
                  currentFilter === "upcoming"
                    ? "bg-secondary text-black"
                    : "bg-white text-black"
                )}
                onClick={() => handleFilterChange("upcoming")}
              >
                Upcoming
              </span>
              <span
                className={cn(
                  "px-3 py-1 shadow rounded-full text-sm border font-medium hover:cursor-pointer hover:bg-secondary/50 lg:px-4 lg:py-2 lg:text-base",
                  currentFilter === "archived"
                    ? "bg-secondary text-black"
                    : "bg-white text-black"
                )}
                onClick={() => handleFilterChange("archived")}
              >
                Archived
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-xs text-gray-500 lg:text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Live</span>
              </div>
              <CreateTodoDrawer onTodoCreated={handleTodoCreated} />
            </div>
          </div>

          {/* Todos List */}
          <div className="space-y-3 lg:max-w-4xl lg:mx-auto">
            {groupedTodos.length === 0 ? (
              <Card className="shadow-none border p-8 text-center lg:p-12">
                <p className="text-gray-500 lg:text-lg">
                  {currentFilter === "today" && "No todos for today"}
                  {currentFilter === "upcoming" && "No upcoming todos"}
                  {currentFilter === "archived" && "No archived todos"}
                </p>
              </Card>
            ) : (
              groupedTodos.map(([dateKey, dateTodos]) => (
                <div key={dateKey} className="space-y-2">
                  {currentFilter === "upcoming" && (
                    <h3 className="text-sm font-medium text-gray-700 px-1 lg:text-base">
                      {formatDate(dateKey)}
                    </h3>
                  )}
                  {dateTodos.map((todo) => (
                    <TodoTile
                      key={todo.id}
                      todo={todo}
                      onUpdate={handleTodoUpdate}
                      onDelete={handleTodoDelete}
                      onTodoUpdated={handleTodoCreated}
                      prayerTimes={prayerTimes}
                    />
                  ))}
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Show loading while checking authentication */}
      {authLoading && (
        <div className="px-6 py-8 lg:px-8 lg:py-12">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-none border p-8 text-center lg:p-12">
              <div className="space-y-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600 mx-auto"></div>
                <p className="text-gray-600">Checking authentication...</p>
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* Show login prompt if not authenticated */}
      {!authLoading && !isAuthenticated && (
        <div className="px-6 py-8 lg:px-8 lg:py-12">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-none border p-8 text-center lg:p-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 lg:text-3xl">
                  Sign in to Manage Your Todos
                </h2>
                <p className="text-gray-600 lg:text-lg">
                  Create and manage your daily Islamic tasks, track your
                  progress, and stay organized with your spiritual routine.
                </p>
                <div className="flex justify-center">
                  <Button
                    onClick={() => (window.location.href = "/auth/login")}
                    className="px-6 py-2"
                  >
                    Sign In
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* Learning Access */}
      <div className="px-6 py-8 lg:px-8 lg:py-12">
        <div className="flex gap-2 items-center pb-6 lg:pb-8">
          <p className="text-xl text-black font-medium lg:text-2xl">
            Learning Access
          </p>
          <ChevronRight size={20} className="lg:w-6 lg:h-6" />
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 lg:gap-6 lg:max-w-7xl lg:mx-auto">
          <Card className="p-3 shadow-none bg-[#F1DFDD] relative cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-inner lg:p-6 lg:h-[200px]">
            <div className="flex items-center gap-2">
              <p className="text-3xl font-semibold tracking-wide text-black/80 lg:text-4xl">
                Faith
              </p>
            </div>
            <p className="text-sm text-black/50 font-medium lg:text-base">
              12 Lessons
            </p>
            <p className="text-sm text-black/50 font-medium lg:text-base">
              {" "}
              15min / lesson
            </p>
            <Image
              src={"/imaan-icon.png"}
              alt="imaan"
              className="object-contain absolute bottom-2 right-4 h-20 sm:h-32 lg:h-28 lg:bottom-4 lg:right-6"
            />
          </Card>
          <Card className="bg-white p-3 shadow-none bg-[#F1E6C1] relative cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-inner lg:p-6 lg:h-[200px]">
            <div className="flex items-center gap-2">
              <p className="text-3xl font-semibold tracking-wider text-black/80 lg:text-4xl">
                Salah
              </p>
            </div>
            <p className="text-sm text-black/50 font-medium lg:text-base">
              8 Lessons
            </p>
            <p className="text-sm text-black/50 font-medium lg:text-base">
              {" "}
              15min / lesson
            </p>
            <Image
              src={"/salah-icon.png"}
              alt="history"
              className="object-contain absolute bottom-0 right-0 h-32 lg:h-36 lg:bottom-2 lg:right-2"
            />
          </Card>
          <Card className="bg-white p-3 shadow-none bg-[#EFF2DF] relative cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-inner lg:p-6 lg:h-[200px]">
            <div className="flex items-center gap-2">
              <p className="text-3xl font-semibold tracking-wider text-black/80 lg:text-4xl">
                History
              </p>
            </div>
            <p className="text-sm text-black/50 font-medium lg:text-base">
              12 Lessons
            </p>
            <p className="text-sm text-black/50 font-medium lg:text-base">
              {" "}
              15min / lesson
            </p>
            <Image
              src={"/history-icon.png"}
              alt="history"
              className="object-contain absolute bottom-4 right-4 h-20 sm:h-32 lg:h-28 lg:bottom-6 lg:right-6"
            />
          </Card>
          <Card className="bg-white p-3 shadow-none bg-[#C2DAEF] relative cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-inner lg:p-6 lg:h-[200px]">
            <div className="flex items-center gap-2">
              <p className="text-3xl font-semibold tracking-wider text-black/80 lg:text-4xl">
                Miracles
              </p>
            </div>
            <p className="text-sm text-black/50 font-medium lg:text-base">
              12 Lessons
            </p>
            <p className="text-sm text-black/50 font-medium lg:text-base">
              {" "}
              15min / lesson
            </p>
            <Image
              src={"/miracles-icon.png"}
              alt="history"
              className="object-contain absolute bottom-0 right-0 h-24 lg:h-28 lg:bottom-2 lg:right-2"
            />
          </Card>

          <Card className="bg-white p-3 shadow-none bg-[#C8B7F6] relative overflow-hidden cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-inner lg:p-6 lg:h-[200px]">
            <div className="flex items-center gap-2">
              <p className="text-3xl font-semibold tracking-wider text-black/80 lg:text-4xl">
                Ethics
              </p>
            </div>
            <p className="text-sm text-black/50 font-medium lg:text-base">
              7 Lessons
            </p>
            <p className="text-sm text-black/50 font-medium lg:text-base">
              {" "}
              10min / lesson
            </p>
            <Image
              src={"/ethics-icon.png"}
              alt="history"
              className="object-contain absolute bottom-2 right-2 h-24 lg:h-28 lg:bottom-4 lg:right-4"
            />
          </Card>

          <Card className="bg-white p-3 shadow-none bg-amber-100 relative overflow-hidden cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-inner lg:p-6 lg:h-[200px]">
            <div className="flex items-center gap-2">
              <p className="text-3xl font-semibold tracking-wider text-black/80 lg:text-4xl">
                Arabic
              </p>
            </div>
            <p className="text-sm text-black/50 font-medium lg:text-base">
              7 Lessons
            </p>
            <p className="text-sm text-black/50 font-medium lg:text-base">
              {" "}
              10min / lesson
            </p>
            <Image
              src={"/arabic-icon.png"}
              alt="arabic"
              className="object-contain absolute bottom-0 right-0 h-24 lg:h-28 lg:bottom-2 lg:right-2"
            />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
