import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { Item } from "@/models/Item";

// Admin updates a product
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { userId } = await requireAuth(request);
  if (userId !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const updates = await request.json();
  const updatedItem = await Item.findByIdAndUpdate(params.id, updates, {
    new: true,
  });

  if (!updatedItem) {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }

  return NextResponse.json(updatedItem);
}

// Admin deletes a product
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { userId } = await requireAuth(request);
  if (userId !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const deleted = await Item.findByIdAndDelete(params.id);

  if (!deleted) {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Item deleted" });
}
