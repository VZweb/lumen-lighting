import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";
import SocialIcons from "./SocialIcons";

const NAV_ITEMS = [
  { path: "/", key: "nav.home" },
  { path: "/about", key: "nav.about" },
  { path: "/catalogues", key: "nav.catalogues" },
  { path: "/contact", key: "nav.contact" },
];

export default function Header() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/images/logo.png"
              alt="Lumen Lighting"
              className="h-10 lg:h-14 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map(({ path, key }) => (
              <Link
                key={path}
                to={path}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  pathname === path
                    ? "text-amber"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {t(key)}
              </Link>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-5">
            <SocialIcons />
            <div className="w-px h-5 bg-white/20" />
            <LanguageToggle />
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden pb-4 border-t border-white/10 mt-2 pt-4">
            <nav className="flex flex-col gap-3">
              {NAV_ITEMS.map(({ path, key }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                    pathname === path
                      ? "text-amber bg-white/5"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {t(key)}
                </Link>
              ))}
            </nav>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10 px-3">
              <SocialIcons />
              <LanguageToggle />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
