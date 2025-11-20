export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000";

export type TenantUiConfig = {
  tenantId: string;
  layoutKey: "simple" | "sidebar" | "cover";
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  images: {
    hero?: string;
    sidebarBanner?: string;
  };
};

export async function fetchTenantUiConfig(tenantSlug: string): Promise<TenantUiConfig> {
  const res = await fetch(
    `${API_BASE_URL}/tenants/by-slug/${tenantSlug}/ui-config`,
    {
      headers: {
        "x-tenant-slug": tenantSlug
      },
      cache: "no-store"
    }
  );

  if (!res.ok) {
    throw new Error("No se pudo cargar la configuración del tenant");
  }

  return res.json();
}
