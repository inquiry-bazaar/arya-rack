
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import {
  ShoppingBasket,
  Apple,
  Shirt,
  Footprints,
  BriefcaseMedical,
  Smartphone,
  Sparkles,
  BookOpen,
  CakeSlice,
  House,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Category Data
const CATEGORIES = [
  {
    title: "Supermarket & Grocery Display Racks",
    icon: ShoppingBasket,
    image: "/Cosmetic-Display-Racks.webp",
    href: "/products/supermarket-grocery-display-racks",
  },
  {
    title: "Fruit & Vegetable Display Racks",
    icon: Apple,
    image: "/supermarket.webp",
    href: "/products/fruit-vegetable-display-racks",
  },
  {
    title: "Garment & Clothing Display Racks",
    icon: Shirt,
    image: "/clothes.webp",
    href: "/products/garment-clothing-display-racks",
  },
  {
    title: "Footwear & Shoe Display Racks",
    icon: Footprints,
    image: "/shoe rack.webp",
    href: "/products/footwear-shoe-display-racks",
  },
  {
    title: "Pharmacy & Medical Store Racks",
    icon: BriefcaseMedical,
    image: "/medical.webp",
    href: "/products/pharmacy-medical-store-racks",
  },
  // {
  //   title: "Mobile & Electronics Display Racks",
  //   icon: Smartphone,
  //   image: "/electronics.webp",
  //   href: "/products/mobile-electronics-display-racks",
  // },
  // {
  //   title: "Cosmetic & Beauty Display Racks",
  //   icon: Sparkles,
  //   image: "/cosmetics.webp",
  //   href: "/products/cosmetic-beauty-display-racks",
  // },
  // {
  //   title: "Books & Stationery Display Racks",
  //   icon: BookOpen,
  //   image: "/stationery.webp",
  //   href: "/products/books-stationery-display-racks",
  // },
  // {
  //   title: "Bakery & Confectionery Display Racks",
  //   icon: CakeSlice,
  //   image: "/bakery.webp",
  //   href: "/products/bakery-display-racks",
  // },
  // {
  //   title: "Home & Kitchen Display Racks",
  //   icon: House,
  //   image: "/home-kitchen.webp",
  //   href: "/products/home-kitchen-display-racks",
  // },
];

const INTERVAL = 3600;

// Category Card
function CategoryCard({ item, index, active, reduce }) {
  const Icon = item.icon;

  return (
    <motion.div
      className="h-full"
      initial={reduce ? false : { opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.4,
        delay: (index % 5) * 0.05,
      }}
    >
      <motion.a
        href={item.href}
        whileHover={reduce ? undefined : { y: -5 }}
        whileTap={reduce ? undefined : { scale: 0.99 }}
        transition={{ duration: 0.3 }}
        className={`group relative flex h-full min-h-[400px]
          flex-col overflow-hidden rounded-[24px] border p-4
          transition-all duration-300
          ${
            active
              ? "border-[#F67516] bg-[#FFFAF6] shadow-[0_12px_30px_rgba(246,117,22,0.12)]"
              : "border-[#E5EAF1] bg-white shadow-[0_8px_24px_rgba(15,42,75,0.07)] hover:border-[#F67516] hover:shadow-[0_12px_30px_rgba(246,117,22,0.10)]"
          }`}
      >
        {/* Angled Number Badge */}
        <div
          className={`absolute left-0 top-0 z-10 flex h-[55px] w-[82px]
            items-center justify-center text-[21px] font-extrabold
            transition-colors duration-300
            ${
              active
                ? "bg-[#2252A3] text-white"
                : "bg-[#E8EDF5] text-[#193653] group-hover:bg-[#2252A3] group-hover:text-white"
            }`}
          style={{
            clipPath: "polygon(0 0, 100% 0, 68% 100%, 0 100%)",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Product Image */}
        <div className="relative flex h-[245px] shrink-0 items-center
          justify-center overflow-hidden rounded-[18px] bg-white p-2">

          <motion.img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-contain
              drop-shadow-[0_8px_12px_rgba(0,0,0,0.08)]"
            whileHover={reduce ? undefined : { scale: 1.06 }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Category Title */}
        <div className="mt-3 pr-14 pb-3">
          <h3
            className={`max-w-[290px] text-[14px] font-extrabold
              leading-[1.35] tracking-tight transition-colors
              duration-300 sm:text-[16px]
              ${
                active
                  ? "text-[#F67516]"
                  : "text-[#193653] group-hover:text-[#F67516]"
              }`}
          >
            {item.title}
          </h3>
        </div>

        {/* Angled Arrow Corner */}
        <span
          className={`absolute bottom-0 right-0 flex h-[68px] w-[68px]
            items-center justify-center pl-3 pt-3
            transition-all duration-300
            ${
              active
                ? "bg-[#F67516] text-white"
                : "bg-[#E8EDF5] text-[#193653] group-hover:bg-[#F67516] group-hover:text-white"
            }`}
          style={{
            clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
          }}
        >
          <ArrowRight size={24} strokeWidth={2} />
        </span>
      </motion.a>
    </motion.div>
  );
}

// Main Categories Section
export default function Categories() {
  const reduce = useReducedMotion();
  const sliderRef = useRef(null);

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Scroll to category
  const scrollToIndex = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = Array.from(slider.children);
    if (!cards[index]) return;

    slider.scrollTo({
      left: cards[index].offsetLeft - slider.offsetLeft,
      behavior: reduce ? "auto" : "smooth",
    });

    setActive(index);
  };

  // Next category
  const next = () => {
    const nextIndex =
      active >= CATEGORIES.length - 1 ? 0 : active + 1;

    scrollToIndex(nextIndex);
  };

  // Previous category
  const previous = () => {
    const previousIndex =
      active <= 0 ? CATEGORIES.length - 1 : active - 1;

    scrollToIndex(previousIndex);
  };

  // Automatic Slider
  useEffect(() => {
    if (paused || reduce) return;

    const timer = setInterval(() => {
      setActive((current) => {
        const nextIndex = (current + 1) % CATEGORIES.length;

        const slider = sliderRef.current;

        if (slider) {
          const cards = Array.from(slider.children);
          const card = cards[nextIndex];

          if (card) {
            slider.scrollTo({
              left: card.offsetLeft - slider.offsetLeft,
              behavior: "smooth",
            });
          }
        }

        return nextIndex;
      });
    }, INTERVAL);

    return () => clearInterval(timer);
  }, [paused, reduce]);

  // Update active card on manual scrolling
  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = Array.from(slider.children);

    let nearestIndex = 0;
    let nearestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(
        card.offsetLeft - slider.offsetLeft - slider.scrollLeft
      );

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActive(nearestIndex);
  };

  return (
    <section
      className="relative isolate flex min-h-screen items-center
        overflow-hidden bg-white py-8 sm:py-10 lg:py-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setPaused(false);
        }
      }}
    >
      {/* Main Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1500px]
        px-4 sm:px-7 lg:px-10">

        {/* Heading */}
        <div className="mb-5 sm:mb-7">

          <div className="mb-3 flex items-center gap-3">
            <span className="h-[3px] w-10 bg-[#F67516]" />

            <span className="text-xs font-extrabold uppercase
              tracking-[0.2em] text-black sm:text-sm">
              Explore Our Collection
            </span>
          </div>

          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[clamp(30px,4vw,58px)]
              font-extrabold leading-tight tracking-tight text-[#193653]"
          >
            Our Product{" "}
            <span className="text-[#2252A3]">
              Categories.
            </span>
          </motion.h2>

          <p className="mt-2 max-w-2xl text-sm font-medium
            leading-relaxed text-[#5B6B84] sm:text-base">
            Explore our complete range of supermarket display racks
            and retail fixtures designed for modern retail spaces.
          </p>
        </div>

        {/* Slider Controls */}
        <div className="mb-4 flex items-center justify-end gap-2">

          <button
            type="button"
            onClick={previous}
            aria-label="Previous category"
            className="flex h-10 w-10 items-center justify-center
              rounded-full border border-[#DCE5F1] bg-white
              text-[#12469C] shadow-sm transition-all duration-200
              hover:border-[#12469C] hover:bg-[#12469C] hover:text-white"
          >
            <ChevronLeft size={21} />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next category"
            className="flex h-10 w-10 items-center justify-center
              rounded-full bg-[#F67516] text-white shadow-md
              transition-all duration-200 hover:bg-[#12469C]"
          >
            <ChevronRight size={21} />
          </button>
        </div>

        {/* Category Slider */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto
            scroll-smooth pb-4 [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden sm:gap-5"
        >
          {CATEGORIES.map((item, index) => (
            <div
              key={item.href}
              className="w-full shrink-0 snap-start
                sm:w-[calc(50%-10px)]
                lg:w-[calc(20%-16px)]"
            >
              <CategoryCard
                item={item}
                index={index}
                active={active === index}
                reduce={reduce}
              />
            </div>
          ))}
        </div>

        {/* Slider Indicators */}
        <div className="mt-3 flex items-center justify-center gap-2">
          {CATEGORIES.map((item, index) => (
            <button
              key={item.href}
              type="button"
              aria-label={`Go to category ${index + 1}`}
              onClick={() => scrollToIndex(index)}
              className={`h-[6px] rounded-full
                transition-all duration-300
                ${
                  active === index
                    ? "w-8 bg-[#F67516]"
                    : "w-[6px] bg-[#B9C8DC] hover:bg-[#12469C]"
                }`}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-5 flex justify-center">
          <motion.a
            href="/products"
            whileHover={reduce ? undefined : { y: -3 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            className="group inline-flex items-center gap-6
              rounded-full bg-gradient-to-r from-[#F4620C]
              to-[#F67516] py-2 pl-7 pr-2 text-sm font-bold
              text-white shadow-[0_10px_25px_rgba(242,106,18,0.28)]
              transition-shadow hover:shadow-[0_14px_30px_rgba(242,106,18,0.4)]
              sm:text-base"
          >
            View All Categories

            <span className="flex h-11 w-11 items-center
              justify-center rounded-full bg-white text-[#F67516]">
              <ArrowRight
                size={22}
                className="transition-transform duration-200
                  group-hover:translate-x-1"
              />
            </span>
          </motion.a>
        </div>

      </div>
    </section>
  );
}
