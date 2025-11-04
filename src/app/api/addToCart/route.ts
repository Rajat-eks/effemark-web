import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type AddToCartPayload = {
  product: {
    id: string;
    name: string;
    price: number;
    banner: string;
    included: string;
    addOns?: Array<{
      name: string;
      price: number;
    }>;
  };
  selectedAddOns?: Array<{
    name: string;
    price: number;
  }>;
  customerInfo?: {
    fullName: string;
    email: string;
    contactNumber: string;
    country: string;
    markTypes: string;
    markDetails: string;
    markImage?: string;
    niceClasses: string;
    goodsServices: string;
    referenceNumber: string;
    message: string;
  };
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
    const json = (await req.json()) as Partial<AddToCartPayload>;

    if (!json.product) {
      return NextResponse.json(
        {
          success: false,
          error: "Product information is required",
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
    // const to = "ram.tenneti@effectualservices.com, amit.goel@effectualservices.com, naveen.kumar@effectualservices.in";
    const to = "rajat.verma@effectualservices.in";

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const product = json.product;
    const selectedAddOns = json.selectedAddOns || [];
    const customerInfo = json.customerInfo;

    // Calculate total price
    const addOnsTotal = selectedAddOns.reduce((sum, addOn) => sum + addOn.price, 0);
    const totalPrice = product.price + addOnsTotal;

    const subject = `New item added to cart - ${product.name}`;
    
    // Build text version
    const textLines = [
      `Product: ${product.name}`,
      `Product ID: ${product.id}`,
      `Price: $${product.price.toFixed(2)}`,
      `Included: ${product.included}`,
      product.addOns && product.addOns.length > 0
        ? `Available Add-ons: ${product.addOns.map((a) => `${a.name} ($${a.price.toFixed(2)})`).join(", ")}`
        : undefined,
      selectedAddOns.length > 0
        ? `Selected Add-ons: ${selectedAddOns.map((a) => `${a.name} ($${a.price.toFixed(2)})`).join(", ")}`
        : undefined,
      `Total Price: $${totalPrice.toFixed(2)}`,
      "",
      customerInfo ? "Customer Information:" : undefined,
      customerInfo ? `Full Name: ${customerInfo.fullName}` : undefined,
      customerInfo ? `Email: ${customerInfo.email}` : undefined,
      customerInfo ? `Contact Number: ${customerInfo.contactNumber}` : undefined,
      customerInfo ? `Country: ${customerInfo.country}` : undefined,
      customerInfo ? `Mark Types: ${customerInfo.markTypes}` : undefined,
      customerInfo ? `Mark Details: ${customerInfo.markDetails}` : undefined,
      customerInfo ? `Nice Classes: ${customerInfo.niceClasses}` : undefined,
      customerInfo ? `Goods/Services: ${customerInfo.goodsServices}` : undefined,
      customerInfo ? `Reference Number: ${customerInfo.referenceNumber}` : undefined,
      customerInfo && customerInfo.message ? `Message: ${customerInfo.message}` : undefined,
      customerInfo && customerInfo.markImage ? `Mark Image: [Base64 image attached]` : undefined,
    ].filter(Boolean) as string[];

    // Build HTML version
    const html = `
      <div style="font-family: Arial, sans-serif; line-height:1.6;">
        <h2 style="margin:0 0 12px; color: #C31117;">New Item Added to Cart</h2>
        
        <h3 style="margin:16px 0 8px; color: #333;">Product Details</h3>
        <table style="border-collapse: collapse; width: 100%; margin-bottom: 20px;">
          <tbody>
            <tr>
              <td style="padding:8px; font-weight:bold; border: 1px solid #ddd; background-color: #f5f5f5;">Product Name</td>
              <td style="padding:8px; border: 1px solid #ddd;">${escapeHtml(product.name)}</td>
            </tr>
            <tr>
              <td style="padding:8px; font-weight:bold; border: 1px solid #ddd; background-color: #f5f5f5;">Product ID</td>
              <td style="padding:8px; border: 1px solid #ddd;">${escapeHtml(product.id)}</td>
            </tr>
            <tr>
              <td style="padding:8px; font-weight:bold; border: 1px solid #ddd; background-color: #f5f5f5;">Price</td>
              <td style="padding:8px; border: 1px solid #ddd;">$${product.price.toFixed(2)}</td>
            </tr>
            <tr>
              <td style="padding:8px; font-weight:bold; border: 1px solid #ddd; background-color: #f5f5f5;">Included</td>
              <td style="padding:8px; border: 1px solid #ddd;">${escapeHtml(product.included)}</td>
            </tr>
            ${product.addOns && product.addOns.length > 0
              ? `<tr>
                  <td style="padding:8px; font-weight:bold; border: 1px solid #ddd; background-color: #f5f5f5;">Available Add-ons</td>
                  <td style="padding:8px; border: 1px solid #ddd;">${product.addOns.map((a) => `${escapeHtml(a.name)} ($${a.price.toFixed(2)})`).join(", ")}</td>
                </tr>`
              : ""}
            ${selectedAddOns.length > 0
              ? `<tr>
                  <td style="padding:8px; font-weight:bold; border: 1px solid #ddd; background-color: #f5f5f5;">Selected Add-ons</td>
                  <td style="padding:8px; border: 1px solid #ddd;">${selectedAddOns.map((a) => `${escapeHtml(a.name)} ($${a.price.toFixed(2)})`).join(", ")}</td>
                </tr>`
              : ""}
            <tr>
              <td style="padding:8px; font-weight:bold; border: 1px solid #ddd; background-color: #f5f5f5;">Total Price</td>
              <td style="padding:8px; border: 1px solid #ddd; font-weight:bold; color: #C31117;">$${totalPrice.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>

        ${customerInfo ? `
          <h3 style="margin:16px 0 8px; color: #333;">Customer Information</h3>
          <table style="border-collapse: collapse; width: 100%; margin-bottom: 20px;">
            <tbody>
              <tr>
                <td style="padding:8px; font-weight:bold; border: 1px solid #ddd; background-color: #f5f5f5;">Full Name</td>
                <td style="padding:8px; border: 1px solid #ddd;">${escapeHtml(customerInfo.fullName)}</td>
              </tr>
              <tr>
                <td style="padding:8px; font-weight:bold; border: 1px solid #ddd; background-color: #f5f5f5;">Email</td>
                <td style="padding:8px; border: 1px solid #ddd;">${escapeHtml(customerInfo.email)}</td>
              </tr>
              <tr>
                <td style="padding:8px; font-weight:bold; border: 1px solid #ddd; background-color: #f5f5f5;">Contact Number</td>
                <td style="padding:8px; border: 1px solid #ddd;">${escapeHtml(customerInfo.contactNumber)}</td>
              </tr>
              <tr>
                <td style="padding:8px; font-weight:bold; border: 1px solid #ddd; background-color: #f5f5f5;">Country</td>
                <td style="padding:8px; border: 1px solid #ddd;">${escapeHtml(customerInfo.country)}</td>
              </tr>
              <tr>
                <td style="padding:8px; font-weight:bold; border: 1px solid #ddd; background-color: #f5f5f5;">Mark Types</td>
                <td style="padding:8px; border: 1px solid #ddd;">${escapeHtml(customerInfo.markTypes)}</td>
              </tr>
              <tr>
                <td style="padding:8px; font-weight:bold; border: 1px solid #ddd; background-color: #f5f5f5; vertical-align: top;">Mark Details</td>
                <td style="padding:8px; border: 1px solid #ddd; white-space: pre-wrap;">${escapeHtml(customerInfo.markDetails)}</td>
              </tr>
              <tr>
                <td style="padding:8px; font-weight:bold; border: 1px solid #ddd; background-color: #f5f5f5;">Nice Classes</td>
                <td style="padding:8px; border: 1px solid #ddd;">${escapeHtml(customerInfo.niceClasses)}</td>
              </tr>
              <tr>
                <td style="padding:8px; font-weight:bold; border: 1px solid #ddd; background-color: #f5f5f5;">Goods/Services</td>
                <td style="padding:8px; border: 1px solid #ddd; white-space: pre-wrap;">${escapeHtml(customerInfo.goodsServices)}</td>
              </tr>
              <tr>
                <td style="padding:8px; font-weight:bold; border: 1px solid #ddd; background-color: #f5f5f5;">Reference Number</td>
                <td style="padding:8px; border: 1px solid #ddd;">${escapeHtml(customerInfo.referenceNumber)}</td>
              </tr>
              ${customerInfo.message
                ? `<tr>
                    <td style="padding:8px; font-weight:bold; border: 1px solid #ddd; background-color: #f5f5f5; vertical-align: top;">Message</td>
                    <td style="padding:8px; border: 1px solid #ddd; white-space: pre-wrap;">${escapeHtml(customerInfo.message)}</td>
                  </tr>`
                : ""}
              ${customerInfo.markImage
                ? `<tr>
                    <td style="padding:8px; font-weight:bold; border: 1px solid #ddd; background-color: #f5f5f5;">Mark Image</td>
                    <td style="padding:8px; border: 1px solid #ddd;">
                      <img src="${customerInfo.markImage}" alt="Mark Image" style="max-width: 300px; height: auto; border: 1px solid #ddd;" />
                    </td>
                  </tr>`
                : ""}
            </tbody>
          </table>
        ` : ""}
      </div>
    `;

    await transporter.sendMail({
      from,
      to,
      replyTo: customerInfo?.email || from,
      subject,
      text: textLines.join("\n"),
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Error sending add to cart email:", error);
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}

