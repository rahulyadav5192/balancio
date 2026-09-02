export function ScrollOrnament() {
  return (
    <div
      className="pointer-events-none absolute bottom-6 left-1/2 z-20 w-[min(420px,82vw)] -translate-x-1/2 text-gold"
      aria-hidden="true"
    >
      <svg viewBox="0 0 420 78" fill="none" className="h-auto w-full">
        <path
          d="M8 18C78 18 118 62 210 62C302 62 342 18 412 18"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M38 8C98 8 138 38 210 38C282 38 322 8 382 8"
          stroke="currentColor"
          strokeWidth="0.7"
          opacity="0.55"
        />
        <path d="M210 38 L210 50" stroke="currentColor" strokeWidth="1" />
        <rect
          x="201.5"
          y="50"
          width="17"
          height="24"
          rx="8.5"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <circle cx="210" cy="57" r="1.6" fill="currentColor" />
      </svg>
    </div>
  );
}
