// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  darkMode: "class",
  theme: { extend: {} },
  plugins: [],
} satisfies Config;
