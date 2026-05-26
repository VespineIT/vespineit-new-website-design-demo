import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";

export default function ServicesPreview() {
  return (
    <section className="relative border-t border-[var(--border)] bg-[var(--bg-sunk)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Five ways we move
                <br className="hidden sm:block" /> the needle.
              </>
            }
          />
          <Reveal>
            <Link
              href="/services"
              className="underline-grow shrink-0 text-sm font-semibold text-[var(--color-flame)]"
            >
              All services →
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.05}>
              <Link
                href="/services"
                className="group flex flex-col gap-4 py-7 transition-colors sm:flex-row sm:items-center sm:gap-8"
              >
                <span className="font-mono text-sm text-[var(--fg-faint)] sm:w-12">
                  0{i + 1}
                </span>
                <h3 className="text-2xl font-extrabold transition-colors group-hover:text-[var(--color-flame)] sm:w-72 sm:shrink-0">
                  {s.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-[var(--fg-muted)]">
                  {s.blurb}
                </p>
                <span className="text-[var(--color-flame)] opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
