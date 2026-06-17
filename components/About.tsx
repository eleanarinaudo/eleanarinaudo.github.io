import { about } from "@/lib/data";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <Section id="about">
      <SectionHeading num="01" label="About" className="mb-[clamp(36px,5vw,56px)]" />
      <div className="grid items-start gap-[clamp(32px,5vw,72px)] sm:grid-cols-2">
        <p className="m-0 font-serif text-[clamp(24px,3vw,36px)] font-normal leading-[1.4] -tracking-[0.01em] text-ink">
          From raw scraping to a production LLM access layer — I own the{" "}
          <span className="text-shu">full data lifecycle.</span>
        </p>
        <div className="flex flex-col gap-[22px]">
          {about.map((para, i) => (
            <p key={i} className="m-0 text-[15px] leading-[1.72] text-inkSoft">
              {para}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
