import Link from "next/link";
import { ArrowUpRight, CalendarDays, Search } from "lucide-react";
import { connectDB } from "@/libs/db";
import Blog from "@/models/Blog";

export const metadata = {
  title: "Articles | Arya Insulation",
  description: "Read articles and insights about racking, storage and warehouse solutions.",
};

export const dynamic = "force-dynamic";

export default async function ArticlesPage({ searchParams }) {
  const params = await searchParams;
  const search = String(params?.search || "").trim().slice(0, 100);
  const filter = {
    publishDate: { $lte: new Date() },
  };

  if (search) {
    filter.title = { $regex: search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), $options: "i" };
  }

  await connectDB();
  const articles = await Blog.find(filter)
    .select("title slug image publishDate metaDescription")
    .sort({ publishDate: -1, _id: -1 })
    .lean();

  return (
    <main className="min-h-screen bg-[#f4f7fa]">
      <section className="bg-[#0A2457] px-5 py-16 text-white md:px-10 lg:px-[6%] lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <span className="text-xs font-bold tracking-[2px] text-[#ff9b43]">ARYA INSIGHTS</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold 
          tracking-tight sm:text-6xl !text-white">
            Articles
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 !text-white sm:text-base">
            Practical ideas for organising retail spaces, warehouses and industrial storage.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-12 md:px-10 lg:px-[6%] lg:py-16">
        <form className="mb-10 flex h-12 max-w-md items-center gap-3 rounded-full border border-slate-200 bg-white px-5">
          <Search size={18} className="text-slate-400" />
          <input
            type="search"
            name="search"
            defaultValue={search}
            placeholder="Search articles..."
            className="w-full bg-transparent text-sm outline-none"
          />
          <button type="submit" className="text-xs font-bold text-[#0B57E3]">Search</button>
        </form>

        {articles.length ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article key={article._id.toString()} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <Link href={`/articles/${article.slug}`} className="group block">
                  <div className="h-56 overflow-hidden bg-slate-100">
                    {article.image ? (
                      <img
                        src={article.image}
                        alt={article.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="grid h-full place-items-center text-5xl font-black text-slate-200">A</div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                      <CalendarDays size={14} className="text-[#F26A12]" />
                      {new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(new Date(article.publishDate))}
                    </div>
                    <h2 className="mt-4 text-xl font-extrabold leading-snug text-[#0A2457]">
                      {article.title}
                    </h2>
                    {article.metaDescription && (
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                        {article.metaDescription}
                      </p>
                    )}
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0B57E3]">
                      Read article <ArrowUpRight size={16} />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center">
            <h2 className="text-xl font-bold text-[#0A2457]">No articles found</h2>
            <p className="mt-2 text-sm text-slate-500">
              {search ? "Try a different search term." : "New articles will appear here soon."}
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
