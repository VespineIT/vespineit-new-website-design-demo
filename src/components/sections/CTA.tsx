import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import HornetMark from "@/components/ui/HornetMark";
import { site } from "@/data/site";

export default function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-[var(--border)] py-28 sm:py-36">
      <div className="honeycomb pointer-events-none absolute inset-0 opacity-50" />
      <HornetMark className="pointer-events-none absolute -right-16 top-1/2 h-[120%] w-auto -translate-y-1/2 text-[var(--color-flame)] opacity-[0.04]" />
      <div className="pointer-events-none absolute left-1/4 top-0 h-[50vh] w-[50vh] rounded-full bg-[var(--glow)] blur-[130px]" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="eyebrow mb-5">Let&apos;s build</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display-lg text-balance">
            Got something worth
            <br />
            building <span className="flame-text">right</span>?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-lg text-pretty text-base text-[var(--fg-muted)] sm:text-lg">
            Tell us the problem. We&apos;ll tell you, honestly, whether we&apos;re
            the right swarm for it — and how fast we can move.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-[var(--color-flame)] px-7 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Start a conversation
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-[var(--border-strong)] px-7 py-4 text-sm font-semibold transition-colors hover:border-[var(--color-flame)]"
            >
              {site.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
