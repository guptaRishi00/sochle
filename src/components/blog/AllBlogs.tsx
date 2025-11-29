import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

export default function AllBlogs({ data }: { data: any[] }) {
  return (
    <section className="py-12 md:py-16 bg-[#FDFBF9]">
      <div className="container mx-auto px-4 md:px-6">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#171717] mb-3">
              Latest Blogs
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              Fresh posts based on your topic and search filters.
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
            Filters
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.map((blog) => {
            const imageUrl = getStrapiMedia(blog.bg?.url);

            // Calculate relative time (e.g., "2 days ago")
            const dateObj = new Date(blog.date);
            const timeAgo = getTimeAgo(dateObj);

            return (
              <div
                key={blog.id}
                // Mobile: white bg, rounded corners, shadow.
                // Desktop (md+): transparent bg (letting SVG show), no border radius (SVG handles it), no shadow.
                className="relative group w-full h-full bg-white md:bg-transparent rounded-2xl md:rounded-none shadow-sm md:shadow-none overflow-hidden md:overflow-visible"
              >
                {/* Card Background using Bg.svg - HIDDEN ON MOBILE */}
                <div className="absolute inset-0 w-full h-full z-0 hidden md:block">
                  <Image
                    src="/Bg.svg"
                    alt="Card Background"
                    fill
                    className="w-full h-full object-fill"
                  />
                </div>

                {/* Card Content Wrapper */}
                <div className="relative z-10 p-6 md:py-30 md:px-20 flex flex-col h-full">
                  {/* Top Image Section */}
                  <div className="relative w-full aspect-video mb-6">
                    <div className="relative w-full h-full lg:h-[300px] lg:translate-y-5 rounded-2xl overflow-hidden">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={blog.title}
                          width={200}
                          height={200}
                          className="object-cover transition-transform duration-500 group-hover:scale-105 lg:w-full lg:h-full"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200" />
                      )}
                    </div>

                    {/* Floating Arrow Button (Top Right) */}
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="absolute -top-4 -right-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 z-20"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="#333C88"
                        className="w-6 h-6"
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
                    <span className="px-3 py-1 rounded-full border border-[#A38732]/30 text-[#A38732] text-xs font-bold uppercase tracking-wider bg-[#A38732]/5">
                      {blog.tag}
                    </span>
                    <div className="flex items-center gap-2 text-gray-400 text-xs font-medium">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
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
                      <h3 className="text-xl md:text-xl font-bold text-[#171717] mb-3 leading-tight group-hover:text-[#333C88] transition-colors">
                        {blog.title}
                      </h3>
                    </Link>

                    {/* Truncated Description */}
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed line-clamp-3">
                      {blog.content?.substring(0, 120)}...
                    </p>
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

// Helper function to format date like "2 days ago"
function getTimeAgo(date: Date) {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const diffInDays = Math.floor(diffInSeconds / 86400);

  if (diffInDays === 0) return "Today";
  if (diffInDays === 1) return "1 day ago";
  if (diffInDays < 30) return `${diffInDays} days ago`;

  // Fallback to standard date if older
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
