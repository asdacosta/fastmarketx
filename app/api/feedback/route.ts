import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { Feedback } from "@/models/Feedback";

export async function POST(request: NextRequest) {
  try {
    const { userId } = await requireAuth(request);
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const newFeedback = await Feedback.create({
      userId,
      message,
    });

    return NextResponse.json(newFeedback, { status: 201 });
  } catch (error: any) {
    const status = error.message === "Unauthorized" ? 401 : 500;
    return NextResponse.json(
      { error: error.message || "Server error" },
      { status }
    );
  }
}
