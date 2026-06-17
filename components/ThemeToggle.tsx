"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";

/** Light/dark switch. Persists choice to localStorage; light is the default. */
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    const root = document.documentElement;
    if (next) {
      root.setAttribute("data-theme", "dark");
      try {
        localStorage.setItem("theme", "dark");
      } catch {}
    } else {
      root.removeAttribute("data-theme");
      try {
        localStorage.setItem("theme", "light");
      } catch {}
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="inline-flex items-center gap-2 rounded-[2px] border border-lineStrong px-3 py-[7px] text-[10.5px] uppercase tracking-[0.16em] text-inkSoft transition-colors hover:border-ink hover:text-ink"
    >
      {/* Render a stable label until mounted to avoid hydration mismatch. */}
      {mounted && dark ? (
        <>
          <SunIcon className="h-3.5 w-3.5" /> Light
        </>
      ) : (
        <>
          <MoonIcon className="h-3.5 w-3.5" /> Dark
        </>
      )}
    </button>
  );
}
