import type { Metadata } from "next";
import "./globals.css";
import { headers } from "next/headers";
import { fetchTenantUiConfig } from "@/lib/apiClient";
import { TenantProvider } from "@/context/TenantContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { SimpleLayout } from "@/layouts/SimpleLayout";
import { SidebarLayout } from "@/layouts/SidebarLayout";
import { CoverLayout } from "@/layouts/CoverLayout";

const layouts = {
  simple: SimpleLayout,
  sidebar: SidebarLayout,
  cover: CoverLayout
} as const;

export const metadata: Metadata = {
  title: "Intake App",
  description: "App multi-tenant para cotizaciones"
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const hdrs = headers();
  const tenantSlug = hdrs.get("x-tenant-slug") ?? "default";

  const config = await fetchTenantUiConfig(tenantSlug);
  const LayoutComponent = layouts[config.layoutKey] ?? SimpleLayout;

  return (
    <html lang="es">
      <body>
        <TenantProvider value={{ slug: tenantSlug, config }}>
          <ThemeProvider config={config}>
            <LayoutComponent>{children}</LayoutComponent>
          </ThemeProvider>
        </TenantProvider>
      </body>
    </html>
  );
}
