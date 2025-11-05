import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

interface TokenPayload {
  userId: string;
  iat: number;
  exp: number;
}

/**
 * POST /api/auth/reset-pwd/[token]
 * Resets a user’s password using a token
 */
export async function POST(
  req: NextRequest,
  context: { params: Promise<{ token: string }> } // ✅ async params
) {
  await connectDB();

  const { token } = await context.params; // ✅ await to extract token
  const { newPassword } = await req.json();

  if (!token || !newPassword) {
    return NextResponse.json(
      { error: "Token and new password are required" },
      { status: 400 }
    );
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as TokenPayload;

    const user = await User.findById(decoded.userId);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    return NextResponse.json({ message: "Password has been reset" });
  } catch (error) {
    console.error("POST /auth/reset-pwd/[token] error:", error);
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 400 }
    );
  }
}
