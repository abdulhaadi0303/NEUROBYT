type WaveMarkProps = {
  className?: string;
};

// Three curved bars, thickest/tallest on the left tapering right —
// matches the supplied logo asset. Pure SVG so it stays crisp at any size
// and can take a currentColor fill for theming.
export default function WaveMark({ className }: WaveMarkProps) {
  return (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M14 4 C30 22, 34 34, 34 52 L34 96 L18 96 L18 52 C18 38, 15 28, 2 12 Z"
        fill="currentColor"
      />
      <path
        d="M50 4 C66 22, 70 34, 70 52 L70 96 L54 96 L54 52 C54 38, 51 28, 38 12 Z"
        fill="currentColor"
      />
      <path
        d="M86 4 C102 22, 106 34, 106 52 L106 96 L90 96 L90 52 C90 38, 87 28, 74 12 Z"
        fill="currentColor"
      />
    </svg>
  );
}
