import jwt from "jsonwebtoken";
const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
  throw new Error("Missing JWT_SECRET in environment variables");
}

const JWT_SECRET: string = jwtSecret;

export function signToken(
  userId: string,
  role: "customer" | "vendor" | "admin"
) {
  return jwt.sign({ userId, role }, JWT_SECRET, { expiresIn: "30d" });
}

interface JwtPayload {
  userId: string;
  role: "customer" | "vendor" | "admin";
  iat?: number;
  exp?: number;
}

export function verifyToken(token: string): JwtPayload {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (typeof decoded === "object" && "userId" in decoded) {
      return decoded as JwtPayload;
    }

    throw new Error("Invalid token payload");
  } catch (error) {
    throw new Error("Token verification failed");
  }
}
