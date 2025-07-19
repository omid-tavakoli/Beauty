import { logoutUser } from "@/service/utils/serverAuth";

export async function GET() {
  logoutUser();
  return Response.json({ status: 200 });
}
