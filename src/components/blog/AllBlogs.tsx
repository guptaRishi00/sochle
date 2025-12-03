import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

export default function AllBlogs({ data, dict }: { data: any[]; dict: any }) {
  return (
    <section className="py-12 md:py-16 bg-[#FDFBF9]">
      <div className="container mx-auto px-4 md:px-6">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#171717] mb-3">
              {dict.latestTitle}
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              {dict.latestSubtitle}
            </p>
          </div>

          {/* Filter Button */}
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-[#333C88] text-[#333C88] font-bold text-sm bg-white hover:bg-gray-50 transition-colors w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            {dict.filters}
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* BLOG GRID */}
        {/* Changed gap-8 to gap-4 md:gap-8 for better mobile spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          {data.map((blog) => {
            const imageUrl = getStrapiMedia(blog.bg?.url);
            const dateObj = new Date(blog.date);
            const timeAgo = getTimeAgo(dateObj);

            return (
              /* WRAPPER DIV:
                 - Removed 'p-10' on mobile (it was too wide).
                 - Used 'pt-14' on mobile to reserve space for the floating arrow.
                 - Kept 'md:p-10' for desktop to maintain the original airy look.
              */
              <div
                key={blog.id}
                className="relative group w-full h-full pt-14 pb-4 md:p-10"
              >
                {/* CLIP-PATH CONTAINER */}
                <div
                  className={`relative w-full rounded-2xl h-full bg-white/80 transition-colors shadow-sm
                  [clip-path:polygon(0%_10%,45%_10%,55%_0%,100%_0%,100%_100%,0%_100%)]`}
                >
                  {/* CONTENT CONTAINER 
                      - Increased pt-16 to pt-20 on mobile to safely clear the clip-path cut.
                  */}
                  <div className="p-5 md:p-8 pt-20 md:pt-24 flex flex-col h-full">
                    {/* Top Image Section */}
                    <div className="relative w-full aspect-video mb-6">
                      <div className="relative w-full h-full lg:h-[300px] rounded-2xl overflow-hidden">
                        {imageUrl ? (
                          <Image
                            src={imageUrl}
                            alt={blog.title}
                            width={400}
                            height={300}
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200" />
                        )}
                      </div>

                      {/* Floating Arrow Button 
                          - Adjusted positioning for mobile (-top-12 vs -top-10).
                          - Sized down slightly on mobile (w-12 h-12) vs desktop (w-16 h-16).
                      */}
                      <Link
                        href={`/blog/${blog.slug}`}
                        className="absolute -top-6 -right-2 md:-top-8 md:-right-2 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 z-20 border border-gray-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="#333C88"
                          className="w-5 h-5 md:w-7 md:h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </Link>
                    </div>

                    {/* Meta Data (Tag & Date) */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full border border-[#A38732]/30 text-[#A38732] text-[10px] md:text-xs font-bold uppercase tracking-wider bg-[#A38732]/5">
                        {blog.tag}
                      </span>
                      <div className="flex items-center gap-2 text-gray-400 text-[10px] md:text-xs font-medium">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 h-3 md:w-4 md:h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="3"
                            y="4"
                            width="18"
                            height="18"
                            rx="2"
                            ry="2"
                          />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        {timeAgo}
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="mt-auto">
                      <Link href={`/blog/${blog.slug}`}>
                        <h3 className="text-lg md:text-2xl font-bold text-[#171717] mb-2 md:mb-3 leading-tight group-hover:text-[#333C88] transition-colors">
                          {blog.title}
                        </h3>
                      </Link>

                      <p className="text-gray-500 text-sm md:text-base leading-relaxed line-clamp-3">
                        {blog.content?.substring(0, 120)}...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function getTimeAgo(date: Date) {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const diffInDays = Math.floor(diffInSeconds / 86400);

  if (diffInDays === 0) return "Today";
  if (diffInDays === 1) return "1 day ago";
  if (diffInDays < 30) return `${diffInDays} days ago`;

  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
