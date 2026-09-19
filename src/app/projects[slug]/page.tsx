import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";
import TypewriterHeading from "@/components/TypewriterHeading";
import StaggerWords from "@/components/StaggerWords";
import Reveal from "@/components/Reveal";
import CircuitBackground from "@/components/CircuitBackground";
import AmbientBlobs from "@/components/AmbientBlobs";
import TiltCard from "@/components/TiltCard";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      url: `/projects/${project.slug}`,
      title: `${project.title} | NeuroBYT`,
      description: project.summary,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const usedServices = services.filter((s) =>
    project.serviceSlugs.includes(s.slug)
  );
  const otherProjects = projects
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden border-b border-panel-line/60">
        <CircuitBackground className="pointer-events-none absolute inset-0 h-full w-full text-signal" />
        <div className="relative mx-auto max-w-4xl px-6 py-16 md:py-24">
          <Link
            href="/projects"
            className="flex items-center gap-1.5 text-sm text-ink-muted hover:text-signal"
          >
            <ArrowLeft size={14} />
            All projects
          </Link>

          <div className="mt-8 flex items-center gap-4 text-xs uppercase tracking-wide text-signal">
            <span>{project.category}</span>
            <span className="text-ink-muted">·</span>
            <span className="text-ink-muted">{project.year}</span>
          </div>

          <TypewriterHeading
            text={project.title}
            className="mt-4 min-h-[1.3em] font-display text-3xl font-semibold leading-[1.15] tracking-tight md:text-5xl"
          />

          <StaggerWords
            delay={1.0}
            text={project.summary}
            className="mt-6 text-lg leading-relaxed text-ink-muted"
          />
          <p className="mt-4 text-sm text-ink-muted">
            Client: <span className="text-ink">{project.client}</span>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <div className="flex flex-col gap-12">
          <Reveal>
            <h2 className="font-display text-xl font-medium text-signal">
              The problem
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              {project.problem}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-xl font-medium text-signal">
              What we built
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              {project.solution}
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <h2 className="font-display text-xl font-medium text-signal">
              The result
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              {project.result}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services used */}
      <section className="relative overflow-hidden border-y border-panel-line/60 bg-panel/40">
        <AmbientBlobs />
        <div className="relative mx-auto max-w-4xl px-6 py-12 md:py-16">
          <Reveal>
            <h2 className="text-sm font-medium text-ink-muted">
              Services used
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {usedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-full border border-panel-line px-4 py-2 text-sm text-ink transition-colors hover:border-signal hover:text-signal"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other projects */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
            Other projects
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {otherProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08} className="h-full">
              <TiltCard className="h-full">
                <Link
                  href={`/projects/${p.slug}`}
                  className="group flex h-full flex-col justify-between rounded-sm border border-panel-line bg-panel/40 p-6 transition-colors hover:border-signal/50"
                >
                  <div>
                    <p className="text-xs uppercase tracking-wide text-signal">
                      {p.category}
                    </p>
                    <h3 className="mt-3 font-display text-base font-medium">
                      {p.title}
                    </h3>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-ink-muted group-hover:text-signal">
                    Read case study
                    <ArrowRight size={14} />
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-panel-line/60">
        <Reveal className="mx-auto max-w-6xl px-6 py-16 text-center md:py-20">
          <h2 className="mx-auto max-w-xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Have a similar project in mind?
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-signal px-7 py-3 text-sm font-medium text-void transition-all hover:-translate-y-0.5 hover:bg-signal-dim hover:shadow-[0_0_30px_rgba(118,185,0,0.35)] active:scale-95"
          >
            Start a project
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </>
  );
}