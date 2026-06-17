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
        paper: "var(--paper)",
        paper2: "var(--paper-2)",
        card: "var(--card)",
        ink: "var(--ink)",
        inkSoft: "var(--ink-soft)",
        inkFaint: "var(--ink-faint)",
        line: "var(--line)",
        lineStrong: "var(--line-strong)",
        shu: "var(--shu)",
        onShu: "var(--on-shu)",
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
