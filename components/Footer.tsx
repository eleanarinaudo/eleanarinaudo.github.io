import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-6 py-10">
      <div className="flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-zinc-500 sm:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="font-mono">Built with Next.js &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
}
