
"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
  Images,
  Search,
  Maximize2,
} from "lucide-react";

import { raw } from "@/Data/product-source.mjs";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All Images");
  const [selectedImage, setSelectedImage] = useState(null);
  const [search, setSearch] = useState("");

  // Validate image paths
  const isValidImage = (image) => {
    if (!image || typeof image !== "string") return false;

    const value = image.trim();

    if (
      !value ||
      value === "undefined" ||
      value === "null"
    ) {
      return false;
    }

    // Local public folder images
    if (value.startsWith("/") && !value.startsWith("//")) {
      return true;
    }

    // Remote image URLs
    try {
      const url = new URL(value);

      return (
        url.protocol === "https:" ||
        url.protocol === "http:"
      );
    } catch {
      return false;
    }
  };

  // Gallery images from product data
  const galleryImages = useMemo(() => {
    return raw
      .filter((product) => isValidImage(product.image))
      .map((product, index) => ({
        id: index,
        title: product.title || "Product Image",
        category: product.category || "Other Products",
        image: product.image.trim(),
        slug: product.page,
      }));
  }, []);

  // Dynamic categories
  const categories = useMemo(() => {
    return [
      "All Images",
      ...new Set(
        galleryImages.map((item) => item.category)
      ),
    ];
  }, [galleryImages]);

  // Filter images
  const filteredImages = useMemo(() => {
    return galleryImages.filter((item) => {
      const categoryMatch =
        activeCategory === "All Images" ||
        item.category === activeCategory;

      const searchMatch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [galleryImages, activeCategory, search]);

  // Open image
  const openImage = (image) => {
    setSelectedImage(image);
  };

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  // Previous and next images
  const changeImage = useCallback(
    (direction) => {
      if (!selectedImage || !filteredImages.length) return;

      const currentIndex = filteredImages.findIndex(
        (item) => item.id === selectedImage.id
      );

      if (currentIndex === -1) return;

      const nextIndex =
        (currentIndex + direction + filteredImages.length) %
        filteredImages.length;

      setSelectedImage(filteredImages[nextIndex]);
    },
    [selectedImage, filteredImages]
  );

  // Keyboard controls
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") changeImage(1);
      if (e.key === "ArrowLeft") changeImage(-1);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, closeLightbox, changeImage]);

  // Featured image
  const featuredImage = galleryImages[0];

  // Image heights for masonry effect
  const heights = [
    "h-[210px] sm:h-[270px]",
    "h-[270px] sm:h-[350px]",
    "h-[180px] sm:h-[220px]",
    "h-[230px] sm:h-[290px]",
    "h-[280px] sm:h-[350px]",
    "h-[190px] sm:h-[240px]",
  ];

  return (
    <main className="min-h-screen bg-white text-[#172b3c]">

      {/* ================= HERO SECTION ================= */}

      <section className="relative overflow-hidden bg-[#f2f5f6] px-5 py-16 md:px-10 lg:px-[6%] lg:py-24">

        <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Hero Content */}

          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold tracking-[2px] text-[#35647e] shadow-sm">
              <Images size={16} />
              OUR VISUAL COLLECTION
            </div>

            <h1 className="text-[43px] font-extrabold leading-[1.08] tracking-[-2px] sm:text-6xl lg:text-[76px]">
              Explore Our
              <span className="block text-[#35647e]">
                Gallery.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-8 text-[#788795] sm:text-base">
              Discover our range of retail display racks, storage
              solutions and innovative industrial products.
              Explore our collection and see the quality of our work.
            </p>

            <div className="mt-10 flex gap-12">
              <div>
                <h3 className="text-3xl font-bold">
                  {galleryImages.length}+
                </h3>
                <p className="mt-1 text-xs text-[#788795]">
                  Product Images
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  {categories.length - 1}+
                </h3>
                <p className="mt-1 text-xs text-[#788795]">
                  Categories
                </p>
              </div>
            </div>
          </div>

          {/* Featured Image */}

          <div className="relative mx-auto w-full max-w-[600px] pb-5 pl-3">

            {featuredImage ? (
              <div className="group relative h-[330px] overflow-hidden rounded-2xl bg-[#e4eaee] sm:h-[420px]">

                <Image
                  src={featuredImage.image}
                  alt={featuredImage.title}
                  fill
                  priority
                  unoptimized={featuredImage.image.startsWith("http")}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-5 transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#172b3c]/90 to-transparent px-6 pb-7 pt-24 text-white">
                  <span className="text-[10px] font-bold tracking-[2px]">
                    FEATURED PRODUCT
                  </span>

                  <h3 className="mt-2 text-xl font-bold">
                    {featuredImage.title}
                  </h3>
                </div>
              </div>
            ) : (
              <div className="flex h-[330px] items-center justify-center rounded-2xl bg-[#e4eaee] text-[#788795]">
                No product images available
              </div>
            )}

            <div className="absolute -bottom-1 left-0 flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-xl sm:-left-5">
              <Images size={22} className="text-[#35647e]" />

              <div>
                <h4 className="text-sm font-bold">
                  Our Collection
                </h4>
                <p className="text-[11px] text-[#788795]">
                  Explore Every Detail
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= GALLERY SECTION ================= */}

      <section className="mx-auto max-w-[1450px] px-5 py-16 md:px-10 lg:px-[6%] lg:py-24">

        {/* Section Heading */}

        <div className="mb-9 flex items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold tracking-[2px] text-[#35647e]">
              DISCOVER OUR WORK
            </span>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Product Gallery
            </h2>

            <p className="mt-3 text-sm text-[#788795]">
              A closer look at our products and display solutions.
            </p>
          </div>

          <div className="shrink-0 text-right">
            <h3 className="text-3xl font-bold">
              {filteredImages.length}
            </h3>
            <p className="text-xs text-[#788795]">
              Images
            </p>
          </div>
        </div>

        {/* Filters */}

        <div className="mb-9 flex flex-col gap-5">

          <div className="flex flex-col justify-between gap-4 xl:flex-row xl:items-center">

            {/* Category Buttons */}

            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-full border px-5 py-3 text-xs font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? "border-[#172b3c] bg-[#172b3c] text-white"
                      : "border-[#e6ebef] bg-white text-[#61717e] hover:border-[#35647e] hover:text-[#35647e]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}

            <div className="flex h-12 w-full shrink-0 items-center gap-3 rounded-full border border-[#e6ebef] px-5 text-[#788795] xl:w-[260px]">
              <Search size={17} />

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent text-xs text-[#172b3c] outline-none placeholder:text-[#9ba6ae]"
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

          </div>
        </div>

        {/* ================= MASONRY GRID ================= */}

        {filteredImages.length > 0 ? (

          <div className="columns-2 gap-3 sm:columns-2 sm:gap-4 lg:columns-3 xl:columns-4">

            {filteredImages.map((item, index) => (

              <article
                key={item.id}
                className="mb-3 inline-block w-full break-inside-avoid overflow-hidden rounded-xl border border-[#e9edf0] bg-white align-top sm:mb-4"
              >

                {/* Gallery Image */}

                <button
                  onClick={() => openImage(item)}
                  aria-label={`View ${item.title}`}
                  className={`group relative block w-full overflow-hidden bg-[#f1f4f5] ${heights[index % heights.length]}`}
                >

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized={item.image.startsWith("http")}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-contain p-3 transition-transform duration-700 group-hover:scale-110 sm:p-5"
                  />

                  {/* Expand */}

                  <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white text-[#172b3c] shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <Maximize2 size={16} />
                  </span>

                  {/* Hover Overlay */}

                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#172b3c]/85 via-[#172b3c]/10 to-transparent p-4 text-left opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-sm:hidden sm:p-5">

                    <span className="text-[10px] font-medium uppercase tracking-wider text-white/80">
                      {item.category}
                    </span>

                    <h3 className="mt-2 text-sm font-bold text-white sm:text-base">
                      {item.title}
                    </h3>

                    <span className="mt-2 flex items-center gap-1 text-xs text-white">
                      View Image <ArrowUpRight size={14} />
                    </span>

                  </div>

                </button>

                {/* Product Details */}

                <div className="flex items-center justify-between gap-2 p-3 sm:p-4">

                  <div className="min-w-0">
                    <p className="truncate text-[9px] font-medium uppercase tracking-wide text-[#82919d] sm:text-[10px]">
                      {item.category}
                    </p>

                    <h3 className="mt-1 line-clamp-2 text-[11px] font-bold leading-5 text-[#172b3c] sm:text-sm">
                      {item.title}
                    </h3>
                  </div>

                  {item.slug && (
                    <Link
                      href={
                        item.slug.startsWith("/")
                          ? item.slug
                          : `/products/${item.slug}`
                      }
                      aria-label={`View ${item.title} product`}
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f1f4f5] text-[#172b3c] transition-all hover:bg-[#172b3c] hover:text-white"
                    >
                      <ArrowUpRight size={17} />
                    </Link>
                  )}

                </div>

              </article>

            ))}

          </div>

        ) : (

          <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl bg-[#f5f7f8] px-5 text-center">

            <Images size={42} className="text-[#9aa8b1]" />

            <h3 className="mt-5 text-xl font-bold">
              No Images Found
            </h3>

            <p className="mt-2 text-sm text-[#788795]">
              Try searching with another product name.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All Images");
              }}
              className="mt-5 rounded-full bg-[#172b3c] px-6 py-3 text-xs font-semibold text-white hover:bg-[#35647e]"
            >
              Clear Filters
            </button>

          </div>

        )}

      </section>

      {/* ================= LIGHTBOX ================= */}

      {selectedImage && (

        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#09131b]/95 p-4 backdrop-blur-sm sm:p-10"
        >

          {/* Close Button */}

          <button
            onClick={closeLightbox}
            aria-label="Close image preview"
            className="absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-[#172b3c] sm:right-8 sm:top-8"
          >
            <X size={23} />
          </button>

          {/* Previous Button */}

          <button
            onClick={(e) => {
              e.stopPropagation();
              changeImage(-1);
            }}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-[#172b3c] sm:left-8 sm:h-12 sm:w-12"
          >
            <ChevronLeft size={27} />
          </button>

          {/* Selected Image */}

          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[1000px]"
          >

            <div className="relative h-[65vh] w-full overflow-hidden rounded-xl bg-[#17232d] sm:h-[75vh]">

              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                priority
                unoptimized={selectedImage.image.startsWith("http")}
                sizes="90vw"
                className="object-contain p-3 sm:p-6"
              />

            </div>

            {/* Image Caption */}

            <div className="mt-5 flex items-center justify-between gap-4 text-white">

              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-[2px] text-[#aabac4]">
                  {selectedImage.category}
                </p>

                <h3 className="mt-2 truncate text-base font-bold sm:text-xl">
                  {selectedImage.title}
                </h3>
              </div>

              <span className="shrink-0 text-xs text-[#b8c5ce]">
                {filteredImages.findIndex(
                  (item) => item.id === selectedImage.id
                ) + 1} / {filteredImages.length}
              </span>

            </div>

          </div>

          {/* Next Button */}

          <button
            onClick={(e) => {
              e.stopPropagation();
              changeImage(1);
            }}
            aria-label="Next image"
            className="absolute right-2 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-[#172b3c] sm:right-8 sm:h-12 sm:w-12"
          >
            <ChevronRight size={27} />
          </button>

        </div>

      )}

    </main>
  );
}
