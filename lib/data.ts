import { images } from "@/lib/images";

export const experiences = [
  {
    slug: "tap-room",
    title: "The Brass Tap Room",
    description:
      "A rich mahogany bar, polished brass details, and a hand-selected rotation of exceptional beers and spirits.",
    image: images.tapRoom,
    href: "/experience/tap-room",
    longform:
      "The Brass Tap Room is the house’s quieter pulse: warm timber, low light, and a curated rotation of casks and drafts chosen for character rather than fashion. Take a seat at the mahogany bar and let the evening find its tempo.",
  },
  {
    slug: "mixology",
    title: "Artisanal Mixology",
    description:
      "Precision, performance, and flavor come together in cocktails designed to be remembered.",
    image: images.mixology,
    href: "/experience/mixology",
    longform:
      "Our mixologists treat every pour as a composed performance. Rare botanicals, house cordials, and smoke, citrus, and spice are balanced with the restraint of a tasting menu — never louder than the conversation they accompany.",
  },
  {
    slug: "spirit-bar",
    title: "Signature Spirit Bar",
    description:
      "Explore exceptional bourbon, whiskey, Scotch, and rare small-batch releases.",
    image: images.spiritBar,
    href: "/experience/spirit-bar",
    longform:
      "Behind the Spirit Bar sits a private library of bourbon, rye, Scotch, and small-batch releases reserved for members and guests who know to ask. Pourings are unhurried. The stories are part of the glass.",
  },
] as const;

export const features = [
  {
    title: "Artisanal Mixology",
    description:
      "Cocktails composed with rare botanicals, house infusions, and a respect for classic technique.",
  },
  {
    title: "Private Member Casks",
    description:
      "A discreet library of reserved barrels and limited releases available only after dark.",
  },
  {
    title: "Exclusive Atmosphere",
    description:
      "Low light, considered interiors, and a room designed for conversation rather than spectacle.",
  },
] as const;

export const storyFeatures = [
  {
    title: "Curated Drafts",
    description:
      "A rotating selection of exceptional beers and cellar pours, chosen for depth rather than volume.",
  },
  {
    title: "Private Casks",
    description:
      "Member-reserved barrels and limited releases poured tableside by our spirit stewards.",
  },
] as const;

export type GalleryCategory = "drinks" | "food" | "music";

export type GalleryFilterId = "all" | GalleryCategory;

export const galleryFilters: { id: GalleryFilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "drinks", label: "Cocktails" },
  { id: "food", label: "Dining" },
  { id: "music", label: "Live Nights" },
];

export type GalleryItem = {
  src: string;
  alt: string;
  category: GalleryCategory;
  title: string;
  caption: string;
};

export const galleryItems: GalleryItem[] = [
  {
    src: images.gallery[0],
    alt: "Mahogany bar counter with warm tungsten lighting and brass fixtures",
    category: "drinks",
    title: "The Brass Bar",
    caption: "Mahogany counters and warm tungsten light",
  },
  {
    src: images.gallery[1],
    alt: "Moody private dining room with burgundy seating and candlelight",
    category: "food",
    title: "Private Dining",
    caption: "Burgundy seating and candlelit tables",
  },
  {
    src: images.gallery[2],
    alt: "Cocktail station with glassware, citrus, and dark bottle shelves",
    category: "drinks",
    title: "Cocktail Station",
    caption: "Glassware, citrus, and back-bar shelves",
  },
  {
    src: images.gallery[3],
    alt: "Dim lounge interior with low sofas and amber wall lights",
    category: "music",
    title: "Lounge Evenings",
    caption: "Low sofas and amber wall light",
  },
  {
    src: images.gallery[4],
    alt: "Bartender before a back-bar of rare spirits and crystal glassware",
    category: "drinks",
    title: "Spirit Library",
    caption: "Rare pours and crystal glassware",
  },
  {
    src: images.gallery[0],
    alt: "Live performance area with violet stage lighting",
    category: "music",
    title: "Sufi Night",
    caption: "Live performance under violet wash",
  },
  {
    src: images.gallery[1],
    alt: "Late-night dining table with curated small plates",
    category: "food",
    title: "Late Supper",
    caption: "Small plates served after dark",
  },
];

export type MenuCategory = "starter" | "main" | "desserts" | "drinks";

export const menuTabs: { id: MenuCategory; label: string }[] = [
  { id: "starter", label: "Starter" },
  { id: "main", label: "Main Dinner" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Drinks" },
];

export type MenuItemData = {
  name: string;
  price: number;
  description: string;
  image: string;
};

export const menuItems: Record<MenuCategory, MenuItemData[]> = {
  starter: [
    {
      name: "Smoked Citrus Crostini",
      price: 2100,
      description:
        "Charred citrus, whipped ricotta, basil oil and toasted sourdough.",
      image: images.dishes.crostini,
    },
    {
      name: "Oyster Plateau",
      price: 3200,
      description:
        "A selection of East Coast oysters with champagne mignonette.",
      image: images.dishes.oyster,
    },
    {
      name: "Tuna Tartare",
      price: 2700,
      description:
        "Yellowfin, yuzu, sesame, and crisp shallot on black ceramic.",
      image: images.dishes.tartare,
    },
    {
      name: "Bone Marrow Toast",
      price: 2350,
      description:
        "Roasted marrow, parsley salad, sea salt, and grilled country loaf.",
      image: images.dishes.marrow,
    },
  ],
  main: [
    {
      name: "Wagyu Carpaccio",
      price: 4000,
      description:
        "Paper-thin ribeye, black truffle, aged parmesan, and caper oil.",
      image: images.dishes.wagyu,
    },
    {
      name: "Truffle Risotto",
      price: 3550,
      description:
        "Carnaroli rice, winter truffle, mascarpone, and a slow bone broth.",
      image: images.dishes.risotto,
    },
    {
      name: "Dry-Aged Ribeye",
      price: 6500,
      description:
        "Forty-day aged steak, bone marrow butter, and charred alliums.",
      image: images.dishes.ribeye,
    },
    {
      name: "Seared Scallops",
      price: 4500,
      description:
        "Diver scallops, brown butter, cauliflower velvet, and lemon thyme.",
      image: images.dishes.scallops,
    },
  ],
  desserts: [
    {
      name: "Dark Chocolate Sphere",
      price: 1850,
      description:
        "Valrhona shell, smoked salt caramel, and warm espresso sauce.",
      image: images.dishes.chocolate,
    },
    {
      name: "Vanilla Bean Panna Cotta",
      price: 1500,
      description:
        "Madagascar vanilla, blackcurrant gelée, and candied orange.",
      image: images.dishes.panna,
    },
    {
      name: "Burnt Honey Tart",
      price: 1700,
      description:
        "Shortcrust, burnt honey custard, and crème fraîche.",
      image: images.dishes.tart,
    },
  ],
  drinks: [
    {
      name: "Balenciao Old Fashioned",
      price: 2000,
      description:
        "Private-cask bourbon, demerara, orange oil, and smoked cherry.",
      image: images.dishes.oldfashioned,
    },
    {
      name: "Balenciao Negroni",
      price: 1850,
      description:
        "House-infused gin, bitter vermouth, and a single large cube.",
      image: images.dishes.negroni,
    },
    {
      name: "Smoke & Velvet",
      price: 2200,
      description:
        "Mezcal, cacao, chile tincture, and a whisper of cream.",
      image: images.dishes.smoke,
    },
    {
      name: "Golden Hour Martini",
      price: 2000,
      description:
        "Barrel-rested gin, dry vermouth, gold leaf, and lemon essence.",
      image: images.dishes.martini,
    },
  ],
};

export const events = [
  {
    slug: "sufi-night",
    title: "Sufi Night Under Violet Light",
    category: "Live Performance",
    day: "SAT",
    date: "23",
    month: "MAY",
    time: "9:00 PM Onwards",
    displayDate: "23 May 2026",
    startsAt: "2026-05-23T21:00:00+05:30",
    description: [
      "An evening of live Sufi vocals, tabla, and harmonium in the main room — intimate, unhurried, and built for long pours.",
      "Reserve a table early; seating is limited and the room fills quickly once doors open.",
    ],
    priceRange: "₹2,500 – ₹6,000",
    location: "Connaught Place, New Delhi",
    availability: "2 Tables Left",
    soldOut: false,
    image: images.gallery[0],
    href: "/reservation",
  },
  {
    slug: "jazz-evening",
    title: "Jazz Evening At The Brass Bar",
    category: "Live Music",
    day: "FRI",
    date: "29",
    month: "MAY",
    time: "8:30 PM Onwards",
    displayDate: "29 May 2026",
    startsAt: "2026-05-29T20:30:00+05:30",
    description: [
      "A quartet-led jazz set beside the mahogany bar — standards, improvisation, and a room tuned for conversation.",
      "Ideal for client dinners, anniversaries, or a mid-week escape that still feels special.",
    ],
    priceRange: "₹2,000 – ₹5,500",
    location: "Connaught Place, New Delhi",
    availability: "5 Tables Left",
    soldOut: false,
    image: images.gallery[1],
    href: "/reservation",
  },
  {
    slug: "dj-rohan-live",
    title: "DJ Rohan Live",
    category: "DJ Night",
    day: "SAT",
    date: "6",
    month: "JUN",
    time: "10:00 PM Onwards",
    displayDate: "6 June 2026",
    startsAt: "2026-06-06T22:00:00+05:30",
    description: [
      "Peak-hour energy with Rohan on the decks — deep house, disco edits, and a dance floor that stays refined.",
      "This date is fully held; join the waitlist through our concierge for cancellation releases.",
    ],
    priceRange: "₹3,500 – ₹8,000",
    location: "Connaught Place, New Delhi",
    availability: "Sold Out",
    soldOut: true,
    image: images.gallery[2],
    href: "/reservation",
  },
];

export const testimonials = [
  {
    title: "An Anniversary We Still Talk About",
    quote:
      "We booked a VIP table for our anniversary and the team remembered every detail from our reservation. The Sufi Night set the perfect tone — intimate, elegant, and entirely ours.",
    name: "Priya & Rahul Malhotra",
    role: "Anniversary Celebration, May 2025",
    avatar: images.avatars[0],
  },
  {
    title: "Where We Bring Clients After Hours",
    quote:
      "Balenciao is the room we choose when the evening needs to impress without feeling forced. The service is discreet, the cocktails are sharp, and the energy stays refined.",
    name: "Vikram Mehta",
    role: "Managing Director, Mehta Capital",
    avatar: images.avatars[1],
  },
  {
    title: "Effortless From Valet To Last Pour",
    quote:
      "From the valet at Connaught Place to the final round, everything feels considered. It is one of the few places in Delhi where the music, lighting, and hospitality actually agree.",
    name: "Ananya Kapoor",
    role: "Regular Guest & Gold Member",
    avatar: images.avatars[2],
  },
] as const;
