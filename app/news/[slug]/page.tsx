import { notFound } from "next/navigation";
import { news } from "../../data/data";
import NewsDetail from "./NewsDetail";

export async function generateStaticParams() {
  return news.map((item) => ({ slug: item.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = news.find((n) => n.id === slug);
  if (!item) return { title: "Article Not Found" };
  return {
    title: item.title,
    description: item.blurb,
    openGraph: {
      title: item.title,
      description: item.blurb,
      images: [item.image],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = news.findIndex((n) => n.id === slug);

  if (idx < 0) notFound();

  const article = news[idx];
  const next = news[(idx + 1) % news.length];

  return <NewsDetail article={article} next={next} />;
}