import Image from "next/image";
import type React from "react";

const ARTICLES = [
  {
    image: "/images/p6.jpg",
    category: "Analysis",
    title: "How AI Is Changing Rental Discovery Forever",
    excerpt:
      "Machine learning models trained on millions of renter journeys now predict housing compatibility with 98% accuracy. Here is what that means for the next decade of property search.",
  },
  {
    image: "/images/p4.jpg",
    category: "Feature",
    title: "Why Most Renters Still Struggle To Find The Right Property",
    excerpt:
      "Despite hundreds of portals and thousands of listings, most renters make housing decisions based on photos and price alone. BHome commissioned a study with 12,000 renters to understand why.",
  },
  {
    image: "/images/p8.jpg",
    category: "Deep Dive",
    title: "The Rise Of Community-Verified Housing",
    excerpt:
      "Peer verification is replacing landlord-written descriptions as the primary trust signal in property rental. We spoke with 40 community reviewers across Europe to understand how it works.",
  },
  {
    image: "/images/p3.jpg",
    category: "Opinion",
    title: "Building Trust In The Rental Economy",
    excerpt:
      "Trust is not a feature. It is infrastructure. For too long, the rental market has operated on information asymmetry. BHome is building the transparency layer the sector was missing.",
  },
  {
    image: "/images/p2.jpg",
    category: "Guide",
    title: "What Makes A Neighborhood Actually Livable?",
    excerpt:
      "Safety scores, walkability indices, and school ratings tell part of the story. BHome's Area Intelligence combines 140 data points to produce a single, honest neighborhood score.",
  },
  {
    image: "/images/p7.jpg",
    category: "Product",
    title: "Why Filters Alone Can't Solve Property Search",
    excerpt:
      "Filtering by bedrooms and budget is necessary but not sufficient. The properties that feel right when you arrive are the ones that matched your commute, your schedule, and your community.",
  },
];

const clampStyle: React.CSSProperties = {
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};

export default function HousingInsights() {
  return (
    <section className="section-gray section-pad" id="insights">
      <div className="container">
        <div className="flex items-end justify-between mb-12 gap-8 max-md:flex-col max-md:items-start">
          <h2 className="heading-lg">Housing Insights</h2>
          <a href="#" className="btn-ghost flex-shrink-0">All articles</a>
        </div>

        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {ARTICLES.map((a) => (
            <article key={a.title} className="editorial-card reveal">
              <div className="relative aspect-[4/3] bg-white overflow-hidden">
                <Image src={a.image} alt={a.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <span className="tag-red block mb-2">{a.category}</span>
                <h3
                  className="font-[600] mb-3"
                  style={{ fontSize: 19, lineHeight: 1.2, letterSpacing: "-0.39px" }}
                >
                  {a.title}
                </h3>
                <p className="body-sm" style={clampStyle}>{a.excerpt}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href="#" className="btn-ghost">All housing insights</a>
        </div>
      </div>
    </section>
  );
}
