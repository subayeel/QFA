export interface SuggestedTodo {
  id: string;
  title: string;
  description: string;
  type: "daily" | "weekly" | "monthly";
  category: "prayer" | "quran" | "dhikr" | "charity" | "learning";
  time?: string;
  dayOfWeek?: number; // 0 = Sunday, 1 = Monday, etc.
  reference?: string;
  priority: "high" | "medium" | "low";
}

export const suggestedTodos: SuggestedTodo[] = [
  // Daily Prayers
  {
    id: "fajr-prayer",
    title: "Fajr Prayer",
    description: "Perform Fajr prayer at its proper time",
    type: "daily",
    category: "prayer",
    time: "04:21",
    priority: "high",
    reference:
      'Quran 2:238 - "Guard strictly your prayers, especially the middle prayer"',
  },
  {
    id: "dhuhr-prayer",
    title: "Dhuhr Prayer",
    description: "Perform Dhuhr prayer at its proper time",
    type: "daily",
    category: "prayer",
    time: "12:30",
    priority: "high",
    reference: "Quran 2:238",
  },
  {
    id: "asr-prayer",
    title: "Asr Prayer",
    description: "Perform Asr prayer at its proper time",
    type: "daily",
    category: "prayer",
    time: "15:45",
    priority: "high",
    reference: "Quran 2:238",
  },
  {
    id: "maghrib-prayer",
    title: "Maghrib Prayer",
    description: "Perform Maghrib prayer at its proper time",
    type: "daily",
    category: "prayer",
    time: "18:30",
    priority: "high",
    reference: "Quran 2:238",
  },
  {
    id: "isha-prayer",
    title: "Isha Prayer",
    description: "Perform Isha prayer at its proper time",
    type: "daily",
    category: "prayer",
    time: "20:00",
    priority: "high",
    reference: "Quran 2:238",
  },

  // Daily Quran Recitation
  {
    id: "daily-quran",
    title: "Recite Quran",
    description: "Read at least one page of Quran daily",
    type: "daily",
    category: "quran",
    priority: "high",
    reference:
      'Hadith: "The best of you are those who learn the Quran and teach it"',
  },
  {
    id: "surah-mulk",
    title: "Recite Surah Al-Mulk",
    description: "Recite Surah Al-Mulk before sleeping",
    type: "daily",
    category: "quran",
    time: "21:00",
    priority: "medium",
    reference:
      'Hadith: "Whoever recites Surah Al-Mulk every night, Allah will protect him from the punishment of the grave"',
  },
  {
    id: "ayat-al-kursi",
    title: "Recite Ayat Al-Kursi",
    description: "Recite Ayat Al-Kursi after each prayer",
    type: "daily",
    category: "quran",
    priority: "medium",
    reference:
      'Hadith: "Whoever recites Ayat Al-Kursi after each prayer, nothing will prevent him from entering Paradise except death"',
  },

  // Daily Dhikr
  {
    id: "morning-dhikr",
    title: "Morning Dhikr",
    description: "Recite morning adhkar (remembrance)",
    type: "daily",
    category: "dhikr",
    time: "06:00",
    priority: "medium",
    reference:
      "Hadith: \"Whoever recites in the morning and evening: 'Subhan Allah wa bihamdihi' 100 times, his sins will be forgiven even if they are like the foam of the sea\"",
  },
  {
    id: "evening-dhikr",
    title: "Evening Dhikr",
    description: "Recite evening adhkar (remembrance)",
    type: "daily",
    category: "dhikr",
    time: "18:00",
    priority: "medium",
    reference:
      "Hadith: \"Whoever recites in the morning and evening: 'Subhan Allah wa bihamdihi' 100 times, his sins will be forgiven even if they are like the foam of the sea\"",
  },
  {
    id: "istighfar",
    title: "Seek Forgiveness",
    description: "Recite Istighfar (Astaghfirullah) 100 times",
    type: "daily",
    category: "dhikr",
    priority: "medium",
    reference:
      "Hadith: \"Whoever says 'Astaghfirullah' 100 times, Allah will forgive his sins even if they are like the foam of the sea\"",
  },

  // Weekly Tasks
  {
    id: "friday-prayer",
    title: "Friday Prayer",
    description: "Attend Friday prayer at the mosque",
    type: "weekly",
    category: "prayer",
    dayOfWeek: 5, // Friday
    priority: "high",
    reference:
      'Quran 62:9 - "O you who have believed, when [the adhan] is called for the prayer on the day of Jumu\'ah [Friday], then proceed to the remembrance of Allah"',
  },
  {
    id: "weekly-quran-study",
    title: "Study Quran Translation",
    description: "Read and understand Quran translation",
    type: "weekly",
    category: "learning",
    dayOfWeek: 0, // Sunday
    priority: "medium",
    reference:
      'Quran 38:29 - "This is a blessed Book which We have revealed to you, [O Muhammad], that they might reflect upon its verses"',
  },
  {
    id: "charity-weekly",
    title: "Give Charity",
    description: "Give charity to the poor and needy",
    type: "weekly",
    category: "charity",
    dayOfWeek: 1, // Monday
    priority: "medium",
    reference:
      'Quran 2:267 - "O you who have believed, spend from the good things which you have earned"',
  },

  // Monthly Tasks
  {
    id: "monthly-quran-completion",
    title: "Complete Quran Recitation",
    description: "Complete reading the entire Quran",
    type: "monthly",
    category: "quran",
    priority: "high",
    reference:
      'Hadith: "The Quran will intercede for its companion on the Day of Resurrection"',
  },
  {
    id: "monthly-charity",
    title: "Monthly Charity",
    description: "Give monthly charity (Sadaqah)",
    type: "monthly",
    category: "charity",
    priority: "medium",
    reference:
      'Quran 9:60 - "Zakah expenditures are only for the poor and for the needy"',
  },
];

export const getTodaysSuggestedTodos = (): SuggestedTodo[] => {
  const today = new Date();
  const dayOfWeek = today.getDay();

  return suggestedTodos.filter((todo) => {
    if (todo.type === "daily") return true;
    if (todo.type === "weekly" && todo.dayOfWeek === dayOfWeek) return true;
    if (todo.type === "monthly" && today.getDate() === 1) return true;
    return false;
  });
};

export const getUpcomingSuggestedTodos = (): SuggestedTodo[] => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

  return suggestedTodos.filter((todo) => {
    if (todo.type === "daily") return true;
    if (todo.type === "weekly") {
      const nextWeek = new Date(today);
      nextWeek.setDate(nextWeek.getDate() + 7);
      return todo.dayOfWeek === nextWeek.getDay();
    }
    return false;
  });
};
