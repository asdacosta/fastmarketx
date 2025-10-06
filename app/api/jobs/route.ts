import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Job } from "@/models/Job";

export async function GET() {
  try {
    await connectDB();

    const jobs = await Job.find();
    return NextResponse.json(jobs);
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    return NextResponse.json(
      { error: "Failed to fetch jobs" },
      { status: 500 }
    );
  }
}
