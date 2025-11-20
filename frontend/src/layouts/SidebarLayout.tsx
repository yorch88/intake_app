"use client";

import { useThemeConfig } from "@/context/ThemeContext";

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  const theme = useThemeConfig();

  return (
    <div className="min-h-screen flex bg-secondary/10">
      <aside className="w-72 bg-primary text-white flex flex-col p-4">
        {theme.images.sidebarBanner && (
          <img
            src={theme.images.sidebarBanner}
            alt="Banner"
            className="mb-4 rounded-lg object-cover"
          />
        )}
        <nav className="space-y-2 text-sm">
          <span className="font-semibold text-xs uppercase tracking-widest text-white/70">
            Cotizaciones
          </span>
          <button className="block w-full text-left hover:bg-white/10 rounded px-2 py-1 cursor-pointer">
            Leads
          </button>
          <button className="block w-full text-left hover:bg-white/10 rounded px-2 py-1 cursor-pointer">
            Cotizaciones
          </button>
          <button className="block w-full text-left hover:bg-white/10 rounded px-2 py-1 cursor-pointer">
            Productos
          </button>
        </nav>
      </aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
