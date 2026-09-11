import type { Metadata } from "next";
import Link from "next/link";
import { Target, Users2, ShieldCheck, Zap } from "lucide-react";
import TypewriterHeading from "@/components/TypewriterHeading";
import Reveal from "@/components/Reveal";
import CircuitBackground from "@/components/CircuitBackground";
import { team } from "@/lib/team";

const description =
  "NeuroBYT is a small, senior software and AI engineering team. Here's who we are and how we work.";

export const metadata: Metadata = {
  title: "About Us",
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: "/about",
    title: "About Us | NeuroBYT",
    description,
  },
};

const values = [
  {
    icon: Target,
    title: "Outcomes over output",
    description:
      "Shipping code isn't the goal — solving the problem it was written for is. We'd rather build less and have it actually work than pad a scope for the sake of it.",
  },
  {
    icon: ShieldCheck,
    title: "Straight answers",
    description:
      "If something won't work, costs more than it's worth, or isn't ready to ship, we say so before you find out the hard way.",
  },
  {
    icon: Users2,
    title: "Small by design",
    description:
      "We turn down work rather than grow past the point where every project gets senior attention from someone who actually knows your codebase.",
  },
  {
    icon: Zap,
    title: "Move at the speed of a decision, not a process",
    description:
      "No committees, no six-layer approval chains. Most decisions get made on a call the same day they come up.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-panel-line/60">
        <CircuitBackground className="pointer-events-none absolute inset-0 h-full w-full text-signal" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-sm text-ink-muted">About us</p>
          <TypewriterHeading
            text="A small team that would rather do a few things well."
            className="mt-5 min-h-[2.4em] max-w-2xl font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl"
          />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            NeuroBYT is a software, AI, and digital engineering agency built
            around a simple idea: most businesses don't need a huge agency
            with layers of account managers — they need a small group of
            people who are genuinely good at the work and easy to reach.
            [Replace this paragraph with your actual founding story — why
            you started NeuroBYT, what problem you kept seeing that made you
            want to build this.]
          </p>
        </div>
      </section>

      {/* Story / mission */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
            Why we exist
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">
            [Placeholder] Too many software projects fail not because the
            engineering was hard, but because of poor communication,
            scope creep, and vendors who disappear the moment the invoice
            is paid. We started NeuroBYT to do the opposite — clear scope,
            direct communication, and a team that sticks around after
            launch. Replace this section with your own reasoning: what
            gap in the market you saw, and what you wanted to be
            different about how NeuroBYT operates.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            [Placeholder] We work across web, mobile, cloud, and AI, but the
            common thread is the same on every project: understand the
            actual problem before writing a line of code, build something
            that holds up under real use, and stay accountable for it
            after it ships.
          </p>
        </Reveal>
      </section>

      {/* Values */}
      <section className="border-y border-panel-line/60 bg-panel/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              How we think about the work
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-panel-line bg-void text-signal">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-medium">
                        {v.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                        {v.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            The team
          </h2>
          <p className="mt-3 max-w-lg text-ink-muted">
            The people you'll actually talk to and work with — not a
            rotating cast of subcontractors.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flex h-full flex-col items-start gap-4 rounded-sm border border-panel-line bg-panel/40 p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-signal/15 font-display text-lg font-semibold text-signal">
                  {member.initials}
                </div>
                <div>
                  <h3 className="font-display text-base font-medium">
                    {member.name}
                  </h3>
                  <p className="text-sm text-signal">{member.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {member.bio}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-panel-line/60">
        <Reveal className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Want to work together?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-ink-muted">
            Tell us what you're building. We'll reply within a business day.
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