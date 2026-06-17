type Props = {
  num: string;
  label: string;
  className?: string;
};

/** Editorial numbered section heading: 01 ——— ABOUT.
 *  Renders a real <h2> (label is the accessible name); the number and rule
 *  are decorative and hidden from assistive tech. */
export default function SectionHeading({ num, label, className = "" }: Props) {
  return (
    <h2
      className={`m-0 flex items-center gap-[18px] text-[11px] font-semibold uppercase tracking-[0.3em] text-inkFaint ${className}`}
    >
      <span aria-hidden="true" className="font-serif text-sm font-medium normal-case tracking-[0.05em] text-shu">
        {num}
      </span>
      <span aria-hidden="true" className="h-px w-7 bg-lineStrong sm:w-14" />
      {label}
    </h2>
  );
}
