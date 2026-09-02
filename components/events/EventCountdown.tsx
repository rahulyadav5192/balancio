"use client";

import { useEffect, useState } from "react";

type CountdownState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const emptyCountdown: CountdownState = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function getCountdown(target: Date): CountdownState {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return emptyCountdown;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

type EventCountdownProps = {
  startsAt: string;
  imageSide: "left" | "right";
};

const units: { key: keyof CountdownState; label: string }[] = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

export function EventCountdown({ startsAt, imageSide }: EventCountdownProps) {
  const [countdown, setCountdown] = useState<CountdownState>(() =>
    getCountdown(new Date(startsAt)),
  );

  useEffect(() => {
    const target = new Date(startsAt);
    const tick = () => setCountdown(getCountdown(target));
    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, [startsAt]);

  return (
    <div
      className={`flex shrink-0 items-center bg-white/[0.02] px-3 py-4 backdrop-blur-md sm:px-4 ${
        imageSide === "left" ? "rounded-r-[20px]" : "rounded-l-[20px]"
      }`}
      aria-live="polite"
      aria-label="Event countdown"
    >
      <ul className="flex flex-col gap-3 sm:gap-4">
        {units.map(({ key, label }) => (
          <li
            key={key}
            className="flex min-h-[70px] min-w-[70px] flex-col items-center justify-center rounded-md border border-purple/45 bg-black/30 px-2 text-center shadow-[0_0_18px_rgba(124,58,237,0.12)]"
          >
            <span className="font-display text-[22px] leading-none text-ivory sm:text-[28px]">
              {String(countdown[key]).padStart(2, "0")}
            </span>
            <span className="mt-1 text-[10px] tracking-[0.08em] text-muted uppercase sm:text-[11px]">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
