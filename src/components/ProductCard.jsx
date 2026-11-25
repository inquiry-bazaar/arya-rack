import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProductCard({ p }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg">
      <Link href={`/${p.slug}`} className="block bg-slate-50">
        <div className="relative aspect-[4/3] p-4">
          <img
            src={p.image}
            alt={p.title}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#183B67] shadow-md">
            <ArrowUpRight size={17} />
          </span>
        </div>
      </Link>
      <div className="p-4">
        <h3 className="min-h-[48px] text-base font-bold text-[#183B67]">{p.title}</h3>
        {p.subtitle && <p className="mt-1 text-xs text-slate-500">{p.subtitle}</p>}
        <Link
          href={`/${p.slug}`}
          className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-orange-600"
        >
          Read More
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </article>
  );
}
