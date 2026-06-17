import { about } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
      <SectionHeading num="01" label="About" />
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
