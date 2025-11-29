"use client";

import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

export default function Footer({ data }: { data: any }) {
  if (!data) return null;

  const { title, rights, services, resources, contact, links, social } = data;

  return (
    <footer className="bg-white text-[#171717] pt-16 md:pt-24 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-16">
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 mb-16">
          {/* LEFT SIDE: Title & Subscribe Form */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <h2 className="text-4xl md:text-4xl font-bold leading-tight tracking-tight text-black">
              {title}
            </h2>

            {/* Newsletter Form */}
            <form className="relative w-full max-w-md flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#F5F5F5] text-gray-600 px-6 py-4 rounded-full outline-none focus:ring-2 focus:ring-[#333C88]/20 transition-all text-sm"
              />
              <button
                type="submit"
                className="absolute right-1.5 bg-[#333C88] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#2a3170] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* RIGHT SIDE: Links Columns */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8">
            {/* Column 1: Services */}
            <div>
              <h3 className="text-black font-bold text-sm mb-6 uppercase tracking-wider">
                SERVICES
              </h3>
              <ul className="flex flex-col gap-4">
                {services.map((link: any) => (
                  <li key={link.id}>
                    <Link
                      href={link.href ? `/${link.href}` : "/"}
                      className="text-gray-500 hover:text-[#333C88] transition-colors text-sm font-medium"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Resources */}
            <div>
              <h3 className="text-black font-bold text-sm mb-6 uppercase tracking-wider">
                RESOURCES
              </h3>
              <ul className="flex flex-col gap-4">
                {resources.map((link: any) => (
                  <li key={link.id}>
                    <Link
                      href={link.href ? `/${link.href}` : "/"}
                      className="text-gray-500 hover:text-[#333C88] transition-colors text-sm font-medium"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h3 className="text-black font-bold text-sm mb-6 uppercase tracking-wider">
                CONTACT
              </h3>
              <ul className="flex flex-col gap-5 mb-8">
                {contact.map((item: any) => {
                  const iconUrl = getStrapiMedia(item.image?.url);
                  return (
                    <li key={item.id} className="flex items-start gap-3">
                      {iconUrl && (
                        <div className="relative w-4 h-4 shrink-0 mt-0.5">
                          <Image
                            src={iconUrl}
                            alt="icon"
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                      <span className="text-gray-500 text-sm font-medium leading-tight">
                        {item.text}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* Socials */}
              <div className="flex items-center gap-4">
                <span className="text-black font-bold text-sm">Follow</span>
                <div className="flex gap-3">
                  {social.map((item: any) => {
                    const iconUrl = getStrapiMedia(item.icon?.url);
                    return (
                      <Link
                        key={item.id}
                        href={item.href || "#"}
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#333C88] hover:bg-[#333C88] group transition-all duration-300"
                      >
                        {iconUrl && (
                          <div className="relative w-4 h-4">
                            <Image
                              src={iconUrl}
                              alt="social"
                              fill
                              className="object-contain group-hover:brightness-0 group-hover:invert" // Turns white on hover
                            />
                          </div>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-gray-100 mb-8" />

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-bold text-[#171717]">
          <p>{rights}</p>

          <div className="flex gap-8">
            {links.map((link: any) => (
              <Link
                key={link.id}
                href={link.href ? `/${link.href}` : "/"}
                className="hover:text-[#333C88] transition-colors"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
