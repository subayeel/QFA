// Utility to convert Hijri dates to Gregorian dates
// Since Hijri calendar is lunar, the dates shift each year relative to Gregorian calendar

interface HijriDate {
  month: number;
  day: number;
  name: string;
}

interface GregorianDate {
  month: number;
  day: number;
  name: string;
}

// Mapping for 2024-2025 (1445-1446 AH) - More accurate dates
// Based on actual Hijri calendar for this period
const hijriToGregorianMapping: { [key: string]: GregorianDate } = {
  // Muharram (Month 1) - July 2024
  "1-1": { month: 7, day: 8, name: "Hijri New Year (1 Muharram)" },
  "1-10": { month: 7, day: 17, name: "Ashura" },

  // Safar (Month 2) - August 2024
  "2-10": { month: 8, day: 15, name: "Battle of Safīn (10 Safar)" },
  "2-28": {
    month: 9,
    day: 2,
    name: "Martyrdom of Sayyidina al-Hassan al-Mujtaba (ر)",
  },

  // Rabi al-Awwal (Month 3) - September 2024
  "3-1": {
    month: 9,
    day: 5,
    name: "Hijra – Migration to Medina (1 Muharram 1 AH, though commemorated)",
  },

  // Rajab (Month 7) - January 2025
  "7-27": { month: 1, day: 27, name: "Isra and Miʿraj (27 Rajab)" },

  // Ramadan (Month 9) - March 2025
  "9-1": { month: 3, day: 1, name: "1st Day of Ramadan" },
  "9-21": { month: 3, day: 21, name: "Lailat-ul-Qadr" },
  "9-23": { month: 3, day: 23, name: "Lailat-ul-Qadr" },
  "9-25": { month: 3, day: 25, name: "Lailat-ul-Qadr" },
  "9-27": { month: 3, day: 27, name: "Lailat-ul-Qadr" },
  "9-29": { month: 3, day: 29, name: "Lailat-ul-Qadr" },

  // Shawwal (Month 10) - April 2025
  "10-1": { month: 4, day: 1, name: "Eid-ul-Fitr" },

  // Dhu al-Qadah (Month 11) - May 2025
  "11-1": { month: 5, day: 1, name: "Treaty of Hudaybiyya" },

  // Dhu al-Hijjah (Month 12) - June 2025
  "12-8": { month: 6, day: 8, name: "Hajj" },
  "12-9": { month: 6, day: 9, name: "Arafa" },
  "12-10": { month: 6, day: 10, name: "Eid-ul-Adha" },
  "12-11": { month: 6, day: 11, name: "Hajj" },
  "12-12": { month: 6, day: 12, name: "Hajj" },
  "12-13": { month: 6, day: 13, name: "Hajj" },
  "12-19": { month: 6, day: 19, name: "First time Adhan was called in 622 AD" },
  "12-24": {
    month: 6,
    day: 24,
    name: "First Revelation to Prophet Muhammad – Night of Jibril (17 Ramadan)",
  },
};

export function convertHijriToGregorian(
  hijriDate: HijriDate
): GregorianDate | null {
  const key = `${hijriDate.month}-${hijriDate.day}`;
  const gregorianDate = hijriToGregorianMapping[key];

  if (gregorianDate) {
    return {
      ...gregorianDate,
      name: hijriDate.name,
    };
  }

  return null;
}

export function getAllGregorianSpecialDays(): GregorianDate[] {
  const specialDays: GregorianDate[] = [];

  Object.entries(hijriToGregorianMapping).forEach(([, gregorianDate]) => {
    specialDays.push({
      month: gregorianDate.month,
      day: gregorianDate.day,
      name: gregorianDate.name,
    });
  });

  return specialDays;
}

// Function to check if a given Gregorian date has special events
export function hasSpecialEvents(date: Date): boolean {
  const month = date.getMonth() + 1; // getMonth() returns 0-11
  const day = date.getDate();

  return Object.values(hijriToGregorianMapping).some(
    (gregorianDate) =>
      gregorianDate.month === month && gregorianDate.day === day
  );
}

// Function to get special events for a given Gregorian date
export function getSpecialEventsForDate(date: Date): GregorianDate[] {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return Object.values(hijriToGregorianMapping).filter(
    (gregorianDate) =>
      gregorianDate.month === month && gregorianDate.day === day
  );
}
