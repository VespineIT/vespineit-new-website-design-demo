import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import CTA from "@/components/sections/CTA";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected case studies — the problem, what we built, and the result that followed.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title={
          <>
            Work that earned its
            <br />
            <span className="flame-text">keep.</span>
          </>
        }
        intro="Placeholder case studies you can swap for real ones. Each is framed the way clients judge: the problem, what we built, and the number that moved."
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto flex max-w-6xl flex-col gap-20 px-5 sm:px-8">
          {projects.map((p, i) => (
            <Reveal key={p.slug}>
              <article className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
                {/* left rail */}
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="font-mono uppercase tracking-widest text-[var(--color-flame)]">
                      {p.category}
                    </span>
                    <span className="text-[var(--fg-faint)]">·</span>
                    <span className="font-mono text-[var(--fg-faint)]">
                      {p.year}
                    </span>
                  </div>
                  <h2 className="mt-4 text-3xl font-extrabold leading-tight text-balance">
                    {p.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-[var(--fg-muted)]">
                    {p.summary}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--fg-muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)] p-5">
                    {p.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="font-display text-2xl font-extrabold text-[var(--color-flame)]">
                          {m.value}
                        </div>
                        <div className="mt-1 text-[0.7rem] leading-tight text-[var(--fg-faint)]">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* right: the narrative */}
                <div className="flex flex-col gap-6">
                  <Block label="The problem" body={p.problem} />
                  <Block label="What we built" body={p.build} />
                  <Block label="The result" body={p.result} highlight />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}

function Block({
  label,
  body,
  highlight = false,
}: {
  label: string;
  body: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-7 ${
        highlight
          ? "border-[var(--color-flame)] bg-[color-mix(in_srgb,var(--color-flame)_7%,var(--bg-elev))]"
          : "border-[var(--border)] bg-[var(--bg-elev)]"
      }`}
    >
      <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-flame)]">
        {label}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-[var(--fg)]">{body}</p>
    </div>
  );
}
