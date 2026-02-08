import { NextResponse } from "next/server";

// GET /api/todos/check-auth - Authentication removed (always returns false)
export async function GET() {
  return NextResponse.json({ authenticated: false });
}
