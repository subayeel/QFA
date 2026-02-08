import { NextRequest, NextResponse } from "next/server";
import { HifzProgressService } from "@/services/hifzProgressService";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ number: string }> }
) {
  try {
    const resolvedParams = await params;
    const surahNumber = parseInt(resolvedParams.number);
    if (isNaN(surahNumber) || surahNumber < 1 || surahNumber > 114) {
      return NextResponse.json(
        { error: "Invalid surah number" },
        { status: 400 }
      );
    }

    // Authentication removed - using placeholder userId
    const progress = await HifzProgressService.getSurahProgress(
      "anonymous",
      surahNumber
    );

    if (!progress) {
      return NextResponse.json({ error: "Surah not found" }, { status: 404 });
    }

    return NextResponse.json(progress);
  } catch (error) {
    console.error("Error fetching surah progress:", error);
    return NextResponse.json(
      { error: "Failed to fetch surah progress" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ number: string }> }
) {
  try {
    const resolvedParams = await params;
    const surahNumber = parseInt(resolvedParams.number);
    if (isNaN(surahNumber) || surahNumber < 1 || surahNumber > 114) {
      return NextResponse.json(
        { error: "Invalid surah number" },
        { status: 400 }
      );
    }

    // Authentication removed - using placeholder userId
    await HifzProgressService.resetSurahProgress("anonymous", surahNumber);
    return NextResponse.json({ message: "Progress reset successfully" });
  } catch (error) {
    console.error("Error resetting surah progress:", error);
    return NextResponse.json(
      { error: "Failed to reset progress" },
      { status: 500 }
    );
  }
}
