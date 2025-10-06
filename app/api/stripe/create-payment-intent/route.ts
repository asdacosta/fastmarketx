import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { connectDB } from "@/lib/db";
import { requireAuth } from "@/lib/auth";
import { Order } from "@/models/Order";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    // 1. Authenticate and connect to DB
    const user = await requireAuth(req);
    await connectDB();

    // 2. Parse body and find order for user
    const { orderId } = await req.json();

    if (!orderId) {
      return NextResponse.json({ error: "Missing order ID" }, { status: 400 });
    }

    const order = await Order.findOne({ _id: orderId, user: user.userId });

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    // 3. Create or update a Stripe PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(order.total * 100), // Convert to cents
      currency: "usd",
      metadata: {
        orderId: order._id.toString(),
      },
    });

    // 4. Save PaymentIntent ID to order
    order.paymentIntentId = paymentIntent.id;
    await order.save();

    // 5. Return clientSecret to frontend
    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error("Stripe create-payment-intent error:", err);
    return NextResponse.json(
      { error: "Failed to create payment intent" },
      { status: 500 }
    );
  }
}
