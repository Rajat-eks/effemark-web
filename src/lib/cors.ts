import { NextResponse } from "next/server";

const DEFAULT_ALLOWED_ORIGINS = [
  "http://localhost:3000",
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "https://effemark.com",
  "https://admin.effemark.com",
];

function getAllowedOrigins(): string[] {
  const env = process.env.CORS_ORIGINS;
  if (!env) return DEFAULT_ALLOWED_ORIGINS;
  return env.split(",").map((o) => o.trim()).filter(Boolean);
}

export function withCors(req: Request, res: NextResponse) {
  const origin = req.headers.get("origin") || "";
  const allowed = getAllowedOrigins();
  const allowOrigin = allowed.includes(origin) ? origin : allowed[0];

  res.headers.set("Access-Control-Allow-Origin", allowOrigin);
  res.headers.set(
    "Access-Control-Allow-Headers",
    req.headers.get("Access-Control-Request-Headers") || "*"
  );
  res.headers.set(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,DELETE,OPTIONS"
  );
  res.headers.set("Access-Control-Allow-Credentials", "true");
  res.headers.set("Vary", "Origin");
  return res;
}

export function preflight(req: Request) {
  const res = NextResponse.json({}, { status: 204 });
  return withCors(req, res);
}


