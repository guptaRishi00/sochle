import BlogHero from "@/components/blog/BlogHero";
import AllBlogs from "@/components/blog/AllBlogs";
import { getBlogData } from "@/data/loader";

export default async function Blog() {
  const response = await getBlogData();
  const blogs = response?.data || [];

  return (
    <div className="flex flex-col">
      <BlogHero />
      <AllBlogs data={blogs} />
    </div>
  );
}
