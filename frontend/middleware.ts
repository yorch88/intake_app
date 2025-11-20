import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getTenantFromHost } from "./src/lib/getTenantFromHost";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get("host");
  const tenantFromHost = getTenantFromHost(host);
  const tenantFromQuery = url.searchParams.get("tenant");

  const tenant = tenantFromQuery || tenantFromHost || "default";

  const res = NextResponse.next();
  res.headers.set("x-tenant-slug", tenant);

  return res;
}
