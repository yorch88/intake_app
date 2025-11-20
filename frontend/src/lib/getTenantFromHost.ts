export function getTenantFromHost(host?: string | null): string | null {
  if (!host) return null;

  const [subdomain] = host.split(".");
  if (
    subdomain === "www" ||
    subdomain === "app" ||
    subdomain === "localhost"
  ) {
    return null;
  }

  return subdomain;
}
