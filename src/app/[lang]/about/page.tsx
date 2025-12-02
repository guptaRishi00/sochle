import AboutHero from "@/components/aboutpage/AboutHero";
import OurMission from "@/components/aboutpage/OurMission";
import OurStory from "@/components/aboutpage/OurStory";
import OurTeam from "@/components/aboutpage/OurTeam";
import WhyClient from "@/components/aboutpage/WhyClient";
import { getPageData } from "@/data/loader";

// 1. Add the params prop with the correct type
export default async function About({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  // 2. Await the params to get the language (Required in Next.js 15)
  const { lang } = await params;

  // 3. Pass 'lang' to getPageData so it fetches the correct locale
  const response = await getPageData("about", lang);

  // Check if data exists and extract the first item from the array
  if (!response?.data || response.data.length === 0) return null;
  const pageData = response.data[0];
  const { blocks } = pageData;

  // 1. Hero Section
  const heroSectionData = blocks.find(
    (block: any) => block.__component === "aboutpage.hero-section"
  );

  // ... (Rest of your component logic remains the same)

  const ourStoryData = blocks.find(
    (block: any) => block.__component === "aboutpage.our-story"
  );

  const ourMissionData = blocks.find(
    (block: any) => block.__component === "aboutpage.our-mission"
  );

  const ourTeamData = blocks.find(
    (block: any) => block.__component === "aboutpage.our-team"
  );

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
