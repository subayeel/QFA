"use client";
import { Card } from "@/components/ui/card";
import { Clock, MapPin, Info } from "lucide-react";
import { useState, useEffect } from "react";
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
import Image from "next/image";

export default function PrayerTimeSection() {
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

  return (
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
          <span className="text-md font-semibold lg:text-lg">
            {loading ? "Loading..." : location?.city || "Unknown Location"}
          </span>
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
                {(() => {
                  if (loading) return "Loading...";
                  if (!currentPrayerInfo) return "";
                  const nextPrayerKey = currentPrayerInfo.nextPrayer.toLowerCase() as keyof PrayerTimes;
                  const prayerTime = prayerTimes?.[nextPrayerKey] || "";
                  return `${currentPrayerInfo.nextPrayer} ${prayerTime}`;
                })()}
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
  );
}
