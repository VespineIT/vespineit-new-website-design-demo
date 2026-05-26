import Reveal from "@/components/ui/Reveal";
import type { ReactNode } from "react";

export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <section className="relative grain overflow-hidden border-b border-[var(--border)] pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div className="honeycomb pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[40vh] w-[60vh] -translate-x-1/2 rounded-full bg-[var(--glow)] blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-5 inline-flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rotate-45 bg-[var(--color-flame)]" />
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="display-lg max-w-4xl text-balance">{title}</h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[var(--fg-muted)] sm:text-lg">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
