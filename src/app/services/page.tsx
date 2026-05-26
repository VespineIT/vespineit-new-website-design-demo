import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import Pillars from "@/components/sections/Pillars";
import CTA from "@/components/sections/CTA";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software development, mobile, cloud, AI and IT consulting — delivered by a small, senior team.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Everything you need to
            <br />
            <span className="flame-text">ship and scale.</span>
          </>
        }
        intro="Five disciplines, one team. We can take a product from a napkin sketch to a maintained, scaling system — or plug into yours exactly where you need us."
      />

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={(i % 2) * 0.08}>
                <div
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)] p-8 transition-all hover:-translate-y-1 hover:border-[var(--color-flame)] ${
                    i === services.length - 1 && services.length % 2 === 1
                      ? "lg:col-span-2"
                      : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <h2 className="text-2xl font-extrabold sm:text-3xl">
                      {s.title}
                    </h2>
                    <span className="font-mono text-sm text-[var(--fg-faint)]">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-[var(--fg-muted)]">
                    {s.blurb}
                  </p>
                  <ul className="mt-7 flex flex-wrap gap-2.5">
                    {s.points.map((pt) => (
                      <li
                        key={pt}
                        className="rounded-full border border-[var(--border)] bg-[var(--bg-sunk)] px-3.5 py-1.5 text-xs font-medium text-[var(--fg-muted)]"
                      >
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Pillars />
      <CTA />
    </>
  );
}
