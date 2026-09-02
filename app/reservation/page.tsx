import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ReservationForm } from "@/components/forms/ReservationForm";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reservation",
  description:
    "Request a table at Balenciao. Our concierge team will confirm availability.",
};

export default function ReservationPage() {
  return (
    <>
      <PageHero
        eyebrow="Reservation"
        title="Request Your Evening."
        image={images.hours}
      />
      <section className="bg-background py-24">
        <div className="container-site grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-display text-[40px] text-ivory">
              Tables Are Held, Not Guessed.
            </h2>
            <p className="mt-5 max-w-[420px] text-sm leading-7 text-ivory-muted">
              Submit a request and our concierge team will confirm the table,
              timing, and any private-room notes. This is not an instant
              booking.
            </p>
            <p className="mt-8 text-sm text-gold">{site.phone}</p>
            <p className="mt-2 text-sm text-ivory-muted">{site.email}</p>
          </div>
          <ReservationForm />
        </div>
      </section>
    </>
  );
}
