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

export const galleryItems = [
  {
    src: images.gallery[0],
    alt: "Mahogany bar counter with warm tungsten lighting and brass fixtures",
  },
  {
    src: images.gallery[1],
    alt: "Moody private dining room with burgundy seating and candlelight",
  },
  {
    src: images.gallery[2],
    alt: "Cocktail station with glassware, citrus, and dark bottle shelves",
  },
  {
    src: images.gallery[3],
    alt: "Dim lounge interior with low sofas and amber wall lights",
  },
  {
    src: images.gallery[4],
    alt: "Bartender before a back-bar of rare spirits and crystal glassware",
  },
] as const;

export type MenuCategory = "starter" | "main" | "desserts" | "drinks";

export const menuTabs: { id: MenuCategory; label: string }[] = [
  { id: "starter", label: "Starter" },
  { id: "main", label: "Main Dinner" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Drinks" },
];

export type MenuItemData = {
  name: string;
  price: string;
  description: string;
  image: string;
};

export const menuItems: Record<MenuCategory, MenuItemData[]> = {
  starter: [
    {
      name: "Smoked Citrus Crostini",
      price: "$25",
      description:
        "Charred citrus, whipped ricotta, basil oil and toasted sourdough.",
      image: images.dishes.crostini,
    },
    {
      name: "Oyster Plateau",
      price: "$38",
      description:
        "A selection of East Coast oysters with champagne mignonette.",
      image: images.dishes.oyster,
    },
    {
      name: "Tuna Tartare",
      price: "$32",
      description:
        "Yellowfin, yuzu, sesame, and crisp shallot on black ceramic.",
      image: images.dishes.tartare,
    },
    {
      name: "Bone Marrow Toast",
      price: "$28",
      description:
        "Roasted marrow, parsley salad, sea salt, and grilled country loaf.",
      image: images.dishes.marrow,
    },
  ],
  main: [
    {
      name: "Wagyu Carpaccio",
      price: "$48",
      description:
        "Paper-thin ribeye, black truffle, aged parmesan, and caper oil.",
      image: images.dishes.wagyu,
    },
    {
      name: "Truffle Risotto",
      price: "$42",
      description:
        "Carnaroli rice, winter truffle, mascarpone, and a slow bone broth.",
      image: images.dishes.risotto,
    },
    {
      name: "Dry-Aged Ribeye",
      price: "$78",
      description:
        "Forty-day aged steak, bone marrow butter, and charred alliums.",
      image: images.dishes.ribeye,
    },
    {
      name: "Seared Scallops",
      price: "$54",
      description:
        "Diver scallops, brown butter, cauliflower velvet, and lemon thyme.",
      image: images.dishes.scallops,
    },
  ],
  desserts: [
    {
      name: "Dark Chocolate Sphere",
      price: "$22",
      description:
        "Valrhona shell, smoked salt caramel, and warm espresso sauce.",
      image: images.dishes.chocolate,
    },
    {
      name: "Vanilla Bean Panna Cotta",
      price: "$18",
      description:
        "Madagascar vanilla, blackcurrant gelée, and candied orange.",
      image: images.dishes.panna,
    },
    {
      name: "Burnt Honey Tart",
      price: "$20",
      description:
        "Shortcrust, burnt honey custard, and crème fraîche.",
      image: images.dishes.tart,
    },
  ],
  drinks: [
    {
      name: "Midnight Old Fashioned",
      price: "$24",
      description:
        "Private-cask bourbon, demerara, orange oil, and smoked cherry.",
      image: images.dishes.oldfashioned,
    },
    {
      name: "Syndicate Negroni",
      price: "$22",
      description:
        "House-infused gin, bitter vermouth, and a single large cube.",
      image: images.dishes.negroni,
    },
    {
      name: "Smoke & Velvet",
      price: "$26",
      description:
        "Mezcal, cacao, chile tincture, and a whisper of cream.",
      image: images.dishes.smoke,
    },
    {
      name: "Golden Hour Martini",
      price: "$24",
      description:
        "Barrel-rested gin, dry vermouth, gold leaf, and lemon essence.",
      image: images.dishes.martini,
    },
  ],
};

export const testimonials = [
  {
    title: "An Evening Worth Remembering",
    quote:
      "The room understands silence as much as it understands a well-made drink. Every pour felt considered, and the service never interrupted the night.",
    name: "Alexander Reid",
    role: "Founder, Reid Creative Agency",
    avatar: images.avatars[0],
    sample: true,
  },
  {
    title: "Quiet Luxury, Perfectly Paced",
    quote:
      "Midnight Syndicate is the rare venue that feels both intimate and ceremonial. The cocktails are composed like tasting courses — precise, warm, unforgettable.",
    name: "Eleanor Vance",
    role: "Art Curator & Collector",
    avatar: images.avatars[1],
    sample: true,
  },
  {
    title: "The Standard We Now Expect",
    quote:
      "We hosted a private gathering after a long week of travel. The team anticipated every preference. It is hospitality with genuine discretion.",
    name: "Marcus Chen",
    role: "CEO, Global Dynamics",
    avatar: images.avatars[2],
    sample: true,
  },
] as const;
