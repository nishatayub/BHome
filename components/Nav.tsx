"use client";

import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import SearchOverlay from "./SearchOverlay";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const openMenu = () => { setMenuOpen(true); document.body.style.overflow = "hidden"; };
  const closeMenu = () => { setMenuOpen(false); document.body.style.overflow = ""; };
  const openSearch = () => { setSearchOpen(true); document.body.style.overflow = "hidden"; };
  const closeSearch = () => { setSearchOpen(false); document.body.style.overflow = ""; };

  return (
    <>
      <MenuOverlay isOpen={menuOpen} onClose={closeMenu} />
      <SearchOverlay isOpen={searchOpen} onClose={closeSearch} />

      <header className="relative z-50 bg-white">
        <nav
          className="flex items-start justify-between px-10 py-[21px]"
          aria-label="Site navigation"
        >
          {/* Logo */}
          <a
            href="#"
            className="caption leading-[1.4] size-3"
            aria-label="BHome Smart Living Network"
          >
            <span className="block">BHome </span>
          </a>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Language */}
            <button className="nav-pill" aria-label="Select language">
              EN ▾
            </button>

            {/* Search */}
            <button
              className="nav-circle"
              onClick={openSearch}
              aria-label="Open search"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <circle cx="7.5" cy="7.5" r="5.5" stroke="#000" strokeWidth="1.2" />
                <path d="M11.5 11.5L16 16" stroke="#000" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </button>

            {/* Menu */}
            <button
              className="nav-pill"
              onClick={openMenu}
              aria-label="Open menu"
            >
              Menu ≡
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
