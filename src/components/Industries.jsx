"use client";

import {
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowRight,
  Box,
  Layers,
  Layers3,
  LayoutGrid,
  PanelsTopLeft,
  ShieldCheck,
  ShoppingBasket,
  ShoppingCart,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  CONFIG                                                             */
/* ------------------------------------------------------------------ */

const C = {
  bgDeep: "#12469C",
  bgMid: "#0B2B52",
  blue: "#12469C",
  blueLight: "white",
  blueDark: "#0A4DDB",
  orange: "#F26A12",
  orangeLight: "#FF8A1F",
  ink: "#0B1B3A",
  inkSoft: "#2B3650",
  para: "#D5DFF0",
};

// Optional blurred supermarket shelves for the top-right background
const STORE_BG = "/industries/store-blur.webp";

const STAGE = { w: 1855, h: 848 }; // design canvas (desktop)

/*
  card  = position/size on the 1855x848 canvas (px)
  img   = photo panel, in % of the card
  tl/tw = left edge / width of the text block, in % of the card
*/
const INDUSTRIES = [
  {
    title: ["Wall Rack"],
    lines: ["Durable wall-mounted", "shelving designed to make", "products organized."],
    image: "/images/industries/wall-rack.jpg",
    icon: PanelsTopLeft,
    href: "/products/wall-racks",
    alt: "Wall-mounted retail shelving",
    card: { x: 590, y: 130, w: 627, h: 290 },
    img: { l: 2.7, t: 2.4, w: 56.3, h: 94.2 },
    text: { l: 56.3, w: 30 },
  },
  {
    title: ["Corner Rack"],
    lines: ["Smart, space-saving", "corner displays that", "maximize your store space."],
    image: "/images/industries/corner-rack.jpg",
    icon: Box,
    href: "/products/corner-racks",
    alt: "Corner retail rack shelving",
    card: { x: 1150, y: 130, w: 675, h: 290 },
    img: { l: 2.2, t: 2.4, w: 55.1, h: 94.2 },
    text: { l: 55.6, w: 32 },
  },
  {
    title: ["Gondolas"],
    lines: ["Versatile free-standing", "display systems for", "supermarkets and", "showrooms."],
    image: "/images/industries/gondolas.jpg",
    icon: Layers3,
    href: "/products/gondola-racks",
    alt: "Freestanding gondola display shelving",
    card: { x: 465, y: 457, w: 690, h: 298 },
    img: { l: 2.2, t: 1.7, w: 59.9, h: 96 },
    text: { l: 57, w: 30 },
  },
  {
    title: ["Fruits &", "Vegetable Rack"],
    lines: ["Fresh-produce displays", "designed for clear visibility", "and easy browsing."],
    image: "/images/industries/fruits-vegetable-rack.jpg",
    icon: ShoppingBasket,
    href: "/products/fruit-vegetable-racks",
    alt: "Fresh fruit and vegetable display rack",
    card: { x: 1082, y: 456, w: 721, h: 302 },
    img: { l: 1.1, t: 2, w: 56.2, h: 93.7 },
    text: { l: 54, w: 33 },
  },
];

const FEATURES = [
  { icon: Layers, label: "Space Optimization" },
  { icon: ShieldCheck, label: "Durable & Long-Lasting" },
  { icon: LayoutGrid, label: "Versatile Applications" },
];

const EASE = [0.22, 1, 0.36, 1];
const VIEW = { once: true, amount: 0.2 };

/* ------------------------------------------------------------------ */
/*  ROUNDED SLANTED CLIP PATHS (objectBoundingBox units)               */
/* ------------------------------------------------------------------ */

function roundedPath(pts, ts) {
  const n = pts.length;
  const seg = pts.map((p, i) => {
    const prev = pts[(i - 1 + n) % n];
    const next = pts[(i + 1) % n];
    const t = ts[i];
    return {
      a: [p[0] + (prev[0] - p[0]) * t, p[1] + (prev[1] - p[1]) * t],
      p,
      b: [p[0] + (next[0] - p[0]) * t, p[1] + (next[1] - p[1]) * t],
    };
  });
  let d = `M${seg[0].b[0]} ${seg[0].b[1]}`;
  for (let i = 1; i <= n; i++) {
    const s = seg[i % n];
    d += ` L${s.a[0]} ${s.a[1]} Q${s.p[0]} ${s.p[1]} ${s.b[0]} ${s.b[1]}`;
  }
  return d + "Z";
}

// "/" leaning parallelogram; slant is 0.34 px per px of height
function slantPath(w, h, ts) {
  const s = Math.min(0.45, (0.34 * h) / w);
  return roundedPath([[s, 0], [1, 0], [1 - s, 1], [0, 1]], ts);
}

const CLIPS = INDUSTRIES.map((it) => {
  const cw = it.card.w;
  const ch = it.card.h;
  const iw = (it.img.w / 100) * cw;
  const ih = (it.img.h / 100) * ch;
  return {
    card: slantPath(cw, ch, [0.09, 0.1, 0.09, 0.1]),
    img: slantPath(iw, ih, [0.08, 0.11, 0.08, 0.11]),
  };
});

/* ------------------------------------------------------------------ */
/*  VARIANTS                                                           */
/* ------------------------------------------------------------------ */

const stack = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const rise = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};
const words = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const word = {
  hidden: { y: "115%" },
  show: { y: "0%", transition: { duration: 0.75, ease: EASE } },
};
const slideIn = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: EASE } },
};

function Word({ children, blue = false, reduce }) {
  return (
    <span className="inline-block overflow-hidden align-bottom pb-[0.16em] -mb-[0.16em]">
      <motion.span variants={word} className="inline-block">
        {blue ? (
          <motion.span
            className="inline-block"
            style={{
              backgroundImage: `linear-gradient(90deg,${C.blueLight},#1665E8,${C.blueLight})`,
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
            animate={
              reduce ? undefined : { backgroundPosition: ["0% 0%", "200% 0%"] }
            }
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            {children}
          </motion.span>
        ) : (
          <span className="text-white">{children}</span>
        )}
      </motion.span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  CARD                                                               */
/* ------------------------------------------------------------------ */

const cardVariants = {
  rest: { y: 0 },
  hover: { y: -8, transition: { type: "spring", stiffness: 260, damping: 18 } },
};
const tabVariants = {
  rest: { x: 0, y: 0, opacity: 0.95 },
  hover: { x: -5, y: -5, opacity: 1, transition: { duration: 0.3 } },
};
const imgVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.07, transition: { duration: 0.6, ease: EASE } },
};
const arrowVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.14, rotate: -8, transition: { type: "spring", stiffness: 320, damping: 14 } },
};
const arrowIconVariants = {
  rest: { x: 0 },
  hover: { x: 3 },
};

function Card({ item, index, reduce }) {
  const Icon = item.icon;
  const { x, y, w, h } = item.card;
  const fromLeft = index % 2 === 0;

  return (
    <motion.div
      className="relative lg:absolute lg:left-[var(--l)] lg:top-[var(--t)] lg:h-[var(--h)] lg:w-[var(--w)]"
      style={{
        "--l": `${(x / STAGE.w) * 100}%`,
        "--t": `${(y / STAGE.h) * 100}%`,
        "--w": `${(w / STAGE.w) * 100}%`,
        "--h": `${(h / STAGE.h) * 100}%`,
        "--clip": `url(#ind-card-${index})`,
        "--iclip": `url(#ind-img-${index})`,
        "--il": `${item.img.l}%`,
        "--it": `${item.img.t}%`,
        "--iw": `${item.img.w}%`,
        "--ih": `${item.img.h}%`,
        "--tl": `${item.text.l}%`,
        "--tw": `${item.text.w}%`,
      }}
      initial={reduce ? false : { opacity: 0, x: fromLeft ? -90 : 90, y: 50 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={VIEW}
      transition={{
        delay: 0.35 + index * 0.14,
        type: "spring",
        stiffness: 90,
        damping: 18,
      }}
    >
      {/* gentle float */}
      <motion.div
        className="h-full w-full"
        animate={reduce ? undefined : { y: [0, -5, 0] }}
        transition={{
          duration: 5 + index * 0.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.4,
        }}
      >
        <motion.a
          href={item.href}
          aria-label={item.title.join(" ")}
          variants={cardVariants}
          initial="rest"
          animate="rest"
          whileHover="hover"
          className="group relative block h-full w-full outline-none"
        >
          {/* blue glowing tab behind the photo (desktop) */}
          <motion.span
            aria-hidden
            variants={tabVariants}
            className="absolute hidden lg:ml-[-0.7vw] lg:mt-[-0.65vw] lg:block lg:h-[var(--ih)] lg:w-[var(--iw)] lg:left-[var(--il)] lg:top-[var(--it)] drop-shadow-[0_0_14px_rgba(46,123,255,0.65)]"
          >
            <span
              className="block h-full w-full lg:[clip-path:var(--iclip)]"
              style={{
                background: `linear-gradient(135deg,${C.blueLight},${C.blueDark})`,
              }}
            />
          </motion.span>

          {/* white body */}
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0_20px_40px_rgba(0,0,0,0.35)] max-lg:pb-1 lg:absolute lg:inset-0 lg:overflow-visible lg:rounded-none lg:bg-transparent lg:shadow-none">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 hidden lg:block lg:drop-shadow-[0_22px_26px_rgba(0,0,0,0.4)]"
            >
              <span className="relative block h-full w-full bg-white lg:[clip-path:var(--clip)]">
                <span
                  className="absolute inset-[3px] block lg:[clip-path:var(--clip)]"
                  style={{
                    background:
                      "linear-gradient(180deg,#FFFFFF 0%,#EEF3FB 100%)",
                  }}
                />
              </span>
            </span>

            {/* photo */}
            <div className="relative h-52 w-full lg:absolute lg:left-[var(--il)] lg:top-[var(--it)] lg:h-[var(--ih)] lg:w-[var(--iw)] lg:bg-white lg:[clip-path:var(--iclip)]">
              <div className="h-full w-full overflow-hidden lg:absolute lg:inset-[5px] lg:h-auto lg:w-auto lg:[clip-path:var(--iclip)]">
                <motion.div
                  className="h-full w-full"
                  initial={reduce ? false : { scale: 1.25 }}
                  whileInView={{ scale: 1 }}
                  viewport={VIEW}
                  transition={{ duration: 1.6, ease: EASE, delay: 0.4 + index * 0.14 }}
                >
                  <motion.img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    variants={imgVariants}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* text */}
            <div className="relative flex flex-col items-start p-5 lg:absolute lg:bottom-[7.5%] lg:left-[var(--tl)] lg:top-[10.5%] lg:w-[var(--tw)] lg:p-0">
              <Icon
                strokeWidth={1.8}
                style={{ color: C.ink }}
                className="h-[34px] w-[34px] lg:ml-[2.3vw] lg:h-[clamp(30px,2.3vw,46px)] lg:w-[clamp(30px,2.3vw,46px)]"
              />

              <h3
                className="mt-2 text-[22px] font-extrabold leading-[1.1] tracking-[-0.03em] lg:ml-[1.9vw] lg:mt-[0.45vw] lg:text-[clamp(17px,1.52vw,30px)]"
                style={{ color: C.ink }}
              >
                {item.title.map((t) => (
                  <span key={t} className="block">
                    {t}
                  </span>
                ))}
              </h3>

              <p
                className="mt-2 text-[14px] font-medium leading-[1.5] lg:ml-[0.95vw] lg:mt-[0.6vw] lg:text-[clamp(11px,0.87vw,17px)]"
                style={{ color: C.inkSoft }}
              >
                {item.lines.map((l) => (
                  <span key={l} className="lg:block">
                    {l}{" "}
                  </span>
                ))}
              </p>

              {/* <motion.span
                variants={arrowVariants}
                className="mt-4 flex h-11 w-11 items-center justify-center rounded-full text-white shadow-[0_8px_18px_rgba(242,106,18,0.45)] lg:mt-auto lg:h-[clamp(40px,2.8vw,54px)] lg:w-[clamp(40px,2.8vw,54px)]"
                style={{
                  background: `linear-gradient(135deg,${C.orangeLight},${C.orange})`,
                }}
              >
              </motion.span> */}
            </div>
          </div>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION                                                            */
/* ------------------------------------------------------------------ */

export default function Industries() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-labelledby="industries-heading"
      className="relative isolate overflow-hidden"
      style={{
        background: `radial-gradient(60% 85% at 28% 55%,${C.bgMid} 0%,#082244 52%,${C.bgDeep} 100%)`,
      }}
    >
      {/* clip-path definitions */}
      <svg aria-hidden className="absolute h-0 w-0">
        <defs>
          {CLIPS.map((c, i) => (
            <g key={i}>
              <clipPath id={`ind-card-${i}`} clipPathUnits="objectBoundingBox">
                <path d={c.card} />
              </clipPath>
              <clipPath id={`ind-img-${i}`} clipPathUnits="objectBoundingBox">
                <path d={c.img} />
              </clipPath>
            </g>
          ))}
        </defs>
      </svg>

      {/* blurred shelves, top-right */}
      <div
        aria-hidden
        className="absolute right-0 top-0 -z-10 h-[55%] w-[48%] opacity-35"
        style={{
          backgroundImage: `url(${STORE_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(4px)",
          WebkitMaskImage:
            "linear-gradient(270deg,#000 25%,transparent 100%), linear-gradient(180deg,#000 40%,transparent 100%)",
          maskImage:
            "linear-gradient(270deg,#000 25%,transparent 100%), linear-gradient(180deg,#000 40%,transparent 100%)",
          WebkitMaskComposite: "source-in",
          maskComposite: "intersect",
        }}
      />

      {/* ---------- corner shapes ---------- */}
      <motion.svg
        aria-hidden
        viewBox="0 0 330 200"
        className="pointer-events-none absolute left-0 top-0 z-[1] w-[17.8%]"
        initial={reduce ? false : { opacity: 0, x: -70, y: -70 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={VIEW}
        transition={{ duration: 1, ease: EASE }}
      >
        <defs>
          <linearGradient id="ind-tl" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={C.blueLight} />
            <stop offset="1" stopColor={C.blueDark} />
          </linearGradient>
        </defs>
        <motion.g
          animate={reduce ? undefined : { opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M0 0 H132 L0 196Z" fill="url(#ind-tl)" />
          <path d="M128 0 H278 L246 44 Q240 50 226 50 H98 Z" fill="url(#ind-tl)" opacity="0.85" />
        </motion.g>
        <path d="M278 0 L322 0 L290 50" fill="none" stroke={C.blue} strokeOpacity="0.5" strokeWidth="1.5" />
      </motion.svg>

      <motion.svg
        aria-hidden
        viewBox="0 0 320 100"
        className="pointer-events-none absolute bottom-0 left-0 z-[1] w-[17.2%]"
        initial={reduce ? false : { opacity: 0, x: -60, y: 60 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={VIEW}
        transition={{ duration: 1, delay: 0.2, ease: EASE }}
      >
        <defs>
          <linearGradient id="ind-bl" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1458C8" />
            <stop offset="1" stopColor="#0B2E78" />
          </linearGradient>
        </defs>
        <path d="M125 0 H280 L210 100 H65Z" fill="url(#ind-bl)" opacity="0.9" />
        <path d="M300 2 L240 100" stroke={C.blue} strokeOpacity="0.55" strokeWidth="1.5" />
      </motion.svg>

      <motion.svg
        aria-hidden
        viewBox="0 0 335 210"
        className="pointer-events-none absolute bottom-0 right-0 z-[1] w-[18%]"
        initial={reduce ? false : { opacity: 0, x: 70, y: 70 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={VIEW}
        transition={{ duration: 1, delay: 0.3, ease: EASE }}
      >
        <defs>
          <linearGradient id="ind-br" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor={C.blueDark} />
            <stop offset="1" stopColor={C.blueLight} />
          </linearGradient>
          <linearGradient id="ind-br2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0B3F9E" />
            <stop offset="1" stopColor="#1565D8" />
          </linearGradient>
        </defs>
        <motion.path
          d="M335 2 V210 H220Z"
          fill="url(#ind-br)"
          animate={reduce ? undefined : { opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <path d="M0 210 Q25 157 80 152 H260 L220 210Z" fill="url(#ind-br2)" />
        <path d="M335 2 L232 150" stroke={C.blue} strokeOpacity="0.6" strokeWidth="1.5" />
      </motion.svg>

      {/* ---------- STAGE ---------- */}
      <div className="relative z-10 mx-auto max-w-[1920px] lg:aspect-[1855/848]">
        {/* LEFT COLUMN */}
        <motion.div
          variants={stack}
          initial="hidden"
          whileInView="show"
          viewport={VIEW}
          className="px-6 pb-12 pt-16 sm:px-10 lg:absolute lg:left-[4.4%] lg:top-[18.4%] lg:w-[31.5%] lg:p-0"
        >
          {/* eyebrow */}
          <motion.div variants={rise} className="flex items-center gap-4 lg:gap-[1vw]">
            <motion.span
              variants={{
                hidden: { opacity: 0, scale: 0.5, rotate: -20 },
                show: {
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  transition: { type: "spring", stiffness: 240, damping: 14 },
                },
              }}
              className="flex h-[46px] w-[46px] items-center justify-center rounded-[10px] border-[1.5px] lg:h-[2.7vw] lg:w-[2.7vw] lg:min-h-[44px] lg:min-w-[44px]"
              style={{
                borderColor: C.blue,
                background: "linear-gradient(145deg,#0D3171,#08183A)",
                boxShadow: "0 0 16px rgba(46,123,255,.45), inset 0 0 8px rgba(46,123,255,.3)",
              }}
            >
              <ShoppingCart className="h-[52%] w-[52%] text-[#5AA2FF]" strokeWidth={1.9} />
            </motion.span>

            <span className="text-[11px] font-extrabold uppercase tracking-[0.38em] text-[#E8EEF9] sm:text-xs lg:text-[clamp(11px,0.98vw,19px)]">
              Industries We Serve
            </span>

            <motion.span
              aria-hidden
              variants={{
                hidden: { scaleX: 0 },
                show: { scaleX: 1, transition: { duration: 0.8, delay: 0.5, ease: EASE } },
              }}
              style={{
                originX: 0,
                background: `linear-gradient(90deg,${C.blue},transparent)`,
              }}
              className="hidden h-[2px] w-[4.2vw] sm:block"
            />
          </motion.div>

          {/* heading */}
          <motion.h2
            id="industries-heading"
            variants={words}
            className="mt-5 font-extrabold leading-[1.08] tracking-[-0.035em] lg:mt-[0.9vw]"
          >
            <span className="block text-[30px] sm:text-4xl lg:text-[clamp(24px,2.95vw,58px)]">
              <Word>Retail</Word> <Word>Solutions</Word> <Word>for</Word>
            </span>
            <span className="block text-[36px] sm:text-[44px] lg:text-[clamp(28px,3.5vw,68px)]">
              <Word className="text-white">Every</Word>{" "}
              <Word className="text-white">Industry</Word>
            </span>
          </motion.h2>

          {/* paragraph */}
          <motion.p
            variants={rise}
            className="mt-5 max-w-[46ch] text-[15px] leading-[1.45] sm:text-base lg:mt-[1vw] lg:max-w-none lg:text-[clamp(14px,1.2vw,23px)]"
            style={{ color: C.para }}
          >
            Versatile, durable, and space-efficient racking systems designed to
            meet the unique needs of retail and commercial spaces.
          </motion.p>

          {/* features */}
          <ul className="mt-7 space-y-5 lg:mt-[1.6vw] lg:space-y-[1.4vw]">
            {FEATURES.map(({ icon: Icon, label }, i) => (
              <motion.li
                key={label}
                variants={slideIn}
                className="relative flex items-center gap-4 lg:gap-[1.2vw]"
              >
                <motion.span
                  animate={
                    reduce
                      ? undefined
                      : {
                          boxShadow: [
                            "0 0 10px rgba(46,123,255,.25), inset 0 0 8px rgba(46,123,255,.2)",
                            "0 0 20px rgba(46,123,255,.55), inset 0 0 12px rgba(46,123,255,.35)",
                            "0 0 10px rgba(46,123,255,.25), inset 0 0 8px rgba(46,123,255,.2)",
                          ],
                        }
                  }
                  transition={{ duration: 3.4, repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }}
                  whileHover={{ scale: 1.08, rotate: -4 }}
                  className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[12px] border-[1.5px] lg:h-[3.05vw] lg:w-[3.05vw] lg:min-h-[48px] lg:min-w-[48px] lg:rounded-[0.75vw]"
                  style={{
                    borderColor: C.blue,
                    background: "linear-gradient(145deg,#0D3171,#08183A)",
                  }}
                >
                  <Icon className="h-[48%] w-[48%] text-white" strokeWidth={1.7} />
                </motion.span>

                <span className="text-[15px] font-bold text-white sm:text-base lg:text-[clamp(13px,1.04vw,20px)]">
                  {label}
                </span>

                {i < FEATURES.length - 1 && (
                  <motion.span
                    aria-hidden
                    variants={{
                      hidden: { scaleX: 0 },
                      show: {
                        scaleX: 1,
                        transition: { duration: 0.7, delay: 0.7 + i * 0.15 },
                      },
                    }}
                    style={{ originX: 0 }}
                    className="absolute -bottom-[10px] left-[68px] hidden h-px w-[11vw] bg-white/15 sm:block lg:bottom-[-0.55vw] lg:left-[4.5vw]"
                  />
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* CARDS (stacked on mobile, slanted layout on desktop) */}
        <div className="flex flex-col gap-6 px-6 pb-16 sm:px-10 lg:contents">
          {INDUSTRIES.map((item, i) => (
            <Card key={item.href} item={item} index={i} reduce={reduce} />
          ))}
        </div>
      </div>
    </section>
  );
}