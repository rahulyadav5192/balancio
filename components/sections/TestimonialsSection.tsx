import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TestimonialCarousel } from "@/components/testimonials/TestimonialCarousel";

export function TestimonialsSection() {
  return (
    <section className="bg-bg-secondary py-24 md:py-32">
      <div className="container-site">
        <Reveal>
          <SectionEyebrow>Testimonials</SectionEyebrow>
          <h2 className="mb-14 text-center font-display text-[42px] text-ivory md:text-[56px]">
            The Voices Of The Syndicate.
          </h2>
        </Reveal>
        <TestimonialCarousel />
      </div>
    </section>
  );
}
