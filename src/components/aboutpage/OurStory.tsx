import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

export default function OurStory({ data }: { data: any }) {
  const { tag, title, description, image } = data;
  const imageUrl = image ? getStrapiMedia(image.url) : null;

  return (
    <section className="py-16 md:py-24 lg:py-10 lg:px-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* LEFT SIDE: IMAGE */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-square w-full rounded-[30px] overflow-hidden bg-gray-100 shadow-sm">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={image.alternativeText || "Our Story"}
                  fill
                  className="object-cover"
                />
              ) : (
                // Fallback placeholder matching the design's gray box
                <div className="w-full h-full bg-[#D9D9D9]" />
              )}
            </div>
          </div>

          {/* RIGHT SIDE: CONTENT */}
          <div className="w-full lg:w-1/2">
            {/* Tag */}
            {tag && (
              <span className="block text-[#A38732] font-bold text-xl mb-4 tracking-wide">
                {tag}
              </span>
            )}

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-[#171717] leading-tight mb-6">
              {title}
            </h2>

            {/* Description */}
            <div className="text-gray-600 text-lg leading-relaxed space-y-6">
              {/* Handling newlines from Strapi text area */}
              {description
                .split("\n")
                .map((paragraph: string, index: number) => (
                  <p key={index} className="min-h-[1em]">
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
