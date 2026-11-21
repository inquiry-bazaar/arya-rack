
"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Layers,
  LayoutGrid,
  Settings,
  ShieldCheck,
} from "lucide-react";

const FEATURES = [
  { icon: Layers, label: ["Modular", "Design"] },
  { icon: ShieldCheck, label: ["Strong &", "Durable"] },
  { icon: LayoutGrid, label: ["Space", "Efficient"] },
  { icon: Settings, label: ["Custom", "Solutions"] },
];

const SLIDES = [
  "/r2zc3tfbbmdoezexsefm.webp",
  "/r2zc3tfbbmdoezexsefm.webp",
  "/r2zc3tfbbmdoezexsefm.webp",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (SLIDES.length <= 1) return;

    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 6000);

    return () => clearInterval(id);
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);

  const next = () =>
    setCurrent((c) => (c + 1) % SLIDES.length);

  return (
    <section className="relative isolate h-[calc(100svh-174px)] min-h-[620px] max-h-[760px] w-full overflow-hidden bg-[var(--background-light)]">

      {/* =====================================
          BACKGROUND SLIDER IMAGE
      ===================================== */}

      <div className="absolute inset-0 z-0 bg-[#E8EAF0]">

        {SLIDES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Modern supermarket display shelving"
            fetchPriority={i === 0 ? "high" : "auto"}
            className={`absolute inset-0 h-full w-full object-cover object-[58%_center] transition-opacity duration-1000 ${
              current === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

      </div>

      {/* =====================================
          WHITE CURVED CONTENT PANEL
      ===================================== */}

      <div
        className="absolute inset-y-0 left-0 z-[1] w-[49%] bg-white/[0.96] backdrop-blur-[3px] max-lg:w-[55%] max-md:w-[100%]"
        style={{
          borderRadius: "0 50% 50% 0 / 0 50% 50% 0",
        }}
      />

      {/* Soft curved edge */}
      <div
        className="pointer-events-none absolute inset-y-0 left-[45%] z-[2] hidden w-[5%] bg-white/30 blur-xl lg:block"
        style={{
          borderRadius: "50%",
        }}
      />

      {/* =====================================
          ORANGE DIAGONAL ACCENTS
      ===================================== */}

      {/* Top accent */}
      <div
        className="absolute left-[34%] top-0 z-[3] h-[110px] w-[125px] bg-[var(--accent)] md:h-[125px]"
        style={{
          clipPath: "polygon(0 0, 36% 0, 100% 100%, 65% 100%)",
        }}
      />

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-[32%] z-[3] h-[120px] w-[125px] bg-[var(--accent)] md:h-[145px]"
        style={{
          clipPath: "polygon(65% 0, 100% 0, 35% 100%, 0 100%)",
        }}
      />

      {/* =====================================
          LEFT CONTENT
      ===================================== */}

      <div className="relative z-10 mx-auto flex h-full max-w-[1800px] items-center px-6 sm:px-10 lg:px-16 xl:px-20">

        <div className="w-full max-w-[740px] pb-2 md:w-[48%]">

          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3">

            <span className="text-xs font-extrabold uppercase tracking-[0.28em] text-[var(--heading-color)] sm:text-sm lg:text-[17px]">
              Retail &amp; Display Solutions
            </span>

          </div>

          {/* Main heading */}
          <h1 className="text-[39px] font-extrabold leading-[1.08] tracking-[-1.8px] text-[var(--heading-color)] sm:text-5xl lg:text-[58px] xl:text-[66px]">
            Shelves That Speak
          </h1>

          {/* Highlight heading */}
          <h2 className="relative mt-1 inline-block text-[38px] font-extrabold leading-[1.1] tracking-[-1.8px] text-[var(--primary)] sm:text-5xl lg:text-[58px] xl:text-[66px]">

            Your Brand's Story

            <span className="absolute -bottom-3 left-1 h-[5px] w-[105px] rounded-full bg-[var(--accent)] sm:w-[140px]" />

          </h2>

          {/* Description */}
          <p className="mt-9 max-w-[550px] text-[14px] font-semibold leading-[1.5] text-[#555D6B] sm:text-base lg:text-[18px]">
            Durable, modular and space-smart shelving systems
            for supermarkets, retail stores and modern outlets.
          </p>

          {/* =====================================
              FEATURES
          ===================================== */}

          <div className="mt-7 flex max-w-[570px] items-center">

            {FEATURES.map(({ icon: Icon, label }, i) => (

              <div
                key={label.join(" ")}
                className="flex flex-1 items-center"
              >

                <div className="flex flex-1 flex-col items-center text-center">

                  <Icon
                    size={41}
                    strokeWidth={1.8}
                    className="text-[var(--primary)] transition-transform duration-300 hover:-translate-y-1 sm:h-11 sm:w-11"
                  />

                  <span className="mt-2 text-xs font-bold leading-[1.3] text-[var(--heading-color)] sm:text-sm lg:text-[16px]">
                    {label[0]}
                    <br />
                    {label[1]}
                  </span>

                </div>

                {i !== FEATURES.length - 1 && (
                  <span className="mx-1 h-[54px] w-px bg-[#AEB4C2]" />
                )}

              </div>

            ))}

          </div>

          {/* =====================================
              CTA BUTTON
          ===================================== */}

          <a
            href="/products"
            className="group mt-9 inline-flex items-center gap-5 rounded-full bg-[var(--primary)] py-2 pl-7 pr-2 text-[14px] font-extrabold text-white shadow-[0_8px_22px_rgba(0,81,254,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--primary-hover)] hover:shadow-xl sm:pl-8 sm:text-base"
          >

            Explore Our Products

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--primary)] transition-transform duration-300 group-hover:translate-x-1">

              <ArrowRight size={21} strokeWidth={2.5} />

            </span>

          </a>

        </div>
      </div>

      {/* =====================================
          LEFT SLIDER ARROW
      ===================================== */}

      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-5 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--heading-color)] shadow-[0_5px_20px_rgba(0,0,0,0.14)] transition-all duration-300 hover:scale-110 hover:bg-[var(--primary)] hover:text-white max-md:left-3 max-md:h-10 max-md:w-10"
      >
        <ChevronLeft size={27} strokeWidth={3} />
      </button>

      {/* =====================================
          RIGHT SLIDER ARROW
      ===================================== */}

      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-5 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--heading-color)] shadow-[0_5px_20px_rgba(0,0,0,0.14)] transition-all duration-300 hover:scale-110 hover:bg-[var(--primary)] hover:text-white max-md:right-3 max-md:h-10 max-md:w-10"
      >
        <ChevronRight size={27} strokeWidth={3} />
      </button>

      {/* =====================================
          SLIDER DOTS
      ===================================== */}

      {SLIDES.length > 1 && (
        <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 lg:left-[48%]">

          {SLIDES.map((_, i) => (

            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-5 w-5 rounded-full border-[3px] border-white shadow-md transition-all duration-300 ${
                current === i
                  ? "scale-110 bg-[var(--accent)]"
                  : "bg-white hover:scale-110"
              }`}
            />

          ))}

        </div>
      )}

    </section>
  );
}
