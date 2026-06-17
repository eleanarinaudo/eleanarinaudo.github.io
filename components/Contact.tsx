import { profile } from "@/lib/data";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

const channels = [
  { label: "GitHub", href: profile.github, Icon: GitHubIcon, handle: "@eleanarinaudo", filled: false },
  { label: "LinkedIn", href: profile.linkedin, Icon: LinkedInIcon, handle: "eleana-rinaudo", filled: false },
  { label: "Email", href: `mailto:${profile.email}`, Icon: MailIcon, handle: profile.email, filled: true },
];

export default function Contact() {
  return (
    <Section id="contact" last>
      <SectionHeading num="06" label="Contact" className="mb-[clamp(28px,4vw,44px)]" />

      <h2 className="m-0 max-w-[18ch] font-serif text-[clamp(32px,5.5vw,64px)] font-normal leading-[1.1] -tracking-[0.02em]">
        Let&apos;s build something with <span className="text-shu">data &amp; LLMs.</span>
      </h2>
      <p className="mt-6 max-w-[54ch] text-[15px] leading-[1.7] text-inkSoft">
        Open to interesting problems in AI/ML, MCP and data engineering. The fastest way to reach me
        is below.
      </p>

      <div className="mt-[clamp(36px,5vw,52px)] grid gap-3.5 sm:grid-cols-3">
        {channels.map(({ label, href, Icon, handle, filled }) => {
          const isExternal = href.startsWith("http");
          return (
            <a
              key={label}
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className={`group flex items-center gap-4 rounded-md border p-[22px] no-underline transition-all ${
                filled
                  ? "border-shu bg-shu text-onShu hover:shadow-[0_10px_26px_rgb(var(--shu)/0.36)]"
                  : "border-lineStrong bg-card text-ink hover:border-ink hover:shadow-[0_8px_22px_rgba(0,0,0,0.06)]"
              }`}
            >
              <span
                className={`inline-flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[5px] ${
                  filled ? "bg-white/20 text-onShu" : "bg-paper2 text-ink"
                }`}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold">{label}</span>
                <span
                  className={`mt-0.5 block truncate text-[12.5px] ${
                    filled ? "opacity-85" : "text-inkFaint"
                  }`}
                >
                  {handle}
                </span>
              </span>
            </a>
          );
        })}
      </div>
    </Section>
  );
}
