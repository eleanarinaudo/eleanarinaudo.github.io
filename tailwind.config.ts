import type { Config } from "tailwindcss";

const config: Config = {
  // Theme is switched by a `data-theme="dark"` attribute on <html>.
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // Washi-paper palette driven by CSS variables (see globals.css).
      // Light + dark values live there; Tailwind just references the tokens.
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        paper2: "rgb(var(--paper-2) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        inkSoft: "rgb(var(--ink-soft) / <alpha-value>)",
        inkFaint: "rgb(var(--ink-faint) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        lineStrong: "rgb(var(--line-strong) / <alpha-value>)",
        shu: "rgb(var(--shu) / <alpha-value>)",
        onShu: "rgb(var(--on-shu) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-zen-kaku)", "system-ui", "sans-serif"],
        serif: ["var(--font-zen-mincho)", "Georgia", "serif"],
      },
      maxWidth: {
        shell: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
