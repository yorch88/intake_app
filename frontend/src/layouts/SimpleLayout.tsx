"use client";

import { useThemeConfig } from "@/context/ThemeContext";

export function SimpleLayout({ children }: { children: React.ReactNode }) {
  const theme = useThemeConfig();

  return (
    <div className="min-h-screen flex flex-col bg-secondary/10">
      <header className="w-full py-6 px-4 bg-primary text-white">
        <div className="mx-auto max-w-5xl flex items-center gap-4">
          {theme.images.hero && (
            <img
              src={theme.images.hero}
              alt="Hero"
              className="h-12 w-12 rounded-full object-cover"
            />
          )}
          <div>
            <h1 className="text-xl font-semibold">Portal de cotizaciones</h1>
            <p className="text-sm text-white/80">
              Atención personalizada para tus clientes
            </p>
          </div>
        </div>
      </header>

      <main className="flex-1 mx-auto max-w-5xl w-full p-4">
        {children}
      </main>
    </div>
  );
}
