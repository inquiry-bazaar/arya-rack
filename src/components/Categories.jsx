
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Apple,
  Layers,
  Rows3,
  ChevronsUp,
  ShoppingBasket,
  ShoppingCart,
} from "lucide-react";

const BLUE = "#1560C9";
const NAVY = "#0B1F3A";

const categories = [
  {
    title: ["Wall", "Racks"],
    icon: Rows3,
    image: "/new.png",
    href: "/products/wall-racks",
  },
  {
    title: ["Gondola", "Racks"],
    icon: Layers,
    image: "/new.png",
    href: "/products/gondola-racks",
  },
  {
    title: ["Corner", "Racks"],
    icon: ChevronsUp,
    image: "/new.png",
    href: "/products/corner-racks",
  },
  {
    title: ["Fruit &", "Vegetable", "Racks"],
    icon: Apple,
    image: "/new.png",
    href: "/products/fruit-vegetable-racks",
  },
  {
    title: ["Checkout", "Counters"],
    icon: ShoppingCart,
    image: "/new.png",
    href: "/products/checkout-counters",
  },
  {
    title: ["Trolleys &", "Baskets"],
    icon: ShoppingBasket,
    image: "/new.png",
    href: "/products/trolleys-baskets",
  },
];

const EASE = [0.22, 1, 0.36, 1];

function CategoryCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.a
      href={item.href}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        delay: index * 0.07,
        ease: EASE,
      }}
      whileHover={{ y: -5 }}
      className="category-card group relative block h-[180px] overflow-hidden rounded-2xl border border-white bg-white shadow-[0_8px_28px_rgba(11,31,58,0.07)] transition-all duration-300 hover:shadow-[0_16px_35px_rgba(11,31,58,0.14)] sm:h-[190px] lg:h-[180px] xl:h-[190px]"
    >
      {/* Diagonal background */}
      <div
        className="absolute inset-0 bg-[#EDF3FC]"
        style={{
          clipPath: "polygon(27% 0, 100% 0, 100% 100%, 18% 100%)",
        }}
      />

      {/* Left content */}
      <div className="absolute inset-y-0 left-0 z-10 flex w-[48%] flex-col justify-center pl-5 pr-1 sm:pl-6">
        <div
          className="flex h-10 w-14 items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:-translate-y-1"
          style={{
            background: BLUE,
            clipPath: "polygon(18% 0, 100% 0, 82% 100%, 0 100%)",
          }}
        >
          <Icon size={19} strokeWidth={2} />
        </div>

        <h3 className="mt-3 text-[14px] font-extrabold leading-[1.18] tracking-tight 
        text-[#0B1F3A] sm:text-lg lg:text-[15px]">
          {item.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>
      </div>

      {/* Product image */}
      <div className="absolute inset-y-0 right-0 flex w-[61%] items-center justify-center p-3 pl-1">
        <motion.img
          src={item.image}
          alt={item.title.join(" ")}
          loading="lazy"
          className="h-full w-full object-contain mix-blend-multiply transition-transform 
          duration-500 group-hover:scale-110"
        />
      </div>

      {/* Circular arrow */}
      <div className="absolute bottom-3 right-3 z-20 flex h-9 w-9 items-center 
      justify-center rounded-full bg-white text-[#0B1F3A] shadow-[0_4px_12px_rgba(0,0,0,0.13)] 
      transition-all duration-300 group-hover:bg-[#1560C9] group-hover:text-white">
        <ArrowRight size={17} />
      </div>
    </motion.a>
  );
}

export default function Categories() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F7F9FD] to-[#EAF1FB] px-5 py-14 sm:px-8 lg:px-10 lg:py-16">

      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-20 top-0 h-80 w-48 -skew-x-[28deg] bg-[#1560C9]/[0.035]" />

      <div className="pointer-events-none absolute -right-20 bottom-0 h-52 w-80 -skew-x-[35deg] bg-[#1560C9]/[0.07]" />

      <div className="pointer-events-none absolute right-0 top-0 h-28 w-56 bg-[#1560C9]/[0.04]" />

      <div className="relative mx-auto grid max-w-[1450px] items-center gap-10 lg:grid-cols-[30%_1fr] lg:gap-9 xl:gap-12">

        {/* LEFT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: EASE }}
          className="relative mx-auto h-[400px] w-full max-w-[390px] sm:h-[460px] lg:h-[515px] lg:max-w-none"
        >
          {/* Navy background shape */}
          <div
            className="absolute -left-3 -top-3 h-[67%] w-[70%] bg-[#0B1F3A]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 72% 100%, 0 100%)",
            }}
          />

          {/* Main photograph */}
          <div
            className="absolute inset-0 overflow-hidden bg-[#E5EAF2]"
            style={{
              clipPath: "polygon(9% 5%, 100% 5%, 88% 100%, 9% 100%)",
            }}
          >
            <motion.img
              src="/images/categories/supermarket-showcase.jpg"
              alt="Supermarket display racks and retail shelving"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, ease: "easeOut" }}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Navy information panel */}
          <div
            className="absolute bottom-0 left-[9%] flex h-[43%] w-[78%] flex-col justify-end bg-[#0B1F3A] px-6 pb-7 pt-12 text-white sm:px-8"
            style={{
              clipPath: "polygon(0 24%, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <ShoppingCart
              size={31}
              strokeWidth={1.7}
              className="mb-2"
            />

            <h3 className="text-lg font-bold leading-snug text-white sm:text-xl">
              Retail Racking
              <br />
              &amp; Display Solutions
            </h3>

            <span className="mt-4 h-1 w-14 rounded-full bg-[#F59E0B]" />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="min-w-0">

          {/* Heading */}
          <div className="text-center">

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-4"
            >
              <span className="hidden h-px w-16 bg-gradient-to-r from-transparent to-[#0B1F3A] sm:block xl:w-28" />

              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#0B1F3A] sm:text-xs">
                Our Categories
              </span>

              <span className="hidden h-px w-16 bg-gradient-to-l from-transparent to-[#0B1F3A] sm:block xl:w-28" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#0B1F3A] sm:text-4xl xl:text-[43px]"
            >
              Explore Our{" "}
              <span style={{ color: BLUE }}>
                Product Categories
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-[#64748B] sm:text-base"
            >
              A complete range of supermarket display racks and
              retail fixtures for modern retail spaces.
            </motion.p>
          </div>

          {/* CATEGORY GRID */}
          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:gap-4">
            {categories.map((item, index) => (
              <CategoryCard
                key={item.href}
                item={item}
                index={index}
              />
            ))}
          </div>

          {/* VIEW ALL BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex justify-center"
          >
            <motion.a
              href="/products"
              whileHover={{ scale: 1.035 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex min-w-[230px] items-center justify-center gap-4 
              overflow-hidden px-10 py-4 text-sm font-bold text-white shadow-lg transition-shadow 
              hover:shadow-xl sm:min-w-[260px]"
              style={{
                background: BLUE,
                clipPath: "polygon(4% 0, 100% 0, 96% 100%, 0 100%)",
              }}
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent
               via-white to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative">
                View All Categories
              </span>

              <motion.span
                className="relative"
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight size={19} />
              </motion.span>
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
