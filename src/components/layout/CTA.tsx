"use client";

import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function CTA({ data }: { data: any }) {
  const pathname = usePathname();

  // HIDE this component if we are on the contact page
  if (!data || pathname === "/contact") return null;

  const { title, description, button } = data;
  const iconUrl = button?.icon ? getStrapiMedia(button.icon.url) : null;

  return (
    <section className="py-10 lg:px-12 md:py-10">
      <div className="container mx-auto px-4 md:px-6">
        {/* GRADIENT CARD CONTAINER */}
        <div className="relative w-full rounded-[30px] overflow-hidden px-6 py-16 md:py-20 text-center bg-gradient-to-b from-[#333C88] via-[#191092] to-[#003D7A]">
          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {title}
            </h2>

            {/* Description */}
            <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-2xl mb-10">
              {description}
            </p>

            {/* Button */}
            {button && (
              <Link
                href={button.href || "/contact"}
                className="inline-flex items-center gap-3 bg-white text-[#333C88] px-8 py-3.5 rounded-xl font-bold text-sm transition-transform hover:scale-105 shadow-md"
              >
                {button.text}
                {iconUrl && (
                  <span className="relative w-4 h-4">
                    <Image
                      src={iconUrl}
                      alt="arrow icon"
                      fill
                      className="object-contain"
                    />
                  </span>
                )}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
