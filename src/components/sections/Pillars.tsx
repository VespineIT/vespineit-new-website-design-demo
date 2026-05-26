import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { pillars } from "@/data/services";

export default function Pillars() {
  return (
    <section className="relative border-t border-[var(--border)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How we think"
          title={
            <>
              One loop, run<span className="text-[var(--color-flame)]"> relentlessly</span>.
            </>
          }
          intro="Every engagement runs the same cycle — sense the problem, reason about it, build the answer, then automate it away. Then we go around again."
        />

        <div className="relative mt-16 grid gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.08}>
              <div className="group relative h-full bg-[var(--bg)] p-7 transition-colors hover:bg-[var(--bg-elev)]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[var(--color-flame)]">
                    {p.num}
                  </span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[var(--fg-faint)]">
                    {i === pillars.length - 1 ? "↻ loop" : "step"}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-extrabold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">
                  {p.desc}
                </p>
                <div className="mt-6 h-px w-0 bg-[var(--color-flame)] transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
