import BuildTheFuture from "@/components/homepage/BuildTheFuture";
import ExpertAdvice from "@/components/homepage/ExpertAdvice";
import HeroSection from "@/components/homepage/HeroSection";
import SeeWhat from "@/components/homepage/SeeWhat";
import { getHomepageData } from "@/data/loader";

export default async function Home() {
  const response = await getHomepageData();

  if (!response.data) return null;

  const heroSectionData = response.data.blocks.find(
    (block: any) => block.__component === "homepage.hero-section"
  );

  const buildTheFutureData = response.data.blocks.find(
    (block: any) => block.__component === "homepage.build-the-future"
  );

  const expertAdviceData = response.data.blocks.find(
    (block: any) => block.__component === "homepage.expert-advice"
  );

  const seeWhatData = response.data.blocks.find(
    (block: any) => block.__component === "homepage.see-what"
  );

  return (
    <div className="lg:px-10">
      {heroSectionData && <HeroSection data={heroSectionData} />}
      {buildTheFutureData && <BuildTheFuture data={buildTheFutureData} />}
      {expertAdviceData && <ExpertAdvice data={expertAdviceData} />}
      {seeWhatData && <SeeWhat data={seeWhatData} />}
    </div>
  );
}
