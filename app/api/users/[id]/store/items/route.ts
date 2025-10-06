import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { Item } from "@/models/Item";
import { Store } from "@/models/Store";

// GET: List all products for a specific store
export async function GET(
  request: NextRequest,
  { params }: { params: { storeId: string } }
) {
  try {
    const products = await Item.find({ store: params.storeId });
    return NextResponse.json(products);
  } catch (error) {
    console.error("GET /users/[id]/store/items error:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

// POST: Add a new product to the store
export async function POST(
  request: NextRequest,
  { params }: { params: { storeId: string } }
) {
  try {
    const user = await requireAuth(request);

    const store = await Store.findById(params.storeId);
    if (!store) {
      return NextResponse.json({ error: "Store not found" }, { status: 404 });
    }

    if (store.ownerId.toString() !== user.userId && user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const productData = await request.json();
    const newProduct = await Item.create({
      store: params.storeId,
      ...productData,
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    if (error instanceof Response) return error;
    console.error("POST /users/[id]/store/items error:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
