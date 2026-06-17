import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md backdrop-saturate-150 transition-colors">
      <nav
        aria-label="Primary"
        className="relative mx-auto flex max-w-shell items-center justify-between gap-5 px-6 py-4 sm:px-11"
      >
        <a href="#top" className="flex items-center gap-2 text-ink no-underline">
          <span className="h-[9px] w-[9px] rounded-full bg-shu" />
          <span className="text-sm font-bold tracking-[0.14em]">ER.</span>
        </a>
        <div className="flex items-center gap-4 sm:gap-7">
          <ul className="hidden list-none items-center gap-4 sm:flex sm:gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[12.5px] font-medium tracking-[0.05em] text-inkSoft transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <MobileMenu links={links} />
        </div>
      </nav>
    </header>
  );
}
