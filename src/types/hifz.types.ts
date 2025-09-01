export interface HifzProgress {
  id: string;
  userId: string;
  surahNumber: number;
  surahName: string;
  totalVerses: number;
  memorizedVerses: number;
  isCompleted: boolean;
  lastUpdated: Date;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface HifzProgressUpdate {
  surahNumber: number;
  memorizedVerses: number;
  notes?: string;
}

export interface HifzProgressSummary {
  totalMemorizedVerses: number;
  totalQuranVerses: number;
  percentageComplete: number;
  completedSurahs: number;
  totalSurahs: number;
  recentProgress: HifzProgress[];
  nextSurahToMemorize?: {
    surahNumber: number;
    surahName: string;
    remainingVerses: number;
  };
}

export interface SurahProgress {
  surahNumber: number;
  surahName: string;
  totalVerses: number;
  memorizedVerses: number;
  isCompleted: boolean;
  percentageComplete: number;
  lastUpdated?: Date;
}
