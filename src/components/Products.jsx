"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { raw } from "@/Data/product-source.mjs";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Categories automatically generated from product data
const categories = [
  "All Products",
  ...new Set(raw.map((product) => product.category)),
];

// Products automatically generated from raw data
const products = raw.map((product, index) => ({
  id: index + 1,
  name: product.title,
  category: product.category,
  image: product.image,
  slug: product.page,
  description: product.desc,
}));

const ITEMS_PER_PAGE = 4;

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [currentPage, setCurrentPage] = useState(0);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All Products") return products;

    return products.filter(
      (product) => product.category === activeCategory
    );
  }, [activeCategory]);

  const totalPages = Math.ceil(
    filteredProducts.length / ITEMS_PER_PAGE
  );

  const visibleProducts = filteredProducts.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(0);
  };

  return (
    <section className="overflow-hidden bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="mb-7 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#D98A4A]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Explore Our Collection
            </span>
            <span className="h-[2px] w-8 bg-[#D98A4A]" />
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-[#183B67] sm:text-4xl lg:text-5xl">
            Products Designed for
            <span className="text-[#2252A3]"> Every Space.</span>
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="mb-7 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex min-w-max items-center justify-center gap-2.5 px-1">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`rounded-full border px-5 py-2.5 text-xs font-medium transition-all duration-300 sm:text-sm ${
                    isActive
                      ? "border-[#183B67] bg-[#183B67] text-white shadow-md shadow-[#183B67]/15"
                      : "border-slate-200 bg-white text-slate-600 hover:border-[#183B67] hover:bg-[#183B67]/5 hover:text-[#183B67]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        <div
          key={activeCategory + currentPage}
          className="grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2 lg:grid-cols-4"
        >
          {visibleProducts.map((product, index) => (
            <article
              key={product.id}
              className="group animate-[fadeIn_0.45s_ease_both] transition-transform duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 80}ms` }}
            >

              {/* Product Image */}
              <Link
                href={`/products/${product.slug}`}
                className="relative block overflow-hidden rounded-xl bg-[#F3F5F7]"
              >
            <div className="relative aspect-square w-full overflow-hidden">
<img
  src={product.image}
  alt={product.name}
  className="h-full w-full object-contain p-3 transition-transform duration-700 ease-out group-hover:scale-105"
/>
                  <span className="absolute left-3 top-3 rounded-full border border-white/80 bg-white/90 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-[#183B67] backdrop-blur-sm">
                    {product.category}
                  </span>

                  <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#183B67] shadow-md transition-all duration-300 group-hover:bg-[#183B67] group-hover:text-white group-hover:rotate-45">
                    <ArrowUpRight size={17} />
                  </span>

                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#D98A4A] transition-all duration-500 group-hover:w-full" />

                </div>
              </Link>

              {/* Product Details */}
              <div className="pt-3">
                <h3 className="text-base font-semibold text-[#183B67] transition-colors duration-300 group-hover:text-[#42658F] sm:text-lg">
                  {product.name}
                </h3>

                <Link
                  href={`/products/${product.slug}`}
                  className="mt-2.5 inline-flex items-center gap-2 border-b border-[#183B67]/30 pb-1 text-xs font-semibold text-[#183B67] transition-all duration-300 hover:border-[#D98A4A] hover:text-[#D98A4A]"
                >
                  Read More
                  <ArrowUpRight size={14} />
                </Link>
              </div>

            </article>
          ))}
        </div>

        {/* Empty State */}
        {visibleProducts.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-base font-medium text-[#183B67]">
              No products available in this category.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-9 flex items-center justify-center gap-4">

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.max(0, prev - 1))
              }
              disabled={currentPage === 0}
              className="flex h-10 items-center gap-2 rounded-full border border-slate-200 px-5 text-xs font-medium text-[#183B67] transition-all hover:border-[#183B67] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft size={15} />
              Previous
            </button>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  aria-label={`Go to page ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentPage === index
                      ? "w-9 bg-[#183B67]"
                      : "w-4 bg-slate-200 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(totalPages - 1, prev + 1)
                )
              }
              disabled={currentPage === totalPages - 1}
              className="flex h-10 items-center gap-2 rounded-full border border-slate-200 px-5 text-xs font-medium text-[#183B67] transition-all hover:border-[#183B67] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
              <ChevronRight size={15} />
            </button>

          </div>
        )}

      </div>
    </section>
  );
}
