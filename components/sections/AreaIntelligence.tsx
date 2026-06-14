const METRICS = [
  { label: "Walkability", score: 94, note: "Transit & grocery access" },
  { label: "Safety Index", score: 88, note: "Community-verified data" },
  { label: "School Proximity", score: 91, note: "Within 800m of rated schools" },
  { label: "Air Quality", score: 79, note: "Based on 12-month average" },
  { label: "Nightlife & Dining", score: 86, note: "140+ venues nearby" },
];

export default function AreaIntelligence() {
  return (
    <section className="section-white section-pad border-t border-black">
      <div className="container">
        <div className="grid grid-cols-2 gap-24 items-start max-lg:grid-cols-1 max-lg:gap-12">
          {/* Left */}
          <div>
            <p className="caption mb-4 tracking-[0.08em] uppercase">Area Intelligence</p>
            <h2 className="heading-lg mb-6">
              Know your neighborhood before you sign.
            </h2>
            <p className="body-text mb-8 max-w-[440px]">
              BHome maps 140 data signals per neighborhood — from air quality and
              school ratings to noise levels and commute times. Every score is
              community-verified, not advertiser-claimed.
            </p>
            <a href="#" className="btn-ghost">Explore neighborhoods</a>
          </div>

          {/* Right — score bars */}
          <div>
            <div className="caption mb-6 flex justify-between">
              <span>Strijp-S, Eindhoven</span>
              <span className="text-[#bfbfbf]">Overall: 88 / 100</span>
            </div>

            <div className="space-y-6">
              {METRICS.map((m) => (
                <div key={m.label} className="reveal">
                  <div className="flex justify-between mb-2">
                    <span className="body-sm font-[600]">{m.label}</span>
                    <span className="body-sm text-[#bfbfbf]">{m.score}</span>
                  </div>
                  <div className="h-[1px] bg-[#e8e8e8] relative">
                    <div
                      className="h-[1px] bg-black"
                      style={{ width: `${m.score}%` }}
                    />
                  </div>
                  <p className="caption text-[#bfbfbf] mt-1">{m.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#e8e8e8]">
              <p className="caption text-[#bfbfbf]">
                Data updated weekly. Last updated: June 2026.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
