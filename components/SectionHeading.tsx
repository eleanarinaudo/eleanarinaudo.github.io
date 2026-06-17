type Props = {
  num: string;
  label: string;
  className?: string;
};

/** Editorial numbered section heading: 01 ——— ABOUT */
export default function SectionHeading({ num, label, className = "" }: Props) {
  return (
    <div className={`flex items-center gap-[18px] ${className}`}>
      <span className="font-serif text-sm font-medium tracking-[0.05em] text-shu">{num}</span>
      <span className="h-px w-7 bg-lineStrong sm:w-14" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-inkFaint">
        {label}
      </span>
    </div>
  );
}
