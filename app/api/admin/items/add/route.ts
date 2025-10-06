import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Item } from "@/models/Item";
import { requireAuth } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { userId, role } = await requireAuth(req);
    if (role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const data = await req.json();
    const newItem = await Item.create({ ...data, vendor: userId });

    return NextResponse.json({ item: newItem }, { status: 201 });
  } catch (error) {
    console.error("Error adding item:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
