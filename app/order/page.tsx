import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { menuItems } from "@/lib/data";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Order",
  description:
    "Request table service from the Midnight Syndicate kitchen and bar.",
};

export default function OrderPage() {
  const featured = [
    ...menuItems.drinks.slice(0, 2),
    ...menuItems.starter.slice(0, 2),
  ];

  return (
    <>
      <PageHero
        eyebrow="Table Service"
        title="Order For The Room."
        image={images.menu}
      />
      <section className="bg-background py-24">
        <div className="container-site">
          <p className="max-w-[560px] text-sm leading-7 text-ivory-muted">
            In-room ordering is arranged through our concierge rather than a
            public cart. Select a few preferences, then send a reservation
            request and we will stage the evening accordingly.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {featured.map((item) => (
              <article
                key={item.name}
                className="flex items-center justify-between border border-white/10 bg-panel px-6 py-6"
              >
                <div>
                  <h2 className="font-display text-[24px] text-ivory">{item.name}</h2>
                  <p className="mt-2 text-sm text-muted">{item.description}</p>
                </div>
                <span className="ml-6 text-sm text-gold">{item.price}</span>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <Button href="/reservation">Request Table Service</Button>
          </div>
        </div>
      </section>
    </>
  );
}
