export default function ContactCTA() {
  return (
    <section className="py-10 lg:px-12 md:py-10">
      <div className="container mx-auto px-4 md:px-6">
        {/* GRADIENT CARD CONTAINER - Reusing the style from the global CTA for consistency */}
        <div className="relative w-full rounded-[30px] overflow-hidden px-8 py-12 md:p-16 text-white bg-gradient-to-b from-[#333C88] via-[#191092] to-[#003D7A]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            {/* LEFT SIDE: Main Title */}
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold lg:max-w-lg leading-tight">
                Feel free to visit us
              </h2>
            </div>

            {/* RIGHT SIDE: Business Hours */}
            {/* On mobile, it aligns left. On desktop (md+), it aligns right to match design */}
            <div className="w-full md:w-auto flex flex-col items-start md:items-start min-w-[300px]">
              <h3 className="text-xl md:text-2xl font-bold mb-6">
                Business Hours
              </h3>

              {/* Hours List */}
              <div className="space-y-4 text-sm md:text-base w-full">
                {/* Row 1 */}
                <div className="flex justify-between gap-12 border-b border-white/10 pb-2 md:border-none md:pb-0">
                  <span className="font-medium text-white/90">
                    Monday - Friday
                  </span>
                  <span className="font-bold">9:00 AM - 6:00 PM</span>
                </div>
                {/* Row 2 */}
                <div className="flex justify-between gap-12 border-b border-white/10 pb-2 md:border-none md:pb-0">
                  <span className="font-medium text-white/90">Saturday</span>
                  <span className="font-bold">10:00 AM - 2:00 PM</span>
                </div>
                {/* Row 3 */}
                <div className="flex justify-between gap-12">
                  <span className="font-medium text-white/90">Sunday</span>
                  <span className="font-bold text-[#A38732]">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
