import { NextRequest, NextResponse } from "next/server";
import { Store } from "@/models/Store";
import { connectDB } from "@/lib/db";

// Retrieves details of a specific store. (Public)
export async function GET(
  request: NextRequest,
  { params }: { params: { storeId: string } }
) {
  await connectDB();

  const store = await Store.findById(params.storeId);
  if (!store) {
    return NextResponse.json({ error: "Store not found" }, { status: 404 });
  }
  return NextResponse.json(store);
}
