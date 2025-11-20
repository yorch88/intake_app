import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--tw-color-primary) / <alpha-value>)",
        secondary: "rgb(var(--tw-color-secondary) / <alpha-value>)",
        accent: "rgb(var(--tw-color-accent) / <alpha-value>)"
      }
    }
  },
  plugins: []
};

export default config;
