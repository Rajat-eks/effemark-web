// PayPal Configuration Helper
export interface PayPalConfig {
  clientId: string;
  clientSecret: string;
  mode: "sandbox" | "live";
  baseUrl: string;
}

export function getPayPalConfig(): PayPalConfig {
  const config = {
    clientId: process.env.PAYPAL_CLIENT_ID || process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
    clientSecret: process.env.PAYPAL_CLIENT_SECRET || "",
    mode: (process.env.PAYPAL_MODE as "sandbox" | "live") || "sandbox",
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  };

  // Debug configuration
  console.log("🔧 PayPal Configuration:");
  console.log("   Client ID:", config.clientId ? "Set" : "Not set");
  console.log("   Client Secret:", config.clientSecret ? "Set" : "Not set");
  console.log("   Mode:", config.mode);
  console.log("   Base URL:", config.baseUrl);

  return config;
}

export function isPayPalConfigured(): boolean {
  const config = getPayPalConfig();
  return !!(
    config.clientId &&
    config.clientSecret &&
    config.clientId !== "" &&
    config.clientSecret !== "" &&
    !config.clientId.includes("your_") &&
    !config.clientId.includes("_here")
  );
}

export function getPayPalApiUrl(mode: "sandbox" | "live"): string {
  return mode === "live"
    ? "https://api.paypal.com"
    : "https://api.sandbox.paypal.com";
}
