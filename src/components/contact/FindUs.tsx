import Image from "next/image";

export default function FindUs() {
  return (
    <section className="bg-[#FDFBF9] py-16 md:py-24 pt-0">
      <div className="container mx-auto px-4 md:px-6">
        {/* SECTION TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#171717] mb-8 md:mb-12">
          Find Us
        </h2>

        {/* MAP CONTAINER */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-sm border border-gray-100 bg-gray-200 group">
          {/* Option A: Static Map Image 
             Replace '/map-placeholder.jpg' with your actual map image path 
             or the specific image you uploaded.
          */}
          <Image
            src="/map-placeholder.jpg" // Ensure you have a map image in your public folder
            alt="Map location Paris, France"
            fill
            className="object-cover"
          />

          {/* Overlay: Location Marker */}
          {/* This simulates the pin shown in your design */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            {/* Pin Icon */}
            <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#333C88]/20 animate-pulse">
              <div className="w-4 h-4 bg-[#333C88] rounded-full shadow-lg" />
            </div>

            {/* Location Label */}
            <div className="mt-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-gray-100">
              <span className="text-[#333C88] font-bold text-sm">
                Paris, France
              </span>
            </div>
          </div>

          {/* Option B: Interactive Google Map (Commented Out)
             Uncomment this if you want a real map instead of an image.
          */}
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.9185890289!2d2.276995404845927!3d48.85885484835942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
          /> 
          */}
        </div>
      </div>
    </section>
  );
}
