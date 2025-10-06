import { connectDB } from "@/lib/db";
import { Item } from "@/models/Item";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectDB();

  const { searchParams } = req.nextUrl;
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = Math.min(parseInt(searchParams.get("limit") || "20", 10), 50);

  const filter: Record<string, any> = { isActive: true };

  if (searchParams.has("category")) {
    filter.category = searchParams.get("category");
  }

  if (searchParams.has("dealTag")) {
    filter.dealTag = searchParams.get("dealTag");
  }

  if (searchParams.has("search")) {
    filter.title = { $regex: searchParams.get("search"), $options: "i" };
  }

  const total = await Item.countDocuments(filter);
  const totalPages = Math.ceil(total / limit);

  const items = await Item.find(filter)
    .populate("store", "name")
    .populate("category", "name")
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit);

  return NextResponse.json({
    items,
    totalPages,
    currentPage: page,
  });
}
