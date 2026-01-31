import { umamiClient } from "@/src/utils/getUmamiClient";
import { NextResponse } from "next/server";

export async function GET() {
  // Construct argument according to getWebsitePageviews requirements:
  // { startAt: number, endAt: number, unit: string, timezone: string, ... }
  // startAt and endAt must be timestamps (numbers), not strings
  const startDate = new Date("2026-01-01T00:00:00.000Z");
  const endDate = new Date();
  
  const data = {
    startAt: startDate.getTime(),   // Convert to timestamp (number)
    endAt: endDate.getTime(),       // Convert to timestamp (number)
    unit: "day",                    // Required: "day", "month", or "year"
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone  // Required: user's timezone
  };
  try {
    const res = await umamiClient.getWebsiteStats(
      process.env.UMAMI_WEBSITE_ID||"",
      data
    );
    // console.log(res);
    // Only return 200 when status is 200 and ok is true
    if (res.status === 200 ) {
      return NextResponse.json(
        { data: res.data },
        { status: 200 }
      );
    }

    // If there's an error, return error response
    if (res.error) {
      return NextResponse.json(
        { error: res.error },
        { status: res.status || 500 }
      );
    }

    // If status is not 200, return error response
    return NextResponse.json(
      { error: res.error },
      {status:res.status}
    );
  } catch (error) {
     return NextResponse.json(
      { error },
      { status: 500 }
    );
  }
}