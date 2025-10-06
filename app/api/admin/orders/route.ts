import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { Order } from "@/models/Order";

// GET: List all orders (admin only)
export async function GET(req: NextRequest) {
  try {
    const { role } = await requireAuth(req);

    if (role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const orders = await Order.find();
    return NextResponse.json(orders);
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

// PUT: Update an order (admin only)
export async function PUT(req: NextRequest) {
  try {
    const { role } = await requireAuth(req);

    if (role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { orderId, ...updates } = await req.json();

    if (!orderId) {
      return NextResponse.json(
        { error: "orderId is required" },
        { status: 400 }
      );
    }

    const updatedOrder = await Order.findByIdAndUpdate(orderId, updates, {
      new: true,
    });

    if (!updatedOrder) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json(updatedOrder);
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

// DELETE: Cancel/delete an order (admin only)
export async function DELETE(req: NextRequest) {
  try {
    const { role } = await requireAuth(req);

    if (role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { orderId } = await req.json();

    if (!orderId) {
      return NextResponse.json(
        { error: "orderId is required" },
        { status: 400 }
      );
    }

    const cancelledOrder = await Order.findByIdAndDelete(orderId);

    if (!cancelledOrder) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json(cancelledOrder);
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
