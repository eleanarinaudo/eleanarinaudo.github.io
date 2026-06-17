import { skills } from "@/lib/data";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <Section id="skills" tone="paper2">
      <SectionHeading num="03" label="Skills" className="mb-[clamp(36px,5vw,56px)]" />
      {/* 1px gap over a line-strong background paints hairline grid dividers. */}
      <div className="grid gap-px overflow-hidden rounded-md border border-lineStrong bg-lineStrong sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div key={s.group} className="bg-card p-[clamp(22px,3vw,30px)]">
            <h3 className="m-0 mb-[18px] text-[11px] font-bold uppercase tracking-[0.22em] text-ink">
              {s.group}
            </h3>
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
              {s.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
