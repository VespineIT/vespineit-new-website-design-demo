"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import HornetMark from "@/components/ui/HornetMark";
import { site, stats } from "@/data/site";

const HornetCanvas = dynamic(() => import("@/components/hero/HornetCanvas"), {
  ssr: false,
  loading: () => <HornetFallback />,
});

function HornetFallback() {
  return (
    <div className="grid h-full w-full place-items-center">
      <HornetMark className="h-1/2 w-1/2 animate-floaty text-[var(--color-flame)] opacity-90 drop-shadow-[0_0_40px_var(--glow)]" />
    </div>
  );
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] as const } },
};

export default function Hero() {
  return (
    <section className="relative grain min-h-[100svh] overflow-hidden pt-28 sm:pt-32">
      {/* atmosphere */}
      <div className="honeycomb pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-[var(--glow)] blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--bg)] to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4">
        {/* copy */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="order-2 lg:order-1"
        >
          <motion.p
            variants={item}
            className="eyebrow inline-flex items-center gap-2"
          >
            <span className="inline-block h-1.5 w-1.5 rotate-45 bg-[var(--color-flame)]" />
            Software studio · {site.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="display-xl mt-5 text-balance"
          >
            Small swarm.
            <br />
            <span className="flame-text">Sharp software.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-pretty text-base leading-relaxed text-[var(--fg-muted)] sm:text-lg"
          >
            We design, build and ship precision software — web, mobile, cloud
            and AI — fast enough to matter, sturdy enough to last.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-flame)] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              See our work
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-6 py-3.5 text-sm font-semibold transition-colors hover:border-[var(--color-flame)]"
            >
              Start a project
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-[var(--border)] pt-6"
          >
            {stats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-extrabold text-[var(--fg)] sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs leading-tight text-[var(--fg-faint)]">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* 3D stage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative order-1 mx-auto aspect-square w-full max-w-[min(78vw,520px)] lg:order-2 lg:max-w-none"
        >
          <div className="absolute inset-0 rounded-[2rem]" />
          <HornetCanvas />
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[var(--fg-faint)] lg:flex">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-[var(--color-flame)] to-transparent" />
      </div>
    </section>
  );
}
