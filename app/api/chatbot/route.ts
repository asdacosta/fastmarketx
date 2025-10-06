import { NextRequest, NextResponse } from "next/server";
import ChatbotService from "@/models/ChatbotService";

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const reply = await ChatbotService.ask(message);
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chatbot error:", error);
    return NextResponse.json({ error: "Chatbot error" }, { status: 500 });
  }
}
