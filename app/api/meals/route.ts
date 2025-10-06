import { connectDB } from "@/lib/db";
import { Item } from "@/models/Item";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectDB();
  const url = req.nextUrl;

  // Query parameters
  const page = parseInt(url.searchParams.get("page") || "1", 10);
  const limit = parseInt(url.searchParams.get("limit") || "20", 10);
  const category = url.searchParams.get("category");
  const dealTag = url.searchParams.get("dealTag");
  const search = url.searchParams.get("search");

  // Dynamic filtering
  const filter: Record<string, any> = { isActive: true };
  if (category) filter.category = category;
  if (dealTag) filter.dealTag = dealTag;
  if (search) filter.title = { $regex: search, $options: "i" };

  try {
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
  } catch (error) {
    console.error("Error fetching meals:", error);
    return NextResponse.json(
      { error: "Failed to fetch meals" },
      { status: 500 }
    );
  }
}
