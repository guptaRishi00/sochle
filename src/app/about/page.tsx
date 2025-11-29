import AboutHero from "@/components/aboutpage/AboutHero";
import OurMission from "@/components/aboutpage/OurMission";
import OurStory from "@/components/aboutpage/OurStory";
import OurTeam from "@/components/aboutpage/OurTeam";
import WhyClient from "@/components/aboutpage/WhyClient";
import { getPageData } from "@/data/loader";

export default async function About() {
  const response = await getPageData("about");

  // Check if data exists and extract the first item from the array
  if (!response?.data || response.data.length === 0) return null;
  const pageData = response.data[0];
  const { blocks } = pageData;

  // 1. Hero Section
  const heroSectionData = blocks.find(
    (block: any) => block.__component === "aboutpage.hero-section"
  );

  // 2. Our Story Section
  const ourStoryData = blocks.find(
    (block: any) => block.__component === "aboutpage.our-story"
  );

  // 3. Our Mission Section
  const ourMissionData = blocks.find(
    (block: any) => block.__component === "aboutpage.our-mission"
  );

  // 4. Our Team Section
  const ourTeamData = blocks.find(
    (block: any) => block.__component === "aboutpage.our-team"
  );

  // 5. Why Clients Choose Us Section
  const whyClientsData = blocks.find(
    (block: any) => block.__component === "aboutpage.why-clients"
  );

  return (
    <div className="flex flex-col">
      {heroSectionData && <AboutHero data={heroSectionData} />}
      {ourStoryData && <OurStory data={ourStoryData} />}
      {ourMissionData && <OurMission data={ourMissionData} />}
      {ourTeamData && <OurTeam data={ourTeamData} />}
      {whyClientsData && <WhyClient data={whyClientsData} />}
    </div>
  );
}
