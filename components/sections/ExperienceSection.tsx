import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { experiences } from "@/lib/data";
import { images } from "@/lib/images";

export function ExperienceSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-luminosity"
        aria-hidden="true"
      >
        <Image
          src={images.story}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="container-site relative">
        <Reveal className="relative z-10">
          <SectionEyebrow>Welcome</SectionEyebrow>
          <h2 className="text-center font-display text-[42px] text-ivory md:text-[58px]">
            Experience The Elements.
          </h2>
        </Reveal>

        <div className="relative z-10 mx-auto mt-16 grid max-w-[1200px] gap-12 md:grid-cols-3 md:gap-12">
          {experiences.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.1}>
              <article className="group text-center">
                <div className="image-overlay overflow-hidden rounded-t-[180px] border border-gold/70">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={640}
                    height={820}
                    className="aspect-[0.78] w-full object-cover transition-transform duration-700 group-hover:scale-[1.045]"
                  />
                </div>
                <h3 className="mt-7 font-display text-[27px] text-ivory">
                  {item.title}
                </h3>
                <p className="mx-auto mt-3 max-w-[320px] text-sm leading-6 text-white/65">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-5 inline-block text-[11px] font-semibold tracking-[0.14em] text-gold uppercase transition-[letter-spacing] duration-200 hover:tracking-[0.2em]"
                >
                  View More
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
