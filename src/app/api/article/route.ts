import { NextResponse } from "next/server";
import { validateArticlePayload } from "@/lib/articles";
import { connectMongoose } from "@/lib/mongoose";
import { ArticleModel } from "@/models/Article";
import mongoose from "mongoose";
import { preflight, withCors } from "@/lib/cors";
import { promises as fs } from "fs";
import path from "path";
export async function OPTIONS(req: Request) {
  return preflight(req);
}

function badRequest(message: string, extra?: Record<string, unknown>) {
  return NextResponse.json(
    { success: false, error: message, ...extra },
    {
      status: 400,
    }
  );
}

function notFound(message = "Article not found") {
  return NextResponse.json({ success: false, error: message }, { status: 404 });
}

function conflict(message: string) {
  return NextResponse.json({ success: false, error: message }, { status: 409 });
}

// Helpers for saving uploaded files when content-type is multipart/form-data
const uploadDir = path.join(process.cwd(), "public", "uploads");

async function ensureUploadDir() {
  try {
    await fs.access(uploadDir);
  } catch {
    await fs.mkdir(uploadDir, { recursive: true });
  }
}

function guessExtensionFromMime(mimeType: string) {
  if (mimeType === "image/png") return ".png";
  if (mimeType === "image/jpeg") return ".jpg";
  if (mimeType === "image/svg+xml") return ".svg";
  if (mimeType === "application/pdf") return ".pdf";
  if (mimeType === "image/webp") return ".webp";
  if (mimeType === "image/gif") return ".gif";
  return ".bin";
}

async function saveIncomingFile(file: File) {
  await ensureUploadDir();
  const originalName = (file as any).name as string | undefined;
  const mimeType = file.type || "";
  let ext = (originalName && path.extname(originalName)) || "";
  if (!ext) ext = guessExtensionFromMime(mimeType);
  const randomPart = Math.random().toString(36).slice(2, 10);
  const safeName = `upload-${Date.now()}-${randomPart}${ext}`;
  const filePath = path.join(uploadDir, safeName);
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  await fs.writeFile(filePath, buffer);
  const publicUrlPath = `/uploads/${safeName}`;
  return {
    filename: safeName,
    publicPath: publicUrlPath,
  };
}

function coerceBoolean(input: any): boolean {
  if (typeof input === "boolean") return input;
  if (typeof input === "string")
    return input.toLowerCase() === "true" || input === "1";
  if (typeof input === "number") return input === 1;
  return false;
}

function normalizeKeywords(input: unknown): string[] {
  console.log("input", input);
  const normalizeArray = (vals: any[]): string[] =>
    vals
      .filter((v) => typeof v === "string")
      .map((v) => v.trim())
      .filter(Boolean);

  if (Array.isArray(input)) return normalizeArray(input as any[]);

  if (typeof input === "string") {
    const s = input.trim();
    if (!s) return [];
    if (s.startsWith("[") && s.endsWith("]")) {
      try {
        const parsed = JSON.parse(s);
        if (Array.isArray(parsed)) return normalizeArray(parsed as any[]);
      } catch {}
    }
    return s.split(",").map((v) => v.trim());
  }

  return [];
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const slug = searchParams.get("slug");

    await connectMongoose();

    if (id || slug) {
      let query: Record<string, unknown> = {};
      if (id) {
        if (!mongoose.Types.ObjectId.isValid(id))
          return badRequest("Invalid id");
        const doc = await ArticleModel.findById(id).lean();
        if (!doc) return notFound();
        return withCors(req, NextResponse.json({ success: true, data: doc }));
      } else if (slug) {
        const doc = await ArticleModel.findOne({ slug }).lean();
        if (!doc) return notFound();
        return withCors(req, NextResponse.json({ success: true, data: doc }));
      }
      // Fallback if neither path returned (shouldn't reach here)
      return notFound();
    }

    const list = await ArticleModel.find({}).sort({ createdAt: -1 }).lean();
    return withCors(req, NextResponse.json({ success: true, data: list }));
  } catch (err: any) {
    return withCors(
      req,
      NextResponse.json(
        { success: false, error: err?.message || "Unexpected error" },
        { status: 500 }
      )
    );
  }
}

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";

    // Branch: multipart form-data with optional file under key 'file'
    if (contentType.includes("multipart/form-data")) {
      const form = await req.formData();
      const maybeFile = form.get("file");
      let filepath = String(form.get("filepath") || "").trim();

      if (maybeFile && typeof maybeFile !== "string") {
        const saved = await saveIncomingFile(maybeFile as File);
        filepath = `https://effemark.com${saved.publicPath}`;
      }

      // Collect keywords from common field names
      const keywordFields = [
        "metakewword",
        "metakewword[]",
        "keyword",
        "keyword[]",
        "keywords",
        "keywords[]",
      ];
      let keywordValues: any[] = [];
      for (const k of keywordFields) {
        const values = form.getAll(k);
        if (values && values.length)
          keywordValues = keywordValues.concat(values);
      }
      // If still empty, try single-value keys
      if (keywordValues.length === 0) {
        const single = (form.get("metakewword") ||
          form.get("keyword") ||
          form.get("keywords") ||
          "") as any;
        if (single) keywordValues = [single];
      }

      const payload: any = {
        heading: String(form.get("heading") || "").trim(),
        content: String(
          form.get("description") ||
            form.get("descrption") ||
            form.get("content") ||
            ""
        ).trim(),
        slug: String(form.get("slug") || "").trim(),
        filepath,
        metaTitle: String(form.get("metaTitle") || "").trim(),
        metaDescription: String(form.get("metaDescription") || "").trim(),
        metakewword: normalizeKeywords(
          keywordValues.length === 1 ? keywordValues[0] : (keywordValues as any)
        ),
        articleDate: String(form.get("articleDate") || "").trim(),
        status: coerceBoolean(form.get("status")),
      };
      console.log("payload", payload);
      const v = validateArticlePayload(payload);
      console.log("v", v);
      if (!v.valid) return badRequest("Invalid payload", { details: v.errors });
      await connectMongoose();
      const existing = await ArticleModel.findOne({
        slug: v.data!.slug,
      }).lean();
      if (existing) return conflict("Article with this slug already exists");

      const created = await ArticleModel.create(v.data as any);
      return withCors(
        req,
        NextResponse.json({ success: true, data: created }, { status: 201 })
      );
    }

    // Fallback: JSON body (existing behavior), accept aliases
    let json: any;
    try {
      json = await req.json();
    } catch {
      return badRequest("Invalid JSON body");
    }

    const normalized: any = { ...json };
    if (!normalized.description && normalized.descrption) {
      normalized.description = normalized.descrption;
    }
    if (!normalized.description && normalized.content) {
      normalized.description = normalized.content;
    }

    // Map keyword/keywords -> metakewword and normalize
    if (
      !normalized.metakewword &&
      (normalized.keyword ||
        normalized.keywords ||
        normalized["keyword[]"] ||
        normalized["keywords[]"])
    ) {
      const candidate =
        normalized["metakewword[]"] ??
        normalized.metakewword ??
        normalized["keyword[]"] ??
        normalized.keyword ??
        normalized["keywords[]"] ??
        normalized.keywords;
      normalized.metakewword = normalizeKeywords(candidate);
    } else if (normalized.metakewword) {
      normalized.metakewword = normalizeKeywords(normalized.metakewword);
    }

    if (normalized.status !== undefined) {
      normalized.status = coerceBoolean(normalized.status);
    }

    const v = validateArticlePayload(normalized);
    if (!v.valid) return badRequest("Invalid payload", { details: v.errors });

    await connectMongoose();

    const payload = v.data!;

    const existing = await ArticleModel.findOne({ slug: payload.slug }).lean();
    if (existing) return conflict("Article with this slug already exists");

    const created = await ArticleModel.create(payload as any);
    return withCors(
      req,
      NextResponse.json({ success: true, data: created }, { status: 201 })
    );
  } catch (err: any) {
    return withCors(
      req,
      NextResponse.json(
        { success: false, error: err?.message || "Unexpected error" },
        { status: 500 }
      )
    );
  }
}

export async function PUT(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return badRequest("Missing id");
    if (!mongoose.Types.ObjectId.isValid(id)) return badRequest("Invalid id");

    const body = await req.json();
    const updatableKeys = [
      "slug",
      "title",
      "description",
      "banner",
      "keywords",
    ] as const;
    const update: any = {};
    for (const key of updatableKeys) {
      if (key in body && body[key] !== undefined) update[key] = body[key];
    }
    if (Object.keys(update).length === 0)
      return badRequest("No updatable fields provided");

    await connectMongoose();

    if (update.slug) {
      const taken = await ArticleModel.findOne({
        slug: update.slug,
        _id: { $ne: id },
      }).lean();
      if (taken) return conflict("Article with this slug already exists");
    }

    const doc = await ArticleModel.findByIdAndUpdate(
      id,
      { $set: update },
      { new: true }
    ).lean();
    if (!doc) return notFound();
    return withCors(req, NextResponse.json({ success: true, data: doc }));
  } catch (err: any) {
    return withCors(
      req,
      NextResponse.json(
        { success: false, error: err?.message || "Unexpected error" },
        { status: 500 }
      )
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return badRequest("Missing id");
    if (!mongoose.Types.ObjectId.isValid(id)) return badRequest("Invalid id");

    await connectMongoose();
    const res = await ArticleModel.findByIdAndDelete(id).lean();
    if (!res) return notFound();
    return withCors(req, NextResponse.json({ success: true }));
  } catch (err: any) {
    return withCors(
      req,
      NextResponse.json(
        { success: false, error: err?.message || "Unexpected error" },
        { status: 500 }
      )
    );
  }
}
