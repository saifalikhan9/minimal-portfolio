import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST() {
  revalidateTag("blogs", "max");

  return NextResponse.json({
    success: true,
    message: "Blogs cache revalidated",
  });
}
