"use client";

import { motion } from "framer-motion";

export default function StaggerWords({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <p className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: delay + i * 0.02 }}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </p>
  );
}