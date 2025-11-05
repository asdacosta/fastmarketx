import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Item } from "@/models/Item";
import { requireAuth } from "@/lib/auth";

// ✅ Helper to extract params cleanly
async function getParams<T>(context: { params: Promise<T> }): Promise<T> {
  return await context.params;
}

/**
 * GET /api/meals/[id]
 * Fetch a meal item by ID
 */
export async function GET(
  _: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await getParams(context);
  await connectDB();

  const item = await Item.findById(id)
    .populate("store", "name")
    .populate("category", "name");

  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(item);
}

/**
 * PUT /api/meals/[id]
 * Update a meal item (auth required)
 */
export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await getParams(context);
  await connectDB();
  await requireAuth(req);

  const updates = await req.json();
  const item = await Item.findById(id);

  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });

  Object.assign(item, updates);
  await item.save();

  return NextResponse.json(item);
}

/**
 * DELETE /api/meals/[id]
 * Delete a meal item (auth required)
 */
export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await getParams(context);
  await connectDB();
  await requireAuth(req);

  const item = await Item.findById(id);
  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });

  await item.deleteOne();
  return NextResponse.json({ message: "Deleted" });
}
