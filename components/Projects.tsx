import type { Project } from "@/lib/data";
import { projects } from "@/lib/data";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { ExternalLinkIcon, LockIcon } from "./icons";

function StatusBadge({ status, primary }: { status: string; primary?: boolean }) {
  if (primary) {
    return (
      <span className="rounded-full bg-shu/[0.12] px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-shu">
        {status}
      </span>
    );
  }
  return (
    <span className="rounded-full bg-paper2 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-inkSoft">
      {status}
    </span>
  );
}

function RowBody({ p, num }: { p: Project; num: string }) {
  return (
    <>
      <span className="shrink-0 font-serif text-[clamp(20px,3vw,30px)] leading-none text-shu">
        {num}
      </span>
      <div className="min-w-0 flex-1 basis-[300px]">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="m-0 text-[clamp(18px,2.2vw,22px)] font-semibold -tracking-[0.01em]">
            {p.title}
          </h3>
          <StatusBadge status={p.status} primary={p.private} />
          {p.private && (
            <span className="inline-flex items-center gap-1.5 text-[11px] text-inkFaint">
              <LockIcon className="h-[11px] w-[11px]" /> Private code
            </span>
          )}
          {p.link && (
            <ExternalLinkIcon className="ml-auto h-[17px] w-[17px] text-inkFaint transition-colors group-hover:text-shu" />
          )}
        </div>
        <p className="mt-3.5 max-w-[72ch] text-[14.5px] leading-[1.68] text-inkSoft">
          {p.description}
        </p>
        <div className="mt-[18px] flex flex-wrap gap-[7px]">
          {p.stack.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default function Projects() {
  const rowClass =
    "flex flex-wrap gap-4 border-b border-line px-0 py-[clamp(28px,4vw,40px)] transition-colors hover:bg-paper2 sm:gap-[clamp(16px,4vw,44px)]";
  return (
    <Section id="work">
      <SectionHeading num="04" label="Work" className="mb-[clamp(20px,3vw,32px)]" />
      <div className="border-t border-line">
        {projects.map((p, i) => {
          const num = String(i + 1).padStart(2, "0");
          return p.link ? (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group text-ink no-underline ${rowClass}`}
            >
              <RowBody p={p} num={num} />
            </a>
          ) : (
            <div key={p.title} className={`group ${rowClass}`}>
              <RowBody p={p} num={num} />
            </div>
          );
        })}
      </div>
    </Section>
  );
}
