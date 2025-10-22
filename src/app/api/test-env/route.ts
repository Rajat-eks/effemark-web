import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const envVars = {
      NODE_ENV: process.env.NODE_ENV,
      MONGODB_URI:
        "mongodb+srv://gla_test:satyatyagi@cluster0.8hsqtg4.mongodb.net/effemark",
      PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID ? "Set" : "Not set",
      PAYPAL_CLIENT_SECRET: process.env.PAYPAL_CLIENT_SECRET
        ? "Set"
        : "Not set",
      NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    };

    return NextResponse.json({
      success: true,
      environment: envVars,
      message: "Environment variables check",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to check environment variables" },
      { status: 500 }
    );
  }
}
