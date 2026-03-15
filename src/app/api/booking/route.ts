import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, address, serviceType, preferredDate, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !address || !serviceType || !preferredDate) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log booking to console (replace this with DB call or email service later)
    console.log("=== NEW BOOKING REQUEST ===");
    console.log({
      name,
      email,
      phone,
      address,
      serviceType,
      preferredDate,
      message: message || "(no message)",
      submittedAt: new Date().toISOString(),
    });
    console.log("===========================");

    // TODO: Integrate Stripe for payment processing
    // TODO: Save booking to database
    // TODO: Send confirmation email to customer
    // TODO: Notify assigned professional

    return NextResponse.json(
      {
        success: true,
        message: "Booking received successfully! We'll contact you within 30 minutes.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
