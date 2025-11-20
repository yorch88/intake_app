"use client";

import { createContext, useContext } from "react";
import type { TenantUiConfig } from "@/lib/apiClient";

type TenantContextValue = {
  slug: string;
  config: TenantUiConfig;
};

const TenantContext = createContext<TenantContextValue | null>(null);

export function TenantProvider({
  value,
  children
}: {
  value: TenantContextValue;
  children: React.ReactNode;
}) {
  return (
    <TenantContext.Provider value={value}>{children}</TenantContext.Provider>
  );
}

export function useTenant() {
  const ctx = useContext(TenantContext);
  if (!ctx) {
    throw new Error("useTenant debe usarse dentro de TenantProvider");
  }
  return ctx;
}
