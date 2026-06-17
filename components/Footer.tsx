import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-shell flex-wrap items-center justify-between gap-3.5 px-6 py-[30px] sm:px-11">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-shu" />
          <span className="text-xs text-inkFaint">
            © {new Date().getFullYear()} {profile.name}
          </span>
        </div>
      </div>
    </footer>
  );
}
