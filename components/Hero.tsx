import { profile, stats } from "@/lib/data";

/** Hero — centered "ma" layout: generous whitespace, no portrait.
 *  Elements rise in once on load (the page's single orchestrated moment). */
export default function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto max-w-shell px-6 py-[clamp(44px,8vw,92px)] sm:px-11">
        <div className="mx-auto max-w-[780px] py-[clamp(16px,4vw,52px)] text-center">
          <span
            className="hero-rise mx-auto mb-[clamp(30px,5vw,46px)] block h-[56px] w-[56px] rounded-full"
            style={{
              background:
                "radial-gradient(circle at 36% 30%, rgb(var(--ink)) 0%, rgb(var(--shu)) 58%, rgb(var(--shu) / 0.7) 100%)",
              boxShadow:
                "0 8px 20px -6px rgb(var(--shu) / 0.4), inset 0 1px 2px rgb(255 255 255 / 0.12)",
            }}
          />

          <p
            className="hero-rise mb-7 text-[11px] font-medium uppercase tracking-[0.28em] text-inkFaint"
            style={{ animationDelay: "80ms" }}
          >
            Open to opportunities · {profile.location}
          </p>

          <h1
            className="hero-rise m-0 text-[clamp(46px,9vw,104px)] font-normal leading-none -tracking-[0.035em] text-ink"
            style={{ animationDelay: "140ms" }}
          >
            {profile.name}
          </h1>

          <p
            className="hero-rise mt-[22px] text-[13px] font-semibold uppercase tracking-[0.32em] text-shu"
            style={{ animationDelay: "220ms" }}
          >
            {profile.role}
          </p>

          <p
            className="hero-rise mx-auto mt-[30px] max-w-[42ch] font-serif text-[clamp(18px,2.3vw,24px)] font-normal leading-[1.6] text-inkSoft"
            style={{ animationDelay: "280ms" }}
          >
            {profile.tagline}
          </p>

          <div
            className="hero-rise mx-auto mt-[46px] flex max-w-[560px] items-stretch overflow-hidden rounded-[6px] border border-line bg-card"
            style={{ animationDelay: "360ms" }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex-1 px-2 py-[18px] ${
                  i < stats.length - 1 ? "border-r border-line" : ""
                }`}
              >
                <div className="font-serif text-[clamp(22px,4vw,28px)] font-medium -tracking-[0.02em] text-ink">
                  {s.value}
                </div>
                <div className="mt-[5px] text-[10px] uppercase tracking-[0.12em] text-inkFaint">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div
            className="hero-rise mt-[42px] flex flex-wrap justify-center gap-[14px]"
            style={{ animationDelay: "440ms" }}
          >
            <a href="#work" className="btn-primary">
              View my work <span className="arrow text-[15px]">→</span>
            </a>
            <a href={profile.resume} className="btn-ghost" target="_blank" rel="noopener">
              Résumé
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
