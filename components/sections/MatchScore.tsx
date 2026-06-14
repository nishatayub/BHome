"use client";

import { useState } from "react";

const FACTORS = [
  { key: "budget", label: "Budget", value: 82 },
  { key: "commute", label: "Commute", value: 91 },
  { key: "lifestyle", label: "Lifestyle", value: 76 },
  { key: "safety", label: "Safety", value: 95 },
  { key: "lease", label: "Lease Duration", value: 88 },
  { key: "travel", label: "Travel Preferences", value: 70 },
];

export default function MatchScore() {
  const [active, setActive] = useState<string | null>(null);
  const overall = Math.round(FACTORS.reduce((a, f) => a + f.value, 0) / FACTORS.length);

  return (
    <section className="section-black section-pad overflow-hidden" id="matchscore">
      <div className="container">
        {/* Display word */}
        <p
          className="text-[#e8e8e8] font-normal select-none mb-12 leading-[0.93] tracking-[-7.5px] overflow-hidden"
          style={{ fontSize: "clamp(60px, 10vw, 150px)" }}
          aria-hidden="true"
        >
          MatchScore™
        </p>

        <div className="grid grid-cols-2 gap-24 items-center max-lg:grid-cols-1 max-lg:gap-12">
          {/* Left — description */}
          <div>
            <span className="tag-red-outline !border-[#ff0000] !text-[#ff0000] mb-6 inline-block">
              AI Compatibility Engine
            </span>
            <h2 className="heading-sm text-white mb-6">
              Find the property that fits you.
              <br />
              Not the property with the most photos.
            </h2>
            <p className="body-text text-[#bfbfbf] mb-8 max-w-[480px]">
              BHome&apos;s AI evaluates every listing against your personal criteria
              and produces a compatibility score that reflects what actually matters
              to your life — not just square footage and price.
            </p>
            <a href="#" className="btn-ghost btn-ghost-inv">
              Try MatchScore™
            </a>
          </div>

          {/* Right — interactive score card */}
          <div className="border border-[#333] p-8 bg-[#0a0a0a]">
            {/* Score ring placeholder */}
            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-[#333]">
              <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center flex-shrink-0">
                <span className="text-white font-normal" style={{ fontSize: 28, lineHeight: 1, letterSpacing: "-1px" }}>
                  {overall}
                </span>
              </div>
              <div>
                <p className="text-white caption tracking-[0.08em] uppercase mb-1">Overall Match</p>
                <p className="caption text-[#555]">Skyline Residences · Downtown</p>
              </div>
            </div>

            {/* Factor bars */}
            <div className="space-y-4">
              {FACTORS.map((f) => (
                <div
                  key={f.key}
                  className="cursor-pointer group"
                  onMouseEnter={() => setActive(f.key)}
                  onMouseLeave={() => setActive(null)}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className={`caption transition-colors ${active === f.key ? "text-white" : "text-[#bfbfbf]"}`}>
                      {f.label}
                    </span>
                    <span className={`caption transition-colors ${active === f.key ? "text-white" : "text-[#555]"}`}>
                      {f.value}
                    </span>
                  </div>
                  <div className="h-[1px] bg-[#333] relative overflow-visible">
                    <div
                      className="h-[1px] bg-white transition-all duration-300"
                      style={{ width: `${active === f.key ? f.value : f.value * 0.9}%` }}
                    />
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white transition-opacity ${active === f.key ? "opacity-100" : "opacity-0"}`}
                      style={{ left: `${f.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#333]">
              <p className="caption text-[#555]">
                Score based on your saved preferences. <span className="text-[#bfbfbf] underline cursor-pointer">Update profile →</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
