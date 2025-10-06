import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Store } from "@/models/Store";

// Lists all stores (public)

export async function GET() {
  try {
    await connectDB();

    const stores = await Store.find().sort({ name: 1 }); // Sort by name ascending

    return NextResponse.json({ stores });
  } catch (error) {
    console.error("Error fetching stores:", error);
    return NextResponse.json(
      { error: "Failed to fetch stores" },
      { status: 500 }
    );
  }
}
