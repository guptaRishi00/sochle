import Article from "@/components/blog/Article";
import { getBlogBySlug } from "@/data/loader";
import { notFound } from "next/navigation";

// Define params type correctly for Next.js 15/16
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetails({ params }: Props) {
  // Await the params object
  const { slug } = await params;

  // Fetch data
  const response = await getBlogBySlug(slug);

  // If no data found, return 404
  if (!response?.data || response.data.length === 0) {
    notFound();
  }

  // Strapi returns an array for filters, so we take the first item
  const blogPost = response.data[0];

  return <Article data={blogPost} />;
}
