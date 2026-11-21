"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ShoppingBasket,
  Apple,
  Shirt,
  Footprints,
  BriefcaseMedical,
  Smartphone,
  ArrowRight,
} from "lucide-react";
/* ------------------------------------------------------------------ */
/*  CONFIG                                                             */
/* ------------------------------------------------------------------ */

const C = {
  navy: "#12469C",
  navyDeep: "#12469C",
  blue: "#0B4FC4",
  orange: "#F67516",
  orangeLight: "#F67516",
  tint: "#F67516",
  sub: "#5B6B84",
};

// Optional blurred supermarket aisle behind everything
const STORE_BG = "/categories/store-blur.webp";

// Use transparent-background PNG/WebP racks so they sit nicely on both
// the white cards and the blue active card.
// geo = position/size of each card in % of the 1821x864 stage (desktop arc).
const CATEGORIES = [
  {
    title: ["Supermarket &", "Grocery", "Display Racks"],
    icon: ShoppingBasket,
    image: "/Cosmetic-Display-Racks.webp",
    href: "/products/supermarket-grocery-display-racks",
    geo: { l: 4, t: 32.8, w: 16, h: 48.3 },
  },
  {
    title: ["Fruit & Vegetable", "Display Racks"],
    icon: Apple,
    image: "/supermarket.webp",
    href: "/products/fruit-vegetable-display-racks",
   geo: { l: 23, t: 31.8, w: 16, h: 50.9 },
  },
  {
    title: ["Garment & Clothing", "Display Racks"],
    icon: Shirt,
    image: "/clothes.webp",
    href: "/products/garment-clothing-display-racks",
  geo: { l: 42, t: 29.7, w: 16, h: 52.5 },

  },
  {
    title: ["Footwear & Shoe", "Display Racks"],
    icon: Footprints,
    image: "/shoe rack.webp",
    href: "/products/footwear-shoe-display-racks",
   geo: { l: 61, t: 29.5, w: 16, h: 53.6 },
  },
  {
    title: ["Pharmacy & Medical", "Store Racks"],
    icon: BriefcaseMedical,
    image: "/medical.webp",
    href: "/products/pharmacy-medical-store-racks",
  geo: { l: 80, t: 31.8, w: 16, h: 50.6 },
  },
  // {
  //   title: ["Mobile & Electronics", "Display Racks"],
  //   icon: Smartphone,
  //   image: "/electronics.webp",
  //   href: "/products/mobile-electronics-display-racks",
  //   geo: { l: 79.5, t: 33.2, w: 14.1, h: 47.8 },
  // },
];

const START_ACTIVE = 2;
const INTERVAL = 3600;
const EASE = [0.22, 1, 0.36, 1];
const VIEW = { once: true, amount: 0.2 };

/* ------------------------------------------------------------------ */
/*  VARIANTS                                                           */
/* ------------------------------------------------------------------ */

const words = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } },
};
const word = {
  hidden: { y: "115%" },
  show: { y: "0%", transition: { duration: 0.75, ease: EASE } },
};

function Word({ children, orange = false }) {
  return (
    <span className="inline-block overflow-hidden align-bottom pb-[0.16em] -mb-[0.16em]">
      <motion.span
        variants={word}
        className="inline-block"
        style={
          orange
            ? {
                backgroundImage: `linear-gradient(90deg,${C.orange},${C.orangeLight})`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }
            : { color: C.navy }
        }
      >
        {children}
      </motion.span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  CARD                                                               */
/* ------------------------------------------------------------------ */

function Card({ item, index, active, onActivate, reduce }) {
  const Icon = item.icon;
  const { l, t, w, h } = item.geo;
  const dist = Math.abs(index - 2.5);

  return (
    <motion.div
      className="relative shrink-0 snap-center max-lg:h-[380px] max-lg:w-[230px] lg:absolute lg:left-[var(--l)] lg:top-[var(--t)] lg:h-[var(--h)] lg:w-[var(--w)]"
      style={{
        "--l": `${l}%`,
        "--t": `${t}%`,
        "--w": `${w}%`,
        "--h": `${h}%`,
        zIndex: active ? 20 : 10,
      }}
      initial={reduce ? false : { opacity: 0, y: 90, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={VIEW}
      transition={{
        delay: 0.35 + dist * 0.09,
        type: "spring",
        stiffness: 130,
        damping: 18,
      }}
    >
      <motion.a
        href={item.href}
        aria-label={item.title.join(" ")}
        onMouseEnter={onActivate}
        onFocus={onActivate}
        animate={{ scale: active ? 1.06 : 1, y: active ? "-2.2%" : "0%" }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        className="relative block h-full w-full outline-none"
      >
        {/* white glass layer */}
        <span
          aria-hidden
          className="absolute inset-0 -skew-x-2 rounded-[28px] bg-gradient-to-b from-white/95 to-[#F2F6FC]/90 shadow-[0_18px_40px_rgba(10,36,87,0.12)] ring-1 ring-white backdrop-blur-sm lg:rounded-[2.1vw]"
        />
        {/* blue active layer */}
        <motion.span
          aria-hidden
          initial={false}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ duration: 0.45 }}
          className="absolute inset-0 -skew-x-2 overflow-hidden rounded-[20px] 
          shadow-[0_22px_50px_rgba(11,79,196,0.45),0_16px_26px_-6px_rgba(255,138,31,0.7)] 
          lg:rounded-[2.1vw]"
          style={{
            background:
              "linear-gradient(180deg,#0B55D0 0%,#0A3F9F 55%,#0A2F7A 100%)",
          }}
        >
          <span className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/15 to-transparent" />
          {active && !reduce && (
            <motion.span
              key={`shine-${index}`}
              className="absolute inset-y-0 w-1/3 -skew-x-[20deg] bg-white/20 blur-md"
              initial={{ x: "-150%" }}
              animate={{ x: "420%" }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            />
          )}
        </motion.span>

        {/* content */}
        <div className="relative flex h-full w-full flex-col items-center px-[7%] pb-[8%] pt-[8%]">
          {/* rack image */}
          <div className="h-[33%] w-full">
            <motion.img
              src={item.image}
              alt={item.title.join(" ")}
              loading="lazy"
              className="h-full w-full object-contain drop-shadow-[0_10px_14px_rgba(10,36,87,0.22)]"
              animate={
                active && !reduce
                  ? { y: [0, -7, 0], scale: 1.07 }
                  : { y: 0, scale: 1 }
              }
              transition={{
                y: active
                  ? { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.4 },
                scale: { duration: 0.5, ease: EASE },
              }}
            />
          </div>

          {/* icon badge */}
          <motion.span
            initial={false}
            animate={{
              backgroundColor: active ? "#1B63E0" : C.tint,
              color: active ? "#FFFFFF" : C.orange,
              rotate: active ? -6 : 0,
            }}
            transition={{ duration: 0.4 }}
            className="mt-[4%] flex h-[clamp(38px,2.8vw,56px)] w-[clamp(38px,2.8vw,56px)] shrink-0 items-center justify-center rounded-[14px] -skew-x-2 shadow-sm lg:rounded-[0.85vw]"
          >
            <Icon
              strokeWidth={2}
              className="h-[clamp(20px,1.5vw,30px)] w-[clamp(20px,1.5vw,30px)]"
            />
          </motion.span>

          {/* title */}
          <div className="flex flex-1 items-center justify-center mt-14">
            <motion.h3
              initial={false}
              animate={{ color: active ? "#FFFFFF" : C.navy }}
              transition={{ duration: 0.4 }}
             className="text-center text-[13px] font-extrabold leading-[1.2] tracking-tight 
lg:text-[14px]"
            >
              {item.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </motion.h3>
          </div>

          {/* arrow */}
          <motion.span
            initial={false}
            animate={{
              backgroundColor: active ? "#FFFFFF" : "rgba(255,255,255,0)",
              borderColor: active ? "#FFFFFF" : C.orange,
              color: active ? C.blue : C.orange,
              x: active ? 3 : 0,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="flex h-[clamp(36px,2.5vw,50px)] w-[clamp(36px,2.5vw,50px)] shrink-0 items-center justify-center rounded-full border-[2.5px]"
          >
            <ArrowRight
              strokeWidth={3}
              className="h-[55%] w-[55%]"
            />
          </motion.span>
        </div>
      </motion.a>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION                                                            */
/* ------------------------------------------------------------------ */

export default function Categories() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(START_ACTIVE);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || reduce) return;
    const id = setInterval(
      () => setActive((a) => (a + 1) % CATEGORIES.length),
      INTERVAL
    );
    return () => clearInterval(id);
  }, [paused, reduce]);

  const g = CATEGORIES[active].geo;
  const glowCenter = g.l + g.w / 2;

  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        background: "linear-gradient(180deg,#F5F8FD 0%,#EBF1FA 100%)",
      }}
    >
      {/* ---------- blurred store backdrop ---------- */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-55"
        style={{
          backgroundImage: `url(${STORE_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(7px)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(62% 58% at 50% 42%,rgba(255,255,255,.94),rgba(255,255,255,.4) 70%,rgba(255,255,255,0) 100%)",
        }}
      />

      {/* ---------- corner shapes ---------- */}
      <motion.svg
        aria-hidden
        viewBox="0 0 230 360"
        className="pointer-events-none absolute left-0 top-0 z-[1] w-[12.6%]"
        initial={reduce ? false : { opacity: 0, x: -80, y: -80 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={VIEW}
        transition={{ duration: 1, ease: EASE }}
      >
        <defs>
          <linearGradient id="cat-navy" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0B2A5E" />
            <stop offset="1" stopColor={C.navyDeep} />
          </linearGradient>
          <linearGradient id="cat-yellow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#FFD25A" />
            <stop offset="1" stopColor="#FF9A2E" />
          </linearGradient>
        </defs>
        <path d="M0 78 H120 Q150 78 168 50 L190 0 H230 L0 355Z" fill="url(#cat-navy)" />
        <path d="M0 78 H66 L0 114Z" fill="url(#cat-yellow)" />
      </motion.svg>

      <motion.svg
        aria-hidden
        viewBox="0 0 230 135"
        className="pointer-events-none absolute right-0 top-0 z-[1] w-[12.6%]"
        initial={reduce ? false : { opacity: 0, x: 80, y: -60 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={VIEW}
        transition={{ duration: 1, delay: 0.15, ease: EASE }}
      >
        <defs>
          <linearGradient id="cat-orange" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor={C.orange} />
            <stop offset="1" stopColor={C.orangeLight} />
          </linearGradient>
        </defs>
        <motion.path
          d="M131 0 H221 L144 112 Q137 128 117 128 H37 Q7 128 21 104Z"
          fill="url(#cat-orange)"
          animate={reduce ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>

      <motion.svg
        aria-hidden
        viewBox="0 0 280 200"
        className="pointer-events-none absolute bottom-0 right-0 z-[1] w-[15.4%]"
        initial={reduce ? false : { opacity: 0, x: 80, y: 80 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={VIEW}
        transition={{ duration: 1, delay: 0.3, ease: EASE }}
      >
        <path d="M280 4 L174 128 Q219 121 280 106Z" fill="url(#cat-orange)" />
        <path d="M4 200 Q139 136 280 118 V200Z" fill="url(#cat-navy)" />
      </motion.svg>

      {/* ---------- STAGE ---------- */}
      <div
        className="relative z-10 mx-auto max-w-[1920px] lg:aspect-[1821/864]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={VIEW}
          className="flex flex-col items-center px-5 pt-14 text-center lg:absolute lg:inset-x-0 lg:top-[1.4%] lg:pt-0"
        >
          {/* badge */}
          <motion.span
            variants={{
              hidden: { opacity: 0, y: -40, rotate: -20, scale: 0.6 },
              show: {
                opacity: 1,
                y: 0,
                rotate: 0,
                scale: 1,
                transition: { type: "spring", stiffness: 220, damping: 12 },
              },
            }}
            className="block"
          >
            <motion.span
              animate={reduce ? undefined : { y: [0, -4, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-[40px] w-[48px] -skew-x-6 items-center justify-center rounded-[14px] text-white shadow-[0_8px_18px_rgba(242,106,18,0.4)] lg:h-[2.2vw] lg:w-[2.65vw] lg:rounded-[0.8vw]"
              style={{
                background: `linear-gradient(135deg,${C.orangeLight},${C.orange})`,
              }}
            >
              {/* <ShoppingCart className="h-[55%] w-[55%]" strokeWidth={2.2} /> */}
            </motion.span>
          </motion.span>

          {/* label with curved rules */}
          <div className="mt-2 flex items-center gap-3 lg:mt-[0.7vw] lg:gap-[0.6vw]">
            <motion.svg
              aria-hidden
              viewBox="0 0 140 30"
              className="hidden w-[7.4vw] sm:block"
              style={{
                WebkitMaskImage: "linear-gradient(90deg,transparent,#000 55%)",
                maskImage: "linear-gradient(90deg,transparent,#000 55%)",
              }}
            >
              <motion.path
                d="M2 3 C45 1 95 10 138 26"
                fill="none"
                stroke={C.navy}
                strokeWidth="2"
                strokeLinecap="round"
                variants={{
                  hidden: { pathLength: 0 },
                  show: { pathLength: 1, transition: { duration: 0.9, delay: 0.3 } },
                }}
              />
            </motion.svg>
            <motion.span
              variants={{
                hidden: { opacity: 0, letterSpacing: "0.9em" },
                show: {
                  opacity: 1,
                  letterSpacing: "0.38em",
                  transition: { duration: 0.9, delay: 0.2, ease: EASE },
                },
              }}
              className="text-[12px] font-extrabold uppercase sm:text-sm lg:text-[clamp(12px,1.06vw,21px)]"
              style={{ color: C.navy }}
            >
              Our Categories
            </motion.span>
            <motion.svg
              aria-hidden
              viewBox="0 0 140 30"
              className="hidden w-[7.4vw] sm:block"
              style={{
                WebkitMaskImage: "linear-gradient(270deg,transparent,#000 55%)",
                maskImage: "linear-gradient(270deg,transparent,#000 55%)",
              }}
            >
              <motion.path
                d="M138 3 C95 1 45 10 2 26"
                fill="none"
                stroke={C.navy}
                strokeWidth="2"
                strokeLinecap="round"
                variants={{
                  hidden: { pathLength: 0 },
                  show: { pathLength: 1, transition: { duration: 0.9, delay: 0.3 } },
                }}
              />
            </motion.svg>
          </div>

          {/* heading */}
          <motion.h2
            variants={words}
            className="mt-3 text-[clamp(20px,3.55vw,70px)] font-extrabold leading-[1.1] 
            tracking-[-0.035em] lg:mt-[0.5vw]"
          >
            <Word>Explore</Word> <Word>Our</Word>{" "}
            <Word orange>Product</Word> <Word orange>Categories</Word>
          </motion.h2>

          {/* subtitle */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: 0.9, ease: EASE },
              },
            }}
            className="mt-3 max-w-[34ch] text-[14px] font-semibold leading-snug sm:max-w-none sm:text-base lg:mt-[0.5vw] lg:text-[clamp(14px,1.28vw,25px)]"
            style={{ color: C.sub }}
          >
            A complete range of supermarket display racks and retail fixtures
            for modern retail spaces.
          </motion.p>
        </motion.div>

        {/* Platform (desktop) */}
        <motion.svg
          aria-hidden
          viewBox="0 0 1821 864"
          className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          initial={reduce ? false : { opacity: 0, scaleX: 0.6 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={VIEW}
          transition={{ duration: 1.2, delay: 0.1, ease: EASE }}
        >
          <defs>
            <linearGradient id="cat-body" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#FFFFFF" />
              <stop offset="1" stopColor="#DCE6F4" />
            </linearGradient>
            <linearGradient id="cat-rim" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor={C.orange} stopOpacity="0" />
              <stop offset="0.12" stopColor={C.orangeLight} stopOpacity="0.85" />
              <stop offset="0.5" stopColor="#FFB257" />
              <stop offset="0.88" stopColor={C.orangeLight} stopOpacity="0.85" />
              <stop offset="1" stopColor={C.orange} stopOpacity="0" />
            </linearGradient>
            <filter id="cat-blur" x="-5%" y="-100%" width="110%" height="300%">
              <feGaussianBlur stdDeviation="7" />
            </filter>
          </defs>

          {/* soft ground shadow */}
          <ellipse cx="903" cy="770" rx="800" ry="48" fill="rgba(10,36,87,0.12)" filter="url(#cat-blur)" />
          {/* body */}
          <ellipse cx="903" cy="700" rx="840" ry="100" fill="url(#cat-body)" stroke="#FFFFFF" strokeWidth="3" />
          {/* top surface */}
          <ellipse cx="903" cy="690" rx="836" ry="52" fill="#F7FAFE" />
          {/* orange rim glow */}
          <motion.g
            animate={reduce ? undefined : { opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M67 690 A836 52 0 0 0 1739 690" fill="none" stroke="url(#cat-rim)" strokeWidth="14" filter="url(#cat-blur)" />
            <path d="M67 690 A836 52 0 0 0 1739 690" fill="none" stroke="url(#cat-rim)" strokeWidth="4" />
          </motion.g>
        </motion.svg>

        {/* moving glow beneath the active card (desktop) */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute top-[78.5%] hidden h-[9%] w-[20%] -translate-x-1/2 rounded-full blur-xl lg:block"
          style={{
            background:
              "radial-gradient(closest-side,rgba(255,138,31,.85),rgba(255,138,31,0))",
          }}
          initial={false}
          animate={{ left: `${glowCenter}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        />

        {/* Cards (scroll-snap row on mobile, arc on desktop) */}
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-10 pt-12 lg:contents">
          {CATEGORIES.map((item, i) => (
            <Card
              key={item.href}
              item={item}
              index={i}
              active={active === i}
              onActivate={() => setActive(i)}
              reduce={reduce}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="flex justify-center pb-14 lg:absolute lg:inset-x-0 lg:top-[87.2%] lg:pb-0"
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.8, delay: 1, ease: EASE }}
        >
          <motion.a
            href="/products"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative inline-flex h-[58px] items-center gap-8 
            overflow-hidden rounded-full pl-8 pr-[6px] text-[16px] font-bold !text-white shadow-[0_14px_30px_rgba(242,106,18,0.4)] ring-2 ring-white/70 lg:h-[clamp(58px,3.95vw,76px)] lg:gap-[2.6vw] lg:pl-[2.9vw] lg:text-[clamp(16px,1.42vw,27px)]"
            style={{
              background: `linear-gradient(90deg,#F4620C,${C.orangeLight})`,
            }}
          >
            View All Categories
            <span className="flex h-[46px] w-[46px] items-center justify-center rounded-full
             bg-white lg:h-[clamp(46px,3.3vw,64px)] lg:w-[clamp(46px,3.3vw,64px)]">
              <motion.span
                animate={reduce ? undefined : { x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex"
              >
                <ArrowRight
                  strokeWidth={2.8}
                  style={{ color: C.orange }}
                  className="h-6 w-6 lg:h-[clamp(22px,1.7vw,32px)] lg:w-[clamp(22px,1.7vw,32px)]"
                />
              </motion.span>
            </span>
            {/* shine */}
            <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/4 -skew-x-[20deg] bg-white/30 opacity-0 blur-sm transition-all duration-700 group-hover:left-[110%] group-hover:opacity-100" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}