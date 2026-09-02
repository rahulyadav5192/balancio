import { cn } from "@/lib/utils";

type SectionEyebrowProps = {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
};

export function SectionEyebrow({
  children,
  className,
  align = "center",
}: SectionEyebrowProps) {
  return (
    <p
      className={cn(
        "mb-4 font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-purple-bright",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      <span aria-hidden="true" className="mr-2 text-[10px]">
        ✦
      </span>
      {children}
      <span aria-hidden="true" className="ml-2 text-[10px]">
        ✦
      </span>
    </p>
  );
}
