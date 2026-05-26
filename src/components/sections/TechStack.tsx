import Reveal from "@/components/ui/Reveal";
import { techStack } from "@/data/services";

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <div
        className="animate-marquee flex shrink-0 gap-3 pr-3"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {doubled.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="whitespace-nowrap rounded-full border border-[var(--border)] bg-[var(--bg)] px-5 py-2.5 text-sm font-medium text-[var(--fg-muted)]"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  const half = Math.ceil(techStack.length / 2);
  return (
    <section className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--bg-sunk)] py-24 sm:py-28">
      <div className="mx-auto mb-12 max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-3">The toolkit</p>
          <h2 className="display-md max-w-xl text-balance">
            Battle-tested tools, chosen for the job — not the hype.
          </h2>
        </Reveal>
      </div>
      <div className="flex flex-col gap-3">
        <Row items={techStack.slice(0, half)} />
        <Row items={techStack.slice(half)} reverse />
      </div>
    </section>
  );
}
