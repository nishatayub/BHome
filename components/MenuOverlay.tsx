"use client";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_ITEMS = [
  "Find a Home",
  "Properties",
  "MatchScore™",
  "Neighborhoods",
  "Housing Guides",
  "About BHome",
];

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  return (
    <div
      className={`fixed inset-0 z-[999] bg-white flex flex-col p-10 transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
      aria-hidden={!isOpen}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-24">
        <div className="caption leading-relaxed">
          <span className="block">BHome /</span>
          <span className="block">Smart Living Network</span>
        </div>
        <button className="nav-pill" onClick={onClose} aria-label="Close menu">
          Sluiten ✕
        </button>
      </div>

      {/* Nav links */}
      <nav className="flex-1 flex flex-col justify-center" aria-label="Main navigation">
        {NAV_ITEMS.map((item) => (
          <a
            key={item}
            href="#"
            className="block border-t border-[#e8e8e8] py-5 text-[clamp(35px,6vw,50px)] font-normal leading-[1.1] tracking-[-1.5px] transition-colors hover:text-[#bfbfbf] last:border-b last:border-[#e8e8e8]"
            onClick={onClose}
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
}
