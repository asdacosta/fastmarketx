import { NextRequest, NextResponse } from "next/server";
import { Store } from "@/models/Store";
import { connectDB } from "@/lib/db";

// ✅ Helper for async route params
async function getParams<T>(context: { params: Promise<T> }): Promise<T> {
  return await context.params;
}

/**
 * GET /api/stores/[id]
 * Retrieves details of a specific store (Public)
 */
export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> } // ✅ must be a Promise
) {
  await connectDB();

  // ✅ Unwrap the async params
  const { id } = await getParams(context);

  const store = await Store.findById(id);
  if (!store) {
    return NextResponse.json({ error: "Store not found" }, { status: 404 });
  }

  return NextResponse.json(store);
}
