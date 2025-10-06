import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { User } from "@/models/User";

// Returns a user’s profile
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { userId, role } = await requireAuth(request);

  // Allow only the user themselves or an admin
  if (userId !== params.id && role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const profile = await User.findById(params.id);
  if (!profile) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(profile);
}

// Updates a user’s profile
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { userId, role } = await requireAuth(request);

  if (userId !== params.id && role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const updates = await request.json();
  const updatedUser = await User.findByIdAndUpdate(params.id, updates, {
    new: true,
  });

  if (!updatedUser) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(updatedUser);
}
