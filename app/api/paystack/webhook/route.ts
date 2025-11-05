// app/api/paystack/webhook/route.ts
import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  // Read raw body text for HMAC verification
  const raw = await req.text().catch(() => "");
  const signature = (req.headers.get("x-paystack-signature") || "").toString();

  const secret =
    process.env.PAYSTACK_WEBHOOK_SECRET ||
    process.env.PAYSTACK_SECRET_KEY ||
    "";
  if (!secret) {
    console.error("Paystack webhook invoked but no webhook secret configured.");
    return new Response("Webhook secret not configured", { status: 400 });
  }

  // compute HMAC sha512
  const hash = crypto.createHmac("sha512", secret).update(raw).digest("hex");

  // timing-safe compare: ensure both buffers have same length then compare
  try {
    const hashBuf = Buffer.from(hash, "hex");
    const sigBuf = Buffer.from(signature, "hex");
    if (
      hashBuf.length !== sigBuf.length ||
      !crypto.timingSafeEqual(hashBuf, sigBuf)
    ) {
      console.warn("Invalid Paystack webhook signature");
      return new Response("Invalid signature", { status: 400 });
    }
  } catch (e) {
    // if signature isn't hex or buffer creation failed
    console.warn("Webhook signature parse failed:", e);
    return new Response("Invalid signature", { status: 400 });
  }

  // parse payload
  let payload: any;
  try {
    payload = JSON.parse(raw);
  } catch (err) {
    console.error("Webhook JSON parse failed:", err);
    return NextResponse.json(
      { status: false, message: "Invalid JSON" },
      { status: 400 }
    );
  }

  // handle relevant events (quickly)
  const event = payload?.event;
  if (event === "charge.success" || event === "transaction.success") {
    // const txn = payload.data;
    // TODO: update order in DB (idempotent) using txn.reference, txn.amount, txn.currency etc.
    // Example:
    // await markOrderPaid(txn.reference, txn.amount, txn.currency, txn.gateway_response)
    // Important: perform idempotent updates so repeated webhook retries don't double-count
  }

  // Acknowledge quickly
  return NextResponse.json({ status: true, received: true });
}
