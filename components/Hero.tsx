/* eslint-disable @next/next/no-img-element */
import { profile, stats } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, MailIcon, FileIcon, PinIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* animated background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[34rem] w-[34rem] animate-glow rounded-full bg-accent-deep/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 -left-32 h-[26rem] w-[26rem] animate-glow-alt rounded-full bg-accent2/10 blur-3xl"
      />

      <div className="mx-auto max-w-5xl px-6 pb-20 pt-36 sm:pt-44">
        <div className="flex flex-col-reverse items-start gap-12 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            {/* status pill */}
            <div className="mb-6 inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 pl-2 pr-3.5 text-xs text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-accent" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.status}
            </div>

            <h1 className="animate-fade-up font-display text-5xl font-bold leading-[1.02] tracking-tight text-zinc-50 sm:text-7xl">
              {profile.name}
            </h1>
            <h2 className="mt-3 animate-fade-up font-display text-2xl font-bold sm:text-4xl">
              <span className="gradient-text">{profile.role}</span>
            </h2>
            <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-zinc-400">
              {profile.tagline}
            </p>
            <div className="mt-5 flex animate-fade-up items-center gap-2 text-sm text-zinc-500">
              <PinIcon className="h-4 w-4" />
              {profile.location}
            </div>
          </div>

          {/* avatar with animated conic ring */}
          <div className="relative h-36 w-36 shrink-0 animate-fade-up sm:h-44 sm:w-44">
            <div
              aria-hidden="true"
              className="absolute -inset-3 animate-glow rounded-full bg-accent-deep/30 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 animate-spin-slow rounded-full opacity-80 [background:conic-gradient(from_0deg,#6366f1,#e879f9,#22d3ee,#6366f1)]"
            />
            <img
              src={profile.avatar}
              alt={profile.name}
              width={176}
              height={176}
              className="absolute inset-[4px] rounded-full border border-white/10 object-cover"
            />
          </div>
        </div>

        {/* stat chips */}
        <div className="mt-12 grid animate-fade-up grid-cols-3 gap-3 sm:max-w-xl">
          {stats.map((s) => (
            <div key={s.label} className="card px-4 py-3">
              <div className="font-display text-2xl font-bold text-zinc-100">{s.value}</div>
              <div className="mt-0.5 text-[0.7rem] leading-tight text-zinc-500">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap animate-fade-up gap-3">
          <a
            href="#work"
            className="rounded-full bg-gradient-to-r from-accent-deep to-accent2-deep px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 active:scale-95"
          >
            View my work
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-accent/40 hover:text-white active:scale-95"
          >
            <FileIcon className="h-4 w-4" /> Résumé
          </a>
        </div>

        <div className="mt-8 flex animate-fade-up gap-5 text-zinc-400">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-white">
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-white">
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="transition hover:text-white">
            <MailIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
