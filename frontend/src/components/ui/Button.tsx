"use client";

import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({ variant = "primary", className, ...props }: Props) {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium disabled:opacity-60 disabled:cursor-not-allowed";
  const variants: Record<string, string> = {
    primary: "bg-primary text-white hover:bg-primary/80",
    secondary: "bg-secondary text-white hover:bg-secondary/80"
  };

  return (
    <button
      className={clsx(base, variants[variant], className)}
      {...props}
    />
  );
}
