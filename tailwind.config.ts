import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0066cc",
        "primary-foreground": "#ffffff",
        secondary: "#f4f4f5",
        "muted-foreground": "#71717a",
      },
      gradientColorStops: theme => ({
        'blue': {
          '500': '#3B82F6',
          '600': '#2563EB',
          '700': '#1D4ED8',
        },
      }),
    },
  },
  plugins: [],
} satisfies Config;
