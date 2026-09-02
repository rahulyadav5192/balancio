import type { Metadata } from "next";
import { GalleryPageGrid } from "@/components/gallery/GalleryPageGrid";
import { GalleryPageHero } from "@/components/layout/GalleryPageHero";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Interiors, cocktails, dining, and live nights at Balenciao — browse the gallery.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryPageHero />
      <GalleryPageGrid />
    </>
  );
}
