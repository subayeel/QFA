"use client";
/* eslint-disable react/no-unescaped-entities */
import { Card } from "@/components/ui/card";
import { Bell, Clock, Download, MapPin, Info, User } from "lucide-react";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  getUserLocation,
  calculatePrayerTimes,
  getCurrentPrayerInfo,
  getIslamicDate,
  timeToMinutes,
  calculateJamathTimes,
  getAzaanTimes,
  getCurrentTimePeriod,
  getAdviceForPeriod,
  PrayerTimes,
  LocationData,
  CurrentPrayerInfo,
  JamathTimes,
  AzaanTimes,
} from "@/utils/prayerTimes";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import HifzProgressCard from "./HifzProgressCard";
import Link from "next/link";

function Home() {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | undefined>();
  const [jamathTimes, setJamathTimes] = useState<JamathTimes | undefined>();
  const [azaanTimes, setAzaanTimes] = useState<AzaanTimes | undefined>();
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
  const [currentAdvice, setCurrentAdvice] = useState<{
    name: string;
    advice: string;
    azkaar?: Array<{
      title: string;
      text: string;
      translation: string;
      repetitions: string;
    }>;
    naflPrayers?: Array<{
      name: string;
      rakats: number | string;
      timing: string;
      benefit: string;
    }>;
  } | null>(null);
  const [hoveredPrayer, setHoveredPrayer] = useState<string | null>(null);

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

        // Calculate jamath times
        const jamath = calculateJamathTimes(times);
        setJamathTimes(jamath);

        // Get azaan times
        const azaan = getAzaanTimes(times);
        setAzaanTimes(azaan);

        // Get current prayer info
        const prayerInfo = getCurrentPrayerInfo(times);
        setCurrentPrayerInfo(prayerInfo);

        // Get Islamic date
        const islamicDate = getIslamicDate();
        setIslamicDate(islamicDate);

        // Get advice for current time period
        const currentPeriod = getCurrentTimePeriod(times);
        const advice = getAdviceForPeriod(currentPeriod);
        setCurrentAdvice(advice);
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

        // Calculate jamath times
        const jamath = calculateJamathTimes(times);
        setJamathTimes(jamath);

        // Get azaan times
        const azaan = getAzaanTimes(times);
        setAzaanTimes(azaan);

        const prayerInfo = getCurrentPrayerInfo(times);
        setCurrentPrayerInfo(prayerInfo);

        const islamicDate = getIslamicDate();
        setIslamicDate(islamicDate);

        // Get advice for current time period
        const currentPeriod = getCurrentTimePeriod(times);
        const advice = getAdviceForPeriod(currentPeriod);
        setCurrentAdvice(advice);
      } finally {
        setLoading(false);
      }
    };

    loadLocationAndPrayerTimes();
  }, [retryCount]);


  // Carousel auto-scroll effect
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    const onInit = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    api.on("init", onInit);

    // Cleanup: remove event listeners when component unmounts or api changes
    return () => {
      api.off("select", onSelect);
      api.off("init", onInit);
    };
  }, [api]);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);


  return (
    <div className="max-w-7xl mx-auto bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center px-6 pt-12 pb-8 z-[99] lg:px-8 lg:pt-16 lg:pb-12">
        <div className="text-black/80">
          <p className="text-xl lg:text-2xl">Assalamualaikum,</p>
          <p className="text-3xl lg:text-4xl font-semibold tracking-wide">
            Abdul Qadir
          </p>
        </div>
        
        <Link href="/self" className="flex text-greyText gap-4 items-center">
          <User size={24} className="lg:w-6 lg:h-6" />
        </Link>
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
                <Card className="bg-white shadow-none relative p-4 overflow-hidden h-[140px] mx-6">
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
                        width={100}
                        height={100}
                        priority
                      />
                    </div>
                  </div>
                </Card>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2">
                <Card className="bg-white shadow-none relative p-4 overflow-hidden h-[140px] mx-6">
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
                <HifzProgressCard isMobile={true} />
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
                  width={100}
                  height={100}
                  priority
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

          <HifzProgressCard />
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
          <div className="flex gap-1 items-center text-greyText">
            <MapPin size={16} className="lg:w-5 lg:h-5" />{" "}
            <span className="text-md  font-semibold lg:text-lg">
              {loading ? "Loading..." : location?.city || "Unknown Location"}
            </span>
            {/* <ChevronDown size={18} className="text-greyText lg:w-5 lg:h-5" /> */}
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
                width={150}
                height={250}
                style={{ width: "auto" }}
              />
            </div>
          </Card>
          <div className="px-6 py-5 lg:px-8 lg:py-6">
            <div className="grid grid-cols-5 gap-4 lg:gap-6">
              {(["fajr", "dhuhr", "asr", "maghrib", "isha"] as const).map((prayer) => (
                <div
                  key={prayer}
                  className="space-y-2 text-center relative"
                  onMouseEnter={() => setHoveredPrayer(prayer)}
                  onMouseLeave={() => setHoveredPrayer(null)}
                >
                  <p className={`text-sm font-medium text-gray-500 lg:text-base`}>
                    {prayer.charAt(0).toUpperCase() + prayer.slice(1)}
                  </p>
                  <div className="flex justify-center relative">
                    <Image
                      src={`/${prayer}-icon.svg`}
                      alt={prayer}
                      className={`w-8 h-8 lg:w-10 lg:h-10 ${
                        currentPrayer === prayer
                          ? "filter brightness-0 saturate-100 invert-[0.5] sepia-[1] saturate-[5] hue-rotate-[160deg]"
                          : "filter brightness-0 saturate-100 invert-[0.6] sepia-[0] saturate-[0] hue-rotate-[0deg]"
                      }`}
                      width={20}
                      height={20}
                    />
                    {hoveredPrayer === prayer && azaanTimes && (
                      <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                        Azaan: {azaanTimes[prayer]}
                      </div>
                    )}
                  </div>
                  <div className="space-y-1">
                    <p className={`text-sm text-gray-500 lg:text-base`}>
                      {loading ? "..." : prayerTimes?.[prayer] || "--:--"}
                    </p>
                    {jamathTimes && (
                      <p className="text-xs text-gray-400 lg:text-sm">
                        Jamath: {jamathTimes[prayer]}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Advice Section */}
          {currentAdvice && (
            <div className="px-6 pb-5 lg:px-8 lg:pb-6 border-t pt-5">
           
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-800 mb-2 lg:text-base">
                    {currentAdvice.name} - Azkaar & Nafl Prayers
                  </h3>
                  <p className="text-xs text-gray-600 mb-3 lg:text-sm">
                    {currentAdvice.advice}
                  </p>
                  
                  {currentAdvice.azkaar && currentAdvice.azkaar.length > 0 && (
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-gray-700 mb-2 lg:text-sm">
                        Recommended Azkaar:
                      </p>
                      <div className="space-y-2">
                      {currentAdvice.azkaar.slice(0, 2).map((azkar) => (
                        <div key={azkar.title} className="bg-gray-50 p-2 rounded text-xs lg:text-sm">
                            <p className="font-medium text-gray-800">{azkar.title}</p>
                            <p className="text-gray-600 mt-1">{azkar.text}</p>
                            <p className="text-gray-500 italic mt-1">{azkar.translation}</p>
                            <p className="text-gray-400 text-xs mt-1">{azkar.repetitions}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {currentAdvice.naflPrayers && currentAdvice.naflPrayers.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-gray-700 mb-2 lg:text-sm">
                        Recommended Nafl Prayers:
                      </p>
                      <div className="space-y-1">
                        {currentAdvice.naflPrayers.map((nafl) => (
                          <div key={nafl.name} className="text-xs text-gray-600 lg:text-sm">
                            <span className="font-medium">{nafl.name}</span> ({nafl.rakats} rakats) - {nafl.timing}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

export default Home;
