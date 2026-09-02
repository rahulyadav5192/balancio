import type { Metadata } from "next";
import { Allura, Cormorant_Garamond, Montserrat } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { site } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const body = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const script = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Balenciao | Premium Night Club & Restaurant",
    template: "%s | Balenciao",
  },
  description: site.description,
  keywords: [
    "cocktail lounge",
    "private club",
    "nightlife",
    "mixology",
    "reservations",
    "New Delhi",
    "Connaught Place",
  ],
  openGraph: {
    title: "Balenciao | Premium Night Club & Restaurant",
    description: site.description,
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    images: [{ url: "/images/hero-bartender.jpg", width: 1920, height: 1080 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Balenciao | Premium Night Club & Restaurant",
    description: site.description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["BarOrPub", "Restaurant"],
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: `${site.url}/images/hero-bartender.jpg`,
  servesCuisine: ["Cocktails", "Contemporary"],
  priceRange: "$$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "19:00",
      closes: "01:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "19:00",
      closes: "02:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "19:00",
      closes: "01:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${script.variable} bg-background font-sans text-ivory antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
