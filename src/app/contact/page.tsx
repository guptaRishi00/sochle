import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import FindUs from "@/components/contact/FindUs";
import ContactCTA from "@/components/contact/ContactCTA"; // The specific one

export default function Contact() {
  return (
    <div className="flex flex-col">
      <ContactHero />
      <ContactForm />
      <FindUs />
      {/* This is the specific "Business Hours" CTA */}
      <ContactCTA />
    </div>
  );
}
