const REVIEWS = [
  {
    quote:
      "The MatchScore™ nailed it. I moved in expecting a 91 — and it genuinely felt like a 91. Never had that experience with any other platform.",
    name: "Aisha K.",
    detail: "Software engineer · Strijp-S",
    score: 91,
  },
  {
    quote:
      "As a family with two kids, safety scores mattered more than price. BHome let us filter for verified school proximity and real air quality data. We found our home in four days.",
    name: "Marco & Lena V.",
    detail: "Family of 4 · Woensel",
    score: 94,
  },
  {
    quote:
      "I relocate every 3 to 6 months for work. BHome is the only platform that understands short-term executive needs without treating you like a tourist.",
    name: "David M.",
    detail: "Management consultant · Waterfront",
    score: 88,
  },
];

export default function CommunityReviews() {
  return (
    <section className="section-gray section-pad">
      <div className="container">
        <div className="flex items-end justify-between mb-12 gap-8 max-md:flex-col max-md:items-start">
          <div>
            <p className="caption mb-4 tracking-[0.08em] uppercase">Community Reviews</p>
            <h2 className="heading-lg">Trust, verified by renters.</h2>
          </div>
          <a href="#" className="btn-ghost flex-shrink-0">Read all reviews</a>
        </div>

        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1">
          {REVIEWS.map((r) => (
            <div key={r.name} className="bg-white p-8 reveal">
              {/* Score */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center flex-shrink-0">
                  <span className="caption font-[600]">{r.score}</span>
                </div>
                <span className="caption text-[#bfbfbf]">MatchScore™</span>
              </div>

              {/* Quote */}
              <blockquote
                className="font-normal mb-6"
                style={{ fontSize: 18, lineHeight: 1.47, letterSpacing: "-0.07px" }}
              >
                &ldquo;{r.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="border-t border-[#e8e8e8] pt-5">
                <p className="body-sm font-[600]">{r.name}</p>
                <p className="caption text-[#bfbfbf] mt-1">{r.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
