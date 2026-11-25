"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Category Data — 10 categories
const CATEGORIES = [
  {
    title: "Supermarket & Grocery Display Racks",
    image: "/Cosmetic-Display-Racks.webp",
    href: "/products/supermarket-grocery-display-racks",
  },
  {
    title: "Fruit & Vegetable Display Racks",
    image: "/supermarket.webp",
    href: "/products/fruit-vegetable-display-racks",
  },
  {
    title: "Garment & Clothing Display Racks",
    image: "/clothes.webp",
    href: "/products/garment-clothing-display-racks",
  },
  {
    title: "Footwear & Shoe Display Racks",
    image: "/shoe rack.webp",
    href: "/products/footwear-shoe-display-racks",
  },
  {
    title: "Pharmacy & Medical Store Racks",
    image: "/medical.webp",
    href: "/products/pharmacy-medical-store-racks",
  },
  {
    title: "Mobile & Electronics Display Racks",
    image: "/electronics.webp",
    href: "/products/mobile-electronics-display-racks",
  },
  {
    title: "Cosmetic & Beauty Display Racks",
    image: "/Cosmetic-Display-Racks.webp",
    href: "/products/cosmetic-beauty-display-racks",
  },
  {
    title: "Books & Stationery Display Racks",
    image: "/Books & Stationery Display.jpg",
    href: "/products/books-stationery-display-racks",
  },
  {
    title: "Bakery & Confectionery Display Racks",
    image: "/Bakery & Display Racks.jpg",
    href: "/products/bakery-display-racks",
  },
  {
    title: "Home & Kitchen Display Racks",
    image: "/Home & Kitchen Display Racks.jpg",
    href: "/products/home-kitchen-display-racks",
  },
];

function CategoryCard({ item, index, reduce }) {
  return (
    <motion.a
      href={item.href}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, delay: (index % 5) * 0.055 }}
      whileHover={reduce ? undefined : { y: -6 }}
      whileTap={reduce ? undefined : { scale: 0.985 }}
      className="group relative flex h-full min-w-0 flex-col overflow-hidden
        rounded-[20px] border border-[#E5EAF1] bg-white p-3
        shadow-[0_7px_22px_rgba(15,42,75,0.055)]
        transition-all duration-300 hover:border-[#F67516]
        hover:shadow-[0_16px_34px_rgba(15,42,75,0.12)] sm:p-3.5"
    >
      {/* Category number */}
      <span
        className="absolute left-0 top-0 z-10 flex h-10 w-[58px]
          items-center justify-center bg-[#EAF0F7] text-sm font-extrabold
          text-[#193653] transition-colors duration-300
          group-hover:bg-[#2252A3] group-hover:text-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 72% 100%, 0 100%)" }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Product image */}
      <div className="relative flex h-[275px] items-center justify-center
        overflow-hidden rounded-[15px] bg-[#F5F7FA] p-1
        sm:h-[190px] xl:h-[175px]">
        <motion.img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-[275px] w-full object-contain drop-shadow-[0_7px_10px_rgba(0,0,0,0.08)]"
          whileHover={reduce ? undefined : { scale: 1.055 }}
          transition={{ duration: 0.4 }}
        />
        <span className="absolute bottom-2 right-2 flex h-8 w-8 items-center
          justify-center rounded-full bg-white text-[#193653] shadow-sm
          transition-all duration-300 group-hover:bg-[#F67516]
          group-hover:text-white">
          <ArrowRight size={17} />
        </span>
      </div>

      {/* Category title */}
      <div className="flex min-h-[76px] flex-1 items-center px-1 py-3">
        <h3 className="text-[13px] font-extrabold leading-[1.4] tracking-tight
          text-[#193653] transition-colors duration-300
          group-hover:text-[#F67516] sm:text-[14px]">
          {item.title}
        </h3>
      </div>

      <span className="h-[3px] w-9 rounded-full bg-[#F67516]
        transition-all duration-300 group-hover:w-full" />
    </motion.a>
  );
}

export default function Categories() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute -right-28 top-16 h-80 w-80
        rounded-full border-[1px] border-[#EAF0F7]" />
      <div className="pointer-events-none absolute -right-16 top-28 h-56 w-56
        rounded-full border-[1px] border-[#F1F4F8]" />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-4 sm:px-7 lg:px-10">
        {/* Heading */}
        <div className="mb-7 flex flex-col justify-between gap-4 sm:mb-9 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[3px] w-10 bg-[#F67516]" />
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F67516] sm:text-sm">
                Explore Our Collection
              </span>
            </div>

            <motion.h2
              initial={reduce ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[clamp(30px,4vw,58px)] font-extrabold leading-tight tracking-tight text-[#193653]"
            >
              Our Product{" "}
              <span className="text-[#2252A3]">Categories.</span>
            </motion.h2>

            <p className="mt-2 max-w-2xl text-sm font-medium leading-relaxed text-[#5B6B84] sm:text-base">
              Explore our complete range of supermarket display racks and
              retail fixtures designed for modern retail spaces.
            </p>
          </div>

          <a
            href="/products"
            className="group inline-flex w-fit shrink-0 items-center gap-4 rounded-full
              border border-[#DCE5F1] bg-white py-2 pl-5 pr-2 text-sm
              font-bold text-[#193653] shadow-sm transition-all duration-300
              hover:border-[#F67516] hover:text-[#F67516]"
          >
            View All Products
            <span className="flex h-9 w-9 items-center justify-center rounded-full
              bg-[#F67516] text-white transition-transform duration-300
              group-hover:translate-x-0.5">
              <ArrowRight size={19} />
            </span>
          </a>
        </div>

        {/* Static category grid — 5 cards per row on large screens */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 xl:grid-cols-5">
          {CATEGORIES.map((item, index) => (
            <CategoryCard
              key={item.href}
              item={item}
              index={index}
              reduce={reduce}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
