import { NextRequest, NextResponse } from "next/server";
import { Store } from "@/models/Store";
import { requireAuth } from "@/lib/auth";
import { connectDB } from "@/lib/db";

// ✅ Utility helper to unwrap async route params (Next.js 15+)
async function getParams<T>(context: { params: Promise<T> }): Promise<T> {
  return await context.params;
}

// ✅ Create a new store (no params)
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const user = await requireAuth(request);
    const { name, address } = await request.json();

    if (!name) {
      return NextResponse.json(
        { error: "Store name is required" },
        { status: 400 }
      );
    }

    const newStore = await Store.create({
      ownerId: user.userId,
      name,
      address,
    });

    return NextResponse.json(newStore, { status: 201 });
  } catch (err) {
    if (err instanceof Response) return err;
    console.error("Store creation error:", err);
    return NextResponse.json(
      { error: "Failed to create store" },
      { status: 500 }
    );
  }
}

// ✅ Update a user's store
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> } // ✅ fixed here
) {
  try {
    await connectDB();
    const { id } = await getParams(context);
    const user = await requireAuth(request);

    const store = await Store.findById(id);
    if (!store) {
      return NextResponse.json({ error: "Store not found" }, { status: 404 });
    }

    if (store.ownerId.toString() !== user.userId && user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const updates = await request.json();
    const updatedStore = await Store.findByIdAndUpdate(id, updates, {
      new: true,
    });

    return NextResponse.json(updatedStore);
  } catch (err) {
    if (err instanceof Response) return err;
    console.error("PUT /api/users/[id]/store error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// ✅ Delete a user's store
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> } // ✅ fixed here
) {
  try {
    await connectDB();
    const { id } = await getParams(context);
    const user = await requireAuth(request);

    const store = await Store.findById(id);
    if (!store) {
      return NextResponse.json({ error: "Store not found" }, { status: 404 });
    }

    if (store.ownerId.toString() !== user.userId && user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    await Store.findByIdAndDelete(id);
    return NextResponse.json({ message: "Store deleted" });
  } catch (err) {
    if (err instanceof Response) return err;
    console.error("DELETE /api/users/[id]/store error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
