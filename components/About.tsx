import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
      <p className="section-label">About</p>
      <div className="grid gap-5 sm:grid-cols-2">
        {about.map((para, i) => (
          <p key={i} className="text-base leading-relaxed text-zinc-400">
            {para}
          </p>
        ))}
      </div>
    </section>
  );
}
