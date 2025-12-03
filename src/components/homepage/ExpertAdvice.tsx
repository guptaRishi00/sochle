import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

export default function ExpertAdvice({
  data,
  blogs,
  dict,
}: {
  data: any;
  blogs?: any[];
  dict: any;
}) {
  const { title, card: sideContent } = data;

  const splitIndex = title.indexOf("HR");
  const titlePart1 = splitIndex !== -1 ? title.slice(0, splitIndex) : title;
  const titlePart2 = splitIndex !== -1 ? title.slice(splitIndex) : "";

  const itemsToRender = (blogs || []).slice(0, 2);

  return (
    <section className="bg-[#FDFBF9] py-12 md:py-24 overflow-hidden block">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="mb-10 lg:mb-16 max-w-4xl">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
            <span className="text-[#333C88]">{titlePart1}</span>
            <span className="text-[#A38732]">{titlePart2}</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* LEFT COLUMN: BLOG CARDS */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {itemsToRender.map((blog: any, index: number) => {
              const isDarkCard = index % 2 !== 0;
              const bgColor = isDarkCard ? "bg-[#333C88]" : "bg-white";
              const textColor = isDarkCard ? "text-white" : "text-[#171717]";
              const descColor = isDarkCard ? "text-blue-100" : "text-gray-600";
              const arrowColor = isDarkCard ? "white" : "#333C88";

              const blogTitle = blog.title;
              const blogSnippet =
                blog.content?.substring(0, 120) +
                (blog.content?.length > 120 ? "..." : "");

              return (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.slug}`}
                  className="relative w-full drop-shadow-xl h-full block group transition-transform hover:-translate-y-1"
                >
                  <div
                    className={`relative w-full rounded-2xl h-full ${bgColor} transition-colors 
                    [clip-path:polygon(0%_10%,45%_10%,55%_0%,100%_0%,100%_100%,0%_100%)]`}
                  >
                    <div className="p-6 md:p-8 pt-20 flex flex-col h-full justify-between min-h-[300px]">
                      <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 lg:w-8 lg:h-8 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                          style={{ stroke: arrowColor }}
                        >
                          <path
                            d="M7 17L17 7M17 7H7M17 7V17"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      <div className="mt-auto">
                        <h3
                          className={`text-xl lg:text-3xl font-bold mb-3 lg:mb-4 leading-tight ${textColor}`}
                        >
                          {blogTitle}
                        </h3>
                        <p
                          className={`text-sm lg:text-base leading-relaxed ${descColor}`}
                        >
                          {blogSnippet}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* RIGHT COLUMN: TEXT BLOCK */}
          <div className="w-full lg:w-1/3 flex flex-col items-start lg:items-end text-left lg:text-right pt-4">
            {/* UPDATED: Uses Dictionary for Title */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl text-[#171717] uppercase leading-tight mb-6">
              {dict.part1} <span className="font-bold">{dict.part2}</span>{" "}
              <br />
              <span className="font-extrabold">{dict.part3} </span>
              {dict.part4}
            </h3>

            {sideContent && (
              <p className="text-gray-600 leading-relaxed mb-8 max-w-md w-full lg:text-right">
                {sideContent.description}
              </p>
            )}

            {/* UPDATED: Uses Dictionary for Button Text */}
            <Link
              href="/about"
              className="inline-block px-8 py-3 lg:px-10 lg:py-4 bg-[#333C88] text-white text-xs lg:text-sm font-bold uppercase tracking-wider rounded shadow-md hover:bg-[#2a3170] transition-colors"
            >
              {dict.readMore}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
