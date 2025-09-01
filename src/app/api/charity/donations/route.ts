import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

// POST: Create a new donation
export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { type, amount, description, anonymous, donorName } = body;

    // Validate required fields
    if (!type) {
      return NextResponse.json(
        { error: "Donation type is required" },
        { status: 400 }
      );
    }

    // Create donation
    const donation = await prisma.donation.create({
      data: {
        type,
        amount: amount || null,
        description: description || null,
        anonymous: anonymous || false,
        donorName: anonymous ? donorName : null,
        userId: anonymous ? null : session.user.id,
        status: "PENDING",
      },
    });

    return NextResponse.json(
      { message: "Donation created successfully", donation },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating donation:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET: Retrieve donations (with optional filtering)
export async function GET(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const status = searchParams.get("status");
    const limit = parseInt(searchParams.get("limit") || "50");
    const offset = parseInt(searchParams.get("offset") || "0");

    // Build where clause
    const where: Record<string, unknown> = {};

    if (type) where.type = type;
    if (status) where.status = status;

    // Users can only see their own donations unless they're admin
    // For now, let's show all donations but mark user's own
    const donations = await prisma.donation.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: limit,
      skip: offset,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    // Add isOwn flag for each donation
    const donationsWithOwnFlag = donations.map((donation) => ({
      ...donation,
      isOwn: donation.userId === session.user?.id,
    }));

    return NextResponse.json({ donations: donationsWithOwnFlag });
  } catch (error) {
    console.error("Error fetching donations:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
