export function LineIcon() {
  return (
    <span
      aria-hidden="true"
      className="mb-5 inline-flex h-10 w-10 items-center justify-center"
    >
      <svg viewBox="0 0 40 40" className="h-10 w-10 text-red-soft">
        <path
          d="M20 4 L24 16 L36 20 L24 24 L20 36 L16 24 L4 20 L16 16 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M20 12 V28 M12 20 H28"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </span>
  );
}
