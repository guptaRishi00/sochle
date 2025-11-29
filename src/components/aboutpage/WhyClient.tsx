import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

export default function WhyClient({ data }: { data: any }) {
  const { title, cards } = data;

  return (
    <section className="py-16 md:py-24 lg:py-10 lg:px-12 bg-[#FDFBF9]">
      <div className="container mx-auto px-4 md:px-6">
        {/* SECTION TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#171717] text-center mb-12 md:mb-16">
          {title}
        </h2>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card: any) => {
            const iconUrl = getStrapiMedia(card.icon.url);

            return (
              <div
                key={card.id}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start"
              >
                {/* ICON CONTAINER */}
                <div className="w-12 h-12 bg-[#A38732] rounded-xl flex items-center justify-center mb-6 shrink-0">
                  {iconUrl && (
                    <div className="relative w-6 h-6">
                      <Image
                        src={iconUrl}
                        alt={card.title}
                        fill
                        className="object-contain brightness-0 invert" // Forces icon to be white
                      />
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <h3 className="text-xl font-bold text-[#171717] mb-4">
                  {card.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
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
