import { NextResponse } from "next/server";

const SUPPLIER_API_URL = "https://brandbnalo.com/api/form/add";
const BUSINESS_EMAIL = "aryaindustry36@gmail.com";
const MAX_FIELD_LENGTH = 2000;

const getField = (value) =>
  typeof value === "string" ? value.trim() : "";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid enquiry data." },
      { status: 400 }
    );
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json(
      { success: false, message: "Invalid enquiry data." },
      { status: 400 }
    );
  }

  const enquiry = {
    platform: getField(body.platform),
    name: getField(body.name),
    phone: getField(body.phone),
    email: getField(body.email),
    place: getField(body.place) || "N/A",
    product: getField(body.product) || "N/A",
    message: getField(body.message),
  };

  if (!enquiry.name || !enquiry.phone) {
    return NextResponse.json(
      { success: false, message: "Name and phone are required." },
      { status: 400 }
    );
  }

  if (
    Object.values(enquiry).some((value) => value.length > MAX_FIELD_LENGTH)
  ) {
    return NextResponse.json(
      { success: false, message: "Enquiry details are too long." },
      { status: 400 }
    );
  }

  const supplierToken = process.env.ARYA_SUPPLIER_TOKEN?.trim();
  if (!supplierToken) {
    console.error("ARYA_SUPPLIER_TOKEN is not configured.");
    return NextResponse.json(
      { success: false, message: "Enquiry service is not configured." },
      { status: 500 }
    );
  }

  let supplierResponse;
  try {
    supplierResponse = await fetch(SUPPLIER_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...enquiry,
        platformEmail: BUSINESS_EMAIL,
        supplierToken,
      }),
      cache: "no-store",
    });
  } catch (error) {
    console.error("Enquiry supplier request failed:", error);
    return NextResponse.json(
      { success: false, message: "Could not reach the enquiry service." },
      { status: 502 }
    );
  }

  let supplierResult;
  try {
    supplierResult = await supplierResponse.json();
  } catch {
    console.error(
      "Enquiry supplier returned invalid JSON:",
      supplierResponse.status
    );
    return NextResponse.json(
      { success: false, message: "The enquiry service returned an invalid response." },
      { status: 502 }
    );
  }

  if (!supplierResponse.ok || !supplierResult?.success) {
    console.error(
      "Enquiry supplier rejected the request:",
      supplierResponse.status
    );
    return NextResponse.json(
      { success: false, message: "Failed to send your enquiry. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
