import { profile, stats } from "@/lib/data";

/** Hero — centered "ma" layout: generous whitespace, no portrait. */
export default function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto max-w-shell px-6 py-[clamp(44px,8vw,92px)] sm:px-11">
        <div className="mx-auto max-w-[780px] py-[clamp(16px,4vw,52px)] text-center">
          <span className="mx-auto mb-[clamp(30px,5vw,46px)] block h-[52px] w-[52px] rounded-full bg-shu" />

          <p className="mb-7 text-[11px] font-medium uppercase tracking-[0.28em] text-inkFaint">
            Open to opportunities · {profile.location}
          </p>

          <h1 className="m-0 text-[clamp(46px,9vw,104px)] font-normal leading-none -tracking-[0.035em] text-ink">
            {profile.name}
          </h1>

          <p className="mt-[22px] text-[13px] font-semibold uppercase tracking-[0.32em] text-shu">
            {profile.role}
          </p>

          <p className="mx-auto mt-[30px] max-w-[42ch] font-serif text-[clamp(18px,2.3vw,24px)] font-normal leading-[1.6] text-inkSoft">
            {profile.tagline}
          </p>

          <div className="mx-auto mt-[46px] flex max-w-[560px] items-stretch overflow-hidden rounded-[5px] border border-line bg-card">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex-1 px-2 py-[18px] ${
                  i < stats.length - 1 ? "border-r border-line" : ""
                }`}
              >
                <div className="text-[clamp(22px,4vw,28px)] font-medium -tracking-[0.02em] text-ink">
                  {s.value}
                </div>
                <div className="mt-[5px] text-[10px] uppercase tracking-[0.12em] text-inkFaint">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[42px] flex flex-wrap justify-center gap-[14px]">
            <a href="#work" className="btn-primary">
              View my work <span className="text-[15px]">→</span>
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
