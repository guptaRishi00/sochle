import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

export default function SeeWhat({ data }: { data: any }) {
  const { title, image, cards } = data;
  const mainImageUrl = image ? getStrapiMedia(image.url) : null;

  // Logic to highlight "Socle RH" in the title
  const highlightText = "Socle RH";
  const titleParts = title.split(highlightText);
  const hasHighlight = titleParts.length > 1;

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* SECTION TITLE */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#333C88] leading-tight max-w-6xl">
            {hasHighlight ? (
              <>
                {titleParts[0]}
                <span className="text-[#A38732]">{highlightText}</span>
                {titleParts[1]}
              </>
            ) : (
              title
            )}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* LEFT SIDE: TESTIMONIAL CARDS */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {cards.map((card: any) => (
              <TestimonialCard key={card.id} card={card} />
            ))}
          </div>

          {/* RIGHT SIDE: ILLUSTRATION */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            {mainImageUrl && (
              <div className="relative w-full max-w-[700px] aspect-square">
                <Image
                  src={mainImageUrl}
                  alt="Client Experiences"
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

function TestimonialCard({ card }: { card: any }) {
  const profileUrl = card.profile ? getStrapiMedia(card.profile.url) : null;
  // Convert starCount string to number, default to 5 if missing
  const rating = parseInt(card.starCount, 10) || 5;

  return (
    <div className="bg-white p-6 md:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 hover:shadow-lg transition-shadow duration-300">
      {/* Header: Avatar, Name, Stars */}
      <div className="flex items-start gap-4 mb-5">
        {/* Avatar */}
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#A38732] flex items-center justify-center shrink-0">
          {profileUrl ? (
            <Image
              src={profileUrl}
              alt={card.name}
              fill
              className="object-cover"
            />
          ) : (
            // Fallback initial if no image
            <span className="text-white font-bold text-xl">
              {card.name.charAt(0)}
            </span>
          )}
        </div>

        {/* Text Details */}
        <div className="flex flex-col pt-0.5">
          <div className="flex items-center gap-3 flex-wrap">
            <h4 className="text-lg font-bold text-[#171717] leading-none">
              {card.name}
            </h4>

            {/* Star Rating */}
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < rating ? "text-[#FCC42C]" : "text-gray-200"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          <p className="text-xs font-semibold text-gray-500 mt-1.5">
            {card.designation}
          </p>
        </div>
      </div>

      {/* Review Content */}
      <div className="relative">
        <p className="text-gray-600 text-[15px] italic leading-relaxed">
          {card.review}
        </p>
      </div>
    </div>
  );
}
