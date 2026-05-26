import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import CTA from "@/components/sections/CTA";
import { stats, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why we named ourselves after a hornet — and how a small, sharp team out-ships big, slow agencies.",
};

const values = [
  {
    title: "Precision over volume",
    body: "We don't carpet-bomb features. We find the one change that moves the metric and build it well.",
  },
  {
    title: "Speed is a feature",
    body: "Momentum compounds. We ship in weeks, learn in public, and adjust before the budget burns.",
  },
  {
    title: "Senior hands on keys",
    body: "The people you meet are the people who build. No bait-and-switch to junior teams after signing.",
  },
  {
    title: "Honest engineering",
    body: "If an idea won't work, we'll tell you before you pay for it. Trust outlasts any single project.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Vespine"
        title={
          <>
            Named after a hornet.
            <br />
            <span className="flame-text">Built like one.</span>
          </>
        }
        intro="Vespine means 'of the wasp.' Small, fast, coordinated, and precise — a swarm that builds intricate structures and strikes exactly where it counts. That's not just our logo. It's how we work."
      />

      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Our story"
            title="A studio, not a factory."
          />
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-[var(--fg-muted)]">
              <p>
                Vespine IT started in {site.founded} in {site.location} with a
                simple frustration: too many software teams are big, slow and
                hidden behind account managers. Clients wait weeks for answers
                and months for software.
              </p>
              <p>
                So we built the opposite. A small, senior team that talks
                directly to you, scopes ruthlessly, and ships working software
                fast. We take on a handful of projects at a time — because
                attention is the thing most agencies quietly ration.
              </p>
              <p>
                Today we build web platforms, mobile apps, cloud systems and AI
                features for companies across a dozen industries. The work
                changes. The way we work doesn&apos;t.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-sunk)] py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 sm:px-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="text-center sm:text-left">
                <div className="font-display text-4xl font-extrabold text-[var(--color-flame)] sm:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-[var(--fg-muted)]">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What we value"
            title="Four rules we don't break."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="group h-full rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)] p-8 transition-colors hover:border-[var(--color-flame)]">
                  <div className="mb-5 grid h-10 w-10 place-items-center rounded-xl bg-[var(--bg-sunk)] font-mono text-sm text-[var(--color-flame)]">
                    0{i + 1}
                  </div>
                  <h3 className="text-xl font-extrabold">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
