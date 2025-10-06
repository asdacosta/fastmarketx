import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { connectDB } from "@/lib/db";
import { requireAuth } from "@/lib/auth";
import { User } from "@/models/User";
import { Order } from "@/models/Order";
import { Types } from "mongoose";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-06-30.basil",
});

interface PopulatedCartItem {
  product: {
    _id: Types.ObjectId;
    price: number;
  };
  quantity: number;
}

export async function GET(req: NextRequest) {
  const userId = await requireAuth(req);
  await connectDB();

  const orders = await Order.find({ user: userId }).sort({ createdAt: -1 });
  return NextResponse.json(orders);
}

export async function POST(req: NextRequest) {
  const userId = await requireAuth(req);
  await connectDB();

  const user = await User.findById(userId).populate("cart.product");
  if (!user || user.cart.length === 0) {
    return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
  }

  const items = user.cart.map((item: PopulatedCartItem) => ({
    product: item.product._id,
    quantity: item.quantity,
    price: item.product.price,
  }));

  const total = items.reduce(
    (sum: number, i: { price: number; quantity: number }) =>
      sum + i.price * i.quantity,
    0
  );

  const order = await Order.create({
    user: userId,
    items,
    total,
    status: "pending",
  });

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(total * 100),
    currency: "usd",
    metadata: { orderId: order._id.toString() },
  });

  order.paymentIntentId = paymentIntent.id;
  await order.save();

  user.cart = [];
  await user.save();

  return NextResponse.json({
    orderId: order._id,
    clientSecret: paymentIntent.client_secret,
  });
}
