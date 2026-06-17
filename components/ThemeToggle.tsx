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
    // Freeze transitions for one frame so the whole page snaps to the new
    // palette instead of each element cross-fading independently.
    root.setAttribute("data-theme-switching", "");
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
    requestAnimationFrame(() =>
      requestAnimationFrame(() => root.removeAttribute("data-theme-switching")),
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark theme"
      aria-pressed={mounted ? dark : undefined}
      className="inline-flex items-center gap-2 rounded-[3px] border border-lineStrong px-3 py-2.5 text-[10.5px] uppercase tracking-[0.16em] text-inkSoft transition-colors hover:border-ink hover:text-ink"
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
