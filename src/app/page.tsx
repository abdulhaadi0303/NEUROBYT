import Link from "next/link";
import { ArrowUpRight, ArrowRight, Quote } from "lucide-react";
import WaveMark from "@/components/WaveMark";
import HeroWidget from "@/components/HeroWidget";
import TypewriterHeading from "@/components/TypewriterHeading";
import Reveal from "@/components/Reveal";
import CircuitBackground from "@/components/CircuitBackground";
import ProcessSteps from "@/components/ProcessSteps";
import Faq from "@/components/Faq";
import { services, engagementProcess } from "@/lib/services";

const featuredProjects = [
  {
    title: "Project name",
    category: "Web App · Fintech",
    description:
      "Replace with a one to two sentence summary: what the client's problem was, what we built, and the measurable result (time saved, revenue impact, users onboarded).",
  },
  {
    title: "Project name",
    category: "Shopify · E-commerce",
    description:
      "Replace with a one to two sentence summary: what the client's problem was, what we built, and the measurable result.",
  },
  {
    title: "Project name",
    category: "AI Automation",
    description:
      "Replace with a one to two sentence summary: what the client's problem was, what we built, and the measurable result.",
  },
];

const faqItems = [
  {
    question: "How long does a typical project take?",
    answer:
      "It depends heavily on scope — a marketing website usually takes 3-5 weeks, while a custom web app or AI system can run 6-12 weeks. We'll give you a real timeline after the discovery call, not a generic estimate.",
  },
  {
    question: "Do you work with startups or only established companies?",
    answer:
      "Both. We work with early-stage founders building a first product and established businesses modernizing existing systems — the engagement model just looks a little different depending on where you are.",
  },
  {
    question: "What does pricing look like?",
    answer:
      "Most projects are fixed-scope, fixed-price after a short discovery phase. For ongoing work like staff augmentation or marketing, we work on a monthly retainer instead.",
  },
  {
    question: "Who actually does the work?",
    answer:
      "Our own team — we don't outsource your project to a subcontractor you've never spoken to. You'll know exactly who's building your project from day one.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-panel-line/60">
        <WaveMark className="pointer-events-none absolute -right-24 -top-16 h-[480px] w-[480px] text-signal/[0.06] md:-right-10" />
        <CircuitBackground className="pointer-events-none absolute inset-0 h-full w-full text-signal" />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pb-24 md:pt-24">
          <div>
            <p className="text-sm text-ink-muted">
              Software, AI & digital engineering
            </p>
            <TypewriterHeading
              text="We build and automate the systems your business runs on."
              className="mt-5 min-h-[3.3em] font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl"
            />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              NeuroBYT is a small, senior team shipping websites, web apps,
              custom software, and AI-driven automation for businesses that
              need it done right the first time. No account managers relaying
              messages, no junior engineers learning on your budget — just
              the people actually building your project, from the first call
              to long after launch.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="rounded-sm bg-signal px-6 py-3 text-sm font-medium text-void transition-transform hover:-translate-y-0.5 hover:bg-signal-dim"
              >
                Start a project
              </Link>
              <Link
                href="/projects"
                className="rounded-sm border border-panel-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-signal hover:text-signal"
              >
                See our work
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <HeroWidget />
          </div>
        </div>
      </section>

      {/* Services — compact list, all 12 */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              What we do
            </h2>
            <p className="mt-3 max-w-lg text-ink-muted">
              One team covering the full stack — design, engineering,
              marketing, and strategy — from a marketing site to custom AI
              systems, so you're not juggling five vendors and five
              invoices.
            </p>
          </div>
          <Link
            href="/services"
            className="flex items-center gap-1.5 text-sm font-medium text-signal hover:text-signal-dim"
          >
            View all services
            <ArrowUpRight size={16} />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-panel-line/60 bg-panel-line/60 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full items-start gap-4 bg-void p-6 transition-colors hover:bg-panel"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-panel-line bg-panel/60 text-signal transition-transform duration-300 group-hover:scale-110 group-hover:border-signal/50">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-medium">
                      {service.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                      {service.summary}
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* How we work */}
      <section className="border-y border-panel-line/60 bg-panel/40">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              How we work
            </h2>
            <p className="mt-3 max-w-lg text-ink-muted">
              A straightforward process, the same for a two-week landing
              page or a three-month platform build.
            </p>
          </Reveal>
          <ProcessSteps steps={engagementProcess} />
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Why teams work with us
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <Reveal delay={0.05}>
            <h3 className="font-display text-lg font-medium">
              Direct access, no account managers
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              You work with the engineers and designers building your
              project, not a layer of people relaying messages between you
              and them. Questions get answered by someone who knows the
              answer, not someone who has to go ask.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="font-display text-lg font-medium">
              Small team, senior work
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              We stay deliberately small so every project gets senior
              attention instead of being spread thin across a bench of
              juniors learning on your budget.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <h3 className="font-display text-lg font-medium">
              You own everything
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Code, infrastructure, credentials, and design files are yours
              from day one. No lock-in, and no dependency on us to keep it
              running after the engagement ends.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <h3 className="font-display text-lg font-medium">
              Scope and price agreed up front
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              We scope the work before we start, so you know the cost and
              timeline before anything begins — not somewhere in the middle
              of an open-ended invoice.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured projects teaser */}
      <section className="border-t border-panel-line/60">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Recent work
              </h2>
              <p className="mt-3 max-w-lg text-ink-muted">
                A few projects we've shipped for clients recently.
              </p>
            </div>
            <Link
              href="/projects"
              className="flex items-center gap-1.5 text-sm font-medium text-signal hover:text-signal-dim"
            >
              All projects
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="group flex h-full flex-col justify-between rounded-sm border border-panel-line bg-panel/40 p-6 transition-all hover:-translate-y-1 hover:border-signal/50 hover:shadow-lg hover:shadow-signal/5">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-signal">
                      {project.category}
                    </p>
                    <h3 className="mt-3 font-display text-lg font-medium">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-ink-muted group-hover:text-signal">
                    View case study
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial placeholder */}
      <section className="border-y border-panel-line/60 bg-panel/40">
        <Reveal className="mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
          <Quote className="mx-auto text-signal" size={32} strokeWidth={1.5} />
          <p className="mt-6 font-display text-xl font-medium leading-relaxed md:text-2xl">
            "Replace this with a real quote from a client once you have
            one — a specific sentence about the problem you solved beats a
            generic compliment."
          </p>
          <p className="mt-6 text-sm text-ink-muted">
            Client name, Title at Company
          </p>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Common questions
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <Faq items={faqItems} />
        </Reveal>
      </section>

      {/* CTA */}
      <section className="border-t border-panel-line/60">
        <Reveal className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-ink-muted">
            Tell us what you're building. We'll reply within a business day
            with next steps.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-sm bg-signal px-7 py-3 text-sm font-medium text-void transition-transform hover:-translate-y-0.5 hover:bg-signal-dim"
          >
            Get in touch
          </Link>
        </Reveal>
      </section>
    </>
  );
}
