"use client";

import { useEffect, useState } from "react";

type TypewriterHeadingProps = {
  text: string;
  className?: string;
  speed?: number;
  as?: "h1" | "h2";
};

export default function TypewriterHeading({
  text,
  className,
  speed = 22,
  as = "h1",
}: TypewriterHeadingProps) {
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setShown("");
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  const Tag = as;

  return (
    <Tag className={className}>
      {shown}
      <span
        aria-hidden="true"
        className={`ml-0.5 inline-block h-[0.9em] w-[3px] translate-y-[0.05em] bg-signal align-middle ${
          done ? "animate-pulse" : ""
        }`}
      />
      <span className="sr-only">{text}</span>
    </Tag>
  );
}
