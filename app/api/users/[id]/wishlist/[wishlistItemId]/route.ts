import { NextRequest, NextResponse } from "next/server";
import { Wishlist } from "@/models/Wishlist";
import { requireAuth } from "@/lib/auth";

// Removes an item from the user's wishlist
export async function DELETE(
  request: NextRequest,
  { params }: { params: { itemId: string } }
) {
  const { userId } = await requireAuth(request);

  const deleted = await Wishlist.findOneAndDelete({
    _id: params.itemId,
    userId,
  });

  if (!deleted) {
    return NextResponse.json(
      { error: "Item not found or not owned by user" },
      { status: 404 }
    );
  }

  return NextResponse.json({ message: "Item removed from wishlist" });
}
