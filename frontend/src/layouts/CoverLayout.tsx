"use client";

import { useThemeConfig } from "@/context/ThemeContext";

export function CoverLayout({ children }: { children: React.ReactNode }) {
  const theme = useThemeConfig();

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/10">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl overflow-hidden flex">
        <div className="hidden md:block w-1/2 relative">
          {theme.images.hero && (
            <img
              src={theme.images.hero}
              alt="Hero"
              className="h-full w-full object-cover"
            />
          )}
        </div>
        <div className="w-full md:w-1/2 p-8 bg-secondary/5">{children}</div>
      </div>
    </div>
  );
}
