import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

export default function OurMission({ data }: { data: any }) {
  const { blueCard, cards } = data;

  return (
    <section className="py-16 md:py-24 lg:py-10 lg:px-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 relative">
          {/* LEFT SIDE: Mission & Values List */}
          {/* We give it a white background and rounded corners to match the 'card' look behind the text */}
          <div className="w-full lg:w-7/12 bg-white rounded-[30px] p-8 md:p-12 lg:pr-32 shadow-sm z-10">
            <div className="flex flex-col gap-12">
              {cards.map((card: any) => {
                const iconUrl = getStrapiMedia(card.icon.url);
                return (
                  <div key={card.id} className="flex gap-6 items-start">
                    {/* Icon */}
                    <div className="shrink-0 relative w-8 h-8 md:w-12 md:h-12">
                      {iconUrl && (
                        <Image
                          src={iconUrl}
                          alt={card.title}
                          fill
                          className="object-contain"
                          // Filter to ensure icon matches the Gold color (#A38732) seen in design
                          style={{
                            filter:
                              "brightness(0) saturate(100%) invert(63%) sepia(23%) saturate(1298%) hue-rotate(2deg) brightness(92%) contrast(85%)",
                          }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#333C88] mb-2">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 font-medium text-base md:text-lg leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE: Blue Stats Card */}
          {/* Positioned to overlap slightly or sit nicely on the right */}
          <div className="w-full lg:w-5/12 lg:-ml-20 z-20">
            <div className="bg-[#333C88] text-white rounded-[30px] p-8 md:p-12 shadow-md relative">
              {/* Top Title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-8 leading-tight">
                {blueCard.lineOne}
              </h3>

              {/* Big Numbers */}
              <div className="flex gap-8 mb-6">
                {/* We split the string "7000+ 120K" to style them individually if needed */}
                {blueCard.lineTwo
                  .split(" ")
                  .map((num: string, index: number) => (
                    <span
                      key={index}
                      className="text-4xl md:text-5xl font-bold text-[#A38732]"
                    >
                      {num}
                    </span>
                  ))}
              </div>

              {/* Description */}
              <p className="text-blue-100 text-sm md:text-base leading-relaxed max-w-sm">
                {blueCard.lineThree}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
