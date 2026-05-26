import Reveal from "@/components/ui/Reveal";
import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <p className="eyebrow mb-4 inline-flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rotate-45 bg-[var(--color-flame)]" />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="display-md text-balance">{title}</h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-pretty text-base leading-relaxed text-[var(--fg-muted)] sm:text-lg">
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
