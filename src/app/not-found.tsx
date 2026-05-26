import Link from "next/link";
import HornetMark from "@/components/ui/HornetMark";

export default function NotFound() {
  return (
    <section className="grid min-h-[80svh] place-items-center px-5 pt-28 text-center">
      <div>
        <HornetMark className="mx-auto h-20 w-auto animate-floaty text-[var(--color-flame)]" />
        <h1 className="display-md mt-8">This page flew off.</h1>
        <p className="mx-auto mt-4 max-w-sm text-[var(--fg-muted)]">
          The page you&apos;re after doesn&apos;t exist — or moved hives.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-[var(--color-flame)] px-6 py-3 text-sm font-semibold text-white"
        >
          Back home →
        </Link>
      </div>
    </section>
  );
}
