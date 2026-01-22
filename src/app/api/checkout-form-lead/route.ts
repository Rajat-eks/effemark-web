import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type CheckoutFormLeadPayload = {
  fullName: string;
  email: string;
  contactNumber: string;
  productName?: string;
};

type CheckoutFormLeadInput = {
  fullName?: string;
  name?: string;
  email?: string;
  mail?: string;
  contactNumber?: string;
  phone?: string;
  mobile?: string;
  productName?: string;
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
  payload: Partial<CheckoutFormLeadPayload>
): payload is CheckoutFormLeadPayload {
  return (
    typeof payload.fullName === "string" &&
    typeof payload.email === "string" &&
    typeof payload.contactNumber === "string" &&
    payload.fullName.trim() !== "" &&
    payload.email.trim() !== "" &&
    payload.contactNumber.trim() !== ""
  );
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const json = (await req.json()) as CheckoutFormLeadInput;

    const normalized: Partial<CheckoutFormLeadPayload> = {
      fullName: json.fullName ?? json.name ?? "",
      email: json.email ?? json.mail ?? "",
      contactNumber: json.contactNumber ?? json.phone ?? json.mobile ?? "",
      productName: json.productName ?? "",
    };

    if (!validatePayload(normalized)) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields: fullName, email, contactNumber",
        },
        { status: 400 }
      );
    }

    // Validate email format
    if (!validateEmail(normalized.email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid email format",
        },
        { status: 400 }
      );
    }

    // Verify SMTP configuration
    assertRequiredEnv("SMTP_USER", "SMTP_PASS");
    const host = (getEnv("SMTP_HOST", "smtp.hostinger.com") as string)!;
    const port = Number(getEnv("SMTP_PORT", "465")) || 465;
    const user = getEnv("SMTP_USER") as string;
    const pass = getEnv("SMTP_PASS") as string;
    const secure =
      (getEnv("SMTP_SECURE", "true") as string).toLowerCase() === "true";
    const from = (getEnv("SMTP_FROM", "info@effemark.com") as string) || user;
    const to = "ram.tenneti@effectualservices.com, amit.goel@effectualservices.com, naveen.kumar@effectualservices.in";
    // const to = "rajat.verma@effectualservices.in";

    console.log("Sending checkout form lead email via SMTP");

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const subject = `New Checkout Form Lead - ${normalized.fullName}`;
    const textLines = [
      `Name: ${normalized.fullName}`,
      `Email: ${normalized.email}`,
      `Contact Number: ${normalized.contactNumber}`,
      normalized.productName ? `Product: ${normalized.productName}` : undefined,
      `\nNote: This is an automatic notification when a user fills in their basic details on the checkout form.`,
    ].filter(Boolean) as string[];

    const html = `
      <div style="font-family: Arial, sans-serif; line-height:1.6;">
        <h2 style="margin:0 0 12px; color: #C31117;">New Checkout Form Lead</h2>
        <p style="color: #666; font-size: 14px; margin-bottom: 20px;">
          A user has filled in their basic details on the checkout form.
        </p>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tbody>
            <tr>
              <td style="padding:8px 12px; font-weight:bold; background-color: #f5f5f5; border: 1px solid #ddd;">Name</td>
              <td style="padding:8px 12px; border: 1px solid #ddd;">${escapeHtml(
                normalized.fullName
              )}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px; font-weight:bold; background-color: #f5f5f5; border: 1px solid #ddd;">Email</td>
              <td style="padding:8px 12px; border: 1px solid #ddd;">
                <a href="mailto:${escapeHtml(normalized.email)}" style="color: #C31117;">
                  ${escapeHtml(normalized.email)}
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 12px; font-weight:bold; background-color: #f5f5f5; border: 1px solid #ddd;">Contact Number</td>
              <td style="padding:8px 12px; border: 1px solid #ddd;">
                <a href="tel:${escapeHtml(normalized.contactNumber)}" style="color: #C31117;">
                  ${escapeHtml(normalized.contactNumber)}
                </a>
              </td>
            </tr>
            ${
              normalized.productName
                ? `<tr>
                    <td style="padding:8px 12px; font-weight:bold; background-color: #f5f5f5; border: 1px solid #ddd;">Product</td>
                    <td style="padding:8px 12px; border: 1px solid #ddd;">${escapeHtml(
                      normalized.productName
                    )}</td>
                  </tr>`
                : ""
            }
          </tbody>
        </table>
        <p style="color: #999; font-size: 12px; margin-top: 20px; font-style: italic;">
          This is an automatic notification sent when a user fills in their basic details on the checkout form.
        </p>
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
    console.error("Error sending checkout form lead email:", message);
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
