"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import WaveMark from "./WaveMark";
import { services } from "@/lib/services";

const links = [
  { href: "/projects", label: "Our Projects" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-panel-line/60 bg-void/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <WaveMark className="h-7 w-7 text-signal" />
          <span className="font-display text-lg font-semibold tracking-tight">
            NeuroBYT
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className="flex items-center gap-1 text-sm text-ink-muted transition-colors hover:text-ink"
            >
              Services
              <ChevronDown size={14} />
            </Link>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3">
                <div className="grid grid-cols-2 gap-1 rounded-sm border border-panel-line bg-panel p-3 shadow-xl">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="rounded-sm px-3 py-2.5 text-sm text-ink-muted transition-colors hover:bg-void hover:text-signal"
                    >
                      {s.name}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="col-span-2 mt-1 rounded-sm border-t border-panel-line px-3 pt-3 text-sm font-medium text-signal hover:text-signal-dim"
                  >
                    View all services →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-sm bg-signal px-4 py-2 text-sm font-medium text-void transition-colors hover:bg-signal-dim"
          >
            Start a project
          </Link>
        </nav>

        <button
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-panel-line/60 px-6 pb-6 pt-2 md:hidden">
          <button
            className="flex items-center justify-between rounded-sm px-2 py-3 text-left text-ink-muted transition-colors hover:bg-panel hover:text-ink"
            onClick={() => setMobileServicesOpen((v) => !v)}
            aria-expanded={mobileServicesOpen}
          >
            Services
            <ChevronDown
              size={16}
              className={mobileServicesOpen ? "rotate-180 transition-transform" : "transition-transform"}
            />
          </button>
          {mobileServicesOpen && (
            <div className="ml-2 flex flex-col gap-0.5 border-l border-panel-line pl-3">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  onClick={() => setOpen(false)}
                  className="rounded-sm px-2 py-2 text-sm text-ink-muted hover:text-signal"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          )}

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-sm px-2 py-3 text-ink-muted transition-colors hover:bg-panel hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-sm bg-signal px-4 py-3 text-center font-medium text-void"
          >
            Start a project
          </Link>
        </nav>
      )}
    </header>
  );
}
