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
  if (typeof input === "string") return input === "true" || input === "1";
  return false;
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
        // Use absolute URL path for stored image, or keep as site-relative path
        filepath = `https://effemark.com${saved.publicPath}`;
      }

      // Build payload expected by validateArticlePayload
      const payload: any = {
        heading: String(form.get("heading") || "").trim(),
        description: String(form.get("description") || "").trim(),
        slug: String(form.get("slug") || "").trim(),
        filepath,
        metaTitle: String(form.get("metaTitle") || "").trim(),
        metaDescription: String(form.get("metaDescription") || "").trim(),
        metakewword: form.getAll("metakewword").length
          ? form.getAll("metakewword")
          : String(form.get("metakewword") || ""),
        articleDate: String(form.get("articleDate") || "").trim(),
        status: coerceBoolean(form.get("status")),
      };

      const v = validateArticlePayload(payload);
      if (!v.valid) return badRequest("Invalid payload", { details: v.errors });

      await connectMongoose();
      const existing = await ArticleModel.findOne({ slug: v.data!.slug }).lean();
      if (existing) return conflict("Article with this slug already exists");

      const created = await ArticleModel.create(v.data as any);
      return withCors(
        req,
        NextResponse.json({ success: true, data: created }, { status: 201 })
      );
    }

    // Fallback: JSON body (existing behavior)
    const json = await req.json();
    const v = validateArticlePayload(json);
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
