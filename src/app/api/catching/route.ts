import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const page = request.url
    ? new URL(request.url).searchParams.get("path")
    : undefined;

  if (!!page) {
    revalidatePath(page);
    return Response.json({ status: 200 });
  }
  return Response.json({ status: 404, message: "not-found" });
}
