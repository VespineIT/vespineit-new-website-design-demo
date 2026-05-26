import Link from "next/link";
import { nav, site } from "@/data/site";
import { services } from "@/data/services";
import HornetMark from "@/components/ui/HornetMark";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--bg-sunk)]">
      <div className="honeycomb pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <HornetMark className="h-8 w-auto text-[var(--color-flame)]" />
              <span className="font-display text-xl font-extrabold">
                Vespine<span className="text-[var(--color-flame)]">.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--fg-muted)]">
              {site.description}
            </p>
            <div className="mt-5 flex gap-3">
              <SocialLink href={site.socials.linkedin} label="LinkedIn">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
              </SocialLink>
              <SocialLink href={site.socials.facebook} label="Facebook">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </SocialLink>
            </div>
          </div>

          <FooterCol title="Navigate">
            {nav.map((n) => (
              <FooterLink key={n.href} href={n.href}>
                {n.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Services">
            {services.map((s) => (
              <FooterLink key={s.id} href="/services">
                {s.title}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Get in touch">
            <a
              href={`mailto:${site.email}`}
              className="underline-grow text-sm text-[var(--fg-muted)] hover:text-[var(--fg)]"
            >
              {site.email}
            </a>
            <a
              href={site.phoneHref}
              className="underline-grow text-sm text-[var(--fg-muted)] hover:text-[var(--fg)]"
            >
              {site.phone}
            </a>
            <span className="text-sm text-[var(--fg-muted)]">
              {site.location}
            </span>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-6 text-xs text-[var(--fg-faint)] sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-[var(--fg)]">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[var(--fg)]">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--fg-faint)]">
        {title}
      </h4>
      {children}
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="underline-grow w-fit text-sm text-[var(--fg-muted)] hover:text-[var(--fg)]"
    >
      {children}
    </Link>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--border)] text-[var(--fg-muted)] transition-colors hover:border-[var(--color-flame)] hover:text-[var(--color-flame)]"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        {children}
      </svg>
    </a>
  );
}
