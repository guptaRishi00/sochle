"use client";

import { useState } from "react";

export default function BlogHero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 text-center">
        {/* Gold Tag */}
        <span className="block text-[#A38732] font-bold text-xl mb-4 tracking-wide">
          Blogs
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-[#333C88] mb-6 tracking-tight">
          Insights & Resources
        </h1>

        {/* Description */}
        <p className="text-[#171717] text-lg md:text-xl leading-relaxed  mx-auto mb-10 text-gray-600">
          Expert advice, industry trends, and strategic guides for HR
          professionals and leaders.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-xl mx-auto relative">
          <div className="relative">
            {/* Search Icon */}
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Input Field */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-14 pr-6 py-4 rounded-full border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#333C88]/20 focus:border-[#333C88] shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)]"
              placeholder="Search Blogs"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
