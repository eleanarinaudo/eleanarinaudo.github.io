import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
      <p className="section-label">Skills</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((s) => (
          <div key={s.group} className="card p-6">
            <h3 className="mb-4 font-mono text-sm font-semibold text-zinc-200">{s.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {s.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
