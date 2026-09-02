export const site = {
  name: "Balenciao",
  legalName: "Balenciao Night Club & Restaurant",
  tagline: "Curated Nights. Unforgettable Moments.",
  heroAccent: "Balenciao",
  description:
    "Discover an elevated nightlife experience with artisanal cocktails, live performances, sophisticated interiors, and exclusive late-night hospitality in the heart of Connaught Place.",
  url: "https://balenciao.in",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  email: "reservations@balenciao.in",
  emailHref: "mailto:reservations@balenciao.in",
  whatsapp: "https://wa.me/919876543210",
  address: {
    street: "Connaught Place",
    locality: "New Delhi",
    region: "Delhi",
    postalCode: "110001",
    country: "IN",
    display:
      "Balenciao Night Club & Restaurant, Connaught Place, New Delhi, Delhi 110001",
  },
  hours: [
    {
      label: "Monday to Thursday",
      days: "Monday–Thursday",
      opens: "7:00 PM",
      closes: "1:30 AM",
    },
    {
      label: "Friday to Saturday",
      days: "Friday–Saturday",
      opens: "7:00 PM",
      closes: "2:00 AM",
    },
    {
      label: "Sunday",
      days: "Sunday",
      opens: "7:00 PM",
      closes: "1:00 AM",
    },
  ],
  social: {
    instagram: "https://instagram.com/balenciao.delhi",
    facebook: "https://facebook.com/balenciao.delhi",
    youtube: "https://youtube.com/@balenciao",
    tiktok: "https://tiktok.com/@balenciao",
  },
  currency: {
    code: "INR",
    symbol: "₹",
    label: "All menu prices are in Indian Rupees (INR).",
  },
} as const;

export const faqItems = [
  {
    question: "What is the minimum entry age?",
    answer:
      "Guests must be 21 or older with a valid government-issued photo ID. We cannot admit guests under 21, including with a guardian present.",
  },
  {
    question: "What is the dress code?",
    answer:
      "Dark, considered evening wear. Smart casual is welcome; sportswear, flip-flops, and athletic wear are not permitted after 7 PM.",
  },
  {
    question: "Is parking available?",
    answer:
      "Valet parking is available at P-Block, Connaught Place. Self-parking options are limited in the inner circle, so we recommend arriving a little early on weekends.",
  },
  {
    question: "How do reservations work?",
    answer:
      "Submit a request online or call the concierge desk. Our team confirms table availability, timing, and any private-room notes within a few hours — reservations are held once confirmed, not at the moment you submit the form.",
  },
] as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Order", href: "/order" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Refund & Cancellation", href: "/refunds" },
] as const;
