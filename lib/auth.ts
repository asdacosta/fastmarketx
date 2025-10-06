// lib/auth.ts
import { NextRequest } from "next/server";
import { verifyToken } from "./jwt";

type AuthenticatedUser = {
  userId: string;
  role: string;
};

export async function requireAuth(
  req: NextRequest
): Promise<AuthenticatedUser> {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Response("Unauthorized: No token provided", { status: 401 });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = verifyToken(token);

    if (!payload?.userId || !payload?.role) {
      throw new Error("Missing user info in token");
    }

    return {
      userId: payload.userId,
      role: payload.role,
    };
  } catch (err) {
    console.error("Invalid token", err);
    throw new Response("Unauthorized: Invalid token", { status: 401 });
  }
}
