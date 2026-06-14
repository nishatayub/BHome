"use client";

import { useState } from "react";

const SUGGESTIONS = [
  "Studio near TU/e Eindhoven",
  "Co-living Amsterdam under €1200",
  "Family home Rotterdam, 3 bedrooms",
  "Short-term executive stay The Hague",
  "Digital nomad space Utrecht with fast wifi",
];

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <section id="search" className="section-white section-pad border-t border-black">
      <div className="container">
        {/* Label */}
        <p className="caption mb-8 tracking-[0.08em] uppercase">
          AI Property Discovery
        </p>

        {/* Large prompt input */}
        <div className="relative">
          <div
            className={`flex items-center border border-black transition-all ${
              focused ? "border-black" : "border-black"
            }`}
            style={{ borderRadius: "500px" }}
          >
            {/* Search icon */}
            <div className="pl-6 pr-3 flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <circle cx="8.5" cy="8.5" r="6" stroke="#000" strokeWidth="1.4" />
                <path d="M13.5 13.5L18 18" stroke="#000" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </div>

            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Describe where and how you want to live..."
              className="flex-1 py-5 bg-transparent outline-none font-[inherit] text-[18px] leading-[1.31] tracking-[-0.07px] placeholder:text-[#bfbfbf]"
              aria-label="Property search"
            />

            <div className="pr-3">
              <button className="btn-filled" type="button">
                Search with AI
              </button>
            </div>
          </div>

          {/* Suggestions */}
          <div className="mt-5 flex flex-wrap gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                className="btn-ghost-sm btn-ghost caption"
                onClick={() => setQuery(s)}
                type="button"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 pt-8 border-t border-[#e8e8e8] grid grid-cols-4 gap-8 max-md:grid-cols-2 max-sm:grid-cols-2">
          {[
            { num: "24,000+", label: "Verified listings" },
            { num: "98%", label: "Match accuracy" },
            { num: "180+", label: "Neighborhoods mapped" },
            { num: "4.9 / 5", label: "Renter satisfaction" },
          ].map(({ num, label }) => (
            <div key={label}>
              <p
                className="font-normal"
                style={{ fontSize: "clamp(28px, 4vw, 46px)", lineHeight: 1, letterSpacing: "-1.38px" }}
              >
                {num}
              </p>
              <p className="caption text-[#bfbfbf] mt-2">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
