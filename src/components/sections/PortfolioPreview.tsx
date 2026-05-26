import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

export default function PortfolioPreview() {
  const featured = projects.slice(0, 2);
  return (
    <section className="relative border-t border-[var(--border)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Proof, not<span className="text-[var(--color-flame)]"> promises</span>.
            </>
          }
          intro="A few of the products we've shipped. Each one started as a problem and ended as a number a client could feel."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <Link
                href="/portfolio"
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)] p-7 transition-all hover:-translate-y-1 hover:border-[var(--color-flame)]"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono uppercase tracking-widest text-[var(--color-flame)]">
                    {p.category}
                  </span>
                  <span className="font-mono text-[var(--fg-faint)]">{p.year}</span>
                </div>
                <h3 className="mt-6 text-2xl font-extrabold leading-tight text-balance">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--fg-muted)]">
                  {p.summary}
                </p>
                <div className="mt-8 grid grid-cols-3 gap-3 border-t border-[var(--border)] pt-5">
                  {p.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-display text-xl font-extrabold text-[var(--color-flame)]">
                        {m.value}
                      </div>
                      <div className="mt-0.5 text-[0.7rem] leading-tight text-[var(--fg-faint)]">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-6 py-3 text-sm font-semibold transition-colors hover:border-[var(--color-flame)]"
            >
              View full portfolio →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
