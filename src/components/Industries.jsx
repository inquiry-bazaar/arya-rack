"use client";

import { useEffect, useRef, useState } from "react";
import {
  Layers3,
  PanelsTopLeft,
  Box,
  ShoppingBasket,
  ArrowUpRight,
} from "lucide-react";

const industries = [
  {
    title: "Wall Rack",
    description:
      "Durable wall-mounted shelving designed to keep products organised and easy to access.",
    image: "/images/industries/wall-rack.jpg",
    icon: PanelsTopLeft,
    alt: "Wall-mounted retail shelving",
  },
  {
    title: "Corner Rack",
    description:
      "Smart, space-saving corner displays that make every inch of your store count.",
    image: "/images/industries/corner-rack.jpg",
    icon: Box,
    alt: "Corner retail rack shelving",
  },
  {
    title: "Gondolas",
    description:
      "Versatile freestanding display systems for supermarkets, retail chains and showrooms.",
    image: "/images/industries/gondolas.jpg",
    icon: Layers3,
    alt: "Freestanding gondola display shelving",
  },
  {
    title: "Fruits & Vegetable Rack",
    description:
      "Fresh-produce displays designed for clear visibility, neat presentation and easy browsing.",
    image: "/images/industries/fruits-vegetable-rack.jpg",
    icon: ShoppingBasket,
    alt: "Fresh fruit and vegetable display rack",
  },
];

export default function Industries() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="industries-heading"
      className="relative isolate overflow-hidden 
      bg-[radial-gradient(ellipse_at_50%_2%,rgba(255,255,255,0.99)_0%,rgba(247,249,253,0.96)_48%,rgba(241,245,252,1)_100%)] 
      px-4 py-20 sm:px-6 sm:py-12 lg:px-8 lg:py-15"
    >
      {/* Soft background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-56 top-[28%] -z-10 h-[360px] w-[360px] rounded-full bg-orange-200/50 blur-[85px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-56 top-[16%] -z-10 h-[360px] w-[360px] rounded-full bg-blue-200/50 blur-[85px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-[430px] -z-10 h-[650px] w-[650px] rounded-full border border-slate-900/[0.06] shadow-[0_0_0_28px_rgba(255,255,255,0.3),0_0_0_58px_rgba(16,36,73,0.02)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[420px] -left-32 -z-10 h-[530px] w-[530px] rounded-full border border-slate-900/[0.06] shadow-[0_0_0_30px_rgba(255,255,255,0.3),0_0_0_62px_rgba(244,81,22,0.03)]"
      />

      <div className="mx-auto w-full max-w-[1500px]">
        <header
          className={`mx-auto mb-11 max-w-[900px] text-center transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none sm:mb-14 lg:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
          }`}
        >
          <div className="mb-5 flex items-center justify-center gap-3 sm:gap-[17px]">
            <span className="h-[2px] w-7 rounded-full bg-[#f45116] sm:w-11" />
            <p className="m-0 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#f45116] sm:text-sm sm:tracking-[0.17em]">
              Industries We Serve
            </p>
            <span className="h-[2px] w-7 rounded-full bg-[#f45116] sm:w-11" />
          </div>

          <h2
            id="industries-heading"
            className="m-0 text-[2rem] font-extrabold leading-[1.13] tracking-[-0.055em] text-[#102449] sm:text-4xl md:text-5xl lg:text-[4.15rem] lg:leading-[1.08]"
          >
            Retail Solutions for{" "}
            <span className="relative inline-block whitespace-normal text-[#f45116] sm:whitespace-nowrap">
              Every Industry
              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-[5%] right-[4%] h-[5px] rounded-[50%] border-t-[3px] border-[#f45116] sm:-bottom-[9px] sm:h-[7px]"
                style={{ transform: "rotate(-2deg)" }}
              />
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-sm leading-7 text-[#58657b] sm:text-base md:text-lg md:leading-[1.75]">
            Versatile, durable, and space-efficient racking systems designed to
            meet the unique needs of retail and commercial spaces.
          </p>
        </header>

        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-7">
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`group relative min-w-0 overflow-hidden rounded-[25px] border border-white/95 bg-white/[0.9] shadow-[0_18px_45px_rgba(25,43,77,0.075),0_3px_10px_rgba(25,43,77,0.035)] transition-[transform,opacity,box-shadow,border-color] duration-700 ease-[cubic-bezier(.2,.75,.25,1)] hover:-translate-y-2.5 hover:border-[#f45116]/25 hover:shadow-[0_26px_55px_rgba(25,43,77,0.13),0_8px_20px_rgba(244,81,22,0.07)] motion-reduce:transform-none motion-reduce:transition-none sm:rounded-[30px] ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-7 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 110}ms` }}
              >
                <div className="absolute right-0 top-0 z-10 h-[7px] w-[34%] rounded-bl-xl bg-gradient-to-r from-orange-400 to-[#f45116]" />
                <div className="absolute -bottom-px -right-px z-10 h-[9px] w-[44%] rounded-tl-[100%] bg-gradient-to-r from-orange-400 to-[#f45116] transition-all duration-500 group-hover:w-[70%]" />

                <div className="relative mx-[9px] mt-[9px] h-[245px] overflow-hidden rounded-[20px] bg-slate-100 sm:h-[clamp(220px,25vw,300px)] sm:rounded-[24px] lg:h-[clamp(190px,19vw,285px)]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.055] motion-reduce:transition-none"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0b1b36]/10 to-transparent" />
                </div>

                <div className="relative z-20 mx-auto -mt-8 grid h-[66px] w-[66px] place-items-center rounded-full border-[5px] border-white bg-white text-[#f45116] shadow-[0_7px_18px_rgba(16,36,73,0.11)] transition-all duration-400 group-hover:-translate-y-1 group-hover:-rotate-6 group-hover:bg-[#f45116] group-hover:text-white">
                  <Icon size={27} strokeWidth={1.7} aria-hidden="true" />
                </div>

                <div className="relative z-10 px-5 pb-9 pt-2 text-center sm:px-6 sm:pb-10">
                  <h3 className="mb-3 text-xl font-extrabold leading-tight tracking-[-0.035em] text-[#102449] sm:text-[22px]">
                    {item.title}
                  </h3>
                  <p className="min-h-0 text-sm leading-[1.65] text-[#58657b] sm:min-h-[76px] sm:text-[15px]">
                    {item.description}
                  </p>
                  <div className="mt-[18px] flex items-center justify-center gap-2 text-[#f45116]">
                    <span className="h-[2px] w-[34px] rounded-full bg-current transition-all duration-300 group-hover:w-[58px]" />
                    <ArrowUpRight
                      size={18}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
