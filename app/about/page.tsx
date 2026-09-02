import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { LineIcon } from "@/components/ui/LineIcon";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story, philosophy, and rooms of Balenciao — a premium night club and restaurant after dark.",
};

const milestones = [
  { year: "2014", title: "The First Salon", copy: "A handful of seats, a mahogany bar, and a private list of guests." },
  { year: "2018", title: "The Cask Library", copy: "Member barrels and rare allocations became part of the house identity." },
  { year: "2022", title: "The Night Rooms", copy: "The lounge expanded into quieter chambers for conversation and ceremony." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Sanctuary After Dark."
        image={images.story}
      />
      <section className="bg-background py-24">
        <div className="container-site grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-[42px] text-ivory md:text-[52px]">
              Hospitality As A Quiet Craft.
            </h2>
            <p className="mt-6 max-w-[520px] text-[15px] leading-7 text-ivory-muted">
              Balenciao was created for those who prefer their evenings
              composed. We believe luxury is a matter of pacing: the right
              glass, the right light, and a room that does not rush you.
            </p>
            <p className="mt-5 max-w-[520px] text-[15px] leading-7 text-ivory-muted">
              Our bartenders train in classic technique and then unlearn
              anything that feels theatrical. The pour should be the performance.
              Everything else remains in the background.
            </p>
          </div>
          <div className="image-overlay overflow-hidden rounded-t-[200px] border border-gold/60">
            <Image
              src={images.about}
              alt="Cocktails prepared for evening service"
              width={800}
              height={900}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-bg-secondary py-24">
        <div className="container-site grid gap-12 md:grid-cols-3">
          {milestones.map((item) => (
            <div key={item.year}>
              <p className="text-sm tracking-[0.18em] text-gold uppercase">{item.year}</p>
              <h3 className="mt-4 font-display text-[28px] text-ivory">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container-site text-center">
          <LineIcon />
          <h2 className="font-display text-[40px] text-ivory">
            Private Evenings, Considered In Advance.
          </h2>
          <p className="mx-auto mt-5 max-w-[520px] text-sm leading-7 text-ivory-muted">
            For celebrations, gatherings, and quieter tables, our concierge
            team will arrange seating, pours, and pacing to suit the night.
          </p>
          <div className="mt-10">
            <Button href="/reservation">Reservation</Button>
          </div>
        </div>
      </section>
    </>
  );
}
