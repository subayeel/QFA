export enum Religion {
  CHRISTIANITY = "christianity",
  ISLAM = "islam",
  BUDDHISM = "buddhism",
  JUDAISM = "judaism",
  SIKHISM = "sikhism",
  BAHAI = "bahai",
  JAINISM = "jainism",
  SHINTO = "shinto",
  TAOISM = "taoism",
  ZOROASTRIANISM = "zoroastrianism",
  CONFUCIANISM = "confucianism",
  ANIMISM = "animism",
  PAGANISM = "paganism",
  AGNOSTICISM = "agnosticism",
  ATHEISM = "atheism",
  HINDUISM = "hinduism",
}

export interface HifzPlanData {
  memoryRating: number | null;
  userCategory:
    | "student"
    | "employee"
    | "housewife"
    | "retired"
    | "unemployed"
    | null;
  schedule:
    | StudentSchedule
    | EmployeeSchedule
    | HousewifeSchedule
    | RetiredSchedule
    | UnemployedSchedule
    | null;
  // Potentially add plan details here once generated
  generatedPlan?: HifzPlanResult;
  memorizedSurahs?: number[];
}

export interface StudentSchedule {
  classHoursPerDay: number;
  studyHoursPerDay: number; // Added for realism
  daysPerWeekInClass: number;
  sleepHoursPerDay: number;
  choreHoursPerDay: number;
  leisureHoursPerDay: number;
  isVacation: boolean;
  vacationDays: number | null; // Only if isVacation is true
}

export interface EmployeeSchedule {
  workHoursPerDay: number;
  daysPerWeekAtWork: number;
  commuteHoursPerDay: number; // Added for realism
  sleepHoursPerDay: number;
  choreHoursPerDay: number;
  availableLeavesPerYear: number; // Maybe less useful for daily plan
  weekendLeisureHoursPerDay: number;
}

export interface HousewifeSchedule {
  choreHoursPerDay: number;
  childCareHoursPerDay: number; // Added for realism
  sleepHoursPerDay: number;
  personalTimeHoursPerDay: number;
}

export interface RetiredSchedule {
  sleepHoursPerDay: number;
  choreHoursPerDay: number;
  leisureHoursPerDay: number;
  leisureCommitmentHoursPerDay: number;
}

export interface UnemployedSchedule {
  jobSearchHoursPerDay: number;
  sleepHoursPerDay: number;
  choreHoursPerDay: number;
  personalTimeHoursPerDay: number;
}

export interface HifzPlanResult {
  dailyHifzTimeMinutes: number;
  memorizationMethod: string; // Description of the method
  estimatedPagesPerDay: number;
  estimatedDaysToComplete: number;
  estimatedTargetPerDayOnWeekDay: string;
  estimatedTargetPerDayOnWeekEnd?: string;
  estimatedTargetPerDayOnVacation?: string;
  estimatedCompletionDate: string;
  revisionScheduleSuggestion: string; // Basic suggestion
  availableHoursWeekday: number;
  availableHoursWeekend: number;

  memorizedVersesCount?: number;
  totalQuranVerses: number; // Add this for clarity in display
  percentageComplete?: number;
  remainingVersesToMemorize?: number; // Add this
}

export type UserCategory =
  | "student"
  | "employee"
  | "housewife"
  | "retired"
  | "unemployed";
