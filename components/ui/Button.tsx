import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
};

export function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  className,
  onClick,
  disabled,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    variant === "primary" ? "btn-primary" : "btn-secondary",
    "cursor-pointer",
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
