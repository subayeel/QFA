import SalahLesson1 from "@/app/components/courses/Salah/Lesson1";
import SalahLesson2 from "@/app/components/courses/Salah/Lesson2";
import SalahLesson3 from "@/app/components/courses/Salah/Lesson3";
import SalahLesson4 from "@/app/components/courses/Salah/Lesson4";
import SalahLesson5 from "@/app/components/courses/Salah/Lesson5";
import SalahLesson6 from "@/app/components/courses/Salah/Lesson6";
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
  ],
  tasks: [],
  duration: "45 mins",
  image: "/salah-icon.png",
};

export const imaanCourse: CourseDetailsType = {
  id: "IMAAN",
  name: "Imaan Booster",
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
  description: "Understand the history of the prophet Muhammad (PBUH)",
  color: "#EFF2DF",
  lessons: [],
  tasks: [],
  duration: "1 hour",
  image: "/history-icon.png",
};
export const miraclesCourse: CourseDetailsType = {
  id: "MIRACLES",
  name: "Miracles",
  description: "Understand the miracles of the prophet Muhammad (PBUH)",
  color: "#C2DAEF",
  lessons: [],
  tasks: [],
  duration: "1 hour",
  image: "/miracles-icon.png",
};
export const ethicsCourse: CourseDetailsType = {
  id: "ETHICS",
  name: "Ethics",
  description: "Understand the ethics of the prophet Muhammad (PBUH)",
  color: "#C8B7F5",
  lessons: [],
  tasks: [],
  duration: "1 hour",
  image: "/ethics-icon.png",
};
export const arabicCourse: CourseDetailsType = {
  id: "ARABIC",
  name: "Arabic",
  description: "Understand the Arabic language and how to read the Quran",
  color: "#FEF2C7",
  lessons: [],
  tasks: [],
  duration: "1 hour",
  image: "/arabic-icon.png",
};
export const azkaarCourse: CourseDetailsType = {
  id: "AZKAAR",
  name: "Azkaar",
  description: "Understand the Azkaar and how to recite them",
  color: "#F1DFDC",
  lessons: [],
  tasks: [],
  duration: "1 hour",
  image: "/azkaar-icon.png",
};

export const courses = {
  IMAAN: imaanCourse,
  SALAH: salahCourse,
  HISTORY: historyCourse,
  MIRACLES: miraclesCourse,
  ETHICS: ethicsCourse,
  ARABIC: arabicCourse,
  AZKAAR: azkaarCourse,
};
