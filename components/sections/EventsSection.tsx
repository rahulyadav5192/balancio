import { Calendar, Clock, IndianRupee, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { EventCountdown } from "@/components/events/EventCountdown";
import { Button } from "@/components/ui/Button";
import {
  EventCircleShape,
  EventRingShape,
  EventZigzagShape,
} from "@/components/ui/EventShapes";
import { GradientLine } from "@/components/ui/GradientLine";
import { Reveal } from "@/components/ui/Reveal";
import { events } from "@/lib/data";
import { cn } from "@/lib/utils";

function EventCard({
  event,
  reversed,
  index,
}: {
  event: (typeof events)[number];
  reversed: boolean;
  index: number;
}) {
  const imageSide = reversed ? "right" : "left";

  return (
    <Reveal delay={index * 0.08}>
      <article className="relative">
        <EventZigzagShape
          className={cn(
            "pointer-events-none absolute -top-8 z-0 h-20 w-16 opacity-80 sm:h-24 sm:w-20 md:h-28 md:w-24",
            reversed ? "-left-6 md:-left-10 -rotate-[28deg]" : "-right-6 md:-right-10 rotate-[28deg]",
          )}
        />

        <div className="relative rounded-[20px] bg-gradient-to-b from-purple/30 to-[#1384CC]/30 p-[2px] shadow-[0_0_40px_rgba(124,58,237,0.12)]">
          <div
            className={cn(
              "flex flex-col gap-10 rounded-[18px] bg-[#0a0a12]/95 p-6 lg:flex-row lg:items-center lg:gap-10 lg:p-8 xl:gap-12 xl:p-10",
              reversed && "lg:flex-row-reverse",
            )}
          >
            <div
              className={cn(
                "flex w-full shrink-0 flex-col items-stretch sm:flex-row sm:items-stretch lg:w-auto",
                reversed && "sm:flex-row-reverse",
              )}
            >
              <div
                className={cn(
                  "group overflow-hidden",
                  imageSide === "left" ? "rounded-[22px] sm:rounded-r-none" : "rounded-[22px] sm:rounded-l-none",
                )}
              >
                <Link
                  href={event.href}
                  tabIndex={event.soldOut ? -1 : undefined}
                  className="block"
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={540}
                    height={340}
                    sizes="(max-width: 1024px) 100vw, 540px"
                    className="aspect-[4/3] h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.15] sm:h-[300px] sm:w-[min(100%,420px)] lg:h-[320px] lg:w-[min(100%,480px)] xl:h-[340px] xl:w-[min(100%,540px)]"
                  />
                </Link>
              </div>
              <EventCountdown startsAt={event.startsAt} imageSide={imageSide} />
            </div>

            <div className="min-w-0 flex-1 lg:pl-2">
              <div className="max-w-[460px]">
                <h3 className="font-display text-[24px] leading-snug text-ivory md:text-[26px]">
                  {event.title}
                </h3>
                <GradientLine className="my-4 ml-0" />
                {event.description.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-7 text-ivory-muted md:text-[15px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-5">
                <p className="flex items-center gap-4 text-base text-ivory-muted">
                  <Calendar size={18} className="shrink-0 text-gold" aria-hidden="true" />
                  {event.displayDate}
                </p>
                <p className="flex items-center gap-4 text-base text-ivory-muted">
                  <Clock size={18} className="shrink-0 text-gold" aria-hidden="true" />
                  {event.time}
                </p>
                <p className="flex items-center gap-4 text-base text-ivory-muted">
                  <IndianRupee size={18} className="shrink-0 text-gold" aria-hidden="true" />
                  {event.priceRange}
                </p>
                <p className="flex items-center gap-4 text-base text-ivory-muted">
                  <MapPin size={18} className="shrink-0 text-gold" aria-hidden="true" />
                  {event.location}
                </p>
              </div>

              <p
                className={cn(
                  "mt-8 text-[12px] font-semibold tracking-[0.1em] uppercase",
                  event.soldOut ? "text-muted" : "text-gold",
                )}
              >
                {event.availability}
              </p>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function EventsSection() {
  const hasEvents = events.length > 0;

  return (
    <section
      id="events"
      className="relative overflow-hidden bg-[#050508] py-24 md:py-32 lg:py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.14),transparent_55%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(19,132,204,0.08),transparent_45%)]"
        aria-hidden="true"
      />

      <EventCircleShape className="pointer-events-none absolute bottom-32 left-0 hidden h-32 w-32 opacity-80 lg:block" />
      <EventRingShape className="pointer-events-none absolute top-[18%] right-[8%] hidden h-28 w-28 animate-[spin_18s_linear_infinite] opacity-60 lg:block" />
      <EventZigzagShape className="pointer-events-none absolute top-[12%] right-[4%] h-20 w-16 animate-[spin_12s_linear_infinite] opacity-60 md:h-24 md:w-20 lg:right-[10%]" />

      <div className="container-site relative">
        <Reveal>
          <div className="relative mx-auto mb-20 max-w-[760px] text-center md:mb-24">
            <p
              className="pointer-events-none absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-[58%] bg-gradient-to-b from-purple/25 via-[#3A53D8]/15 to-transparent bg-clip-text font-display text-[clamp(3.5rem,14vw,9.5rem)] leading-none font-normal tracking-[0.04em] text-transparent uppercase select-none"
              aria-hidden="true"
            >
              Events
            </p>
            <h2 className="relative font-display text-[34px] text-ivory md:text-[42px] lg:text-[48px]">
              Upcoming Events
            </h2>
            <GradientLine className="mx-auto my-5" />
            <p className="relative mx-auto max-w-[500px] text-[15px] leading-7 text-ivory-muted md:text-[18px]">
              Celebrate the rhythm, energy, and passion of the artists you love,
              all in one unforgettable experience.
            </p>
          </div>
        </Reveal>

        {hasEvents ? (
          <>
            <div className="space-y-16 md:space-y-20 lg:space-y-24">
              {events.map((event, index) => (
                <EventCard
                  key={event.slug}
                  event={event}
                  reversed={index % 2 === 1}
                  index={index}
                />
              ))}
            </div>

            <Reveal delay={0.12}>
              <div className="mt-16 text-center md:mt-20">
                <Button href="/reservation">View All</Button>
              </div>
            </Reveal>
          </>
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
