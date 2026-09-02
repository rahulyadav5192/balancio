import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { images } from "@/lib/images";

export function ContactSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container-site">
        <div className="relative isolate overflow-hidden border border-white/12 px-6 py-20 md:px-16 md:py-28">
          <Image
            src={images.contact}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/74" aria-hidden="true" />
          <Reveal className="relative mx-auto max-w-[720px] text-center">
            <SectionEyebrow>Contact Us</SectionEyebrow>
            <h2 className="font-display text-[42px] text-ivory md:text-[58px]">
              Your Night At Balenciao
              <br />
              Awaits.
            </h2>
            <p className="mx-auto mt-6 max-w-[520px] text-[15px] leading-7 text-ivory-muted">
              Have a special request, private celebration, or event in mind?
              Contact our concierge team and we will help tailor your evening.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/reservation">Reservation</Button>
              <Button href="/contact" variant="secondary">
                Get In Touch
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
