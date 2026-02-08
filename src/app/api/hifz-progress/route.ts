import { NextRequest, NextResponse } from "next/server";
import { HifzProgressService } from "@/services/hifzProgressService";

export async function GET() {
  try {
    // Authentication removed - using placeholder userId
    // You may need to adjust this based on your requirements
    const summary = await HifzProgressService.getProgressSummary("anonymous");
    return NextResponse.json(summary);
  } catch (error) {
    console.error("Error fetching hifz progress:", error);
    return NextResponse.json(
      { error: "Failed to fetch progress" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { surahNumber, memorizedVerses, notes } = body;

    if (!surahNumber || typeof memorizedVerses !== "number") {
      return NextResponse.json(
        {
          error: "Invalid input: surahNumber and memorizedVerses are required",
        },
        { status: 400 }
      );
    }

    // Authentication removed - using placeholder userId
    const updatedProgress = await HifzProgressService.updateProgress(
      "anonymous",
      { surahNumber, memorizedVerses, notes }
    );

    return NextResponse.json(updatedProgress);
  } catch (error) {
    console.error("Error updating hifz progress:", error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Failed to update progress" },
      { status: 500 }
    );
  }
}
