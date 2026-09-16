import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";
import TypewriterHeading from "@/components/TypewriterHeading";
import Reveal from "@/components/Reveal";
import CircuitBackground from "@/components/CircuitBackground";
import FeaturedProjectsCarousel from "@/components/FeaturedProjectsCarousel";

const description =
  "Case studies from NeuroBYT's recent projects — the problem, what we built, and the result.";

export const metadata: Metadata = {
  title: "Our Projects",
  description,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    url: "/projects",
    title: "Our Projects | NeuroBYT",
    description,
  },
};

const stats = [
  { value: "3+", label: "Years of experience" },
  { value: "7+", label: "Industries served" },
  { value: "100%", label: "Client satisfaction" },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "PostgreSQL","FastAPI"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Vercel", "Docker", "GitHub Actions"],
  },
  {
    category: "AI & Data",
    items: ["OpenAI API", "LangChain", "Pandas", "Supabase"],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-panel-line/60">
        <CircuitBackground className="pointer-events-none absolute inset-0 h-full w-full text-signal" />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Copy */}
          <div>
            <p className="text-sm text-ink-muted">Our projects</p>
            <TypewriterHeading
              text="A few problems we've solved recently."
              className="mt-5 min-h-[1.3em] max-w-2xl font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl"
            />
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
              Every project starts as someone else's problem. Here's what a
              few of those looked like, what we built, and what changed
              afterward.
            </p>

            {/* Interactive stats strip */}
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
              {stats.map((s) => (
                <div key={s.label} className="group cursor-default">
                  <p className="font-display text-3xl font-semibold text-signal transition-transform duration-300 group-hover:-translate-y-0.5 md:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-ink-muted">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <Reveal delay={0.1} className="relative">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-signal/20 shadow-2xl shadow-black/30 md:aspect-square">
              <Image
                src="/hero.webp"
                alt="NeuroBYT"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs uppercase tracking-[0.2em] text-signal">
                NeuroBYT
                </p>
              </div>
            </div>
            {/* Floating accent ring */}
            <div className="absolute -right-6 -top-6 -z-10 h-32 w-32 rounded-full border border-signal/20 blur-sm md:h-40 md:w-40" />
          </Reveal>
        </div>
      </section>

      {/* Featured projects carousel */}
      <FeaturedProjectsCarousel />

      {/* Case studies — hidden for now, keep for when real case studies are ready
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.08} className="h-full">
              <Link
                href={`/projects/${project.slug}`}
                className="group flex h-full flex-col justify-between rounded-sm border border-panel-line bg-panel/40 p-7 transition-all hover:-translate-y-1 hover:border-signal/50 hover:shadow-lg hover:shadow-signal/5"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs uppercase tracking-wide text-signal">
                      {project.category}
                    </p>
                    <p className="text-xs text-ink-muted">{project.year}</p>
                  </div>
                  <h2 className="mt-4 font-display text-xl font-medium">
                    {project.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {project.summary}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-ink-muted group-hover:text-signal">
                  Read case study
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      */}

      {/* Tech stack */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <Reveal className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-signal">
            Under the hood
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Tools we build with
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-ink-muted">
            A stack chosen for reliability at scale, not just what's
            trending.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-panel-line bg-panel/40 p-6 transition-colors hover:border-signal/40">
                <h3 className="text-xs font-medium uppercase tracking-wide text-signal">
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="group/item flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
                    >
                      <span className="h-1 w-1 rounded-full bg-signal/50 transition-all duration-300 group-hover/item:w-3 group-hover/item:bg-signal" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-panel-line/60">
        <Reveal className="mx-auto max-w-6xl px-6 py-16 text-center md:py-20">
          <h2 className="mx-auto max-w-xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Want to be the next one on this page?
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-signal px-7 py-3 text-sm font-medium text-void transition-transform hover:-translate-y-0.5 hover:bg-signal-dim"
          >
            Start a project
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </>
  );
}