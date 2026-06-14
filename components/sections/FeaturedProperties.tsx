import Image from "next/image";
import type React from "react";

const PROPERTIES = [
  {
    image: "/images/p2.jpg",
    category: "Premium",
    title: "Skyline Residences",
    subtitle: "Premium apartment · Downtown",
    excerpt:
      "High-spec finishes, concierge service, and panoramic city views. Ideal for professionals seeking an elevated urban lifestyle with flexible lease options.",
  },
  {
    image: "/images/p1.jpg",
    category: "Co-Living",
    title: "The Green Collective",
    subtitle: "Co-living community · Strijp-S",
    excerpt:
      "A curated community of creatives and builders. Shared workshops, communal dining, and a network of 80+ residents from 30 countries.",
  },
  {
    image: "/images/p5.jpg",
    category: "Student",
    title: "MetroNest Living",
    subtitle: "Student accommodation · University Quarter",
    excerpt:
      "Purpose-built student rooms minutes from campus. 24/7 concierge, on-site gym, and high-speed fiber throughout. From €550/month.",
  },
  {
    image: "/images/p4.jpg",
    category: "Executive",
    title: "Riverside Suites",
    subtitle: "Short-term executive stays · Waterfront",
    excerpt:
      "Fully furnished suites with hotel-grade amenities for professionals on extended assignment. Weekly and monthly rates available.",
  },
  {
    image: "/images/p7.jpg",
    category: "Nomad",
    title: "The Node",
    subtitle: "Digital nomad space · Creative District",
    excerpt:
      "Work-ready rooms with 1Gbps fiber, standing desks, and access to shared podcast studios and event spaces.",
  },
  {
    image: "/images/p3.jpg",
    category: "Family",
    title: "Havenpark Homes",
    subtitle: "Family homes · Residential Woensel",
    excerpt:
      "Spacious family residences in tree-lined streets. Rated A+ for school access, air quality, and walkable amenities.",
  },
];

const clampStyle: React.CSSProperties = {
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};

export default function FeaturedProperties() {
  return (
    <section className="section-gray section-pad" id="properties">
      <div className="container">
        <div className="flex items-end justify-between mb-12 gap-8 max-md:flex-col max-md:items-start">
          <h2 className="heading-lg">Featured Properties</h2>
          <a href="#" className="btn-ghost flex-shrink-0">All properties</a>
        </div>

        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {PROPERTIES.map((p) => (
            <article key={p.title} className="editorial-card reveal">
              <div className="relative aspect-[4/3] bg-[#e8e8e8] overflow-hidden">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <span className="tag-red block mb-2">{p.category}</span>
                <h3
                  className="font-[600] mb-3"
                  style={{ fontSize: 19, lineHeight: 1.2, letterSpacing: "-0.39px" }}
                >
                  {p.title}
                </h3>
                <p className="caption text-[#bfbfbf] mb-3">{p.subtitle}</p>
                <p className="body-sm" style={clampStyle}>{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href="#" className="btn-ghost">View all properties</a>
        </div>
      </div>
    </section>
  );
}
