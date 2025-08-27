// @ts-ignore
import { PrayTime } from "./praytime.js";

export interface PrayerTimes {
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  sunset: string;
  maghrib: string;
  isha: string;
  midnight: string;
}

export interface LocationData {
  latitude: number;
  longitude: number;
  city: string;
  country: string;
}

export interface CurrentPrayerInfo {
  currentPrayer: string;
  nextPrayer: string;
  timeUntilNext: string;
}

// Get user's location using browser geolocation API
export const getUserLocation = (): Promise<LocationData> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by this browser"));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          // Reverse geocoding to get city and country
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );

          if (!response.ok) {
            throw new Error("Failed to fetch location data");
          }

          const data = await response.json();

          resolve({
            latitude,
            longitude,
            city: data.city || data.locality || "Unknown City",
            country: data.countryName || "Unknown Country",
          });
        } catch {
          // Fallback to coordinates only
          resolve({
            latitude,
            longitude,
            city: "Unknown City",
            country: "Unknown Country",
          });
        }
      },
      (error) => {
        reject(new Error(`Geolocation error: ${error.message}`));
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000, // 5 minutes
      }
    );
  });
};

// Calculate prayer times using praytime.js
export const calculatePrayerTimes = (
  latitude: number,
  longitude: number
): PrayerTimes => {
  const prayTime = new PrayTime("MWL"); // Using MWL calculation method
  prayTime.location([latitude, longitude]);
  prayTime.timezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  prayTime.format("12h");

  const times = prayTime.times();

  return {
    fajr: times.fajr.toString(),
    sunrise: times.sunrise.toString(),
    dhuhr: times.dhuhr.toString(),
    asr: times.asr.toString(),
    sunset: times.sunset.toString(),
    maghrib: times.maghrib.toString(),
    isha: times.isha.toString(),
    midnight: times.midnight.toString(),
  };
};

// Convert time string to minutes for comparison
export const timeToMinutes = (timeString: string): number => {
  // Handle 12-hour format (e.g., "2:30 PM")
  const timeMatch = timeString.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (timeMatch) {
    let hours = parseInt(timeMatch[1]);
    const minutes = parseInt(timeMatch[2]);
    const period = timeMatch[3].toUpperCase();

    // Convert to 24-hour format
    if (period === "PM" && hours !== 12) {
      hours += 12;
    } else if (period === "AM" && hours === 12) {
      hours = 0;
    }

    return hours * 60 + minutes;
  }

  // Handle 24-hour format as fallback
  const [hours, minutes] = timeString.split(":").map(Number);
  return hours * 60 + minutes;
};

// Convert minutes to time string
export const minutesToTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours.toString().padStart(2, "0")}:${mins
    .toString()
    .padStart(2, "0")}`;
};

// Get current prayer and next prayer information
export const getCurrentPrayerInfo = (
  prayerTimes: PrayerTimes
): CurrentPrayerInfo => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTime = currentHour * 60 + currentMinute;

  const prayerOrder = [
    "fajr",
    "sunrise",
    "dhuhr",
    "asr",
    "sunset",
    "maghrib",
    "isha",
  ];
  const prayerNames = {
    fajr: "Fajr",
    sunrise: "Sunrise",
    dhuhr: "Dhuhr",
    asr: "Asr",
    sunset: "Sunset",
    maghrib: "Maghrib",
    isha: "Isha",
  };

  let currentPrayer = "fajr";
  let nextPrayer = "fajr";

  // Find current prayer
  for (let i = 0; i < prayerOrder.length; i++) {
    const prayer = prayerOrder[i];
    const prayerTime = timeToMinutes(prayerTimes[prayer as keyof PrayerTimes]);

    if (currentTime >= prayerTime) {
      currentPrayer = prayer;
      nextPrayer = prayerOrder[(i + 1) % prayerOrder.length];
    } else {
      nextPrayer = prayer;
      break;
    }
  }

  // Handle case where current time is after Isha (next prayer is Fajr tomorrow)
  if (currentTime >= timeToMinutes(prayerTimes.isha)) {
    currentPrayer = "isha";
    nextPrayer = "fajr";
  }

  // Calculate time until next prayer
  const nextPrayerTime = timeToMinutes(
    prayerTimes[nextPrayer as keyof PrayerTimes]
  );
  let timeUntilNext = nextPrayerTime - currentTime;

  // If next prayer is tomorrow
  if (timeUntilNext < 0) {
    timeUntilNext += 24 * 60; // Add 24 hours
  }

  const hours = Math.floor(timeUntilNext / 60);
  const minutes = timeUntilNext % 60;
  const timeString = `${hours}h ${minutes}m`;

  return {
    currentPrayer: prayerNames[currentPrayer as keyof typeof prayerNames],
    nextPrayer: prayerNames[nextPrayer as keyof typeof prayerNames],
    timeUntilNext: timeString,
  };
};

// Get current Islamic date
export const getIslamicDate = (): {
  day: number;
  month: string;
  year: number;
} => {
  const date = new Date();
  const islamicDate = new Intl.DateTimeFormat("en-US-u-ca-islamic", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).formatToParts(date);

  const day = parseInt(
    islamicDate.find((part) => part.type === "day")?.value || "1"
  );
  const month =
    islamicDate.find((part) => part.type === "month")?.value || "Muharram";
  const year = parseInt(
    islamicDate.find((part) => part.type === "year")?.value || "1445"
  );

  return { day, month, year };
};
