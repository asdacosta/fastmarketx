import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { User } from "@/models/User";

// Lists all users (admin only)
export async function GET(req: NextRequest) {
  try {
    const { role } = await requireAuth(req);

    if (role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const users = await User.find();
    return NextResponse.json(users);
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
