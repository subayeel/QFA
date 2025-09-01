import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// POST: Create a new help request
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      type,
      title,
      description,
      urgency,
      contactName,
      contactEmail,
      contactPhone,
      location,
      quantity,
      preferredDelivery,
      additionalNotes,
    } = body;

    // Validate required fields
    if (!type || !title || !description) {
      return NextResponse.json(
        { error: "Type, title, and description are required" },
        { status: 400 }
      );
    }

    // Create help request (can be anonymous)
    const helpRequest = await prisma.helpRequest.create({
      data: {
        type,
        title,
        description,
        urgency: urgency || "medium",
        contactName: contactName || null,
        contactEmail: contactEmail || null,
        contactPhone: contactPhone || null,
        location: location || null,
        quantity: quantity || null,
        preferredDelivery: preferredDelivery || null,
        additionalNotes: additionalNotes || null,
        status: "PENDING",
      },
    });

    return NextResponse.json(
      { message: "Help request submitted successfully", helpRequest },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating help request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET: Retrieve help requests (with optional filtering)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const status = searchParams.get("status");
    const urgency = searchParams.get("urgency");
    const limit = parseInt(searchParams.get("limit") || "50");
    const offset = parseInt(searchParams.get("offset") || "0");

    // Build where clause
    const where: Record<string, unknown> = {};

    if (type) where.type = type;
    if (status) where.status = status;
    if (urgency) where.urgency = urgency;

    const helpRequests = await prisma.helpRequest.findMany({
      where,
      orderBy: [
        { urgency: "desc" }, // Critical and high urgency first
        { createdAt: "desc" },
      ],
      take: limit,
      skip: offset,
    });

    return NextResponse.json({ helpRequests });
  } catch (error) {
    console.error("Error fetching help requests:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
