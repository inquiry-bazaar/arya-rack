
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  "All Products",
  "Supermarket Racks",
  "Display Racks",
  "Gondola Racks",
  "Warehouse Racks",
  "Storage Racks",
  "Accessories",
];

const products = [
  {
    id: 1,
    name: "Supermarket Display Rack",
    category: "Supermarket Racks",
    image: "/images/supermarket-rack.webp",
    slug: "supermarket-display-rack",
    description: "Durable shelving for organised supermarket displays.",
  },
  {
    id: 2,
    name: "Wall Display Rack",
    category: "Display Racks",
    image: "/images/wall-display-rack.webp",
    slug: "wall-display-rack",
    description: "Space-saving display solutions for retail environments.",
  },
  {
    id: 3,
    name: "Double Side Gondola Rack",
    category: "Gondola Racks",
    image: "/images/gondola-rack.webp",
    slug: "double-side-gondola-rack",
    description: "Versatile shelving for high-visibility product placement.",
  },
  {
    id: 4,
    name: "Heavy Duty Warehouse Rack",
    category: "Warehouse Racks",
    image: "/images/warehouse-rack.webp",
    slug: "heavy-duty-warehouse-rack",
    description: "Strong storage systems for industrial applications.",
  },
  {
    id: 5,
    name: "Corner Display Rack",
    category: "Display Racks",
    image: "/images/corner-display-rack.webp",
    slug: "corner-display-rack",
    description: "Make better use of available retail floor space.",
  },
  {
    id: 6,
    name: "Slotted Angle Rack",
    category: "Storage Racks",
    image: "/images/slotted-angle-rack.webp",
    slug: "slotted-angle-rack",
    description: "Flexible storage for shops, offices and warehouses.",
  },
  {
    id: 7,
    name: "Checkout Counter",
    category: "Accessories",
    image: "/images/checkout-counter.webp",
    slug: "checkout-counter",
    description: "Functional checkout solutions for modern retail stores.",
  },
  {
    id: 8,
    name: "Retail Storage Rack",
    category: "Supermarket Racks",
    image: "/images/retail-storage-rack.webp",
    slug: "retail-storage-rack",
    description: "Practical shelving for everyday retail requirements.",
  },
];

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
    <section className="overflow-hidden bg-white py-10 sm:py-10 lg:py-10">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="mb-10 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#D98A4A]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Explore Our Collection
            </span>
            <span className="h-[2px] w-8 bg-[#D98A4A]" />
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-[#183B67] sm:text-4xl lg:text-5xl">
            Products Designed for
            <span className="text-slate-400"> Every Space.</span>
          </h2>

        </div>

        {/* Category Tabs */}
        <div className="mb-9 overflow-x-auto pb-3 scrollbar-hide">
          <div className="flex min-w-max items-center justify-center gap-2.5 px-1">

            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`rounded-full border px-5 py-2.5 text-xs font-medium transition-all duration-300 sm:text-sm ${
                    isActive
                      ? "border-[#183B67] bg-[#183B67] text-white shadow-sm"
                      : "border-slate-200 bg-white text-slate-600 hover:border-[#183B67] hover:text-[#183B67]"
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
          className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {visibleProducts.map((product, index) => (
            <article
              key={product.id}
              className="group animate-[fadeIn_0.45s_ease_both]"
              style={{ animationDelay: `${index * 80}ms` }}
            >

              {/* Product Image */}
              <Link
                href={`/products/${product.slug}`}
                className="relative block overflow-hidden rounded-xl bg-[#F3F5F7]"
              >
                <div className="relative aspect-[4/4.4] overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain p-5 transition-transform duration-700 group-hover:scale-105 sm:p-6"
                  />

                  <span className="absolute left-4 top-4 rounded-full border border-white/80 bg-white/90 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-[#183B67]">
                    {product.category}
                  </span>

                  <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#183B67] shadow-sm transition-all duration-300 group-hover:bg-[#183B67] group-hover:text-white">
                    <ArrowUpRight size={18} />
                  </span>

                </div>
              </Link>

              {/* Product Details */}
              <div className="pt-5">
                <h3 className="text-base font-semibold text-[#183B67] transition-colors group-hover:text-[#42658F] sm:text-lg">
                  {product.name}
                </h3>

            

                <Link
                  href={`/products/${product.slug}`}
                  className="mt-4 inline-flex items-center gap-2 border-b border-[#183B67]/30 pb-1.5 text-xs font-semibold text-[#183B67] transition-all hover:border-[#D98A4A] hover:text-[#D98A4A]"
                >
                  Read More
                  <ArrowUpRight size={15} />
                </Link>
              </div>

            </article>
          ))}
        </div>

        {/* Empty State */}
        {visibleProducts.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-base font-medium text-[#183B67]">
              No products available in this category.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-4">

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
