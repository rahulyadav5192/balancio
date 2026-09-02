type EventShapeProps = {
  className?: string;
};

export function EventZigzagShape({ className }: EventShapeProps) {
  return (
    <svg
      viewBox="0 0 50 59"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M8 4L42 12L34 55L4 47L8 4Z"
        stroke="url(#eventZigzagGradient)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient id="eventZigzagGradient" x1="4" y1="4" x2="42" y2="55">
          <stop stopColor="#9F23C1" />
          <stop offset="0.55" stopColor="#3A53D8" />
          <stop offset="1" stopColor="#1384CC" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function EventCircleShape({ className }: EventShapeProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle
        cx="60"
        cy="60"
        r="54"
        stroke="url(#eventCircleGradient)"
        strokeWidth="2"
        strokeDasharray="10 8"
      />
      <defs>
        <linearGradient id="eventCircleGradient" x1="0" y1="0" x2="120" y2="120">
          <stop stopColor="#9F23C1" stopOpacity="0.9" />
          <stop offset="1" stopColor="#1384CC" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function EventRingShape({ className }: EventShapeProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="50" cy="50" r="42" stroke="#9F23C1" strokeWidth="1.5" opacity="0.7" />
      <circle cx="50" cy="50" r="30" stroke="#3A53D8" strokeWidth="1" opacity="0.5" />
      <circle cx="50" cy="50" r="18" stroke="#1384CC" strokeWidth="1" opacity="0.35" />
    </svg>
  );
}
