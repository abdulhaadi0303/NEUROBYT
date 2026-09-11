import { services } from "@/lib/services";

export default function ServiceMarquee() {
  const items = [...services, ...services];

  return (
    <div className="group overflow-hidden border-y border-panel-line/60 bg-panel/30 py-4">
      <div className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused]">
        {items.map((s, i) => (
          <span
            key={i}
            className="flex items-center gap-2 whitespace-nowrap text-sm text-ink-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            {s.name}
          </span>
        ))}
      </div>
    </div>
  );
}