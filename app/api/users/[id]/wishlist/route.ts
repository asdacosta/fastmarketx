import { NextRequest, NextResponse } from "next/server";
import { Wishlist } from "@/models/Wishlist";
import { requireAuth } from "@/lib/auth";

// Get wishlist items for the authenticated user
export async function GET(request: NextRequest) {
  const { userId } = await requireAuth(request);

  try {
    const items = await Wishlist.find({ userId });
    return NextResponse.json(items);
  } catch {
    return NextResponse.json(
      { error: "Failed to retrieve wishlist" },
      { status: 500 }
    );
  }
}

// Add an item to the wishlist
export async function POST(request: NextRequest) {
  const { userId } = await requireAuth(request);
  const { productId } = await request.json();

  if (!productId) {
    return NextResponse.json(
      { error: "productId is required" },
      { status: 400 }
    );
  }

  try {
    const newItem = await Wishlist.create({ userId, productId });
    return NextResponse.json(newItem, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to add to wishlist" },
      { status: 500 }
    );
  }
}
