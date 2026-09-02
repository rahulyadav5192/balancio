type GradientLineProps = {
  className?: string;
};

export function GradientLine({ className = "mx-auto my-4" }: GradientLineProps) {
  return (
    <span
      className={`block h-0.5 w-[142px] rounded-full bg-gradient-to-r from-purple via-[#3A53D8] to-[#1384CC] ${className}`}
      aria-hidden="true"
    />
  );
}
