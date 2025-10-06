import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { Cart } from "@/models/Cart";

// Updates the quantity of a cart item
export async function PUT(
  request: NextRequest,
  { params }: { params: { cartId: string } }
) {
  const { userId } = await requireAuth(request);
  const { quantity } = await request.json();

  if (quantity == null) {
    return NextResponse.json(
      { error: "Quantity is required" },
      { status: 400 }
    );
  }

  const updated = await Cart.findOneAndUpdate(
    { _id: params.cartId, userId },
    { quantity },
    { new: true }
  );

  if (!updated) {
    return NextResponse.json(
      { error: "Item not found or not owned by user" },
      { status: 404 }
    );
  }

  return NextResponse.json(updated);
}

// Removes a cart item
export async function DELETE(
  request: NextRequest,
  { params }: { params: { cartId: string } }
) {
  const { userId } = await requireAuth(request);

  const deleted = await Cart.findOneAndDelete({
    _id: params.cartId,
    userId,
  });

  if (!deleted) {
    return NextResponse.json(
      { error: "Item not found or not owned by user" },
      { status: 404 }
    );
  }

  return NextResponse.json({ message: "Item removed from cart" });
}
