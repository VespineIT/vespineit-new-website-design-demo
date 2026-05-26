"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/data/site";

type Status = "idle" | "sending" | "sent";

const budgets = ["< $5k", "$5k–$15k", "$15k–$50k", "$50k+"];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: budgets[1],
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Tell us your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "A valid email, please";
    if (form.message.trim().length < 10)
      e.message = "A little more detail helps";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => {
    if (!validate()) return;
    setStatus("sending");
    // No backend wired yet → hand off to the user's mail client.
    // Swap this for an API route / Formspree / Resend in production.
    const subject = `New project enquiry — ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nBudget: ${form.budget}\n\n${form.message}`;
    const url = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setTimeout(() => {
      window.location.href = url;
      setStatus("sent");
    }, 700);
  };

  const field =
    "w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--fg)] outline-none transition-colors placeholder:text-[var(--fg-faint)] focus:border-[var(--color-flame)]";

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)] p-6 sm:p-8">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <div className="grid h-14 w-14 place-items-center rounded-full bg-[var(--color-flame)] text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3 className="mt-6 text-2xl font-extrabold">Message ready to fly.</h3>
            <p className="mt-3 max-w-sm text-sm text-[var(--fg-muted)]">
              Your email client should have opened. If not, reach us directly at{" "}
              <a className="text-[var(--color-flame)]" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-7 text-sm font-semibold text-[var(--color-flame)] underline-grow"
            >
              Send another →
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" error={errors.name}>
                <input
                  className={field}
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                />
              </Field>
              <Field label="Email" error={errors.email}>
                <input
                  className={field}
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                />
              </Field>
            </div>

            <Field label="Company (optional)">
              <input
                className={field}
                placeholder="Company Inc."
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
              />
            </Field>

            <Field label="Rough budget">
              <div className="flex flex-wrap gap-2">
                {budgets.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => update("budget", b)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      form.budget === b
                        ? "border-[var(--color-flame)] bg-[var(--color-flame)] text-white"
                        : "border-[var(--border)] text-[var(--fg-muted)] hover:border-[var(--color-flame)]"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="What are you building?" error={errors.message}>
              <textarea
                className={`${field} min-h-32 resize-y`}
                placeholder="A sentence or two about the problem, timeline, and what success looks like."
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
              />
            </Field>

            <button
              onClick={submit}
              disabled={status === "sending"}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-flame)] px-6 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:opacity-70"
            >
              {status === "sending" ? "Sending…" : "Send it →"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center justify-between text-sm font-medium text-[var(--fg)]">
        {label}
        {error && <span className="text-xs text-[var(--color-flame)]">{error}</span>}
      </span>
      {children}
    </label>
  );
}
