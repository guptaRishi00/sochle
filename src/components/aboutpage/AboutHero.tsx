import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

export default function AboutHero({ data }: { data: any }) {
  const { tag, title, description, image } = data;
  const imageUrl = image ? getStrapiMedia(image.url) : null;

  return (
    <section className="py-16 md:py-24 lg:py-10 lg:px-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* LEFT COLUMN: Text Content */}
          <div className="w-full lg:w-1/2">
            {/* Gold Tag */}
            {tag && (
              <span className="block text-[#A38732] font-bold text-xl mb-4 tracking-wide">
                {tag}
              </span>
            )}

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333C88] leading-[1.1] mb-6 ">
              {title}
            </h1>

            {/* Description */}
            <p className="text-[#05131DB2] text-lg leading-relaxed max-w-xl">
              {description}
            </p>
          </div>

          {/* RIGHT COLUMN: Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            {imageUrl && (
              <div className="relative w-full max-w-[600px] aspect-square">
                <Image
                  src={imageUrl}
                  alt={image.alternativeText || "Who we are illustration"}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
