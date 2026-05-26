"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "@/data/site";
import HornetMark from "@/components/ui/HornetMark";
import ThemeToggle from "@/components/theme/ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-8 ${
          scrolled
            ? "my-2 rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_82%,transparent)] py-2.5 backdrop-blur-xl"
            : "py-5"
        }`}
        style={{ marginInline: scrolled ? "auto" : undefined }}
      >
        <Link href="/" className="group flex items-center gap-2.5">
          <HornetMark className="h-7 w-auto text-[var(--color-flame)] transition-transform duration-300 group-hover:scale-110" />
          <span className="font-display text-lg font-extrabold tracking-tight">
            Vespine<span className="text-[var(--color-flame)]">.</span>
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-[var(--fg)]"
                    : "text-[var(--fg-muted)] hover:text-[var(--fg)]"
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-lg bg-[var(--bg-sunk)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden rounded-full bg-[var(--color-flame)] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Let&apos;s Talk
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] md:hidden"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-4 bg-[var(--fg)] transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4 bg-[var(--fg)] transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4 bg-[var(--fg)] transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mx-3 mt-2 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)] p-3 backdrop-blur-xl md:hidden"
          >
            {nav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <Link
                  href={item.href}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-[var(--fg)] hover:bg-[var(--bg-sunk)]"
                >
                  {item.label}
                  <span className="text-[var(--color-flame)]">→</span>
                </Link>
              </motion.div>
            ))}
            <Link
              href="/contact"
              className="mt-2 block rounded-xl bg-[var(--color-flame)] px-4 py-3 text-center font-semibold text-white"
            >
              Let&apos;s Talk
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
