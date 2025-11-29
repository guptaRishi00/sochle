import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "@/lib/utils";

export default function Article({ data }: { data: any }) {
  const imageUrl = getStrapiMedia(data.bg?.url);

  // Format date: "Today" logic or standard date
  const dateObj = new Date(data.date);
  const isToday = new Date().toDateString() === dateObj.toDateString();
  const dateString = isToday
    ? "Today"
    : dateObj.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });

  return (
    <article className="bg-[#FDFBF9] min-h-screen pb-20">
      {/* 1. HERO SECTION (Full Width Image with Overlay) */}
      <div className="relative w-full h-[70vh] min-h-[600px] flex flex-col justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={data.title}
              fill
              className="object-cover brightness-[0.6]" // Darken image for text readability
              priority
            />
          ) : (
            <div className="w-full h-full bg-[#333C88]" />
          )}
        </div>

        {/* Overlay Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-center pb-20">
          {/* Back Button */}
          <Link
            href="/blog"
            className="absolute top-8 md:top-12 left-4 md:left-6 inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Blogs
          </Link>

          <div className="w-full px-20">
            {/* Gold Tag */}
            <span className="inline-block px-4 py-1.5 mb-6 rounded bg-[#A38732] text-white text-sm font-bold uppercase tracking-wider">
              {data.tag}
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:max-w-6xl lg:text-6xl font-bold text-white leading-tight">
              {data.title}
            </h1>
          </div>
        </div>
      </div>

      {/* 2. CONTENT CARD (Overlapping) */}
      <div className="relative z-20 -mt-20 container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-[30px] shadow-sm p-6 md:p-12 lg:p-16 max-w-7xl mx-auto">
          {/* Metadata Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100 pb-8 mb-10">
            {/* Left: Author & Date Info */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-gray-500 font-medium">
              <span className="text-gray-900 font-semibold">By {data.by}</span>
              <span className="hidden md:block w-px h-4 bg-gray-300"></span>

              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                {dateString}
              </div>

              <span className="hidden md:block w-px h-4 bg-gray-300"></span>

              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                {data.length}
              </div>
            </div>

            {/* Right: Actions (Likes, Comments, Share) */}
            <div className="flex items-center gap-6 text-gray-400">
              <button className="flex items-center gap-2 hover:text-[#333C88] transition-colors">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
                <span className="text-sm">245</span>
              </button>

              <button className="flex items-center gap-2 hover:text-[#333C88] transition-colors">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                <span className="text-sm">32</span>
              </button>

              <div className="w-px h-4 bg-gray-200"></div>

              <button className="hover:text-[#333C88] transition-colors">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </button>

              <button className="hover:text-[#333C88] transition-colors">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </button>
            </div>
          </div>

          {/* 3. CONTENT BODY */}
          <div className="prose prose-lg max-w-none text-[#171717] leading-relaxed">
            {data.content
              .split("\n")
              .map((paragraph: string, index: number) => {
                if (paragraph.trim() === "") return <br key={index} />;

                // Simple logic to detect "headers" (lines that are short or numbered)
                // You can refine this based on your actual data format
                const isHeading =
                  paragraph.length < 80 &&
                  (paragraph.match(/^\d+\./) || !paragraph.includes("."));

                if (isHeading) {
                  return (
                    <h3
                      key={index}
                      className="text-xl md:text-2xl font-bold text-[#171717] mt-8 mb-4"
                    >
                      {paragraph}
                    </h3>
                  );
                }

                return (
                  <p key={index} className="mb-4 text-gray-600 text-lg">
                    {paragraph}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
    </article>
  );
}
