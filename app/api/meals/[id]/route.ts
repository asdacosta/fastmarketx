import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Item } from "@/models/Item";
import { requireAuth } from "@/lib/auth";

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  const item = await Item.findById(params.id)
    .populate("store", "name")
    .populate("category", "name");

  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(item);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  await requireAuth(req);
  const updates = await req.json();

  const item = await Item.findById(params.id);
  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });

  Object.assign(item, updates);
  await item.save();

  return NextResponse.json(item);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  await requireAuth(req);

  const item = await Item.findById(params.id);
  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });

  await item.deleteOne();
  return NextResponse.json({ message: "Deleted" });
}
