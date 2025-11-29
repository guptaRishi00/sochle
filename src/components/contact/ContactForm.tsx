"use client";

import { useState } from "react";

export default function ContactForm() {
  // Simple state to handle form data
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    type: "Company/Business",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log("Form Submitted:", formData);
    alert("Thank you! We will get back to you soon.");
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333C88] mb-3">
            Send Us a Message
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1: Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-bold text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#333C88]/20 focus:border-[#333C88] transition-colors"
                placeholder=" "
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-sm font-bold text-gray-700"
              >
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#333C88]/20 focus:border-[#333C88] transition-colors"
                placeholder=" "
              />
            </div>
          </div>

          {/* Row 2: Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-bold text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#333C88]/20 focus:border-[#333C88] transition-colors"
              placeholder=" "
            />
          </div>

          {/* Row 3: Dropdown (I am a...) */}
          <div className="space-y-2">
            <label
              htmlFor="type"
              className="block text-sm font-bold text-gray-700"
            >
              I am a
            </label>
            <div className="relative">
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-[#333C88]/20 focus:border-[#333C88] transition-colors cursor-pointer"
              >
                <option value="Company/Business">Company/Business</option>
                <option value="Job Seeker/Individual">
                  Job Seeker/Individual
                </option>
                <option value="Partner">Partner</option>
                <option value="Other">Other</option>
              </select>
              {/* Custom Arrow Icon */}
              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
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
              </div>
            </div>
          </div>

          {/* Row 4: Message */}
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-sm font-bold text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#333C88]/20 focus:border-[#333C88] transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#333C88] text-white font-bold py-4 rounded-lg hover:bg-[#2a3170] transition-transform duration-200 hover:scale-[1.01] shadow-md"
          >
            Send Message
          </button>

          {/* Disclaimer */}
          <p className="text-center text-xs text-gray-500 mt-4">
            By submitting this form, you agree to our privacy policy and consent
            to being contacted about your enquiry.
          </p>
        </form>
      </div>
    </section>
  );
}
