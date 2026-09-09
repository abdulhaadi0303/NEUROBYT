import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import WaveMark from "@/components/WaveMark";
import HeroWidget from "@/components/HeroWidget";
import { services } from "@/lib/services";

const featuredProjects = [
  {
    title: "Project name",
    category: "Web App · Fintech",
    description:
      "Replace this with a one-line summary of the problem and outcome for a real client project.",
  },
  {
    title: "Project name",
    category: "Shopify · E-commerce",
    description:
      "Replace this with a one-line summary of the problem and outcome for a real client project.",
  },
  {
    title: "Project name",
    category: "AI Automation",
    description:
      "Replace this with a one-line summary of the problem and outcome for a real client project.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-panel-line/60">
        <WaveMark className="pointer-events-none absolute -right-24 -top-16 h-[480px] w-[480px] text-signal/[0.06] md:-right-10" />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pb-24 md:pt-24">
          <div>
            <p className="text-sm text-ink-muted">
              Software, AI & digital engineering
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
              We build and automate the systems your business runs on.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              NeuroBYT is a small, senior team shipping websites, web apps,
              AI automation, and digital transformation work for businesses
              that need it done right the first time.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="rounded-sm bg-signal px-6 py-3 text-sm font-medium text-void transition-colors hover:bg-signal-dim"
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
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              What we do
            </h2>
            <p className="mt-3 max-w-lg text-ink-muted">
              One team covering the full stack — from a marketing site to
              custom AI systems — so you're not juggling five vendors.
            </p>
          </div>
          <Link
            href="/services"
            className="flex items-center gap-1.5 text-sm font-medium text-signal hover:text-signal-dim"
          >
            View all services
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-panel-line/60 bg-panel-line/60 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex items-start gap-4 bg-void p-6 transition-colors hover:bg-panel"
              >
                <Icon
                  className="mt-0.5 shrink-0 text-signal"
                  size={22}
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="font-display text-base font-medium">
                    {service.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                    {service.summary}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Why us — honest to a small team, no invented stats */}
      <section className="border-y border-panel-line/60 bg-panel/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3 md:py-20">
          <div>
            <h3 className="font-display text-lg font-medium">
              Direct access, no account managers
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              You work with the engineers building your project, not a
              layer of people relaying messages between you and them.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-medium">
              Small team, senior work
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              We stay deliberately small so every project gets senior
              attention — not spread across a bench of juniors.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-medium">
              You own everything
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Code, infrastructure, and credentials are yours from day
              one — no lock-in, no dependency on us to keep it running.
            </p>
          </div>
        </div>
      </section>

      {/* Featured projects teaser */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Recent work
            </h2>
            <p className="mt-3 max-w-lg text-ink-muted">
              A few projects we've shipped for clients.
            </p>
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-1.5 text-sm font-medium text-signal hover:text-signal-dim"
          >
            All projects
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <div
              key={i}
              className="group flex flex-col justify-between rounded-sm border border-panel-line bg-panel/40 p-6 transition-colors hover:border-signal/50"
            >
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
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Have a project in mind?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-ink-muted">
          Tell us what you're building. We'll reply within a business day
          with next steps.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-sm bg-signal px-7 py-3 text-sm font-medium text-void transition-colors hover:bg-signal-dim"
        >
          Get in touch
        </Link>
      </section>
    </>
  );
}
