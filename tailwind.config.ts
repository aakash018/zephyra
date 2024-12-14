import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxxl: "32px",
        xxl: "24px",
        xl: "18px",
        lg: "16px",
        md: "14px",
        sm: "12px",
        vsm: "8px"
      },
      colors: {

        "primary-bg": "#202f29",
        "primary-fg": "#9fa6a0",
        "primary-hl": "#c47171",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
