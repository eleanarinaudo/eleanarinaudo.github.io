type Props = {
  id: string;
  tone?: "paper" | "paper2";
  last?: boolean;
  children: React.ReactNode;
};

/** Shared section frame: max-width shell, vertical rhythm, alternating tone. */
export default function Section({ id, tone = "paper", last = false, children }: Props) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 ${last ? "" : "border-b border-line"} ${
        tone === "paper2" ? "bg-paper2" : "bg-paper"
      }`}
    >
      <div className="mx-auto max-w-shell px-6 py-[clamp(68px,10vw,116px)] sm:px-11">
        {children}
      </div>
    </section>
  );
}
