"use client";

export default function CircuitBackground({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 600"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M40 0H0V40"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.08"
          />
        </pattern>
      </defs>
      <rect width="800" height="600" fill="url(#grid)" />

      {/* animated pulse nodes along a few grid intersections */}
      {[
        [120, 80],
        [360, 160],
        [640, 100],
        [200, 380],
        [520, 420],
        [700, 320],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="currentColor">
          <animate
            attributeName="opacity"
            values="0.15;0.9;0.15"
            dur={`${3 + i}s`}
            repeatCount="indefinite"
            begin={`${i * 0.4}s`}
          />
        </circle>
      ))}

      {/* connecting traces */}
      <path
        d="M120 80 L360 160 L640 100"
        stroke="currentColor"
        strokeOpacity="0.15"
        strokeWidth="1"
      />
      <path
        d="M200 380 L520 420 L700 320"
        stroke="currentColor"
        strokeOpacity="0.15"
        strokeWidth="1"
      />
    </svg>
  );
}
