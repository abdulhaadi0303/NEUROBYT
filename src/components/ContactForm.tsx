"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/services";

type Status = "idle" | "submitting" | "success";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  // Placeholder submit handler — this does not send an email yet.
  // Wire this up to a real backend before launch, e.g.:
  //   - an API route (src/app/api/contact/route.ts) using Resend/SendGrid
  //   - or a form service like Formspree/Getform
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-sm border border-signal/40 bg-signal/5 p-8">
        <CheckCircle2 className="text-signal" size={28} />
        <h3 className="font-display text-lg font-medium">Message received</h3>
        <p className="text-sm leading-relaxed text-ink-muted">
          Thanks for reaching out — we'll reply within a business day.
          [Placeholder confirmation — connect this form to a real email
          backend before launch.]
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm text-ink-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="rounded-sm border border-panel-line bg-panel/40 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-signal"
            placeholder="Jane Smith"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm text-ink-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-sm border border-panel-line bg-panel/40 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-signal"
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="text-sm text-ink-muted">
            Company <span className="text-ink-muted/60">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="rounded-sm border border-panel-line bg-panel/40 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-signal"
            placeholder="Company name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="service" className="text-sm text-ink-muted">
            What do you need?
          </label>
          <select
            id="service"
            name="service"
            className="rounded-sm border border-panel-line bg-panel/40 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-signal"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm text-ink-muted">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="rounded-sm border border-panel-line bg-panel/40 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-signal"
          placeholder="What are you trying to build, and what's your timeline?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 flex items-center justify-center gap-2 rounded-sm bg-signal px-6 py-3 text-sm font-medium text-void transition-transform hover:-translate-y-0.5 hover:bg-signal-dim disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}
