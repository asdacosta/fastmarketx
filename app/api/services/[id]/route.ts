import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Item } from "@/models/Item";
import { requireAuth } from "@/lib/auth";

// ✅ Helper to unwrap async params
async function getParams<T>(context: { params: Promise<T> }): Promise<T> {
  return await context.params;
}

/**
 * PUT /api/services/[id]
 * Update a service (requires ownership or admin)
 */
export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> } // ✅ Use async params type
) {
  try {
    const { id } = await getParams(context);
    await connectDB();

    const user = await requireAuth(req);

    const item = await Item.findById(id);
    if (!item) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    if (item.store.toString() !== user.userId && user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const updates = await req.json();
    Object.assign(item, updates);
    await item.save();

    return NextResponse.json({ service: item });
  } catch (err) {
    if (err instanceof Response) return err;
    console.error("PUT /services/[id] error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

/**
 * DELETE /api/services/[id]
 * Delete a service (requires ownership or admin)
 */
export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> } // ✅ Fix here too
) {
  try {
    const { id } = await getParams(context);
    await connectDB();

    const user = await requireAuth(req);

    const item = await Item.findById(id);
    if (!item) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    if (item.store.toString() !== user.userId && user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    await item.deleteOne();
    return NextResponse.json({ message: "Deleted" });
  } catch (err) {
    if (err instanceof Response) return err;
    console.error("DELETE /services/[id] error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
