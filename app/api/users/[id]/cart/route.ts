import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { requireAuth } from "@/lib/auth";
import { User } from "@/models/User";
import { Types } from "mongoose";

// Type for cart items
type CartItem = {
  item: Types.ObjectId;
  quantity: number;
};

// Helper to fetch user and validate existence
async function getAuthenticatedUser(userId: string) {
  await connectDB();
  const user = await User.findById(userId);
  if (!user) {
    throw new Response("User not found", { status: 404 });
  }
  return user;
}

// ✅ GET: Get cart for authenticated user
export async function GET(req: NextRequest) {
  const { userId } = await requireAuth(req);
  await connectDB();

  const user = await User.findById(userId).populate("cart.item");

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user.cart || []);
}

// ✅ POST: Add item to cart
export async function POST(req: NextRequest) {
  const { userId } = await requireAuth(req);
  const { itemId, quantity } = await req.json();

  const user = await getAuthenticatedUser(userId);

  const existing = user.cart.find(
    (ci: CartItem) => ci.item.toString() === itemId
  );

  if (existing) {
    existing.quantity += quantity;
  } else {
    user.cart.push({ item: itemId, quantity });
  }

  await user.save();
  return NextResponse.json(user.cart, { status: 201 });
}

// ✅ PUT: Update quantity of an item
export async function PUT(req: NextRequest) {
  const { userId } = await requireAuth(req);
  const { itemId, quantity } = await req.json();

  const user = await getAuthenticatedUser(userId);

  user.cart = user.cart.map((ci: CartItem) =>
    ci.item.toString() === itemId ? { item: ci.item, quantity } : ci
  );

  await user.save();
  return NextResponse.json(user.cart);
}

// ✅ DELETE: Remove item from cart
export async function DELETE(req: NextRequest) {
  const { userId } = await requireAuth(req);
  const { itemId } = await req.json();

  const user = await getAuthenticatedUser(userId);

  user.cart = user.cart.filter((ci: CartItem) => ci.item.toString() !== itemId);

  await user.save();
  return NextResponse.json(user.cart);
}
