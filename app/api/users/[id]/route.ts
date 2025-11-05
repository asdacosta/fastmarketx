import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { User } from "@/models/User";

/**
 * Helper to unwrap async params in Next.js 15+
 */
async function getParams<T>(context: { params: Promise<T> }): Promise<T> {
  return await context.params;
}

/**
 * GET /api/users/[id]
 * Returns a user's profile (self or admin only)
 */
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> } // ✅ Promise-wrapped params
) {
  const { id } = await getParams(context); // ✅ Await the params
  const { userId, role } = await requireAuth(request);

  if (userId !== id && role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const profile = await User.findById(id);
  if (!profile) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(profile);
}

/**
 * PUT /api/users/[id]
 * Updates a user's profile (self or admin only)
 */
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await getParams(context);
  const { userId, role } = await requireAuth(request);

  if (userId !== id && role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const updates = await request.json();
  const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });

  if (!updatedUser) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(updatedUser);
}
