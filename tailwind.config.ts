import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070710",
          900: "#0c0c17",
          800: "#13131f",
          700: "#1c1c2b",
        },
        accent: {
          DEFAULT: "#818cf8",
          soft: "#a5b4fc",
          deep: "#6366f1",
        },
        accent2: {
          DEFAULT: "#e879f9",
          deep: "#c026d3",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.35", transform: "translateY(0) scale(1)" },
          "50%": { opacity: "0.6", transform: "translateY(20px) scale(1.08)" },
        },
        "glow-alt": {
          "0%, 100%": { opacity: "0.25", transform: "translate(0,0) scale(1)" },
          "50%": { opacity: "0.5", transform: "translate(-24px,16px) scale(1.12)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 0 0 rgba(129,140,248,0.6)" },
          "70%": { opacity: "0.7", boxShadow: "0 0 0 6px rgba(129,140,248,0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        glow: "glow 9s ease-in-out infinite",
        "glow-alt": "glow-alt 11s ease-in-out infinite",
        "spin-slow": "spin-slow 14s linear infinite",
        shimmer: "shimmer 6s linear infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
