import { NextResponse } from "next/server";
import { validateArticlePayload } from "@/lib/articles";
import { connectMongoose } from "@/lib/mongoose";
import { ArticleModel } from "@/models/Article";
import mongoose from "mongoose";
import { preflight, withCors } from "@/lib/cors";
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
