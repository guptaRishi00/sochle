import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

export default function OurTeam({ data }: { data: any }) {
  const { tag, title, cards } = data;

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* HEADER SECTION */}
        <div className="text-center mb-12 md:mb-16">
          {tag && (
            <span className="block text-[#A38732] font-bold text-lg mb-3 tracking-wide">
              {tag}
            </span>
          )}
          <h2 className="text-3xl md:text-5xl font-bold text-[#171717]">
            {title}
          </h2>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {cards.map((member: any) => {
            const imageUrl = getStrapiMedia(member.image?.url);

            return (
              <div
                key={member.id}
                className="flex flex-col items-center text-center"
              >
                {/* Profile Image - Circular */}
                <div className="relative w-60 h-60 mb-8 rounded-full overflow-hidden bg-gray-200 shadow-sm shrink-0">
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    // Fallback placeholder
                    <div className="w-full h-full bg-[#D9D9D9]" />
                  )}
                </div>

                {/* Member Info */}
                <h3 className="text-2xl font-bold text-[#333C88] mb-1">
                  {member.name}
                </h3>

                <p className="text-[#A38732] font-bold text-sm uppercase tracking-wider mb-3">
                  {member.designation}
                </p>

                <p className="text-[#171717] font-medium leading-relaxed max-w-xs mx-auto">
                  {member.experience}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
