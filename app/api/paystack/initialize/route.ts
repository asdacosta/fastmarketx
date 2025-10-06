import { NextResponse } from "next/server";

function normalizePhone(p: any) {
  if (!p) return undefined;
  return String(p).replace(/[^\d+]/g, "");
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const {
      email,
      amount,
      currency = "GHS",
      channels,
      phone,
      metadata,
    } = body ?? {};

    // basic validation
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { status: false, message: "email is required" },
        { status: 400 }
      );
    }

    // amount should be a positive integer (Paystack expects an integer amount in kobo/pesewa)
    const amt = typeof amount === "string" ? parseInt(amount, 10) : amount;
    if (!Number.isInteger(amt) || amt <= 0) {
      return NextResponse.json(
        {
          status: false,
          message: "amount must be a positive integer (in subunits)",
        },
        { status: 400 }
      );
    }

    // mobile_money needs phone
    const normalizedPhone = normalizePhone(phone);
    if (
      Array.isArray(channels) &&
      channels.includes("mobile_money") &&
      !normalizedPhone
    ) {
      return NextResponse.json(
        { status: false, message: "phone required for mobile money payments" },
        { status: 400 }
      );
    }

    // build payload
    const payload: any = { email, amount: amt, currency };

    if (channels && Array.isArray(channels)) {
      payload.channels = channels;
    }

    if (normalizedPhone) payload.phone = normalizedPhone;
    if (metadata && typeof metadata === "object") payload.metadata = metadata;

    // call Paystack with a short timeout in case the upstream hangs
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15_000);

    const res = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    }).catch((err) => {
      // network / abort
      clearTimeout(timeout);
      throw err;
    });

    clearTimeout(timeout);

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      // forward Paystack response body if available
      return NextResponse.json(
        data || { status: false, message: "Paystack initialization failed" },
        { status: 502 }
      );
    }

    // success: forward Paystack response as-is (it contains authorization_url/data/access_code)
    return NextResponse.json(data);
  } catch (err: any) {
    // if fetch was aborted, err.name === 'AbortError'
    const message =
      err?.name === "AbortError"
        ? "Upstream request timed out"
        : err?.message || "Server error";
    console.error("Paystack initialize error:", err);
    return NextResponse.json({ status: false, message }, { status: 500 });
  }
}
