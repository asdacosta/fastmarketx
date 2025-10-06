import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./jwt";

export async function requireAuth(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];
  try {
    const payload = verifyToken(token);
    return payload.userId;
  } catch {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}
