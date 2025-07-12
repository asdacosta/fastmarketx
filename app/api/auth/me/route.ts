import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { userId } = verifyToken(token);
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error("Auth Me Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
