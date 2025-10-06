import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { Item } from "@/models/Item";
import { Store } from "@/models/Store";

// Update a product
export async function PUT(
  request: NextRequest,
  { params }: { params: { storeId: string; productId: string } }
) {
  try {
    const { userId, role } = await requireAuth(request);

    const store = await Store.findById(params.storeId);
    if (!store) {
      return NextResponse.json({ error: "Store not found" }, { status: 404 });
    }

    if (store.ownerId.toString() !== userId && role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const updates = await request.json();

    const updatedProduct = await Item.findOneAndUpdate(
      { _id: params.productId, store: params.storeId },
      updates,
      { new: true }
    );

    if (!updatedProduct) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// Delete a product
export async function DELETE(
  request: NextRequest,
  { params }: { params: { storeId: string; productId: string } }
) {
  try {
    const { userId, role } = await requireAuth(request);

    const store = await Store.findById(params.storeId);
    if (!store) {
      return NextResponse.json({ error: "Store not found" }, { status: 404 });
    }

    if (store.ownerId.toString() !== userId && role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const deleted = await Item.findOneAndDelete({
      _id: params.productId,
      store: params.storeId,
    });

    if (!deleted) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Product deleted" });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
