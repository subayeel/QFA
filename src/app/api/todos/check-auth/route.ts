import { NextResponse } from "next/server";
import { auth } from "@/auth";

// GET /api/todos/check-auth - Check if user is authenticated
export async function GET() {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ authenticated: false });
    }

    return NextResponse.json({
      authenticated: true,
      userId: session.user.id,
      user: {
        id: session.user.id,
        email: session.user.email,
        name: session.user.name,
      },
    });
  } catch (error) {
    console.error("Error checking authentication:", error);
    return NextResponse.json({ authenticated: false });
  }
}
