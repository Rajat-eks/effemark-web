import { NextResponse } from "next/server";
import { preflight, withCors } from "@/lib/cors";
import mongoose from "mongoose";
import { ArticleModel } from "@/models/Article";
import { ObjectId } from "mongodb";
import { connectMongoose } from "@/lib/mongoose";

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
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params; // ✅ correct
    console.log("GET /api/article/[id] called with id:", id);

    if (id) {
      await connectMongoose();
      if (!mongoose.Types.ObjectId.isValid(id)) return badRequest("Invalid id");
      console.log("Fetching article with id:", id);
      const doc = await ArticleModel.findOne({ _id: new ObjectId(id) }).lean();
      console.log("Fetched article:", doc);
      if (!doc) return notFound();
      return withCors(req, NextResponse.json({ success: true, data: doc }));
    }
  } catch (error) {
    console.error("Error in GET /api/article/[id]:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
