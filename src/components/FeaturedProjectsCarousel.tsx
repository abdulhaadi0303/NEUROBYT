"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

const images = [
  "/carousel/img1.webp",
  "/carousel/img2.webp",
  "/carousel/img3.webp",
  "/carousel/img4.webp",
  "/carousel/img5.webp",
  "/carousel/img6.webp",
  "/carousel/img7.webp",
  "/carousel/img8.webp",
  "/carousel/img9.webp",
];

export default function FeaturedProjectsCarousel() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, []);
  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, []);
  const goTo = useCallback((i: number) => setIndex(i), []);

  // Faster autoplay — images pass quickly
  useEffect(() => {
    if (isHovered) return;
    intervalRef.current = setInterval(next, 1500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, next]);

  // Preload the next image so the swap feels instant
  useEffect(() => {
    const nextIndex = (index + 1) % images.length;
    const img = new window.Image();
    img.src = images[nextIndex];
  }, [index]);

  return (
    <section className="border-t border-panel-line/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-signal">
            Featured work
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            A glimpse into what we build
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-ink-muted">
            A look at the craft behind the work — scroll down for the full
            case studies.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="relative mt-14">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative overflow-hidden rounded-3xl border border-signal/20 bg-gradient-to-br from-panel to-void shadow-2xl shadow-black/30"
          >
            <div className="relative h-[420px] md:h-[560px] lg:h-[640px]">
              {images.map((src, i) => (
                <div
                  key={src}
                  className={`absolute inset-0 transform-gpu transition-all duration-500 ease-out ${
                    i === index
                      ? "z-10 scale-100 opacity-100"
                      : "z-0 scale-105 opacity-0"
                  }`}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    priority={i === 0}
                    sizes="(max-width: 768px) 100vw, 1152px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
                </div>
              ))}
            </div>

            {/* Nav arrows — visible only on hover, glow + scale on hover */}
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-6 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-signal/30 bg-void/50 text-signal opacity-0 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-signal/60 hover:bg-signal/20 group-hover:opacity-100"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-6 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-signal/30 bg-void/50 text-signal opacity-0 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-signal/60 hover:bg-signal/20 group-hover:opacity-100"
            >
              <ChevronRight size={20} />
            </button>

            {/* Slide counter */}
            <div className="absolute left-6 top-6 z-20 rounded-full border border-signal/30 bg-void/50 px-4 py-2 backdrop-blur-sm">
              <span className="text-sm font-light text-signal">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </span>
            </div>

            {/* Autoplay status dot */}
            <div className="absolute right-6 top-6 z-20">
              <div
                className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                  !isHovered ? "bg-signal" : "bg-ink-muted/50"
                }`}
              />
            </div>

            {/* Dots with ping effect on active */}
            <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="group/dot relative"
                >
                  <div
                    className={`h-2.5 w-2.5 rounded-full border-2 transition-all duration-300 ${
                      i === index
                        ? "border-signal bg-signal"
                        : "border-signal/40 bg-transparent hover:border-signal/70"
                    }`}
                  />
                  {i === index && (
                    <div className="absolute inset-0 h-2.5 w-2.5 animate-ping rounded-full bg-signal/40" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-8 text-center">
          <Link
            href="/projects#case-studies"
            className="text-sm font-medium text-ink-muted transition-colors hover:text-signal"
          >
            See the full case studies below ↓
          </Link>
        </Reveal>
        
      </div>
    </section>
  );
}