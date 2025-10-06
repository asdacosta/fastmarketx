import { connectDB } from "@/lib/db";
import { Item } from "@/models/Item";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectDB();
  const url = req.nextUrl;

  // Filters and pagination
  const page = parseInt(url.searchParams.get("page") || "1", 10);
  const limit = parseInt(url.searchParams.get("limit") || "20", 10);
  const category = url.searchParams.get("category");
  const dealTag = url.searchParams.get("dealTag");
  const search = url.searchParams.get("search");

  // Base filter: active items and type = "service"
  const filter: Record<string, any> = {
    isActive: true,
    type: "service",
  };

  if (category) filter.category = category;
  if (dealTag) filter.dealTag = dealTag;
  if (search) filter.title = { $regex: search, $options: "i" };

  const total = await Item.countDocuments(filter);
  const totalPages = Math.ceil(total / limit);

  const services = await Item.find(filter)
    .populate("store", "name")
    .populate("category", "name")
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit);

  return NextResponse.json({
    items: services,
    totalPages,
    currentPage: page,
  });
}
