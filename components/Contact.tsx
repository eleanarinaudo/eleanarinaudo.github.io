import { profile } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

const channels = [
  { label: "GitHub", href: profile.github, Icon: GitHubIcon, handle: "@eleanarinaudo" },
  { label: "LinkedIn", href: profile.linkedin, Icon: LinkedInIcon, handle: "eleana-rinaudo" },
  { label: "Email", href: `mailto:${profile.email}`, Icon: MailIcon, handle: profile.email },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
      <p className="section-label">Contact</p>
      <h2 className="mb-2 text-2xl font-bold text-zinc-100 sm:text-3xl">
        Let&apos;s build something with <span className="gradient-text">data &amp; LLMs</span>.
      </h2>
      <p className="mb-8 max-w-xl text-zinc-400">
        Open to interesting problems in AI/ML, MCP and data engineering. The fastest way to
        reach me is below.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {channels.map(({ label, href, Icon, handle }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="card flex items-center gap-4 p-5"
          >
            <Icon className="h-6 w-6 shrink-0 text-accent" />
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-zinc-200">{label}</span>
              <span className="block truncate text-xs text-zinc-500">{handle}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
