import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { Item } from "@/models/Item";
import { Store } from "@/models/Store";

// ✅ Helper to unwrap async params safely
async function getParams<T>(context: { params: Promise<T> }): Promise<T> {
  return await context.params;
}

// ✅ Update a product (store item)
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string; storeItemId: string }> } // ✅ matches [id] & [storeItemId]
) {
  try {
    const { id, storeItemId } = await getParams(context);
    const { userId, role } = await requireAuth(request);

    // Optional: clarify meaning
    const storeId = id;
    const productId = storeItemId;

    const store = await Store.findById(storeId);
    if (!store) {
      return NextResponse.json({ error: "Store not found" }, { status: 404 });
    }

    if (store.ownerId.toString() !== userId && role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const updates = await request.json();

    const updatedProduct = await Item.findOneAndUpdate(
      { _id: productId, store: storeId },
      updates,
      { new: true }
    );

    if (!updatedProduct) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.error("PUT /users/[id]/store/items/[storeItemId] error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// ✅ Delete a product (store item)
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string; storeItemId: string }> } // ✅ same fix
) {
  try {
    const { id, storeItemId } = await getParams(context);
    const { userId, role } = await requireAuth(request);

    const storeId = id;
    const productId = storeItemId;

    const store = await Store.findById(storeId);
    if (!store) {
      return NextResponse.json({ error: "Store not found" }, { status: 404 });
    }

    if (store.ownerId.toString() !== userId && role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const deleted = await Item.findOneAndDelete({
      _id: productId,
      store: storeId,
    });

    if (!deleted) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Product deleted" });
  } catch (error) {
    console.error("DELETE /users/[id]/store/items/[storeItemId] error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
