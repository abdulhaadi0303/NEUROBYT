import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import { services, engagementProcess } from "@/lib/services";
import TypewriterHeading from "@/components/TypewriterHeading";
import Reveal from "@/components/Reveal";
import CircuitBackground from "@/components/CircuitBackground";
import ProcessSteps from "@/components/ProcessSteps";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.summary,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      url: `/services/${service.slug}`,
      title: `${service.name} | NeuroBYT`,
      description: service.summary,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = service.icon;
  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-panel-line/60">
        <CircuitBackground className="pointer-events-none absolute inset-0 h-full w-full text-signal" />

        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Link
            href="/services"
            className="flex items-center gap-1.5 text-sm text-ink-muted hover:text-signal"
          >
            <ArrowLeft size={14} />
            All services
          </Link>

          <div className="mt-8 flex items-start gap-5">
            <div className="mt-1 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-panel-line bg-panel/60 text-signal">
              <Icon size={30} strokeWidth={1.5} />
            </div>
            <div>
              <TypewriterHeading
                text={service.name}
                className="min-h-[1.2em] font-display text-3xl font-semibold tracking-tight md:text-5xl"
              />
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
                {service.detail}
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="mt-9 inline-block rounded-sm bg-signal px-6 py-3 text-sm font-medium text-void transition-transform hover:-translate-y-0.5 hover:bg-signal-dim"
          >
            Start a project
          </Link>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
            What's included
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {service.capabilities.map((capability, i) => (
            <Reveal key={capability} delay={(i % 4) * 0.05}>
              <div className="flex h-full items-start gap-3 rounded-sm border border-panel-line bg-panel/40 p-5 transition-colors hover:border-signal/40">
                <Check size={18} className="mt-0.5 shrink-0 text-signal" />
                <span className="text-sm text-ink">{capability}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-y border-panel-line/60 bg-panel/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
              Who this is for
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {service.idealFor.map((item, i) => (
              <Reveal key={item} delay={i * 0.08}>
                <div className="flex h-full items-start gap-3">
                  <Sparkles
                    size={16}
                    className="mt-1 shrink-0 text-signal"
                  />
                  <p className="text-sm leading-relaxed text-ink-muted">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Optional highlights (currently used for Website Development) */}
      {service.highlights && (
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
              A closer look
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {service.highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.1}>
                <h3 className="font-display text-lg font-medium text-signal">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {h.description}
                </p>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Process */}
      <section className="border-y border-panel-line/60 bg-panel/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
              How we'll work together
            </h2>
          </Reveal>
          <ProcessSteps steps={engagementProcess} />
        </div>
      </section>

      {/* Other services */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
            Explore other services
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-panel-line/60 bg-panel-line/60 sm:grid-cols-3">
          {otherServices.map((s, i) => {
            const OtherIcon = s.icon;
            return (
              <Reveal key={s.slug} delay={i * 0.08}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col gap-4 bg-void p-6 transition-colors hover:bg-panel"
                >
                  <OtherIcon
                    className="text-signal"
                    size={22}
                    strokeWidth={1.5}
                  />
                  <div>
                    <h3 className="font-display text-base font-medium">
                      {s.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                      {s.summary}
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-panel-line/60">
        <Reveal className="mx-auto max-w-6xl px-6 py-16 text-center md:py-20">
          <h2 className="mx-auto max-w-xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Ready to talk about your project?
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-signal px-7 py-3 text-sm font-medium text-void transition-transform hover:-translate-y-0.5 hover:bg-signal-dim"
          >
            Get in touch
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </>
  );
}