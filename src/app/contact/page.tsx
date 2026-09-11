import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import TypewriterHeading from "@/components/TypewriterHeading";
import Reveal from "@/components/Reveal";
import CircuitBackground from "@/components/CircuitBackground";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";

const description =
  "Tell NeuroBYT about your project — we reply within a business day.";

export const metadata: Metadata = {
  title: "Contact Us",
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "/contact",
    title: "Contact Us | NeuroBYT",
    description,
  },
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@neurobyt.com",
    href: "mailto:hello@neurobyt.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (000) 000-0000", // placeholder — replace with real number
    href: "tel:+10000000000",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "City, Country", // placeholder — replace with real location
    href: undefined,
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 1 business day",
    href: undefined,
  },
];

const faqItems = [
  {
    question: "What happens after I submit the form?",
    answer:
      "We'll review what you've shared and reply within a business day — usually with a couple of clarifying questions before proposing next steps, like a short discovery call.",
  },
  {
    question: "Do you sign NDAs before a discovery call?",
    answer:
      "Yes, happy to sign an NDA before discussing specifics if that's something your project needs.",
  },
  {
    question: "I'm not sure which service I need — can I still reach out?",
    answer:
      'Yes — that\'s exactly what the "not sure yet" option in the form is for. Tell us the problem you\'re solving and we\'ll help figure out the right approach.',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-panel-line/60">
        <CircuitBackground className="pointer-events-none absolute inset-0 h-full w-full text-signal" />

        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="text-sm text-ink-muted">Contact us</p>

          <TypewriterHeading
            text="Tell us what you're building."
            className="mt-5 min-h-[1.3em] max-w-2xl font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl"
          />

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Whether you have a fully scoped project or just a rough idea,
            fill out the form below and we'll get back to you within a
            business day with next steps.
          </p>
        </div>
      </section>

      {/* Form + contact details */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <h2 className="font-display text-xl font-medium">
              Contact details
            </h2>

            <div className="mt-6 flex flex-col gap-6">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                const content = (
                  <div className="flex items-start gap-3">
                    <Icon
                      size={18}
                      className="mt-0.5 shrink-0 text-signal"
                    />

                    <div>
                      <p className="text-xs uppercase tracking-wide text-ink-muted">
                        {detail.label}
                      </p>

                      <p className="mt-1 text-sm text-ink">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                );

                return detail.href ? (
                  <a
                    key={detail.label}
                    href={detail.href}
                    className="transition-colors hover:opacity-80"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={detail.label}>{content}</div>
                );
              })}
            </div>

            <div className="mt-10 border-t border-panel-line pt-6">
              <p className="text-sm leading-relaxed text-ink-muted">
                Prefer email? Send the details directly to{" "}
                <a
                  href="mailto:hello@neurobyt.com"
                  className="text-signal hover:text-signal-dim"
                >
                  hello@neurobyt.com
                </a>{" "}
                and we'll pick it up just as quickly.
              </p>
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="rounded-sm border border-panel-line bg-panel/30 p-6 md:p-8"
          >
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-panel-line/60 bg-panel/40">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
              Before you reach out
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <Faq items={faqItems} />
          </Reveal>
        </div>
      </section>
    </>
  );
}