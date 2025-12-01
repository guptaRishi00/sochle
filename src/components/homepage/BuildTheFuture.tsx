import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

export default function BuildTheFuture({ data }: { data: any }) {
  const { title, description, cards } = data;

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-7xl font-medium text-black max-w-6xl leading-tight">
            {title}
          </h2>

          {/* Renders only if description exists in data */}
          {description && (
            <p className="text-gray-600 max-w-md text-base text-left md:text-lg lg:text-left">
              {description}
            </p>
          )}
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card: any) => {
            // FIX: Use optional chaining (?.) to prevent crash if icon is null
            const iconUrl = getStrapiMedia(card.icon?.url);

            return (
              <div
                key={card.id}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col items-start h-full"
              >
                {/* ICON */}
                <div className="mb-6 relative w-12 h-12 flex items-center justify-center rounded-lg bg-[#A38732]/10">
                  {iconUrl && (
                    <div className="relative w-6 h-6">
                      <Image
                        src={iconUrl}
                        alt={card.icon?.name || card.title} // Fallback alt text
                        fill
                        className="object-contain"
                        // Optional: Filter to recolor black SVGs to gold.
                        style={{
                          filter:
                            "brightness(0) saturate(100%) invert(48%) sepia(35%) saturate(928%) hue-rotate(2deg) brightness(96%) contrast(92%)",
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* TEXT */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
