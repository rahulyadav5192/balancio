import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ReserveButton } from "@/components/ui/ReserveButton";
import { DecorativeFrame } from "@/components/ui/DecorativeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { images } from "@/lib/images";

export function AboutSection() {
  return (
    <section id="about" className="bg-bg-secondary py-24 md:py-32">
      <div className="container-site grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionEyebrow align="left">About Us</SectionEyebrow>
          <h2 className="max-w-[520px] font-display text-[42px] text-ivory md:text-[58px]">
            The Art Of The
            <br />
            Midnight Pour.
          </h2>
          <div className="mt-8 max-w-[520px] space-y-5 text-[15px] leading-7 text-ivory-muted">
            <p>
              Balenciao is more than a destination. It is an after-dark
              sanctuary where refined hospitality, carefully selected spirits,
              and intimate conversation come together.
            </p>
            <p>
              Every cocktail is composed with intention by bartenders who treat
              their craft as performance — measured, unhurried, and designed to
              linger long after the glass is empty.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <ReserveButton href="/reservation" />
            <Button href="/contact" variant="secondary">
              Get In Touch
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="mx-auto w-full max-w-[520px]">
          <DecorativeFrame>
            <div className="image-overlay">
              <Image
                src={images.about}
                alt="Signature cocktails arranged on dark stone with citrus and gold light"
                width={720}
                height={800}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </DecorativeFrame>
        </Reveal>
      </div>
    </section>
  );
}
