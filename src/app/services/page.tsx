import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services, engagementProcess } from "@/lib/services";
import TypewriterHeading from "@/components/TypewriterHeading";
import Reveal from "@/components/Reveal";
import CircuitBackground from "@/components/CircuitBackground";
import ProcessSteps from "@/components/ProcessSteps";

const description =
  "Web, mobile, cloud, AI, and business services from NeuroBYT — one small senior team covering the full stack.";

export const metadata: Metadata = {
  title: "Services",
  description,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    url: "/services",
    title: "Services | NeuroBYT",
    description,
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-panel-line/60">
        <CircuitBackground className="pointer-events-none absolute inset-0 h-full w-full text-signal" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-sm text-ink-muted">What we do</p>
          <TypewriterHeading
            text="Full-stack engineering, design, and strategy under one roof."
            className="mt-5 min-h-[2.4em] max-w-2xl font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl"
          />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Twelve practices, one small senior team. Some clients come to
            us for a single service — a new website, a bookkeeping
            handoff, an AI automation project. Others lean on us for
            everything from strategy through to long-term support. Either
            way, you're working with the same people the whole way
            through, not getting handed off between departments.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-px overflow-hidden rounded-sm border border-panel-line/60 bg-panel-line/60 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col justify-between gap-8 bg-void p-7 transition-colors hover:bg-panel"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-panel-line bg-panel/60 text-signal transition-transform duration-300 group-hover:scale-110 group-hover:border-signal/50">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <h2 className="mt-5 font-display text-lg font-medium">
                      {service.name}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {service.summary}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-medium text-ink-muted group-hover:text-signal">
                    Learn more
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* How we engage */}
      <section className="border-y border-panel-line/60 bg-panel/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              How an engagement works
            </h2>
            <p className="mt-3 max-w-lg text-ink-muted">
              Whichever service brought you here, the process looks the
              same.
            </p>
          </Reveal>
          <ProcessSteps steps={engagementProcess} />
        </div>
      </section>

      <section className="border-t border-panel-line/60">
        <Reveal className="mx-auto max-w-6xl px-6 py-16 text-center md:py-20">
          <h2 className="mx-auto max-w-xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Not sure which service you need?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-ink-muted">
            Tell us the problem you're solving — we'll tell you the
            right way to approach it, even if that means recommending less
            than you asked for.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-sm bg-signal px-7 py-3 text-sm font-medium text-void transition-transform hover:-translate-y-0.5 hover:bg-signal-dim"
          >
            Talk to us
          </Link>
        </Reveal>
      </section>
    </>
  );
}