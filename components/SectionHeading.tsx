type Props = {
  num: string;
  label: string;
  title?: string;
};

/** Editorial numbered section heading: 01 — About */
export default function SectionHeading({ num, label, title }: Props) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3">
        <span className="section-num">{num}</span>
        <span className="h-px w-8 bg-gradient-to-r from-accent to-transparent" />
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-400">
          {label}
        </span>
      </div>
      {title && (
        <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
          {title}
        </h2>
      )}
    </div>
  );
}
