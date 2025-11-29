import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

export default function HeroSection({ data }: { data: any }) {
  const { title, description, trusted, button, icons, image } = data;

  const titleParts = title.split("Socle RH");
  const hasHighlight = titleParts.length > 1;
  const heroImageUrl = image ? getStrapiMedia(image.url) : null;

  return (
    <section className="bg-[#FDFBF9] py-16 md:py-24 lg:py-32 overflow-hidden ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* LEFT COLUMN: Text Content */}
          <div className="flex flex-col justify-center max-w-2xl lg:max-w-none mx-auto lg:mx-0 text-center lg:text-left z-10">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-[#333C88] leading-[1.1]">
              {hasHighlight ? (
                <>
                  {titleParts[0]}
                  <span className="text-[#A38732]">Socle RH</span>
                  {titleParts[1]}
                </>
              ) : (
                title
              )}
            </h1>

            {/* Description */}
            <p className="mt-6 text-md leading-relaxed text-[#05131DB2] max-w-lg mx-auto lg:mx-0">
              {description}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {button.map((btn: any, index: number) => {
                const isPrimary = index === 0;
                return (
                  <Link
                    key={btn.id}
                    href={btn.href}
                    className={`px-8 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider text-white shadow-sm transition-transform hover:scale-105 ${
                      isPrimary ? "bg-[#333C88]" : "bg-[#A38732]"
                    }`}
                  >
                    {btn.text}
                  </Link>
                );
              })}
            </div>

            {/* Trusted By Section */}
            <div className="mt-12 lg:mt-16 lg:space-y-0 space-y-2 lg:flex items-center justify-between">
              <p className="text-md font-bold text-gray-900">{trusted}</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-10 items-center transition-all duration-300">
                {icons.map((icon: any) => {
                  const iconUrl = getStrapiMedia(icon.url);
                  return (
                    iconUrl && (
                      <div key={icon.id} className="relative h-5 w-20">
                        <Image
                          src={iconUrl}
                          alt={icon.name}
                          width={200}
                          height={200}
                          className="object-contain object-left"
                        />
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Illustration */}
          <div className="relative lg:h-auto h-[400px] w-full flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[600px]">
              {heroImageUrl ? (
                <Image
                  src={heroImageUrl}
                  alt="HR Strategy Illustration"
                  fill
                  className="object-contain"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                  No Image Found
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
