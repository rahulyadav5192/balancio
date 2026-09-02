import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { MenuSection } from "@/components/sections/MenuSection";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Starters, mains, desserts, and signature cocktails from Midnight Syndicate.",
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
    </>
  );
}
