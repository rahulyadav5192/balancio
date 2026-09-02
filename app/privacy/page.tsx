import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { PageHero } from "@/components/layout/PageHero";
import { images } from "@/lib/images";
import { privacyPolicy } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Balenciao collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow={privacyPolicy.eyebrow}
        title={privacyPolicy.title}
        image={images.contact}
      />
      <LegalDocument document={privacyPolicy} />
    </>
  );
}
