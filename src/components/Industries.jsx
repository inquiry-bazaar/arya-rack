
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Store,
  ShoppingBasket,
  ShoppingCart,
  BriefcaseMedical,
  Apple,
  CakeSlice,
  Smartphone,
  Sparkles,
  ArrowUpRight
} from "lucide-react";


const INDUSTRIES = [
  {
    title: "Supermarkets & Hypermarkets",
    description: "Complete retail shelving and display solutions for supermarkets and hypermarkets.",
    image: "/images/industries/Supermarkets & Hypermarkets.webp",
    icon: Store,
    href: "/industries/supermarkets-hypermarkets",
  },
  {
    title: "Kirana & Grocery Stores",
    description: "Smart and durable shelving solutions to organize everyday grocery products.",
    image: "/images/industries/Kirana & Grocery Stores.webp",
    icon: ShoppingBasket,
    href: "/industries/kirana-grocery-stores",
  },
  {
    title: "Convenience Stores & Petrol Pump Marts",
    description: "Space-efficient display racks for convenience stores and petrol pump marts.",
    image: "/Convenience Stores.webp",
    icon: ShoppingCart,
    href: "/industries/convenience-stores",
  },
  {
    title: "Pharmacies & Medical Stores",
    description: "Organized shelving and product display systems for pharmacies and medical stores.",
    image: "/images/industries/Bakeries & Sweet Shops.webp",
    icon: BriefcaseMedical,
    href: "/industries/pharmacies-medical-stores",
  },
  {
    title: "Fruit & Vegetable Shops",
    description: "Attractive and practical produce display racks for fresh fruits and vegetables.",
    image: "/images/industries/fruits-vegetable-rack.jpg",
    icon: Apple,
    href: "/industries/fruit-vegetable-shops",
  },
  {
    title: "Bakeries & Sweet Shops",
    description: "Elegant display solutions for bakery products, sweets and confectionery.",
    image: "/images/industries/Bakeries & Sweet Shops.webp",
    icon: CakeSlice,
    href: "/industries/bakeries-sweet-shops",
  },
  {
    title: "Mobile & Electronics Stores",
    description: "Modern product display racks for mobile phones and electronic accessories.",
    image: "/electronics.webp",
    icon: Smartphone,
    href: "/industries/mobile-electronics-stores",
  },
  {
    title: "Cosmetic & Beauty Stores",
    description: "Stylish display shelving for cosmetics, skincare and beauty products.",
    image: "/Cosmetic-Display-Racks.webp",
    icon: Sparkles,
    href: "/industries/cosmetic-beauty-stores",
  },
];




const EASE = [0.22, 1, 0.36, 1];

export default function Industries() {
  const reduce = useReducedMotion();

  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-gray-50 py-10 sm:py-7 lg:py-10"
    >
      <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10">

        {/* HEADER */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE }}
          className="mb-12 text-center lg:mb-16"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#52799F]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#52799F]">
              Industries We Serve
            </span>
            <span className="h-px w-9 bg-[#52799F]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#172B45] sm:text-4xl lg:text-[52px]">
            Retail Solutions for Every Industry
          
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[14px] leading-7 text-[#778394] sm:text-base">
            Explore our versatile range of retail racking solutions,
            designed to organize products, optimize space and enhance
            commercial environments.
          </p>

          {/* FEATURES */}
    
        </motion.div>

        {/* INDUSTRY GRID */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-7">
          {INDUSTRIES.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.href}
                href={item.href}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: reduce ? 0 : (index % 4) * 0.08,
                  ease: EASE,
                }}
                whileHover={reduce ? undefined : { y: -5 }}
                className="group relative block overflow-hidden rounded-[18px] border border-[#E9EDF2] bg-white shadow-[0_5px_22px_rgba(20,40,70,0.045)] transition-shadow duration-300 hover:shadow-[0_15px_35px_rgba(20,40,70,0.11)]"
              >
                {/* IMAGE */}
<div className="relative h-[150px] overflow-hidden bg-[#F1F3F6] sm:h-[220px] lg:h-[230px]">                  <motion.img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#10233D]/45 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* NUMBER */}
                  <span className="absolute left-4 top-4 rounded-md border border-white/50 bg-white/90 px-3 py-1.5 text-[11px] font-bold tracking-wider text-[#243B57] backdrop-blur-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* ICON */}
                  <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#52799F] shadow-md transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  {/* ARROW */}
                  <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#243B57] shadow-md transition-all duration-300 group-hover:bg-[#52799F] group-hover:text-white">
                    <ArrowUpRight
                      size={19}
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </div>
                </div>

                {/* CONTENT */}
              <div className="min-h-[150px] p-3 sm:min-h-[140px] sm:p-5">
<h3 className="text-[14px] font-bold tracking-tight text-[#1D3048] transition-colors duration-300 group-hover:text-[#52799F] sm:text-[18px]">                    {item.title}
                  </h3>

<p className="mt-2 text-[11px] leading-[1.6] text-[#7A8796] sm:text-[13px] sm:leading-[1.75]">                    {item.description}
                  </p>

                  <div className="mt-4 h-[2px] w-8 rounded-full bg-[#DCE5EE] transition-all duration-300 group-hover:w-14 group-hover:bg-[#2252A3]" />
                </div>
              </motion.a>
            );
          })}
        </div>

       

      </div>
    </section>
  );
}
