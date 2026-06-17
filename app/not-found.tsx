import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found — Eleana Rinaudo",
};

export default function NotFound() {
  return (
    <main
      id="main"
      className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center"
    >
      <span className="mb-9 block h-[52px] w-[52px] rounded-full bg-shu" />
      <p className="text-[13px] font-semibold uppercase tracking-[0.32em] text-shu">404</p>
      <h1 className="mt-4 font-serif text-[clamp(32px,6vw,64px)] font-normal -tracking-[0.02em] text-ink">
        Page not found
      </h1>
      <p className="mt-5 max-w-[42ch] text-[15px] leading-[1.7] text-inkSoft">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <a href="/" className="btn-primary mt-9">
        Back home <span className="arrow text-[15px]">→</span>
      </a>
    </main>
  );
}
