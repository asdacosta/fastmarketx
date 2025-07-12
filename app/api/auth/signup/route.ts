import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import { signToken } from "@/lib/jwt";

export async function POST(req: NextRequest) {
  await connectDB();
  const { name, gender, email, campus, password } = await req.json();

  // If empty body, throw error
  if (!name || !gender || !email || !password) {
    return NextResponse.json({ error: "Complete all fields" }, { status: 400 });
  }

  const user = await User.findOne({ email });
  if (user)
    return NextResponse.json(
      { error: "Email already in use" },
      { status: 400 }
    );

  const passwordHash = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    name,
    gender,
    email,
    campus,
    password: passwordHash,
  });

  const token = signToken(newUser._id.toString());

  const response = NextResponse.json({
    token,
    user: { id: newUser._id, email: newUser.email },
  });

  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return response;
}
