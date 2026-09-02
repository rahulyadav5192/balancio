import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FaqSection } from "@/components/sections/FaqSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Starters, mains, desserts, and signature cocktails from Balenciao. Prices in INR.",
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="The Menu"
        title="Composed For The Night."
        image={images.menu}
      />
      <MenuSection />
      <FaqSection />
    </>
  );
}
