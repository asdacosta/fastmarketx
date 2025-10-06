import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { User } from "@/models/User";

// Admin updates a user's info
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { role } = await requireAuth(request);

    if (role !== "admin") {
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
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

// Admin deletes a user
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { role } = await requireAuth(request);

    if (role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const deleted = await User.findByIdAndDelete(params.id);

    if (!deleted) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "User deleted" });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
