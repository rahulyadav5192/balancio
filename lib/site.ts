export const site = {
  name: "Midnight Syndicate",
  tagline: "Curated Luxury For Modern Tastes.",
  heroAccent: "Nightfall",
  description:
    "Discover an elevated nightlife experience with artisanal cocktails, private casks, sophisticated interiors, and exclusive late-night hospitality.",
  url: "https://midnightsyndicate.club",
  phone: "+123 456 789 852",
  phoneHref: "tel:+123456789852",
  email: "reservations@midnightsyndicate.club",
  emailHref: "mailto:reservations@midnightsyndicate.club",
  address: {
    street: "18 Mercer Lane",
    locality: "Lower Manhattan",
    region: "NY",
    postalCode: "10013",
    country: "US",
    display: "18 Mercer Lane, Lower Manhattan, New York",
  },
  hours: [
    {
      label: "Monday to Thursday",
      days: "Monday–Thursday",
      opens: "18:00",
      closes: "23:00",
    },
    {
      label: "Friday to Sunday",
      days: "Friday–Sunday",
      opens: "17:00",
      closes: "00:00",
    },
  ],
  social: {
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    facebook: "https://facebook.com",
    twitter: "https://x.com",
    linkedin: "https://linkedin.com",
  },
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Order", href: "/order" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
] as const;
