import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { PageHero } from "@/components/layout/PageHero";
import { images } from "@/lib/images";
import { refundPolicy } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "Cancellation windows, deposits, and refund rules for Balenciao reservations and payments.",
};

export default function RefundsPage() {
  return (
    <>
      <PageHero
        eyebrow={refundPolicy.eyebrow}
        title={refundPolicy.title}
        image={images.contact}
      />
      <LegalDocument document={refundPolicy} />
    </>
  );
}
