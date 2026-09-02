import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { GallerySection } from "@/components/sections/GallerySection";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Interiors, bars, and evening rooms of Midnight Syndicate.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Rooms After Dark."
        image={images.gallery[1]}
      />
      <section className="bg-background pb-24">
        <GallerySection />
      </section>
    </>
  );
}
