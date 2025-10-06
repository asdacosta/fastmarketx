import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Item } from "@/models/Item";
import { requireAuth } from "@/lib/auth";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const user = await requireAuth(req);

    const item = await Item.findById(params.id);
    if (!item) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    if (item.store.toString() !== user.userId && user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const updates = await req.json();
    Object.assign(item, updates);
    await item.save();

    return NextResponse.json({ product: item });
  } catch (err) {
    if (err instanceof Response) return err;
    console.error("PUT error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const user = await requireAuth(req);

    const item = await Item.findById(params.id);
    if (!item) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    if (item.store.toString() !== user.userId && user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    await item.deleteOne();
    return NextResponse.json({ message: "Deleted" });
  } catch (err) {
    if (err instanceof Response) return err;
    console.error("DELETE error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
