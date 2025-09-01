import { prisma } from "@/lib/prisma";
import { QURAN_SURAHS, TOTAL_QURAN_VERSES } from "@/utils/quranData";
import type {
  HifzProgress,
  HifzProgressUpdate,
  HifzProgressSummary,
  SurahProgress,
} from "@/types/hifz.types";

export class HifzProgressService {
  /**
   * Get all hifz progress for a user
   */
  static async getUserProgress(userId: string): Promise<HifzProgress[]> {
    return await prisma.hifzProgress.findMany({
      where: { userId },
      orderBy: { surahNumber: "asc" },
    });
  }

  /**
   * Get hifz progress summary for a user
   */
  static async getProgressSummary(
    userId: string
  ): Promise<HifzProgressSummary> {
    const userProgress = await this.getUserProgress(userId);

    const totalMemorizedVerses = userProgress.reduce(
      (sum, progress) => sum + progress.memorizedVerses,
      0
    );

    const completedSurahs = userProgress.filter((p) => p.isCompleted).length;
    const totalSurahs = QURAN_SURAHS.length;

    const percentageComplete =
      TOTAL_QURAN_VERSES > 0
        ? Math.round((totalMemorizedVerses / TOTAL_QURAN_VERSES) * 100)
        : 0;

    // Get recent progress (last 5 updated)
    const recentProgress = userProgress
      .sort(
        (a, b) =>
          new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
      )
      .slice(0, 5);

    // Find next surah to memorize
    let nextSurahToMemorize;
    for (const surah of QURAN_SURAHS) {
      const existingProgress = userProgress.find(
        (p) => p.surahNumber === surah.number
      );
      if (
        !existingProgress ||
        existingProgress.memorizedVerses < surah.verses
      ) {
        const remainingVerses = existingProgress
          ? surah.verses - existingProgress.memorizedVerses
          : surah.verses;
        nextSurahToMemorize = {
          surahNumber: surah.number,
          surahName: surah.name,
          remainingVerses,
        };
        break;
      }
    }

    return {
      totalMemorizedVerses,
      totalQuranVerses: TOTAL_QURAN_VERSES,
      percentageComplete,
      completedSurahs,
      totalSurahs,
      recentProgress,
      nextSurahToMemorize,
    };
  }

  /**
   * Update hifz progress for a specific surah
   */
  static async updateProgress(
    userId: string,
    update: HifzProgressUpdate
  ): Promise<HifzProgress> {
    const surah = QURAN_SURAHS.find((s) => s.number === update.surahNumber);
    if (!surah) {
      throw new Error(`Surah ${update.surahNumber} not found`);
    }

    if (update.memorizedVerses > surah.verses) {
      throw new Error(
        `Cannot memorize more verses than total verses in surah ${surah.name}`
      );
    }

    const isCompleted = update.memorizedVerses === surah.verses;

    return await prisma.hifzProgress.upsert({
      where: {
        userId_surahNumber: {
          userId,
          surahNumber: update.surahNumber,
        },
      },
      update: {
        memorizedVerses: update.memorizedVerses,
        isCompleted,
        lastUpdated: new Date(),
        notes: update.notes,
      },
      create: {
        userId,
        surahNumber: update.surahNumber,
        surahName: surah.name,
        totalVerses: surah.verses,
        memorizedVerses: update.memorizedVerses,
        isCompleted,
        notes: update.notes,
      },
    });
  }

  /**
   * Get progress for a specific surah
   */
  static async getSurahProgress(
    userId: string,
    surahNumber: number
  ): Promise<SurahProgress | null> {
    const progress = await prisma.hifzProgress.findUnique({
      where: {
        userId_surahNumber: {
          userId,
          surahNumber,
        },
      },
    });

    if (!progress) {
      const surah = QURAN_SURAHS.find((s) => s.number === surahNumber);
      if (!surah) return null;

      return {
        surahNumber: surah.number,
        surahName: surah.name,
        totalVerses: surah.verses,
        memorizedVerses: 0,
        isCompleted: false,
        percentageComplete: 0,
      };
    }

    return {
      surahNumber: progress.surahNumber,
      surahName: progress.surahName,
      totalVerses: progress.totalVerses,
      memorizedVerses: progress.memorizedVerses,
      isCompleted: progress.isCompleted,
      percentageComplete: Math.round(
        (progress.memorizedVerses / progress.totalVerses) * 100
      ),
      lastUpdated: progress.lastUpdated,
    };
  }

  /**
   * Get all surahs with their progress
   */
  static async getAllSurahProgress(userId: string): Promise<SurahProgress[]> {
    const userProgress = await this.getUserProgress(userId);
    const progressMap = new Map(userProgress.map((p) => [p.surahNumber, p]));

    return QURAN_SURAHS.map((surah) => {
      const progress = progressMap.get(surah.number);
      if (!progress) {
        return {
          surahNumber: surah.number,
          surahName: surah.name,
          totalVerses: surah.verses,
          memorizedVerses: 0,
          isCompleted: false,
          percentageComplete: 0,
        };
      }

      return {
        surahNumber: progress.surahNumber,
        surahName: progress.surahName,
        totalVerses: progress.totalVerses,
        memorizedVerses: progress.memorizedVerses,
        isCompleted: progress.isCompleted,
        percentageComplete: Math.round(
          (progress.memorizedVerses / progress.totalVerses) * 100
        ),
        lastUpdated: progress.lastUpdated,
      };
    });
  }

  /**
   * Reset progress for a specific surah
   */
  static async resetSurahProgress(
    userId: string,
    surahNumber: number
  ): Promise<void> {
    await prisma.hifzProgress.deleteMany({
      where: {
        userId,
        surahNumber,
      },
    });
  }

  /**
   * Get progress statistics
   */
  static async getProgressStats(userId: string) {
    const summary = await this.getProgressSummary(userId);
    const allSurahProgress = await this.getAllSurahProgress(userId);

    const inProgressSurahs = allSurahProgress.filter(
      (s) => s.memorizedVerses > 0 && !s.isCompleted
    );

    const notStartedSurahs = allSurahProgress.filter(
      (s) => s.memorizedVerses === 0
    );

    return {
      ...summary,
      inProgressSurahs: inProgressSurahs.length,
      notStartedSurahs: notStartedSurahs.length,
      averageProgressPerSurah:
        allSurahProgress.length > 0
          ? Math.round(
              allSurahProgress.reduce(
                (sum, s) => sum + s.percentageComplete,
                0
              ) / allSurahProgress.length
            )
          : 0,
    };
  }
}
