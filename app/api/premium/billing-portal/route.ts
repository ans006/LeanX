import { NextResponse } from "next/server";

/**
 * POST /api/premium/billing-portal
 *
 * Premium feature disabled in LeanX
 */
export async function POST() {
  return NextResponse.json(
    {
      success: false,
      error: "Premium features are not available in LeanX",
    },
    { status: 410 } // Gone
  );
}
