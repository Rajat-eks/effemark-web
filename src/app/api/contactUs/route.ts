import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  country: string;
  message: string;
  company?: string;
  howWeCanHelp?: string;
};

function getEnv(name: string, fallback?: string) {
  const value = process.env[name] ?? fallback;
  return value;
}

function assertRequiredEnv(...names: string[]) {
  const missing = names.filter((n) => !getEnv(n));
  if (missing.length) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}`
    );
  }
}

function validatePayload(
  payload: Partial<ContactPayload>
): payload is ContactPayload {
  return (
    typeof payload.name === "string" &&
    typeof payload.email === "string" &&
    typeof payload.phone === "string" &&
    typeof payload.country === "string" &&
    typeof payload.message === "string" &&
    payload.name.trim() !== "" &&
    payload.email.trim() !== "" &&
    payload.phone.trim() !== "" &&
    payload.country.trim() !== "" &&
    payload.message.trim() !== ""
  );
}

export async function POST(req: Request) {
  try {
    const json = (await req.json()) as Partial<ContactPayload>;

    // Allow alternate casing/keys from client just in case
    const normalized: Partial<ContactPayload> = {
      name: json.name ?? (json as any).fullName ?? "",
      email: json.email ?? (json as any).mail ?? "",
      phone: json.phone ?? (json as any).mobile ?? "",
      country: json.country ?? "",
      message: json.message ?? (json as any).msg ?? "",
      company:
        json.company ??
        (json as any).organisation ??
        (json as any).organization,
      howWeCanHelp:
        json.howWeCanHelp ??
        (json as any).howwecanhelp ??
        (json as any).howWeCanHelpText,
    };

    if (!validatePayload(normalized)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Missing required fields: name, email, phone, country, message",
        },
        { status: 400 }
      );
    }

    // Verify SMTP configuration (only required: user & pass)
    assertRequiredEnv("SMTP_USER", "SMTP_PASS");
    const host = (getEnv("SMTP_HOST", "smtp.hostinger.com") as string)!;
    const port = Number(getEnv("SMTP_PORT", "465")) || 465;
    const user = getEnv("SMTP_USER") as string;
    const pass = getEnv("SMTP_PASS") as string;
    const secure =
      (getEnv("SMTP_SECURE", "true") as string).toLowerCase() === "true";
    const from = (getEnv("SMTP_FROM", "info@effemark.com") as string) || user;
    const to = "rajat.verma@effectualservices.in";

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const subject = `New contact from ${normalized.name}`;
    const textLines = [
      `Name: ${normalized.name}`,
      `Email: ${normalized.email}`,
      `Phone: ${normalized.phone}`,
      `Country: ${normalized.country}`,
      normalized.company ? `Company: ${normalized.company}` : undefined,
      normalized.howWeCanHelp
        ? `How we can help: ${normalized.howWeCanHelp}`
        : undefined,
      `Message: ${normalized.message}`,
    ].filter(Boolean) as string[];

    const html = `
      <div style="font-family: Arial, sans-serif; line-height:1.6;">
        <h2 style="margin:0 0 12px;">New Contact Submission</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tbody>
            <tr><td style="padding:6px 8px; font-weight:bold;">Name</td><td style="padding:6px 8px;">${escapeHtml(
              normalized.name
            )}</td></tr>
            <tr><td style="padding:6px 8px; font-weight:bold;">Email</td><td style="padding:6px 8px;">${escapeHtml(
              normalized.email
            )}</td></tr>
            <tr><td style="padding:6px 8px; font-weight:bold;">Phone</td><td style="padding:6px 8px;">${escapeHtml(
              normalized.phone
            )}</td></tr>
            <tr><td style="padding:6px 8px; font-weight:bold;">Country</td><td style="padding:6px 8px;">${escapeHtml(
              normalized.country
            )}</td></tr>
            ${
              normalized.company
                ? `<tr><td style="padding:6px 8px; font-weight:bold;">Company</td><td style="padding:6px 8px;">${escapeHtml(
                    normalized.company
                  )}</td></tr>`
                : ""
            }
            ${
              normalized.howWeCanHelp
                ? `<tr><td style=\"padding:6px 8px; font-weight:bold;\">How we can help</td><td style=\"padding:6px 8px;\">${escapeHtml(
                    normalized.howWeCanHelp
                  )}</td></tr>`
                : ""
            }
            <tr><td style="padding:6px 8px; font-weight:bold; vertical-align: top;">Message</td><td style="padding:6px 8px; white-space: pre-wrap;">${escapeHtml(
              normalized.message
            )}</td></tr>
          </tbody>
        </table>
      </div>
    `;

    await transporter.sendMail({
      from,
      to,
      replyTo: normalized.email,
      subject,
      text: textLines.join("\n"),
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
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
