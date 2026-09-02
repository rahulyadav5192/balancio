import Image from "next/image";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  eyebrow?: string;
  image: string;
  className?: string;
};

export function PageHero({ title, eyebrow, image, className }: PageHeroProps) {
  return (
    <section className={cn("relative isolate min-h-[48vh] overflow-hidden pt-[120px]", className)}>
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative flex min-h-[36vh] items-end px-0 pb-16">
        <div className="container-site">
          {eyebrow ? (
            <p className="mb-4 text-[11px] font-bold tracking-[0.18em] text-purple-bright uppercase">
              ✦ {eyebrow} ✦
            </p>
          ) : null}
          <h1 className="max-w-[820px] font-display text-[48px] text-ivory md:text-[72px]">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
