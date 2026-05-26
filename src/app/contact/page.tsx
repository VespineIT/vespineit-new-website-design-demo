import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/sections/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Start a project with ${site.name}. Based in ${site.location}.`,
};

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Phone", value: site.phone, href: site.phoneHref },
  { label: "Studio", value: site.location, href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk about
            <br />
            <span className="flame-text">what you&apos;re building.</span>
          </>
        }
        intro="Tell us the problem in a few sentences. We reply to every serious enquiry within one business day — usually faster."
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          {/* details */}
          <div>
            <Reveal>
              <h2 className="text-2xl font-extrabold">Talk to a human.</h2>
              <p className="mt-3 text-base leading-relaxed text-[var(--fg-muted)]">
                No bots, no call-center queue. Your message reaches the people
                who actually build the software.
              </p>
            </Reveal>

            <div className="mt-10 flex flex-col gap-6">
              {channels.map((c, i) => (
                <Reveal key={c.label} delay={i * 0.06}>
                  <div className="border-l-2 border-[var(--color-flame)] pl-5">
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--fg-faint)]">
                      {c.label}
                    </div>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="underline-grow mt-1 inline-block text-lg font-semibold"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <div className="mt-1 text-lg font-semibold">{c.value}</div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-10 flex gap-3">
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[var(--border)] px-5 py-2.5 text-sm font-medium transition-colors hover:border-[var(--color-flame)]"
                >
                  LinkedIn
                </a>
                <a
                  href={site.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[var(--border)] px-5 py-2.5 text-sm font-medium transition-colors hover:border-[var(--color-flame)]"
                >
                  Facebook
                </a>
              </div>
            </Reveal>
          </div>

          {/* form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
