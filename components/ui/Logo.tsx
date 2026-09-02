import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  compact?: boolean;
  variant?: "nav" | "footer";
  priority?: boolean;
};

export function Logo({
  className,
  compact = false,
  variant = "nav",
  priority = false,
}: LogoProps) {
  const sizeClass =
    variant === "footer"
      ? "h-[220px] w-[220px] md:h-[280px] md:w-[280px]"
      : compact
        ? "h-[88px] w-[88px]"
        : "h-[112px] w-[112px]";

  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src="/images/logo-balenciao.png"
        alt="Balenciao"
        width={500}
        height={500}
        priority={priority}
        className={cn(
          "object-contain drop-shadow-[0_0_18px_rgba(242,210,152,0.15)]",
          sizeClass,
        )}
      />
    </span>
  );
}
