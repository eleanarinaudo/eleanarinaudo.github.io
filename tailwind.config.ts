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
          950: "#08080c",
          900: "#0d0d14",
          800: "#14141f",
          700: "#1c1c2b",
        },
        accent: {
          DEFAULT: "#818cf8",
          soft: "#a5b4fc",
          deep: "#6366f1",
        },
      },
      fontFamily: {
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
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        glow: "glow 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
