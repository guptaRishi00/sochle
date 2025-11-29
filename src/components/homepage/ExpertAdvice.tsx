import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

export default function ExpertAdvice({ data }: { data: any }) {
  const { title, cards, card: sideContent } = data;

  // Logic to split title coloring
  // We split at "HR" to color the second half gold
  const splitIndex = title.indexOf("HR");
  const titlePart1 = splitIndex !== -1 ? title.slice(0, splitIndex) : title;
  const titlePart2 = splitIndex !== -1 ? title.slice(splitIndex) : "";

  return (
    <section className="bg-[#FDFBF9] py-16 md:py-24 overflow-hidden hidden lg:block">
      <div className="container mx-auto ">
        {/* MAIN TITLE */}
        <div className="mb-16 max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
            <span className="text-[#333C88]">{titlePart1}</span>
            <span className="text-[#A38732]">{titlePart2}</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* LEFT SIDE: CARDS GRID */}
          <div className="w-full lg:w-2/3 grid md:grid-cols-2 gap-6">
            {cards.map((item: any, index: number) => {
              const bgUrl = getStrapiMedia(item.bg.url);
              const iconUrl = getStrapiMedia(item.icon.url);

              // Design specific: First card has dark text, Second card has white text
              const isDarkCard = index === 1;
              const textColor = isDarkCard ? "text-white" : "text-[#171717]";
              const descColor = isDarkCard ? "text-blue-100" : "text-gray-600";
              const arrowFilter = isDarkCard
                ? "brightness(0) invert(1)" // White arrow for dark card
                : ""; // Default (usually dark or blue) for light card

              return (
                <div
                  key={item.id}
                  className="relative w-full flex flex-col justify-between lg:p-8 group"
                >
                  {/* Background Shape Image */}
                  {bgUrl && (
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={bgUrl}
                        alt="Background shape"
                        width={200}
                        height={200}
                        className="object-fill w-[600px]"
                      />
                    </div>
                  )}

                  {/* Content (Z-10 to sit on top of background) */}
                  <div className="relative z-10 w-full flex justify-end lg:translate-y-6 lg:-translate-x-8">
                    {iconUrl && (
                      <div className="w-6 h-6 relative">
                        <Image
                          src={iconUrl}
                          alt="Arrow icon"
                          fill
                          className="object-contain"
                          style={{ filter: arrowFilter }}
                        />
                      </div>
                    )}
                  </div>

                  <div className="relative z-10 mt-auto lg:px-14 lg:pt-18">
                    <h3
                      className={`text-xl font-bold mb-3 leading-tight ${textColor}`}
                    >
                      {item.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${descColor}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE: TEXT CONTENT */}
          <div className="w-full lg:w-1/3 flex flex-col items-end pt-4">
            <h3 className="text-2xl md:text-4xl text-[#171717] lg:text-right uppercase leading-tight mb-6">
              {/* Splitting the static side text to bold specific words matching design */}
              HELPING <span className="font-bold">BUSINESSES</span> <br />
              <span className="font-extrabold">THRIVE IN A </span>
              DIGITAL-FIRST WORLD
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8 max-w-md w-full lg:text-right">
              {sideContent.description}
            </p>

            <Link
              href="/about"
              className="px-8 py-3 bg-[#333C88] text-white text-sm font-bold uppercase tracking-wider rounded shadow-md hover:bg-[#2a3170] transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
