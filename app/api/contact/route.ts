import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, platform, overview, budget, timeline } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Full Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "A valid Email Address is required." },
        { status: 400 }
      );
    }

    if (!platform || typeof platform !== "string") {
      return NextResponse.json(
        { error: "Please select a platform or framework." },
        { status: 400 }
      );
    }

    // In a production app, forward to CRM / Resend / Slack / Discord webhook
    console.log("[FlowRadix Contact Submission]", {
      name,
      email,
      platform,
      overview,
      budget: budget || "Not specified",
      timeline: timeline || "Flexible",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! Our engineering lead will review your project and get back to you within 2 hours.",
        receivedData: { name, email, platform },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact request:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again or email us directly at contact@flowradix.com" },
      { status: 500 }
    );
  }
}
