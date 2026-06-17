import { experience } from "@/lib/data";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading num="02" label="Experience" className="mb-[clamp(40px,5vw,64px)]" />

      {experience.map((role, idx) => {
        const hasStreams = role.streams.length > 0;
        return (
          <div
            key={role.company + role.title}
            className={
              idx === 0
                ? "mb-[clamp(48px,7vw,72px)]"
                : "border-t border-line pt-[clamp(36px,5vw,52px)]"
            }
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-2">
              <h3
                className={`m-0 font-semibold -tracking-[0.01em] ${
                  hasStreams
                    ? "text-[clamp(20px,2.4vw,26px)]"
                    : "text-[clamp(18px,2.2vw,22px)]"
                }`}
              >
                {role.title} <span className="text-shu">· {role.company}</span>
                {role.note && (
                  <span className="text-[13px] font-normal text-inkFaint"> ({role.note})</span>
                )}
              </h3>
              <span className="text-xs uppercase tracking-[0.12em] text-inkFaint tabular-nums">
                {role.period}
              </span>
            </div>

            {role.summary && (
              <p className="mt-3 max-w-[70ch] text-[14.5px] leading-[1.65] text-inkSoft">
                {role.summary}
              </p>
            )}

            {hasStreams && (
              <div className="mt-[34px] flex flex-col gap-[34px]">
                {role.streams.map((s) => (
                  <div key={s.title} className="border-l border-lineStrong pl-[clamp(18px,3vw,28px)]">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5">
                      <h4 className="m-0 text-base font-semibold">{s.title}</h4>
                      <span className="text-[11px] uppercase tracking-[0.12em] text-inkFaint tabular-nums">
                        {s.period}
                      </span>
                    </div>
                    <ul className="m-0 mt-3.5 list-none p-0">
                      {s.points.map((p, i) => (
                        <li key={i} className="mt-3 flex gap-3.5">
                          <span className="mt-[11px] h-px w-2 shrink-0 bg-shu" />
                          <span className="text-sm leading-[1.62] text-inkSoft">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </Section>
  );
}
