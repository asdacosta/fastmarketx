import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { Item } from "@/models/Item";

// Lists all products — Only admin
export async function GET(request: NextRequest) {
  try {
    const { userId, role } = await requireAuth(request);

    if (role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const items = await Item.find();
    return NextResponse.json(items);
  } catch (err) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
