import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import { signToken } from "@/lib/jwt";

export async function POST(req: NextRequest) {
  await connectDB();
  const { name, gender, email, phone, campus, password } = await req.json();

  // If required fields are missing, return an error
  if (!name || !gender || !(email || phone) || !password) {
    return NextResponse.json({ error: "Complete all fields" }, { status: 400 });
  }

  // Check if a user already exists with the same email or phone
  const existingUser = await User.findOne({
    $or: [{ email }, { phone }],
  });

  if (existingUser) {
    return NextResponse.json(
      { error: "Email or phone already in use" },
      { status: 400 }
    );
  }

  const passwordHash = await bcrypt.hash(password, 10);

  // Create the new user, only saving the identifier they provided
  const newUser = await User.create({
    name,
    gender,
    email: email || undefined,
    phone: phone || undefined,
    campus,
    passwordHash,
  });

  const token = signToken(newUser._id.toString(), newUser.role);

  const response = NextResponse.json({
    token,
    user: {
      id: newUser._id,
      email: newUser.email || null,
      phone: newUser.phone || null,
    },
  });

  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });

  return response;
}
