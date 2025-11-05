import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import { Wishlist } from "@/models/Wishlist";

// ✅ Helper to unwrap async params
async function getParams<T>(context: { params: Promise<T> }): Promise<T> {
  return await context.params;
}

// ✅ DELETE: Remove an item from a user's wishlist
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string; wishlistItemId: string }> } // ✅ FIXED
) {
  try {
    await connectDB();
    const { id, wishlistItemId } = await getParams(context);
    const user = await requireAuth(request);

    // Ensure user matches the wishlist owner (or is admin)
    if (user.userId !== id && user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const deleted = await Wishlist.findOneAndDelete({
      _id: wishlistItemId,
      userId: id,
    });

    if (!deleted) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Wishlist item deleted" });
  } catch (error) {
    if (error instanceof Response) return error;
    console.error(
      "DELETE /api/users/[id]/wishlist/[wishlistItemId] error:",
      error
    );
    return NextResponse.json(
      { error: "Failed to delete wishlist item" },
      { status: 500 }
    );
  }
}
