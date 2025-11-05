import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Item } from "@/models/Item";
import { requireAuth } from "@/lib/auth";

// ✅ Helper to extract dynamic route params
async function getParams<T>(context: { params: Promise<T> }): Promise<T> {
  return await context.params;
}

/**
 * PUT /api/products/[id]
 * Update a product (requires ownership or admin role)
 */
export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> } // ✅ async params
) {
  try {
    const { id } = await getParams(context);
    await connectDB();

    const user = await requireAuth(req);

    const item = await Item.findById(id);
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
    console.error("PUT /products/[id] error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

/**
 * DELETE /api/products/[id]
 * Delete a product (requires ownership or admin role)
 */
export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await getParams(context);
    await connectDB();

    const user = await requireAuth(req);

    const item = await Item.findById(id);
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
    console.error("DELETE /products/[id] error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
