import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ReserveButton } from "@/components/ui/ReserveButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export function HoursSection() {
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32">
      <Image
        src={images.hours}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/78" aria-hidden="true" />

      <div className="container-site relative grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <SectionEyebrow align="left">Working Hours</SectionEyebrow>
          <h2 className="max-w-[520px] font-display text-[42px] text-ivory md:text-[58px]">
            Plan Your Escape To
            <br />
            The Balenciao.
          </h2>
          <p className="mt-6 max-w-[460px] text-[15px] leading-7 text-ivory-muted">
            Whether it is an intimate mid-week drink or a high-energy weekend
            escape, reserve your place in advance and let the evening unfold.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ReserveButton href="/reservation" />
            <Button href="/contact" variant="secondary">
              Get In Touch
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-hours px-10 py-16 text-center text-ivory md:px-16 md:py-20">
            {site.hours.map((block, index) => (
              <div key={block.label} className={index > 0 ? "mt-12" : ""}>
                <p className="text-[12px] font-semibold tracking-[0.18em] uppercase">
                  {block.label}
                </p>
                <p className="mt-5 font-display text-[48px] leading-none md:text-[56px]">
                  {block.opens}
                </p>
                <p className="mt-2 font-display text-[48px] leading-none md:text-[56px]">
                  {block.closes}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
