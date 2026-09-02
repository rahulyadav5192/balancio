import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { PageHero } from "@/components/layout/PageHero";
import { images } from "@/lib/images";
import { termsAndConditions } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms governing use of the Balenciao website, reservations, and venue policies.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow={termsAndConditions.eyebrow}
        title={termsAndConditions.title}
        image={images.contact}
      />
      <LegalDocument document={termsAndConditions} />
    </>
  );
}
