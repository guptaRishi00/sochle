"use client";

import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header({ data }: { data: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  if (!data) return null;

  const { logo, links, button } = data;
  const logoUrl = logo ? getStrapiMedia(logo.url) : null;
  const buttonIconUrl = button?.icon ? getStrapiMedia(button.icon.url) : null;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 md:p-20 h-24 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="relative w-40 h-12 md:w-48 md:h-16 shrink-0">
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
        <div className="hidden lg:flex items-center gap-18 ml-auto mr-18">
          {links.map((link: any) => {
            // Handle "Home" having href: null in Strapi
            const href = link.href ? `/${link.href}` : "/";
            const isActive = pathname === href;

            return (
              <Link
                key={link.id}
                href={href}
                className={`text-sm font-bold tracking-wide transition-colors duration-200 ${
                  isActive
                    ? "text-[#A38732]" // Gold for active link
                    : "text-[#171717] hover:text-[#A38732]" // Dark for others
                }`}
              >
                {link.text}
              </Link>
            );
          })}
        </div>

        {/* RIGHT AREA: BUTTON & MOBILE TOGGLE */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Language Button - Solid Blue as per design */}
          {button && (
            <button className="hidden sm:flex items-center gap-2 px-3 py-2.5 rounded-full bg-[#333C88] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#2a3170] transition-colors">
              {buttonIconUrl && (
                <div className="relative w-4 h-4">
                  <Image
                    src={buttonIconUrl}
                    alt="globe icon"
                    fill
                    className="object-contain brightness-0 invert" // Forces icon to be white
                  />
                </div>
              )}
              {button.text}
            </button>
          )}

          {/* Mobile Menu Button (Hamburger) */}
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
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE NAV DROPDOWN */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute top-full left-0 right-0 shadow-xl py-6 px-6 flex flex-col gap-6">
          <nav className="flex flex-col gap-4">
            {links.map((link: any) => {
              const href = link.href ? `/${link.href}` : "/";
              const isActive = pathname === href;
              return (
                <Link
                  key={link.id}
                  href={href}
                  className={`text-lg font-bold ${
                    isActive ? "text-[#A38732]" : "text-[#171717]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </Link>
              );
            })}
          </nav>
          {/* Mobile Language Button */}
          {button && (
            <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#333C88] text-white text-sm font-bold uppercase tracking-wider w-full">
              {buttonIconUrl && (
                <div className="relative w-4 h-4">
                  <Image
                    src={buttonIconUrl}
                    alt="icon"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
              )}
              {button.text}
            </button>
          )}
        </div>
      )}
    </header>
  );
}
