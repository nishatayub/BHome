export type Audience =
  | "Students"
  | "Professionals"
  | "Families"
  | "Travelers";

export type PropertyRecord = {
  id: string;
  title: string;
  slug: string;
  audience: Audience;
  lease: "Monthly" | "Semester" | "Flexible";
  priceInr: number;
  matchScore: number;
  realityScore: number;
  moveInConfidence: number;
  beds: number;
  baths: number;
  areaSqft: number;
  neighborhood: string;
  address: string;
  latitude: number;
  longitude: number;
  image: string;
  summary: string;
  amenities: string[];
  featured?: boolean;
};

export const properties: PropertyRecord[] = [
  {
    id: "aurora-hostel-suites",
    slug: "aurora-hostel-suites",
    title: "Aurora Hostel Suites",
    audience: "Students",
    lease: "Semester",
    priceInr: 11800,
    matchScore: 96,
    realityScore: 93,
    moveInConfidence: 95,
    beds: 1,
    baths: 1,
    areaSqft: 260,
    neighborhood: "Law Gate",
    address: "Law Gate Road, Phagwara, Punjab 144411",
    latitude: 31.2557,
    longitude: 75.7058,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Purpose-built student studios within a short rickshaw ride from LPU, with biometric access and verified Wi-Fi speeds.",
    amenities: ["24/7 security", "Fiber internet", "Laundry", "Study lounge"],
    featured: true,
  },
  {
    id: "north-gate-co-living",
    slug: "north-gate-co-living",
    title: "North Gate Co-Living",
    audience: "Professionals",
    lease: "Monthly",
    priceInr: 16400,
    matchScore: 91,
    realityScore: 89,
    moveInConfidence: 92,
    beds: 1,
    baths: 1,
    areaSqft: 420,
    neighborhood: "Maheru",
    address: "GT Road, Maheru, Punjab 144411",
    latitude: 31.2484,
    longitude: 75.6972,
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Flexible co-living floor with cowork-ready lounges, shuttle pickup points, and community-vetted quiet hours.",
    amenities: ["Cowork lounge", "Parking", "Housekeeping", "Cafe downstairs"],
    featured: true,
  },
  {
    id: "cedar-family-residences",
    slug: "cedar-family-residences",
    title: "Cedar Family Residences",
    audience: "Families",
    lease: "Monthly",
    priceInr: 28500,
    matchScore: 90,
    realityScore: 94,
    moveInConfidence: 93,
    beds: 3,
    baths: 2,
    areaSqft: 1450,
    neighborhood: "Urban Estate",
    address: "Urban Estate Phase II, Phagwara, Punjab 144401",
    latitude: 31.2239,
    longitude: 75.7727,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Three-bedroom homes selected for school access, safer late-evening streets, and family grocery reach within ten minutes.",
    amenities: ["Play area", "Gated entry", "School nearby", "Backup power"],
    featured: true,
  },
  {
    id: "signal-shortstay-lofts",
    slug: "signal-shortstay-lofts",
    title: "Signal Shortstay Lofts",
    audience: "Travelers",
    lease: "Flexible",
    priceInr: 7200,
    matchScore: 88,
    realityScore: 91,
    moveInConfidence: 90,
    beds: 1,
    baths: 1,
    areaSqft: 350,
    neighborhood: "Jalandhar Bypass",
    address: "NH 44 Bypass, Phagwara, Punjab 144401",
    latitude: 31.2319,
    longitude: 75.7668,
    image:
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Short-stay lofts for interview trips, visiting faculty, and relocation scouting with verified late-night arrival support.",
    amenities: ["Self check-in", "Airport cab desk", "Kitchenette", "Daily cleaning"],
  },
  {
    id: "atlas-workstay-studios",
    slug: "atlas-workstay-studios",
    title: "Atlas Workstay Studios",
    audience: "Professionals",
    lease: "Flexible",
    priceInr: 19800,
    matchScore: 93,
    realityScore: 90,
    moveInConfidence: 94,
    beds: 1,
    baths: 1,
    areaSqft: 510,
    neighborhood: "Model Town",
    address: "Model Town, Jalandhar, Punjab 144003",
    latitude: 31.326,
    longitude: 75.5794,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Studios for hybrid workers who need reliable internet, commute clarity, and cleaner furnished stock than classifieds provide.",
    amenities: ["1 Gbps internet", "Desk setup", "Gym access", "Weekly cleaning"],
  },
  {
    id: "olive-courtyard-homes",
    slug: "olive-courtyard-homes",
    title: "Olive Courtyard Homes",
    audience: "Families",
    lease: "Monthly",
    priceInr: 24600,
    matchScore: 87,
    realityScore: 92,
    moveInConfidence: 89,
    beds: 2,
    baths: 2,
    areaSqft: 1180,
    neighborhood: "Green Valley",
    address: "Green Valley, Phagwara, Punjab 144401",
    latitude: 31.2144,
    longitude: 75.7789,
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Lower-density homes with good daylight, quieter lanes, and stronger family trust metrics than nearby inventory.",
    amenities: ["Courtyard", "Water backup", "Two balconies", "Pharmacy nearby"],
  },
];

export const featuredProperties = properties.filter((property) => property.featured);

export const propertyAudiences: Audience[] = [
  "Students",
  "Professionals",
  "Families",
  "Travelers",
];
