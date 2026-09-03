import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

type ReserveButtonProps = {
  children?: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  className?: string;
  compact?: boolean;
  onClick?: () => void;
  disabled?: boolean;
};

export function ReserveButton({
  children = "Reserve A Table",
  href,
  type = "button",
  className,
  compact = false,
  onClick,
  disabled,
}: ReserveButtonProps) {
  const iconSize = compact ? 14 : 16;
  const classes = cn("btn-reserve", compact && "btn-reserve-compact", className);
  const content = (
    <>
      <Calendar size={iconSize} strokeWidth={1.5} aria-hidden="true" />
      <span className="btn-reserve-divider" aria-hidden="true" />
      <span className="btn-reserve-label">{children}</span>
      <ArrowRight
        className="btn-reserve-arrow"
        size={iconSize}
        strokeWidth={1.5}
        aria-hidden="true"
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
