import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { HifzProgressService } from "@/services/hifzProgressService";

export async function GET(
  request: NextRequest,
  { params }: { params: { number: string } }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const surahNumber = parseInt(params.number);
    if (isNaN(surahNumber) || surahNumber < 1 || surahNumber > 114) {
      return NextResponse.json(
        { error: "Invalid surah number" },
        { status: 400 }
      );
    }

    const progress = await HifzProgressService.getSurahProgress(
      session.user.id,
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
  { params }: { params: { number: string } }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const surahNumber = parseInt(params.number);
    if (isNaN(surahNumber) || surahNumber < 1 || surahNumber > 114) {
      return NextResponse.json(
        { error: "Invalid surah number" },
        { status: 400 }
      );
    }

    await HifzProgressService.resetSurahProgress(session.user.id, surahNumber);
    return NextResponse.json({ message: "Progress reset successfully" });
  } catch (error) {
    console.error("Error resetting surah progress:", error);
    return NextResponse.json(
      { error: "Failed to reset progress" },
      { status: 500 }
    );
  }
}
