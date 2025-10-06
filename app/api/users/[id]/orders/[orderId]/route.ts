import { NextRequest, NextResponse } from "next/server";
import { Order } from "@/models/Order";
import { requireAuth } from "@/lib/auth";

function isAuthorized(
  orderUserId: string,
  currentUserId: string,
  role: string
): boolean {
  return orderUserId === currentUserId || role === "admin";
}

export async function GET(
  req: NextRequest,
  { params }: { params: { orderId: string } }
) {
  const { userId, role } = await requireAuth(req);

  const order = await Order.findById(params.orderId);
  if (!order) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  }

  if (!isAuthorized(order.userId.toString(), userId, role)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  return NextResponse.json(order);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { orderId: string } }
) {
  const { userId, role } = await requireAuth(req);

  const order = await Order.findById(params.orderId);
  if (!order) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  }

  if (!isAuthorized(order.userId.toString(), userId, role)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const updates = await req.json();
  const updatedOrder = await Order.findByIdAndUpdate(params.orderId, updates, {
    new: true,
  });

  return NextResponse.json(updatedOrder);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { orderId: string } }
) {
  const { userId, role } = await requireAuth(req);

  const order = await Order.findById(params.orderId);
  if (!order) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  }

  if (!isAuthorized(order.userId.toString(), userId, role)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  await Order.findByIdAndDelete(params.orderId);
  return NextResponse.json({ message: "Order deleted" });
}
