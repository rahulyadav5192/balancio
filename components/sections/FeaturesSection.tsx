import { LineIcon } from "@/components/ui/LineIcon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { features } from "@/lib/data";

export function FeaturesSection() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container-site">
        <Reveal>
          <SectionEyebrow>Why Choose Us</SectionEyebrow>
          <h2 className="text-center font-display text-[42px] text-ivory md:text-[58px]">
            Elevating The Art Of Nightlife.
          </h2>
          <p className="mx-auto mt-6 max-w-[620px] text-center text-[15px] leading-7 text-ivory-muted">
            A private nightlife destination built around craft, discretion, and
            rooms that reward those who linger.
          </p>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-[1100px] gap-12 text-center sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.1} className="text-center">
              <LineIcon />
              <h3 className="font-sans text-[13px] font-semibold tracking-[0.16em] text-ivory uppercase">
                {feature.title}
              </h3>
              <p className="mx-auto mt-4 max-w-[280px] text-sm leading-6 text-muted">
                {feature.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
