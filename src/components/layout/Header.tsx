"use client";

import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header({ data, lang }: { data: any; lang: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false); // State for Dropdown
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for click outside logic
  const pathname = usePathname();

  if (!data) return null;

  // We ignore 'button' from data as requested
  const { logo, links } = data;
  const logoUrl = logo ? getStrapiMedia(logo.url) : null;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLang = () => setIsLangOpen(!isLangOpen);

  // Close dropdown if clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- LOGIC FOR LANGUAGE PATHS ---
  const getPathForLang = (targetLang: string) => {
    if (!pathname) return `/${targetLang}`;
    const segments = pathname.split("/");
    // segments[0] is empty, segments[1] is the locale
    segments[1] = targetLang;
    return segments.join("/");
  };
  // --------------------------------

  // Globe Icon SVG
  const GlobeIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );

  // Determine current label based on lang prop
  const currentLabel = lang === "fr" ? "Français" : "English";

  return (
    <header className="top-0 left-0 right-0 z-50 backdrop-blur-md sticky">
      <div className="container mx-auto px-4 md:px-16 h-20 lg:py-20 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href={`/${lang}`}
          className="relative w-40 h-12 md:w-48 md:h-16 shrink-0"
        >
          {logoUrl && (
            <Image
              src={logoUrl}
              alt={logo.alternativeText || "Socle RH Logo"}
              width={200}
              height={200}
              className="object-contain object-left"
              priority
            />
          )}
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-10 ml-auto mr-10">
          {links.map((link: any) => {
            const href = link.href ? `/${lang}/${link.href}` : `/${lang}`;
            const isActive = pathname === href;

            return (
              <Link
                key={link.id}
                href={href}
                className={`text-sm font-bold tracking-wide transition-colors duration-200 ${
                  isActive
                    ? "text-[#A38732]"
                    : "text-[#171717] hover:text-[#A38732]"
                }`}
              >
                {link.text}
              </Link>
            );
          })}
        </div>

        {/* RIGHT AREA: LANGUAGE DROPDOWN & MOBILE TOGGLE */}
        <div className="flex items-center gap-4 shrink-0">
          {/* --- NEW DROPDOWN COMPONENT --- */}
          <div className="hidden sm:block relative" ref={dropdownRef}>
            {/* Trigger Button (Matches your image) */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#333C88] text-white hover:bg-[#2a3170] transition-colors shadow-md"
            >
              <GlobeIcon />
              <span className="text-sm font-bold tracking-wide">
                {currentLabel}
              </span>
              {/* Optional Chevron Down */}
            </button>

            {/* Dropdown Menu */}
            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col py-2 z-50">
                <Link
                  href={getPathForLang("en")} // Or "en"
                  onClick={() => setIsLangOpen(false)}
                  className={`px-6 py-3 text-sm font-bold hover:bg-gray-50 flex items-center justify-between ${
                    lang.includes("en") ? "text-[#333C88]" : "text-gray-600"
                  }`}
                >
                  English
                  {lang.includes("en") && (
                    <span className="w-2 h-2 rounded-full bg-[#333C88]" />
                  )}
                </Link>
                <Link
                  href={getPathForLang("fr")}
                  onClick={() => setIsLangOpen(false)}
                  className={`px-6 py-3 text-sm font-bold hover:bg-gray-50 flex items-center justify-between ${
                    lang === "fr" ? "text-[#333C88]" : "text-gray-600"
                  }`}
                >
                  Français
                  {lang === "fr" && (
                    <span className="w-2 h-2 rounded-full bg-[#333C88]" />
                  )}
                </Link>
              </div>
            )}
          </div>
          {/* ----------------------------- */}

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-[#333C88]"
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE NAV DROPDOWN */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute top-full left-0 right-0 shadow-xl py-6 px-6 flex flex-col gap-6 h-screen">
          <nav className="flex flex-col gap-6">
            {links.map((link: any) => {
              const href = link.href ? `/${lang}/${link.href}` : `/${lang}`;
              const isActive = pathname === href;
              return (
                <Link
                  key={link.id}
                  href={href}
                  className={`text-xl font-bold ${
                    isActive ? "text-[#A38732]" : "text-[#171717]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Language Options (Simple List) */}
          <div className="border-t border-gray-100 pt-6">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              Switch Language
            </p>
            <div className="flex gap-4">
              <Link
                href={getPathForLang("en-US")}
                className={`px-4 py-2 rounded-lg text-sm font-bold border ${
                  lang.includes("en")
                    ? "bg-[#333C88] text-white border-[#333C88]"
                    : "border-gray-200 text-gray-600"
                }`}
              >
                English
              </Link>
              <Link
                href={getPathForLang("fr")}
                className={`px-4 py-2 rounded-lg text-sm font-bold border ${
                  lang === "fr"
                    ? "bg-[#333C88] text-white border-[#333C88]"
                    : "border-gray-200 text-gray-600"
                }`}
              >
                Français
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
