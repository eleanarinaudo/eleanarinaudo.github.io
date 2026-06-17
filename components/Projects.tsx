import type { Project } from "@/lib/data";
import { projects } from "@/lib/data";
import { ExternalLinkIcon, LockIcon } from "./icons";

function CardBody({ p }: { p: Project }) {
  return (
    <>
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <h3 className="text-lg font-semibold text-zinc-100">{p.title}</h3>
        <span className="chip border-accent/20 bg-accent/10 text-accent-soft">{p.status}</span>
        {p.private && (
          <span className="inline-flex items-center gap-1 text-xs text-zinc-500">
            <LockIcon className="h-3.5 w-3.5" /> Private code
          </span>
        )}
        {p.link && (
          <ExternalLinkIcon className="ml-auto h-4 w-4 text-zinc-500 transition group-hover:text-accent" />
        )}
      </div>
      <p className="mb-4 max-w-3xl text-sm leading-relaxed text-zinc-400">{p.description}</p>
      <ul className="flex flex-wrap gap-2">
        {p.stack.map((t) => (
          <li key={t} className="chip font-mono">
            {t}
          </li>
        ))}
      </ul>
    </>
  );
}

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
      <p className="section-label">Selected work</p>
      <div className="grid gap-5">
        {projects.map((p) =>
          p.link ? (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card group block cursor-pointer p-6 sm:p-7"
            >
              <CardBody p={p} />
            </a>
          ) : (
            <div key={p.title} className="card group block p-6 sm:p-7">
              <CardBody p={p} />
            </div>
          ),
        )}
      </div>
    </section>
  );
}
