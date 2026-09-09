"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";

type LogLine = {
  text: string;
  status: "done" | "running";
};

const script: LogLine[][] = [
  [
    { text: "Deploying checkout-service to production", status: "running" },
  ],
  [
    { text: "Deploying checkout-service to production", status: "done" },
    { text: "Running test suite — 42/42 passed", status: "running" },
  ],
  [
    { text: "Deploying checkout-service to production", status: "done" },
    { text: "Running test suite — 42/42 passed", status: "done" },
    { text: "Syncing inventory data → warehouse", status: "running" },
  ],
  [
    { text: "Deploying checkout-service to production", status: "done" },
    { text: "Running test suite — 42/42 passed", status: "done" },
    { text: "Syncing inventory data → warehouse", status: "done" },
    { text: "AI agent flagged 3 anomalies for review", status: "running" },
  ],
];

export default function HeroWidget() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % script.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const lines = script[step];

  return (
    <div className="w-full max-w-md rounded-sm border border-panel-line bg-panel/80 shadow-2xl backdrop-blur">
      <div className="flex items-center gap-2 border-b border-panel-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-muted/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-muted/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-muted/30" />
        <span className="ml-2 text-xs text-ink-muted">
          neurobyt-pipeline · live
        </span>
      </div>

      <div className="min-h-[168px] space-y-3 p-4 font-mono text-[13px]">
        <AnimatePresence mode="popLayout">
          {lines.map((line) => (
            <motion.div
              key={line.text}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-2.5"
            >
              {line.status === "done" ? (
                <CheckCircle2
                  size={15}
                  className="mt-0.5 shrink-0 text-signal"
                />
              ) : (
                <Loader2
                  size={15}
                  className="mt-0.5 shrink-0 animate-spin text-ink-muted"
                />
              )}
              <span
                className={
                  line.status === "done" ? "text-ink-muted" : "text-ink"
                }
              >
                {line.text}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
