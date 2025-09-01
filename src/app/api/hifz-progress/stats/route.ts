import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { HifzProgressService } from "@/services/hifzProgressService";

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const stats = await HifzProgressService.getProgressStats(session.user.id);
    const allSurahProgress = await HifzProgressService.getAllSurahProgress(
      session.user.id
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
