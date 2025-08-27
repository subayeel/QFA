import { PrismaClient, Scope } from "@prisma/client";

const prisma = new PrismaClient();

const suggestedTodos = [
  // Daily Prayers
  {
    id: "fajr-prayer",
    title: "Fajr Prayer",
    description: "Perform Fajr prayer at its proper time",
    time: "04:21",
    category: "prayer",
    priority: "high",
    type: "suggested",
    scope: Scope.ADMIN,
    frequency: "daily",
    customLogic: "prayer_times",
    timePriority: 1,
  },
  {
    id: "dhuhr-prayer",
    title: "Dhuhr Prayer",
    description: "Perform Dhuhr prayer at its proper time",
    time: "12:30",
    category: "prayer",
    priority: "high",
    type: "suggested",
    scope: Scope.ADMIN,
    frequency: "daily",
    customLogic: "prayer_times",
    timePriority: 2,
  },
  {
    id: "asr-prayer",
    title: "Asr Prayer",
    description: "Perform Asr prayer at its proper time",
    time: "15:45",
    category: "prayer",
    priority: "high",
    type: "suggested",
    scope: Scope.ADMIN,
    frequency: "daily",
    customLogic: "prayer_times",
    timePriority: 3,
  },
  {
    id: "maghrib-prayer",
    title: "Maghrib Prayer",
    description: "Perform Maghrib prayer at its proper time",
    time: "18:30",
    category: "prayer",
    priority: "high",
    type: "suggested",
    scope: Scope.ADMIN,
    frequency: "daily",
    customLogic: "prayer_times",
    timePriority: 4,
  },
  {
    id: "isha-prayer",
    title: "Isha Prayer",
    description: "Perform Isha prayer at its proper time",
    time: "20:00",
    category: "prayer",
    priority: "high",
    type: "suggested",
    scope: Scope.ADMIN,
    frequency: "daily",
    customLogic: "prayer_times",
    timePriority: 5,
  },

  // Daily Quran Recitation
  {
    id: "daily-quran",
    title: "Recite Quran",
    description: "Read at least one page of Quran daily",
    category: "quran",
    priority: "high",
    type: "suggested",
    scope: Scope.ADMIN,
    frequency: "daily",
    timePriority: 10,
  },
  {
    id: "surah-mulk",
    title: "Recite Surah Al-Mulk",
    description: "Recite Surah Al-Mulk before sleeping",
    time: "21:00",
    category: "quran",
    priority: "medium",
    type: "suggested",
    scope: Scope.ADMIN,
    frequency: "daily",
    timePriority: 15,
  },
  {
    id: "ayat-al-kursi",
    title: "Recite Ayat Al-Kursi",
    description: "Recite Ayat Al-Kursi after each prayer",
    category: "quran",
    priority: "medium",
    type: "suggested",
    scope: Scope.ADMIN,
    frequency: "daily",
    timePriority: 12,
  },

  // Daily Dhikr
  {
    id: "morning-dhikr",
    title: "Morning Dhikr",
    description: "Recite morning adhkar (remembrance)",
    time: "06:00",
    category: "dhikr",
    priority: "medium",
    type: "suggested",
    scope: Scope.ADMIN,
    frequency: "daily",
    timePriority: 8,
  },
  {
    id: "evening-dhikr",
    title: "Evening Dhikr",
    description: "Recite evening adhkar (remembrance)",
    time: "18:00",
    category: "dhikr",
    priority: "medium",
    type: "suggested",
    scope: Scope.ADMIN,
    frequency: "daily",
    timePriority: 14,
  },
  {
    id: "istighfar",
    title: "Seek Forgiveness",
    description: "Recite Istighfar (Astaghfirullah) 100 times",
    category: "dhikr",
    priority: "medium",
    type: "suggested",
    scope: Scope.ADMIN,
    frequency: "daily",
    timePriority: 20,
  },

  // Weekly Tasks
  {
    id: "friday-prayer",
    title: "Friday Prayer",
    description: "Attend Friday prayer at the mosque",
    category: "prayer",
    priority: "high",
    type: "suggested",
    scope: Scope.ADMIN,
    frequency: "weekly",
    customLogic: "friday",
    timePriority: 1,
  },
  {
    id: "weekly-quran-study",
    title: "Study Quran Translation",
    description: "Read and understand Quran translation",
    category: "learning",
    priority: "medium",
    type: "suggested",
    scope: Scope.ADMIN,
    frequency: "weekly",
    customLogic: "sunday",
    timePriority: 25,
  },
  {
    id: "charity-weekly",
    title: "Give Charity",
    description: "Give charity to the poor and needy",
    category: "charity",
    priority: "medium",
    type: "suggested",
    scope: Scope.ADMIN,
    frequency: "weekly",
    customLogic: "monday",
    timePriority: 30,
  },

  // Monthly Tasks
  {
    id: "monthly-quran-completion",
    title: "Complete Quran Recitation",
    description: "Complete reading the entire Quran",
    category: "quran",
    priority: "high",
    type: "suggested",
    scope: Scope.ADMIN,
    frequency: "monthly",
    customLogic: "monthly",
    timePriority: 5,
  },
  {
    id: "monthly-charity",
    title: "Monthly Charity",
    description: "Give monthly charity (Sadaqah)",
    category: "charity",
    priority: "medium",
    type: "suggested",
    scope: Scope.ADMIN,
    frequency: "monthly",
    customLogic: "monthly",
    timePriority: 35,
  },
];

async function main() {
  console.log("🌱 Starting database seed...");

  // Clear existing suggested todos (todos with type "suggested")
  await prisma.todo.deleteMany({
    where: {
      type: "suggested",
    },
  });
  console.log("🗑️  Cleared existing suggested todos");

  // Insert suggested todos
  for (const todo of suggestedTodos) {
    await prisma.todo.create({
      data: todo,
    });
  }
  console.log(`✅ Inserted ${suggestedTodos.length} suggested todos`);

  console.log("🎉 Database seeding completed!");
}

main()
  .catch((e) => {
    console.error("❌ Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
