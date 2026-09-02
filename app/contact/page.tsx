import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Speak with the Midnight Syndicate concierge team about reservations, private events, and arrival details.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="The Concierge Desk."
        image={images.contact}
      />
      <section className="bg-background py-24">
        <div className="container-site grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-[40px] text-ivory">Write To Us</h2>
            <p className="mt-5 max-w-[460px] text-sm leading-7 text-ivory-muted">
              Share the nature of your evening and we will respond with seating
              guidance, dress notes, and any private-room availability.
            </p>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
          <aside className="border border-white/10 bg-panel p-8 md:p-12">
            <p className="text-[11px] tracking-[0.16em] text-purple-bright uppercase">Visit</p>
            <p className="mt-4 font-display text-[32px] text-ivory">{site.address.display}</p>
            <div className="mt-8 space-y-4 text-sm text-ivory-muted">
              <p>
                <a href={site.phoneHref} className="hover:text-gold">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={site.emailHref} className="hover:text-gold">
                  {site.email}
                </a>
              </p>
              {site.hours.map((block) => (
                <p key={block.label}>
                  {block.label}: {block.opens} – {block.closes}
                </p>
              ))}
              <p>Dress: dark, considered, no sportswear after 19:00.</p>
              <p>Valet is available on Mercer Lane from opening until close.</p>
            </div>
            <div className="mt-10 aspect-[4/3] overflow-hidden border border-white/10">
              <iframe
                title="Map of Midnight Syndicate"
                className="h-full w-full grayscale invert"
                loading="lazy"
                src="https://maps.google.com/maps?q=18%20Mercer%20Street%20New%20York&t=&z=15&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
