import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { LineIcon } from "@/components/ui/LineIcon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { storyFeatures } from "@/lib/data";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export function StorySection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="container-site">
        <Reveal>
          <SectionEyebrow>Our Story</SectionEyebrow>
          <h2 className="mx-auto max-w-[980px] text-center font-display text-[36px] leading-[1.05] text-ivory md:text-[56px]">
            A Masterclass In Mixology.
            <br />
            <span className="mt-3 inline-flex flex-wrap items-center justify-center gap-3">
              <Image
                src={images.storyPillOne}
                alt=""
                width={72}
                height={40}
                className="hidden h-9 w-16 rounded-full object-cover sm:inline-block"
              />
              <span className="text-gold">Exotic Blends & Bold Flavors</span>
              <Image
                src={images.storyPillTwo}
                alt=""
                width={72}
                height={40}
                className="hidden h-9 w-16 rounded-full object-cover sm:inline-block"
              />
            </span>
            <br />
            Served{" "}
            <Image
              src={images.storyPillThree}
              alt=""
              width={72}
              height={40}
              className="mx-2 hidden h-9 w-16 rounded-full object-cover align-middle sm:inline-block"
            />{" "}
            After Dark.
          </h2>
        </Reveal>

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="max-w-[480px] text-[15px] leading-7 text-ivory-muted">
              Founded as a private after-hours salon, Midnight Syndicate gathers
              those who prefer their evenings composed. We source rare spirits,
              age our own infusions, and keep the lights low enough that the
              drink — and the company — remain the spectacle.
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {storyFeatures.map((feature) => (
                <div key={feature.title}>
                  <LineIcon />
                  <h3 className="font-sans text-[13px] font-semibold tracking-[0.14em] text-ivory uppercase">
                    {feature.title}
                  </h3>
                  <p className="mt-3 max-w-[240px] text-sm leading-6 text-muted">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="image-overlay overflow-hidden rounded-t-[220px] border border-gold/65">
              <Image
                src={images.story}
                alt="Dark bar interior with bottle shelves and warm amber lighting"
                width={860}
                height={1040}
                className="aspect-[0.82] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 flex flex-col items-start gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs tracking-[0.16em] text-muted uppercase">
              Booking Request
            </p>
            <a
              href={site.phoneHref}
              className="mt-2 block font-display text-[34px] text-ivory md:text-[42px]"
            >
              {site.phone}
            </a>
          </div>
          <Button href="/about" variant="secondary">
            Learn More
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
