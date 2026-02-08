import { NextResponse } from "next/server";
import { HifzProgressService } from "@/services/hifzProgressService";

export async function GET() {
  try {
    // Authentication removed - using placeholder userId
    const stats = await HifzProgressService.getProgressStats("anonymous");
    const allSurahProgress = await HifzProgressService.getAllSurahProgress(
      "anonymous"
    );

    return NextResponse.json({
      ...stats,
      allSurahProgress,
    });
  } catch (error) {
    console.error("Error fetching hifz stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
