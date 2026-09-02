import Image from "next/image";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  item: (typeof testimonials)[number];
  featured?: boolean;
};

export function TestimonialCard({ item, featured = false }: TestimonialCardProps) {
  return (
    <article
      className={cn(
        "relative flex h-full flex-col border px-8 py-10",
        featured
          ? "border-gold bg-bg-elevated shadow-[var(--glow-purple)]"
          : "border-border-dark bg-panel",
      )}
    >
      {featured ? (
        <span
          aria-hidden="true"
          className="font-display absolute -top-7 right-8 text-[92px] leading-none text-gold"
        >
          ”
        </span>
      ) : null}
      <h3 className="font-display text-[26px] text-ivory">{item.title}</h3>
      <p className="mt-5 flex-1 text-sm leading-7 text-ivory-muted">
        “{item.quote}”
      </p>
      <div className="mt-8 border-t border-white/10 pt-6">
        <div className="flex items-center gap-4">
          <Image
            src={item.avatar}
            alt=""
            width={52}
            height={52}
            className="h-[52px] w-[52px] rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-gold">{item.name}</p>
            <p className="mt-1 text-xs tracking-wide text-ivory-muted">
              {item.role}
            </p>
          </div>
        </div>
        <p className="mt-4 text-[10px] tracking-[0.14em] text-muted uppercase">
          Sample testimonial
        </p>
      </div>
    </article>
  );
}
