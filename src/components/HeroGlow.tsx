"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function HeroGlow({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(300);
  const y = useMotionValue(150);
  const springX = useSpring(x, { stiffness: 50, damping: 20 });
  const springY = useSpring(y, { stiffness: 50, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  return (
    <div ref={ref} onMouseMove={handleMouseMove} className="relative">
      <motion.div
        style={{ left: springX, top: springY }}
        className="pointer-events-none absolute h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/[0.08] blur-[110px]"
      />
      {children}
    </div>
  );
}