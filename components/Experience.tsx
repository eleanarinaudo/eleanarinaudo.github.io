import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
      <p className="section-label">Experience</p>
      <div className="space-y-10">
        {experience.map((role) => (
          <div key={role.company + role.title}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold text-zinc-100">
                {role.title}{" "}
                <span className="text-accent">· {role.company}</span>
                {role.note && (
                  <span className="ml-1 text-sm font-normal text-zinc-500">({role.note})</span>
                )}
              </h3>
              <span className="font-mono text-xs text-zinc-500">{role.period}</span>
            </div>
            {role.summary && (
              <p className="mt-1.5 max-w-3xl text-sm text-zinc-400">{role.summary}</p>
            )}

            {role.streams.length > 0 && (
              <div className="mt-5 space-y-5 border-l border-white/10 pl-5 sm:pl-6">
                {role.streams.map((s) => (
                  <div key={s.title} className="relative">
                    <span className="absolute -left-[1.55rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-ink-950 sm:-left-[1.8rem]" />
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <h4 className="text-sm font-semibold text-zinc-200">{s.title}</h4>
                      <span className="font-mono text-[0.7rem] text-zinc-500">{s.period}</span>
                    </div>
                    <ul className="mt-2 space-y-1.5">
                      {s.points.map((p, i) => (
                        <li key={i} className="flex gap-2 text-sm leading-relaxed text-zinc-400">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
