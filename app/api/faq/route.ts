import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import FAQ from "@/models/FAQ";

export async function GET() {
  try {
    await connectDB();
    const faqs = await FAQ.find();
    return NextResponse.json(faqs);
  } catch (error) {
    console.error("Failed to fetch FAQs:", error);
    return NextResponse.json(
      { error: "Failed to fetch FAQs" },
      { status: 500 }
    );
  }
}
