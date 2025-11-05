import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { Item } from "@/models/Item";

/**
 * PUT /api/admin/items/[id]
 * Updates an item by ID (Admin only)
 */
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> } // 👈 context.params is a Promise
) {
  // ✅ Must await it to get { id }
  const { id } = await context.params;

  const { userId } = await requireAuth(request);

  if (userId !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const updates = await request.json();
    const updatedItem = await Item.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedItem) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    return NextResponse.json(updatedItem);
  } catch (error) {
    console.error("PUT /admin/items/[id] error:", error);
    return NextResponse.json(
      { error: "Failed to update item" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/admin/items/[id]
 * Deletes an item by ID (Admin only)
 */
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  // ✅ same fix
  const { id } = await context.params;

  const { userId } = await requireAuth(request);

  if (userId !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const deleted = await Item.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Item deleted" });
  } catch (error) {
    console.error("DELETE /admin/items/[id] error:", error);
    return NextResponse.json(
      { error: "Failed to delete item" },
      { status: 500 }
    );
  }
}
