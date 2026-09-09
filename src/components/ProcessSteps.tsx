import Reveal from "./Reveal";

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export default function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="relative mt-12 grid gap-10 md:grid-cols-4 md:gap-6">
      <div className="absolute left-0 right-0 top-6 hidden h-px bg-panel-line md:block" />
      {steps.map((step, i) => (
        <Reveal key={step.number} delay={i * 0.1} className="relative">
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-panel-line bg-void font-display text-lg font-semibold text-signal">
            {step.number}
          </div>
          <h3 className="mt-5 font-display text-lg font-medium">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            {step.description}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
