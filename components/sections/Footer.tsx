const LINKS = [
  {
    heading: "About",
    items: [
      { label: "About BHome", href: "#" },
      { label: "Properties", href: "#" },
      { label: "Neighborhoods", href: "#" },
      { label: "Explore Map", href: "#" },
    ],
  },
  {
    heading: "Discover",
    items: [
      { label: "MatchScore™", href: "#" },
      { label: "Housing Guides", href: "#" },
      { label: "Featured Homes", href: "#" },
      { label: "Area Intelligence", href: "#" },
    ],
  },
  {
    heading: "Information",
    items: [
      { label: "Contact", href: "#" },
      { label: "Press", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black px-10 pt-24 pb-12">
      {/* Top grid */}
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-12 pb-12 border-b border-[#222] max-lg:grid-cols-2 max-sm:grid-cols-1">
          {/* Brand */}
          <div>
            <p
              className="text-white font-normal mb-6"
              style={{ fontSize: "clamp(26px, 3vw, 35px)", lineHeight: 1.15, letterSpacing: "-0.7px" }}
            >
              BHome
              <br />
              Smart Living Network
            </p>
            <p className="caption text-[#bfbfbf]">
              The AI-Powered Trust Layer For Rentals.
            </p>
          </div>

          {LINKS.map((col) => (
            <div key={col.heading}>
              <p className="caption font-[600] tracking-[0.08em] uppercase text-white mb-5">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="caption text-[#bfbfbf] transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between pt-8 gap-4 max-sm:flex-col max-sm:items-start">
          <p className="caption text-[#444]">
            © 2026 BHome Smart Living Network. All rights reserved.
          </p>
          <div className="flex gap-3">
            {["IG", "LI", "X", "TK"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-9 h-9 border border-[#333] rounded-full flex items-center justify-center caption text-[#bfbfbf] transition-colors hover:border-white hover:text-white"
                aria-label={s}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
