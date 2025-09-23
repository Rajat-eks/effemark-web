import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const uploadDir = path.join(process.cwd(), "public", "uploads");

async function ensureUploadDir() {
  try {
    await fs.access(uploadDir);
  } catch {
    await fs.mkdir(uploadDir, { recursive: true });
  }
}

function badRequest(message: string, extra?: Record<string, unknown>) {
  return NextResponse.json(
    { success: false, error: message, ...extra },
    {
      status: 400,
    }
  );
}

export async function POST(req: Request) {
  try {
    await ensureUploadDir();
    const formData = await req.formData();
    const file = formData.get("file");
    if (!file || typeof file === "string") {
      return badRequest("Missing file in form-data under key 'file'");
    }

    const originalName = (file as any).name as string | undefined;
    const mimeType = (file as File).type || "";

    // Determine extension from original name or mime type
    let ext = (originalName && path.extname(originalName)) || "";
    if (!ext) {
      if (mimeType === "image/png") ext = ".png";
      else if (mimeType === "image/jpeg") ext = ".jpg";
      else if (mimeType === "image/svg+xml") ext = ".svg";
      else if (mimeType === "application/pdf") ext = ".pdf";
      else if (mimeType === "image/webp") ext = ".webp";
      else if (mimeType === "image/gif") ext = ".gif";
      else ext = ".bin";
    }

    // Generate random, safe filename preserving extension
    const randomPart = Math.random().toString(36).slice(2, 10);
    const safeName = `upload-${Date.now()}-${randomPart}${ext}`;
    const filePath = path.join(uploadDir, safeName);

    const arrayBuffer = await (file as File).arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await fs.writeFile(filePath, buffer);

    const publicUrl = `/uploads/${safeName}`;
    return NextResponse.json(
      {
        success: true,
        path: `https://effemark.com/${publicUrl}`,
        filename: safeName,
      },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || "Unexpected error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name");
    if (!name) return badRequest("Missing 'name' query param");

    // Prevent path traversal
    const safeName = name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const filePath = path.join(uploadDir, safeName);

    await fs.unlink(filePath);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    if (err && (err as any).code === "ENOENT") {
      return NextResponse.json(
        { success: false, error: "File not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { success: false, error: err?.message || "Unexpected error" },
      { status: 500 }
    );
  }
}
