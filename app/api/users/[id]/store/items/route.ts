import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { Item } from "@/models/Item";
import { Store } from "@/models/Store";

// ✅ Helper to unwrap async params (DRY pattern)
async function getParams<T>(context: { params: Promise<T> }): Promise<T> {
  return await context.params;
}

// ✅ GET: List all products for a specific user's store
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await getParams(context);

    // Assuming `id` here is the store ID
    const products = await Item.find({ store: id });
    return NextResponse.json(products);
  } catch (error) {
    console.error("GET /users/[id]/store/items error:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

// ✅ POST: Add a new product to the store
export async function POST(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await getParams(context);
    const user = await requireAuth(request);

    const store = await Store.findById(id);
    if (!store) {
      return NextResponse.json({ error: "Store not found" }, { status: 404 });
    }

    if (store.ownerId.toString() !== user.userId && user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const productData = await request.json();
    const newProduct = await Item.create({
      store: id,
      ...productData,
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error("POST /users/[id]/store/items error:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
