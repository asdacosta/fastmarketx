import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import jwt from "jsonwebtoken";

// You should ideally use a mailer service like SendGrid, Resend, etc.
async function sendResetEmail(email: string, token: string) {
  console.log(
    `🔐 Reset link: ${process.env.NEXT_PUBLIC_BASE_URL}/reset-password/${token}`
  );
}

export async function POST(req: NextRequest) {
  await connectDB();
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({
      message: "If this email exists, a link was sent.",
    }); // No email leakage
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });

  await sendResetEmail(user.email, token);

  return NextResponse.json({ message: "Reset email sent" });
}
