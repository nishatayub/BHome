const PILLARS = [
  {
    num: "01",
    title: "Verified Listings",
    body: "Every property on BHome is physically verified by our field team before going live. No unvisited listings, no misleading photos, no false square footage.",
  },
  {
    num: "02",
    title: "Community Trust Scores",
    body: "Past renters score each property across 12 dimensions. Scores update in real time and cannot be removed by landlords or agents.",
  },
  {
    num: "03",
    title: "Transparent Pricing",
    body: "All-in pricing displayed upfront. No administrative fees, no hidden agency charges, no surprises on move-in day.",
  },
  {
    num: "04",
    title: "Secure Booking",
    body: "Deposits are held in escrow until 72 hours after move-in. If the property does not match its listing, you leave with a full refund.",
  },
];

export default function TrustMetrics() {
  return (
    <section className="section-white section-pad border-t border-black">
      <div className="container">
        <div className="grid grid-cols-2 gap-24 items-start max-lg:grid-cols-1 max-lg:gap-12">
          {/* Left — headline */}
          <div>
            <p className="caption mb-4 tracking-[0.08em] uppercase">Trust Infrastructure</p>
            <h2 className="heading mb-6">
              A platform that treats trust as infrastructure.
            </h2>
            <p className="body-text max-w-[440px]">
              BHome is an intelligent accommodation ecosystem built for the modern renter.
              From student rooms and shared apartments to premium residences and short-stay
              rentals — every listing on BHome carries a transparency guarantee.
            </p>
            <div className="mt-10">
              <a href="#" className="btn-ghost">Learn How BHome Works</a>
            </div>
          </div>

          {/* Right — pillars */}
          <div className="border-t border-black">
            {PILLARS.map((p) => (
              <div key={p.num} className="py-7 border-b border-[#e8e8e8] reveal">
                <div className="flex gap-8">
                  <span className="caption text-[#bfbfbf] w-8 flex-shrink-0 mt-1">{p.num}</span>
                  <div>
                    <h3
                      className="font-[600] mb-3"
                      style={{ fontSize: 19, lineHeight: 1.2, letterSpacing: "-0.39px" }}
                    >
                      {p.title}
                    </h3>
                    <p className="body-sm text-[#bfbfbf]">{p.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
