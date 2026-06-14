"use client";

import { useEffect, useRef } from "react";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-[998] bg-white flex flex-col p-10 transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <div className="flex justify-between items-center mb-12">
        <div className="caption leading-relaxed">
          <span className="block">BHome /</span>
          <span className="block">Smart Living Network</span>
        </div>
        <button className="nav-pill" onClick={onClose} aria-label="Close search">
          Sluiten ✕
        </button>
      </div>
      <form
        className="flex-1 flex flex-col justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={inputRef}
          type="search"
          placeholder="Search properties, areas, or guides..."
          className="w-full border-0 border-b border-black outline-none font-[inherit] text-[clamp(30px,5vw,60px)] font-normal tracking-[-1.38px] py-5 bg-transparent"
          aria-label="Search"
        />
        <p className="caption text-[#bfbfbf] mt-4">Press Enter to search</p>
      </form>
    </div>
  );
}
