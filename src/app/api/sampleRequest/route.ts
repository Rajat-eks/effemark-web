import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type SampleRequestPayload = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  types: string[]; // e.g., ["Trademark Search", "Trademark Monitoring"]
};

function getEnv(name: string, fallback?: string) {
  const value = process.env[name] ?? fallback;
  return value;
}

function assertRequiredEnv(...names: string[]) {
  const missing = names.filter((n) => !getEnv(n));
  if (missing.length) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
  }
}

function validatePayload(payload: Partial<SampleRequestPayload>): payload is SampleRequestPayload {
  return (
    typeof payload.name === "string" &&
    typeof payload.email === "string" &&
    typeof payload.phone === "string" &&
    Array.isArray(payload.types) &&
    payload.types.length > 0 &&
    payload.name.trim() !== "" &&
    payload.email.trim() !== "" &&
    payload.phone.trim() !== ""
  );
}

export async function POST(req: Request) {
  try {
    const json = (await req.json()) as Partial<SampleRequestPayload>;
    const normalized: Partial<SampleRequestPayload> = {
      name: json.name ?? (json as any).fullName ?? "",
      email: json.email ?? (json as any).mail ?? "",
      phone: json.phone ?? (json as any).contactNumber ?? "",
      company: json.company ?? (json as any).companyName,
      types: Array.isArray(json.types) ? json.types : [],
    };

    if (!validatePayload(normalized)) {
      return NextResponse.json(
        { success: false, error: "Missing required fields or no sample types selected" },
        { status: 400 }
      );
    }

    // SMTP defaults (Hostinger). Require only user & pass.
    assertRequiredEnv("SMTP_USER", "SMTP_PASS");
    const host = (getEnv("SMTP_HOST", "smtp.hostinger.com") as string)!;
    const port = Number(getEnv("SMTP_PORT", "465")) || 465;
    const user = getEnv("SMTP_USER") as string;
    const pass = getEnv("SMTP_PASS") as string;
    const secure = (getEnv("SMTP_SECURE", "true") as string).toLowerCase() === "true";
    const from = (getEnv("SMTP_FROM", "info@effemark.com") as string) || user;
    const to = "ram.tenneti@effectualservices.com, amit.goel@effectualservices.com";

    const transporter = nodemailer.createTransport({ host, port, secure, auth: { user, pass } });

    const subject = `New samples request from ${normalized.name}`;
    const text = [
      `Name: ${normalized.name}`,
      `Email: ${normalized.email}`,
      `Phone: ${normalized.phone}`,
      normalized.company ? `Company: ${normalized.company}` : undefined,
      `Requested types: ${normalized.types.join(", ")}`,
    ].filter(Boolean).join("\n");
    const html = `
      <div style="font-family: Arial, sans-serif; line-height:1.6;">
        <h2 style="margin:0 0 12px;">New Samples Request</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tbody>
            <tr><td style="padding:6px 8px; font-weight:bold;">Name</td><td style="padding:6px 8px;">${escapeHtml(normalized.name!)}</td></tr>
            <tr><td style="padding:6px 8px; font-weight:bold;">Email</td><td style="padding:6px 8px;">${escapeHtml(normalized.email!)}</td></tr>
            <tr><td style="padding:6px 8px; font-weight:bold;">Phone</td><td style="padding:6px 8px;">${escapeHtml(normalized.phone!)}</td></tr>
            ${normalized.company ? `<tr><td style="padding:6px 8px; font-weight:bold;">Company</td><td style="padding:6px 8px;">${escapeHtml(normalized.company)}</td></tr>` : ""}
            <tr><td style="padding:6px 8px; font-weight:bold;">Requested types</td><td style="padding:6px 8px;">${normalized.types.map(escapeHtml).join(", ")}</td></tr>
          </tbody>
        </table>
      </div>
    `;

    await transporter.sendMail({ from, to, replyTo: normalized.email!, subject, text, html });
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


