/* eslint-disable @next/next/no-img-element */
import { profile } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, MailIcon, FileIcon, PinIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* animated gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[36rem] w-[36rem] animate-glow rounded-full bg-accent-deep/20 blur-3xl"
      />
      <div className="mx-auto max-w-5xl px-6 pb-20 pt-36 sm:pt-44">
        <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="section-label animate-fade-up">Hi, I&apos;m</p>
            <h1 className="animate-fade-up text-4xl font-bold tracking-tight text-zinc-50 sm:text-6xl">
              {profile.name}
            </h1>
            <h2 className="mt-3 animate-fade-up text-2xl font-semibold sm:text-3xl">
              <span className="gradient-text">{profile.role}</span>
            </h2>
            <p className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-zinc-400">
              {profile.tagline}
            </p>
            <div className="mt-6 flex animate-fade-up items-center gap-2 text-sm text-zinc-500">
              <PinIcon className="h-4 w-4" />
              {profile.location}
            </div>
          </div>

          {/* avatar */}
          <div className="relative shrink-0 animate-fade-up">
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-accent-soft to-accent-deep blur-md opacity-60" />
            <img
              src={profile.avatar}
              alt={profile.name}
              width={168}
              height={168}
              className="h-32 w-32 rounded-full border-2 border-white/10 object-cover sm:h-40 sm:w-40"
            />
          </div>
        </div>

        <div className="mt-9 flex flex-wrap animate-fade-up gap-3">
          <a
            href="#work"
            className="rounded-full bg-accent-deep px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent"
          >
            View my work
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-accent/40 hover:text-white"
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
