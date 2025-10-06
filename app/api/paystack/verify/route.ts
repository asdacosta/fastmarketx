import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const reference = url.searchParams.get("reference");
    if (!reference) {
      return NextResponse.json(
        { status: false, message: "reference is required" },
        { status: 400 }
      );
    }

    const resp = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(
        reference
      )}`,
      {
        headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` },
      }
    );

    const data = await resp.json().catch(() => null);

    if (!resp.ok) {
      return NextResponse.json(
        { status: false, message: "Paystack verify failed", error: data },
        { status: 502 }
      );
    }

    // IMPORTANT: verify the returned amount and currency against your order record here
    // e.g.
    // const expected = await findOrderByReference(reference);
    // if (Number(data.data.amount) !== expected.amount) { ... handle mismatch ... }

    return NextResponse.json({ status: true, data });
  } catch (err: any) {
    console.error("Paystack verify error:", err);
    return NextResponse.json(
      { status: false, message: err?.message || "Server error" },
      { status: 500 }
    );
  }
}
