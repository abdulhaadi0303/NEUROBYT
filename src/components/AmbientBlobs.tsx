export default function AmbientBlobs({ className }: { className?: string }) {
    return (
      <div
        className={`pointer-events-none absolute inset-0 overflow-hidden ${
          className ?? ""
        }`}
        aria-hidden="true"
      >
        <div className="animate-float-slow absolute -left-24 top-0 h-72 w-72 rounded-full bg-signal/[0.06] blur-[100px]" />
        <div className="animate-float-slow-reverse absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-signal/[0.05] blur-[100px]" />
      </div>
    );
  }


  