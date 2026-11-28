import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { connectDB } from "@/libs/db";
import Blog from "@/models/Blog";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  await connectDB();
  const article = await Blog.findOne({
    slug,
    publishDate: { $lte: new Date() },
  }).select("title metaTitle metaDescription").lean();

  if (!article) return {};
  return {
    title: article.metaTitle || `${article.title} | Arya Insulation`,
    description: article.metaDescription || `${article.title} by Arya Insulation.`,
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  await connectDB();
  const article = await Blog.findOne({
    slug,
    publishDate: { $lte: new Date() },
  }).lean();

  if (!article) notFound();

  return (
    <main className="min-h-screen bg-white">
      <article className="mx-auto max-w-[1100px] px-5 py-12 md:px-10 lg:py-16">
        <Link href="/articles" className="inline-flex items-center gap-2 text-sm font-bold text-[#0B57E3]">
          <ArrowLeft size={17} /> All articles
        </Link>

        <header className="mt-8 max-w-4xl">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
            <CalendarDays size={17} className="text-[#F26A12]" />
            {new Intl.DateTimeFormat("en-IN", { dateStyle: "long" }).format(new Date(article.publishDate))}
          </div>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-[#0A2457] sm:text-5xl">
            {article.title}
          </h1>
          {article.metaDescription && (
            <p className="mt-5 text-lg leading-8 text-slate-600">{article.metaDescription}</p>
          )}
        </header>

        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="mt-9 h-[260px] w-full rounded-2xl object-cover sm:h-[420px]"
          />
        )}

        <div
          className="mt-10 max-w-none text-[16px] leading-8 text-slate-700 [&_a]:text-[#0B57E3] [&_h1]:mt-8 [&_h1]:text-3xl [&_h1]:font-extrabold [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-bold [&_img]:my-6 [&_img]:max-w-full [&_img]:rounded-xl [&_li]:ml-6 [&_li]:list-disc [&_p]:my-5 [&_ul]:my-5"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </main>
  );
}
