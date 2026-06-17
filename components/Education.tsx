import { education, training } from "@/lib/data";
import type { Study } from "@/lib/data";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

function StudyList({ items, accentPeriod }: { items: Study[]; accentPeriod?: boolean }) {
  return (
    <div>
      {items.map((s, i) => (
        <div
          key={s.title}
          className={`flex items-baseline justify-between gap-4 py-[18px] ${
            i < items.length - 1 ? "border-b border-line" : ""
          }`}
        >
          <div>
            <div className="text-[15px] font-semibold">{s.title}</div>
            <div className="mt-[3px] text-[13px] text-inkSoft">{s.org}</div>
          </div>
          <span
            className={`shrink-0 ${
              accentPeriod
                ? "text-[10.5px] font-semibold uppercase tracking-[0.1em] text-shu"
                : "text-xs text-inkFaint tabular-nums"
            }`}
          >
            {s.period}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Education() {
  return (
    <Section id="education" tone="paper2">
      <SectionHeading num="05" label="Education" className="mb-[clamp(36px,5vw,56px)]" />
      <div className="grid gap-[clamp(32px,5vw,64px)] sm:grid-cols-2">
        <div>
          <h3 className="m-0 mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-inkFaint">
            Degrees
          </h3>
          <StudyList items={education} accentPeriod />
        </div>
        <div>
          <h3 className="m-0 mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-inkFaint">
            Additional training
          </h3>
          <StudyList items={training} />
        </div>
      </div>
    </Section>
  );
}
