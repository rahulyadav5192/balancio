import { cn } from "@/lib/utils";

type DecorativeFrameProps = {
  children: React.ReactNode;
  className?: string;
};

export function DecorativeFrame({ children, className }: DecorativeFrameProps) {
  return (
    <div className={cn("relative overflow-visible max-md:overflow-hidden max-md:px-2", className)}>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-4 -left-4 h-[92px] w-[92px] border-t border-l border-gold"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 right-6 h-[70px] w-[140px] border-t border-gold/80"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-5 top-10 h-[160px] w-[72px] border-r border-gold"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-5 -left-6 h-[88px] w-[120px] border-b border-l border-gold/90"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 -right-3 h-[110px] w-[90px] border-b border-r border-gold"
      />
      {children}
    </div>
  );
}
