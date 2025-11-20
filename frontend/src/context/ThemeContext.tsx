"use client";

import { createContext, useContext, useEffect } from "react";
import type { TenantUiConfig } from "@/lib/apiClient";

const ThemeContext = createContext<TenantUiConfig | null>(null);

function hexToRgb(hex: string): string {
  const value = hex.replace("#", "");
  const bigint = parseInt(value, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r} ${g} ${b}`;
}

export function ThemeProvider({
  config,
  children
}: {
  config: TenantUiConfig;
  children: React.ReactNode;
}) {
  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty(
      "--tw-color-primary",
      hexToRgb(config.colors.primary)
    );
    root.style.setProperty(
      "--tw-color-secondary",
      hexToRgb(config.colors.secondary)
    );
    root.style.setProperty(
      "--tw-color-accent",
      hexToRgb(config.colors.accent)
    );
  }, [config]);

  return (
    <ThemeContext.Provider value={config}>{children}</ThemeContext.Provider>
  );
}

export function useThemeConfig() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useThemeConfig debe usarse dentro de ThemeProvider");
  }
  return ctx;
}
