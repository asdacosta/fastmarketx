import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { Cart } from "@/models/Cart";

/**
 * Helper: unwraps the async params
 */
async function getParams<T>(context: { params: Promise<T> }): Promise<T> {
  return await context.params;
}

/**
 * PUT /api/users/[id]/cart/[cartId]
 * Updates the quantity of a cart item
 */
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string; cartId: string }> } // ✅ must be Promise
) {
  const { cartId } = await getParams(context); // ✅ unwrap params
  const { userId } = await requireAuth(request);
  const { quantity } = await request.json();

  if (quantity == null) {
    return NextResponse.json(
      { error: "Quantity is required" },
      { status: 400 }
    );
  }

  const updated = await Cart.findOneAndUpdate(
    { _id: cartId, userId },
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

/**
 * DELETE /api/users/[id]/cart/[cartId]
 * Removes a cart item
 */
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string; cartId: string }> } // ✅ Promise type
) {
  const { cartId } = await getParams(context);
  const { userId } = await requireAuth(request);

  const deleted = await Cart.findOneAndDelete({ _id: cartId, userId });

  if (!deleted) {
    return NextResponse.json(
      { error: "Item not found or not owned by user" },
      { status: 404 }
    );
  }

  return NextResponse.json({ message: "Item removed from cart" });
}
