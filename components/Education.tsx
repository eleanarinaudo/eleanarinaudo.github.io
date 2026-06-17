import { education, training } from "@/lib/data";
import type { Study } from "@/lib/data";

function StudyList({ items }: { items: Study[] }) {
  return (
    <ul className="space-y-4">
      {items.map((s) => (
        <li key={s.title} className="flex flex-col gap-0.5">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3">
            <span className="text-sm font-semibold text-zinc-200">{s.title}</span>
            <span className="font-mono text-[0.7rem] text-zinc-500">{s.period}</span>
          </div>
          <span className="text-sm text-zinc-400">{s.org}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
      <p className="section-label">Education</p>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="card p-6">
          <h3 className="mb-4 font-mono text-sm font-semibold text-zinc-200">Degrees</h3>
          <StudyList items={education} />
        </div>
        <div className="card p-6">
          <h3 className="mb-4 font-mono text-sm font-semibold text-zinc-200">Additional training</h3>
          <StudyList items={training} />
        </div>
      </div>
    </section>
  );
}
