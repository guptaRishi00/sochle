import BuildTheFuture from "@/components/homepage/BuildTheFuture";
import ExpertAdvice from "@/components/homepage/ExpertAdvice";
import HeroSection from "@/components/homepage/HeroSection";
import SeeWhat from "@/components/homepage/SeeWhat";
import { getHomepageData, getBlogData } from "@/data/loader";
import { getDictionary } from "@/app/dictionaries"; // 1. Import getDictionary

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  // 2. Fetch Dictionary
  const dict = await getDictionary(lang);

  const response = await getHomepageData(lang);
  const blogResponse = await getBlogData(lang);
  const allBlogs = blogResponse?.data || [];

  const recentBlogs = allBlogs
    .sort(
      (a: any, b: any) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    .slice(0, 2);

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

      {/* 3. Pass the dictionary prop */}
      {expertAdviceData && (
        <ExpertAdvice
          data={expertAdviceData}
          blogs={recentBlogs}
          dict={dict.homepage.expertAdvice}
        />
      )}

      {seeWhatData && <SeeWhat data={seeWhatData} />}
    </div>
  );
}
