import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { events } from "@/lib/data";

export function EventsSection() {
  const hasEvents = events.length > 0;

  return (
    <section id="events" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.05),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="container-site relative">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <SectionEyebrow align="left">Events</SectionEyebrow>
              <h2 className="font-display text-[42px] text-ivory md:text-[58px]">
                Upcoming Events
              </h2>
            </div>
            {hasEvents ? (
              <Link
                href="/reservation"
                className="text-[11px] font-semibold tracking-[0.14em] text-gold uppercase transition-[letter-spacing] duration-200 hover:tracking-[0.2em]"
              >
                See All
              </Link>
            ) : null}
          </div>
        </Reveal>

        {hasEvents ? (
          <ul className="mt-14 space-y-4 md:mt-16">
            {events.map((event, index) => (
              <Reveal key={event.slug} delay={index * 0.08}>
                <li>
                  <Link
                    href={event.href}
                    className="group grid grid-cols-[72px_88px_1fr] items-center gap-4 border border-border-dark bg-bg-elevated p-4 transition-colors duration-300 hover:border-gold/40 md:grid-cols-[88px_120px_1fr] md:gap-6 md:p-5"
                    aria-disabled={event.soldOut}
                  >
                    <div className="text-center">
                      <p className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
                        {event.day}
                      </p>
                      <p className="mt-1 font-display text-[36px] leading-none text-ivory md:text-[42px]">
                        {event.date}
                      </p>
                      <p className="mt-1 text-[11px] font-semibold tracking-[0.16em] text-gold uppercase">
                        {event.month}
                      </p>
                    </div>

                    <div className="relative aspect-square overflow-hidden border border-white/10">
                      <Image
                        src={event.image}
                        alt=""
                        fill
                        sizes="120px"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-display text-[24px] leading-tight text-ivory uppercase md:text-[28px]">
                        {event.title}
                      </h3>
                      <p className="mt-1 text-[12px] tracking-[0.08em] text-muted uppercase">
                        {event.category}
                      </p>
                      <p className="mt-2 text-[13px] text-ivory-muted">{event.time}</p>
                      <p
                        className={`mt-2 text-[12px] font-semibold tracking-[0.1em] uppercase ${
                          event.soldOut ? "text-muted" : "text-gold"
                        }`}
                      >
                        {event.availability}
                      </p>
                    </div>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        ) : (
          <Reveal delay={0.08}>
            <div className="mt-14 border border-border-dark bg-bg-elevated px-8 py-16 text-center md:mt-16 md:px-12 md:py-20">
              <p className="font-display text-[32px] text-ivory md:text-[40px]">
                No Upcoming Events
              </p>
              <p className="mx-auto mt-4 max-w-[480px] text-[15px] leading-7 text-ivory-muted">
                We are curating the next chapter at Balenciao. Check back soon
                or speak with our concierge to plan a private evening.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button href="/reservation">Make A Reservation</Button>
                <Button href="/contact" variant="secondary">
                  Get In Touch
                </Button>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
