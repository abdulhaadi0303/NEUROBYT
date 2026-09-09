import Link from "next/link";
import WaveMark from "./WaveMark";
import { services } from "@/lib/services";

export default function Footer() {
  const year = new Date().getFullYear();
  const primaryServices = services.slice(0, 6);

  return (
    <footer className="border-t border-panel-line/60 bg-void">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <WaveMark className="h-6 w-6 text-signal" />
            <span className="font-display text-base font-semibold">
              NeuroBYT
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
            A software engineering agency building web, mobile, cloud, and AI
            products for teams that need to move fast.
          </p>
          <div className="mt-5 flex gap-4 text-sm text-ink-muted">
            <a href="#" className="hover:text-signal">LinkedIn</a>
            <a href="#" className="hover:text-signal">GitHub</a>
            <a href="#" className="hover:text-signal">X</a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-ink">Services</h3>
          <ul className="mt-4 space-y-2.5">
            {primaryServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-sm text-ink-muted hover:text-signal"
                >
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-sm font-medium text-signal hover:text-signal-dim">
                View all services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium text-ink">Company</h3>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link href="/about" className="text-sm text-ink-muted hover:text-signal">
                About us
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-sm text-ink-muted hover:text-signal">
                Our Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-ink-muted hover:text-signal">
                Contact us
              </Link>
            </li>
            <li>
              <a
                href="mailto:hello@neurobyt.com"
                className="text-sm text-ink-muted hover:text-signal"
              >
                hello@neurobyt.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-panel-line/60 px-6 py-6">
        <p className="mx-auto max-w-6xl text-xs text-ink-muted">
          © {year} NeuroBYT. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
