import SalahLesson1 from "@/app/components/courses/Salah/Lesson1";
import SalahLesson2 from "@/app/components/courses/Salah/Lesson2";
import SalahLesson3 from "@/app/components/courses/Salah/Lesson3";
import SalahLesson4 from "@/app/components/courses/Salah/Lesson4";
import SalahLesson5 from "@/app/components/courses/Salah/Lesson5";
import SalahLesson6 from "@/app/components/courses/Salah/Lesson6";
import SalahLesson7 from "@/app/components/courses/Salah/Lesson7";
import SalahLesson8 from "@/app/components/courses/Salah/Lesson8";
import ImaanLesson1 from "@/app/components/courses/Imaan/Lesson1";
import ImaanLesson2 from "@/app/components/courses/Imaan/Lesson2";
import ImaanLesson3 from "@/app/components/courses/Imaan/Lesson3";
import { CourseDetailsType } from "@/types/course.types";
import ImaanLesson4 from "@/app/components/courses/Imaan/Lesson4";
import ImaanLesson5 from "@/app/components/courses/Imaan/Lesson5";
import ImaanLesson6 from "@/app/components/courses/Imaan/Lesson6";
import ImaanLesson7 from "@/app/components/courses/Imaan/Lesson7";
import ImaanLesson8 from "@/app/components/courses/Imaan/Lesson8";
import ImaanTask1 from "@/app/components/courses/Imaan/Task1";
import MiraclesLesson1 from "@/app/components/courses/Miracles/Lesson1";
import MiraclesLesson2 from "@/app/components/courses/Miracles/Lesson2";
import MiraclesLesson3 from "@/app/components/courses/Miracles/Lesson3";
import MiraclesLesson4 from "@/app/components/courses/Miracles/Lesson4";
import MiraclesLesson5 from "@/app/components/courses/Miracles/Lesson5";
import MiraclesLesson6 from "@/app/components/courses/Miracles/Lesson6";
import MiraclesLesson7 from "@/app/components/courses/Miracles/Lesson7";
import MiraclesLesson8 from "@/app/components/courses/Miracles/Lesson8";
import MiraclesLesson9 from "@/app/components/courses/Miracles/Lesson9";
import MiraclesLesson10 from "@/app/components/courses/Miracles/Lesson10";
import MiraclesLesson11 from "@/app/components/courses/Miracles/Lesson11";
import MiraclesLesson12 from "@/app/components/courses/Miracles/Lesson12";
import HistoryLesson1 from "@/app/components/courses/History/Lesson1";
import HistoryLesson2 from "@/app/components/courses/History/Lesson2";
import HistoryLesson3 from "@/app/components/courses/History/Lesson3";
import HistoryLesson4 from "@/app/components/courses/History/Lesson4";
import HistoryLesson5 from "@/app/components/courses/History/Lesson5";
import HistoryLesson6 from "@/app/components/courses/History/Lesson6";
import GlobalMessageLesson1 from "@/app/components/courses/GlobalMessage/Lesson1";
import GlobalMessageLesson2 from "@/app/components/courses/GlobalMessage/Lesson2";
import GlobalMessageLesson3 from "@/app/components/courses/GlobalMessage/Lesson3";
import TawheedLesson1 from "@/app/components/courses/Tawheed/Lesson1";
import TawheedLesson2 from "@/app/components/courses/Tawheed/Lesson2";
import SolutionsLesson1 from "@/app/components/courses/Solutions/Lesson1";
import SolutionsLesson2 from "@/app/components/courses/Solutions/Lesson2";
import SolutionsLesson3 from "@/app/components/courses/Solutions/Lesson3";
import SolutionsLesson4 from "@/app/components/courses/Solutions/Lesson4";
import ProphetCharacterLesson1 from "@/app/components/courses/Prophet/Lesson1";
import ArabicLesson1 from "@/app/components/courses/Arabic/Lesson1";
import AzkaarLesson1 from "@/app/components/courses/Azkaar/Lesson1";

export const salahCourse: CourseDetailsType = {
  id: "SALAH",
  name: "Salah",
  description: "Understand Salah and how to perform it correctly",
  color: "#F1E5C1",
  lessons: [
    {
      id: "SalahLesson1",
      lessonName: "Preparation for Prayer",
      lessonDescription:
        "Essential preparations before beginning the prayer including ritual purity, proper attire, and intention",
      lessonContent: SalahLesson1,
      duration: "5 mins",
    },
    {
      id: "SalahLesson2",
      lessonName: "Prayer Steps - Part 1",
      lessonDescription:
        "Step-by-step guide from Takbir to Ruku including opening supplications and Surah Al-Fatihah",
      lessonContent: SalahLesson2,
      duration: "10 mins",
    },
    {
      id: "SalahLesson3",
      lessonName: "Prayer Steps - Part 2",
      lessonDescription:
        "Continuing the prayer from I'tidal to Taslim including Sujud, Tashahhud, and concluding supplications",
      lessonContent: SalahLesson3,
      duration: "10 mins",
    },
    {
      id: "SalahLesson4",
      lessonName: "Post-Prayer Adhkar",
      lessonDescription:
        "Recommended remembrances and supplications to recite after completing the obligatory prayer",
      lessonContent: SalahLesson4,
      duration: "8 mins",
    },
    {
      id: "SalahLesson5",
      lessonName: "Achieving Khushu",
      lessonDescription:
        "Tips and guidance for achieving humility, concentration, and mindfulness during prayer",
      lessonContent: SalahLesson5,
      duration: "7 mins",
    },
    {
      id: "SalahLesson6",
      lessonName: "Common Mistakes to Avoid",
      lessonDescription:
        "Important mistakes to be aware of that can affect the validity or quality of your prayer",
      lessonContent: SalahLesson6,
      duration: "5 mins",
    },
    {
      id: "SalahLesson7",
      lessonName: "Last 10 Surahs with Translation and Tafsir",
      lessonDescription:
        "Learn the final ten surahs of the Quran with their meanings and explanations",
      lessonContent: SalahLesson7,
      duration: "20 mins",
    },
    {
      id: "SalahLesson8",
      lessonName: "17 Azkar After Salah",
      lessonDescription:
        "Recommended remembrances and supplications to recite after completing the obligatory prayer",
      lessonContent: SalahLesson8,
      duration: "15 mins",
    },
  ],
  tasks: [],
  duration: "1 hour 20 mins",
  image: "/salah-icon.png",
};

export const imaanCourse: CourseDetailsType = {
  id: "IMAAN",
  name: "Faith",
  description: "Understand Imaan and how to develop it",
  color: "#F1DFDC",
  lessons: [
    {
      id: "ImaanLesson1",
      lessonName: "Understanding God's Existence Through Reason",
      lessonDescription:
        "Exploring the evidence for the Creator through common sense, design, and universal order",
      lessonContent: ImaanLesson1,
      duration: "5 mins",
    },
    {
      id: "ImaanLesson2",
      lessonName: "Philosophical Understanding",
      lessonDescription:
        "Logical proofs for the existence of God and why there must be one unique, necessary, and independent creator",
      lessonContent: ImaanLesson2,
      duration: "15 mins",
    },
    {
      id: "ImaanLesson3",
      lessonName: "Understanding God's Oneness",
      lessonDescription:
        "Explore why there can only be One Creator and why this Creator must be different from everything in our universe.",
      lessonContent: ImaanLesson3,
      duration: "10 mins",
    },

    {
      id: "ImaanLesson4",
      lessonName: "Why We Need Divine Guidance",
      lessonDescription:
        "Exploring the necessity of revelation and why the Creator would communicate with us",
      lessonContent: ImaanLesson4,
      duration: "10 mins",
    },

    {
      id: "ImaanLesson5",
      lessonName: "Journey of Comparative Religions",
      lessonDescription:
        "There are many religions in the world, but which complies with the truth?",
      lessonContent: ImaanLesson5,
      duration: "15 mins",
    },

    {
      id: "ImaanLesson6",
      lessonName: "Messenger to deliver the Divine Guidance?",
      lessonDescription:
        "Explore the logical analysis of Prophet Muhammad's claim to prophethood",
      lessonContent: ImaanLesson6,
      duration: "10 mins",
    },
    {
      id: "ImaanLesson7",
      lessonName: "Why the Quran is Divine Revelation",
      lessonDescription:
        "Discover the compelling evidence for the divine origin of the Quran",
      lessonContent: ImaanLesson7,
      duration: "15 mins",
    },
    {
      id: "ImaanLesson8",
      lessonName: "Science and the Quran",
      lessonDescription: "Scientific Miracles in the Quran",
      lessonContent: ImaanLesson8,
      duration: "15 mins",
    },
  ],
  tasks: [
    {
      id: "1",
      taskName: "Contemplate",
      taskContent: ImaanTask1,
    },
  ],
  duration: "1 hour",
  image: "/imaan-icon.png",
};
export const historyCourse: CourseDetailsType = {
  id: "HISTORY",
  name: "History",
  description:
    "Understand the history of revelation and preservation of the Quran",
  color: "#EFF2DF",
  lessons: [
    {
      id: "HistoryLesson1",
      lessonName: "Revelations from God",
      lessonDescription:
        "Exploring the divine revelations sent to humanity throughout history and their purposes",
      lessonContent: HistoryLesson1,
      duration: "15 mins",
    },
    {
      id: "HistoryLesson2",
      lessonName: "Other Books Claiming to be from God",
      lessonDescription:
        "Understanding how to evaluate claims of divine revelation and criteria for authenticity",
      lessonContent: HistoryLesson2,
      duration: "15 mins",
    },
    {
      id: "HistoryLesson3",
      lessonName: "History of Books and Their Corruption",
      lessonDescription:
        "Examining how previous divine revelations were altered over time",
      lessonContent: HistoryLesson3,
      duration: "15 mins",
    },
    {
      id: "HistoryLesson4",
      lessonName: "Revealing of Quran in 23 Years",
      lessonDescription:
        "Understanding the gradual revelation of the Quran and the wisdom behind it",
      lessonContent: HistoryLesson4,
      duration: "15 mins",
    },
    {
      id: "HistoryLesson5",
      lessonName: "Compilation of Parchments by Khulafah",
      lessonDescription:
        "How the Quran was compiled into a single book during the caliphates of Abu Bakr and Uthman",
      lessonContent: HistoryLesson5,
      duration: "15 mins",
    },
    {
      id: "HistoryLesson6",
      lessonName: "Maintained Preservation of Quran",
      lessonDescription:
        "Exploring the unique methods that ensure the Quran's perfect preservation",
      lessonContent: HistoryLesson6,
      duration: "15 mins",
    },
  ],
  tasks: [],
  duration: "1.5 hours",
  image: "/history-icon.png",
};
export const miraclesCourse: CourseDetailsType = {
  id: "MIRACLES",
  name: "Miracles",
  description: "Miracles present in Quran",
  color: "#C2DAEF",
  lessons: [
    {
      id: "MiraclesLesson1",
      lessonName: "Astronomy",
      lessonDescription: "Astronomical Miracles in Quran",
      lessonContent: MiraclesLesson1,
      duration: "15m",
    },
    {
      id: "MiraclesLesson2",
      lessonName: "Biology",
      lessonDescription: "Biological Miracles in Quran",
      lessonContent: MiraclesLesson2,
      duration: "15m",
    },
    {
      id: "MiraclesLesson3",
      lessonName: "Chemistry",
      lessonDescription: "Astronomical Miracles in Quran",
      lessonContent: MiraclesLesson3,
      duration: "15m",
    },
    {
      id: "MiraclesLesson4",
      lessonName: "Cosmology",
      lessonDescription: "Cosmological Miracles in Quran",
      lessonContent: MiraclesLesson4,
      duration: "15m",
    },
    {
      id: "MiraclesLesson5",
      lessonName: "Embryology",
      lessonDescription: "Embryological Miracles in Quran",
      lessonContent: MiraclesLesson5,
      duration: "15m",
    },
    {
      id: "MiraclesLesson6",
      lessonName: "Geology",
      lessonDescription: "Geological Miracles in Quran",
      lessonContent: MiraclesLesson6,
      duration: "15m",
    },
    {
      id: "MiraclesLesson7",
      lessonName: "History",
      lessonDescription: "Historical Miracles in Quran",
      lessonContent: MiraclesLesson7,
      duration: "15m",
    },
    {
      id: "MiraclesLesson8",
      lessonName: "Mathematics",
      lessonDescription: "Mathematical Miracles in Quran",
      lessonContent: MiraclesLesson8,
      duration: "15m",
    },
    {
      id: "MiraclesLesson9",
      lessonName: "Meteorology",
      lessonDescription: "Meteorological Miracles in Quran",
      lessonContent: MiraclesLesson9,
      duration: "15m",
    },
    {
      id: "MiraclesLesson10",
      lessonName: "Physics",
      lessonDescription: "Physical Miracles in Quran",
      lessonContent: MiraclesLesson10,
      duration: "15m",
    },
    {
      id: "MiraclesLesson11",
      lessonName: "Physiology",
      lessonDescription: "Physiological Miracles in Quran",
      lessonContent: MiraclesLesson11,
      duration: "15m",
    },
    {
      id: "MiraclesLesson12",
      lessonName: "Zoology",
      lessonDescription: "Zoological Miracles in Quran",
      lessonContent: MiraclesLesson12,
      duration: "15m",
    },
  ],
  tasks: [],
  duration: "3 hrs",
  image: "/miracles-icon.png",
};
export const prophetCharacterCourse: CourseDetailsType = {
  id: "PROPHET_CHARACTER",
  name: "Prophet",
  description: "Understand the character of Prophet Muhammad (PBUH)",
  color: "#C8B7F5",
  lessons: [
    {
      id: "ProphetCharacterLesson1",
      lessonName: "The Character of Prophet Muhammad (PBUH)",
      lessonDescription:
        "Exploring the exemplary character and ethical conduct of the Prophet",
      lessonContent: ProphetCharacterLesson1,
      duration: "20 mins",
    },
  ],
  tasks: [],
  duration: "20 mins",
  image: "/ethics-icon.png",
};
export const arabicCourse: CourseDetailsType = {
  id: "ARABIC",
  name: "Arabic",
  description: "Understand the Arabic language and how to read the Quran",
  color: "#FEF2C7",
  lessons: [
    {
      id: "ArabicLesson1",
      lessonName: "Introduction to Arabic Language",
      lessonDescription:
        "Basics of Arabic alphabet, reading, and understanding Quranic Arabic",
      lessonContent: ArabicLesson1,
      duration: "20 mins",
    },
  ],
  tasks: [],
  duration: "20 mins",
  image: "/arabic-icon.png",
};
export const azkaarCourse: CourseDetailsType = {
  id: "AZKAAR",
  name: "Azkaar",
  description: "Understand the Azkaar and how to recite them",
  color: "#F1DFDC",
  lessons: [
    {
      id: "AzkaarLesson1",
      lessonName: "Understanding Azkaar (Remembrances)",
      lessonDescription:
        "Introduction to Azkaar, their importance, and how to practice them",
      lessonContent: AzkaarLesson1,
      duration: "20 mins",
    },
  ],
  tasks: [],
  duration: "20 mins",
  image: "/azkaar-icon.png",
};

export const oneMessageCourse: CourseDetailsType = {
  id: "ONE_MESSAGE",
  name: "One Message",
  description: "Understanding the one message of the Quran for all of humanity",
  color: "#D4E6F1",
  lessons: [
    {
      id: "OneMessageLesson1",
      lessonName: "The Universal Message",
      lessonDescription:
        "Understanding how the Quran addresses all of humanity, not just a specific group",
      lessonContent: GlobalMessageLesson1,
      duration: "15 mins",
    },
    {
      id: "OneMessageLesson2",
      lessonName: "Unity in Diversity",
      lessonDescription:
        "How the Quran recognizes human diversity while emphasizing our essential unity",
      lessonContent: GlobalMessageLesson2,
      duration: "15 mins",
    },
    {
      id: "OneMessageLesson3",
      lessonName: "Universal Values and Ethics",
      lessonDescription:
        "Core moral principles from the Quran that apply to all humanity",
      lessonContent: GlobalMessageLesson3,
      duration: "15 mins",
    },
  ],
  tasks: [],
  duration: "45 mins",
  image: "/one-message-illustration.png",
};

export const tawheedCourse: CourseDetailsType = {
  id: "TAWHEED",
  name: "Tawheed",
  description: "Understanding the oneness and uniqueness of Allah",
  color: "#E8D5C4",
  lessons: [
    {
      id: "TawheedLesson1",
      lessonName: "Understanding Tawheed: The Oneness of Allah",
      lessonDescription:
        "The foundation of Islam - understanding the three categories of Tawheed",
      lessonContent: TawheedLesson1,
      duration: "20 mins",
    },
    {
      id: "TawheedLesson2",
      lessonName: "Shirk: The Greatest Sin",
      lessonDescription:
        "Understanding Shirk and its various forms, and how to protect ourselves from it",
      lessonContent: TawheedLesson2,
      duration: "20 mins",
    },
  ],
  tasks: [],
  duration: "40 mins",
  image: "/tawheed-illustration.webp",
};

export const solutionsCourse: CourseDetailsType = {
  id: "SOLUTIONS",
  name: "One Solution",
  description: "How the Quran provides solutions to modern problems",
  color: "#F5D7DA",
  lessons: [
    {
      id: "SolutionsLesson1",
      lessonName: "Corruption in Government",
      lessonDescription:
        "Quranic principles for establishing just governance and preventing corruption",
      lessonContent: SolutionsLesson1,
      duration: "20 mins",
    },
    {
      id: "SolutionsLesson2",
      lessonName: "Failing Marriages",
      lessonDescription:
        "Building strong marriages based on Quranic principles of love, mercy, and respect",
      lessonContent: SolutionsLesson2,
      duration: "20 mins",
    },
    {
      id: "SolutionsLesson3",
      lessonName: "Obesity and Health",
      lessonDescription:
        "Maintaining physical health through moderation and self-discipline as taught in the Quran",
      lessonContent: SolutionsLesson3,
      duration: "20 mins",
    },
    {
      id: "SolutionsLesson4",
      lessonName: "Declining Moral Values",
      lessonDescription:
        "The Quran's comprehensive moral framework for addressing moral decline in society",
      lessonContent: SolutionsLesson4,
      duration: "20 mins",
    },
  ],
  tasks: [],
  duration: "1 hour 20 mins",
  image: "/one-solution-illustration.png",
};

export const courses = {
  IMAAN: imaanCourse,
  MIRACLES: miraclesCourse,
  SALAH: salahCourse,
  AZKAAR: azkaarCourse,
  ARABIC: arabicCourse,
  HISTORY: historyCourse,
  ONE_MESSAGE: oneMessageCourse,
  TAWHEED: tawheedCourse,
  SOLUTIONS: solutionsCourse,
  PROPHET_CHARACTER: prophetCharacterCourse,
};
