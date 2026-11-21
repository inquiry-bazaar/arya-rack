"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Award,
  Layers,
  Settings,
  ShoppingCart,
  Users,
  Wrench,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  CONFIG                                                             */
/* ------------------------------------------------------------------ */

const C = {
  navy: "#0A2457",
  blue: "#1B5FB4",
  blueDark: "#0F4C9C",
  orange: "#F26A12",
  orangeLight: "#FF8A1F",
  body: "#3F4A63",
  divider: "#C9D1DF",
};

// Put your images in /public/about/
const IMG = {
  factory: "/imgi_148_supermarket-rack-1.webp", // laser-cutting / factory photo
  retail: "/imgi_151_display-rack.webp", // supermarket aisle with shelves
  storeBlur: "/r2zc3tfbbmdoezexsefm.webp.webp", // optional blurred background
};

const FEATURES = [
  { icon: Award, label: ["High-Quality", "Manufacturing"] },
  { icon: Layers, label: ["Modular &", "Flexible Designs"] },
  { icon: Wrench, label: ["Customized", "Solutions"] },
  { icon: Users, label: ["Expert", "Team"] },
];

const EASE = [0.22, 1, 0.36, 1];
const VIEW = { once: true, amount: 0.25 };

/* ------------------------------------------------------------------ */
/*  ROUNDED-POLYGON CLIP PATHS (objectBoundingBox units 0..1)          */
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

// Leaning parallelogram (factory photo)
const TOP_PATH = roundedPath(
  [[0.26, 0], [1, 0], [0.82, 1], [0, 1]],
  [0.08, 0.06, 0.07, 0.07]
);
// Trapezoid with heavily rounded top (retail photo)
const BOTTOM_PATH = roundedPath(
  [[0.144, 0], [0.79, 0], [1, 1], [0, 1]],
  [0.2, 0.2, 0.09, 0.09]
);

/* ------------------------------------------------------------------ */
/*  VARIANTS                                                           */
/* ------------------------------------------------------------------ */

const stack = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const words = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const word = {
  hidden: { y: "115%" },
  show: { y: "0%", transition: { duration: 0.75, ease: EASE } },
};

const pop = {
  hidden: { opacity: 0, y: 22, scale: 0.85 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 240, damping: 18 },
  },
};

/* ------------------------------------------------------------------ */
/*  PIECES                                                             */
/* ------------------------------------------------------------------ */

function Word({ children, orange = false }) {
  return (
    <span className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em]">
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

/** Framed photo with rounded slanted clip + parallax + entrance */
function Tile({ clipId, src, alt, className, entrance, delay, px, py }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={entrance}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={VIEW}
      transition={{ duration: 1, delay, ease: EASE }}
    >
      <motion.div style={{ x: px, y: py }} className="h-full w-full">
        <div
          className="h-full w-full"
          style={{ filter: "drop-shadow(0 18px 26px rgba(10,36,87,0.28))" }}
        >
          {/* white frame */}
          <div
            className="relative h-full w-full bg-white"
            style={{ clipPath: `url(#${clipId})` }}
          >
            {/* photo */}
            <div
              className="absolute inset-[7px] overflow-hidden"
              style={{ clipPath: `url(#${clipId})` }}
            >
              <motion.img
                src={src}
                alt={alt}
                className="h-full w-full object-cover"
                initial={{ scale: 1.18 }}
                whileInView={{ scale: 1 }}
                viewport={VIEW}
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 1.4, ease: EASE }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/** Floating glass label chip */
function Chip({
  icon: Icon,
  iconColor,
  lines,
  className,
  delay,
  x,
  y,
  reduce,
  floatDuration = 5,
}) {
  return (
    <motion.div
      className={`absolute z-[5] ${className}`}
      initial={{ opacity: 0, scale: 0.7, y: 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={VIEW}
      transition={{ delay, type: "spring", stiffness: 210, damping: 17 }}
    >
      <motion.div style={{ x, y }} className="h-full w-full">
        <motion.div
          animate={reduce ? undefined : { y: [0, -9, 0] }}
          transition={{
            duration: floatDuration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative flex h-full w-full items-center gap-[5%] pl-[9%] pr-[4%]"
        >
          <span
            aria-hidden
            className="absolute inset-0 -skew-x-[10deg] rounded-[26px] bg-white/85 shadow-[0_14px_30px_rgba(10,36,87,0.18)] ring-1 ring-white backdrop-blur-md"
          />
          <Icon
            strokeWidth={1.8}
            style={{ color: iconColor }}
            className="relative h-[clamp(24px,2.4vw,46px)] w-[clamp(24px,2.4vw,46px)] shrink-0"
          />
          <span
            className="relative text-[clamp(10px,1.08vw,21px)] font-bold leading-[1.2]"
            style={{ color: C.navy }}
          >
            {lines[0]}
            <br />
            {lines[1]}
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  ABOUT                                                              */
/* ------------------------------------------------------------------ */

export default function About() {
  const reduce = useReducedMotion();

  // mouse parallax for the collage
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 16 });
  const sy = useSpring(my, { stiffness: 70, damping: 16 });

  const topX = useTransform(sx, [-0.5, 0.5], [12, -12]);
  const topY = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const botX = useTransform(sx, [-0.5, 0.5], [-16, 16]);
  const botY = useTransform(sy, [-0.5, 0.5], [-10, 10]);
  const chipX = useTransform(sx, [-0.5, 0.5], [-26, 26]);
  const chipY = useTransform(sy, [-0.5, 0.5], [-16, 16]);
  const bgX = useTransform(sx, [-0.5, 0.5], [8, -8]);

  const onMove = (e) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        background:
          "linear-gradient(110deg,#FFFFFF 0%,#F7F9FD 48%,#EDF2FA 100%)",
      }}
    >
      {/* clip-path definitions */}
      <svg aria-hidden className="absolute h-0 w-0">
        <defs>
          <clipPath id="about-clip-top" clipPathUnits="objectBoundingBox">
            <path d={TOP_PATH} />
          </clipPath>
          <clipPath id="about-clip-bottom" clipPathUnits="objectBoundingBox">
            <path d={BOTTOM_PATH} />
          </clipPath>
        </defs>
      </svg>

      {/* blurred store photo, fading to the right */}
      <div
        aria-hidden
        className="absolute left-0 top-0 -z-10 h-full w-[48%] opacity-60"
        style={{
          backgroundImage: `url(${IMG.storeBlur})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(6px)",
          WebkitMaskImage: "linear-gradient(90deg,#000 20%,transparent 100%)",
          maskImage: "linear-gradient(90deg,#000 20%,transparent 100%)",
        }}
      />

      {/* orange swoosh, bottom right */}
      <motion.svg
        aria-hidden
        viewBox="0 0 340 200"
        preserveAspectRatio="xMaxYMax meet"
        className="pointer-events-none absolute bottom-0 right-0 -z-[5] hidden w-[19%] lg:block"
        initial={reduce ? false : { opacity: 0, x: 120, y: 40 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={VIEW}
        transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
      >
        <defs>
          <linearGradient id="about-swoosh" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor={C.orange} stopOpacity="0.2" />
            <stop offset="0.55" stopColor={C.orange} />
            <stop offset="1" stopColor={C.orangeLight} />
          </linearGradient>
        </defs>
        <path
          d="M0 196 C100 120 230 50 340 0 L340 66 C240 100 110 150 0 196Z"
          fill="url(#about-swoosh)"
        />
      </motion.svg>

      <div className="relative mx-auto grid max-w-[1920px] lg:grid-cols-[47.2%_1fr]">
        {/* ============================================================ */}
        {/*  LEFT: COLLAGE                                                */}
        {/* ============================================================ */}
        <div
          className="relative mx-auto aspect-[860/864] w-full max-lg:order-2 max-lg:max-w-[600px]"
          onMouseMove={onMove}
          onMouseLeave={onLeave}
        >
          {/* background shapes */}
          <svg
            aria-hidden
            viewBox="0 0 860 864"
            className="absolute inset-0 h-full w-full overflow-visible"
          >
            <defs>
              <linearGradient id="about-blue" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#2468C4" />
                <stop offset="1" stopColor={C.blueDark} />
              </linearGradient>
              <linearGradient id="about-orange" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor={C.orangeLight} />
                <stop offset="1" stopColor={C.orange} />
              </linearGradient>
            </defs>

            {/* big blue shape */}
            <motion.g
              style={{ x: reduce ? 0 : bgX }}
            >
              <motion.path
                d="M735 380 L808 525 Q832 590 800 640 L724 782 Q690 840 630 864 L250 864 L330 700 L600 590 Z"
                fill="url(#about-blue)"
                initial={reduce ? false : { opacity: 0, x: 70, y: 70 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={VIEW}
                transition={{ duration: 1.1, delay: 0.1, ease: EASE }}
              />
            </motion.g>

            {/* orange left band */}
            <motion.path
              d="M232 336 C172 332 132 362 100 412 L0 585 L0 735 L112 522 L220 405 Z"
              fill="url(#about-orange)"
              initial={reduce ? false : { opacity: 0, x: -90 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEW}
              transition={{ duration: 1, delay: 0.25, ease: EASE }}
            />

            {/* orange top stripe */}
            <motion.path
              d="M578 0 L678 0 L634 92 L542 92 Z"
              fill="url(#about-orange)"
              initial={reduce ? false : { opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
            />
          </svg>

          {/* factory photo */}
          <Tile
            clipId="about-clip-top"
            src={IMG.factory}
            alt="Laser cutting machine in our manufacturing facility"
            className="left-[17.4%] top-[11.2%] h-[57.9%] w-[76.7%]"
            entrance={{ opacity: 0, x: 90, y: -40, scale: 0.94 }}
            delay={0.3}
            px={reduce ? 0 : topX}
            py={reduce ? 0 : topY}
          />

          {/* retail photo */}
          <Tile
            clipId="about-clip-bottom"
            src={IMG.retail}
            alt="Supermarket aisle with modular display shelving"
            className="left-[1.2%] top-[49.8%] h-[42.2%] w-[64.5%]"
            entrance={{ opacity: 0, x: -80, y: 50, scale: 0.94 }}
            delay={0.5}
            px={reduce ? 0 : botX}
            py={reduce ? 0 : botY}
          />

          {/* chips */}
          <Chip
            icon={Settings}
            iconColor={C.navy}
            lines={["In-House", "Manufacturing"]}
            className="left-[16.9%] top-[23.7%] h-[9.3%] w-[30.8%] max-sm:h-[11%] max-sm:w-[38%]"
            delay={0.9}
            x={reduce ? 0 : chipX}
            y={reduce ? 0 : chipY}
            reduce={reduce}
            floatDuration={5.2}
          />
          <Chip
            icon={ShoppingCart}
            iconColor={C.orange}
            lines={["Retail-Ready", "Solutions"]}
            className="left-[50.6%] top-[75.2%] h-[9.3%] w-[30.8%] max-sm:h-[11%] max-sm:w-[38%]"
            delay={1.1}
            x={reduce ? 0 : chipX}
            y={reduce ? 0 : chipY}
            reduce={reduce}
            floatDuration={6}
          />
        </div>

        {/* ============================================================ */}
        {/*  RIGHT: CONTENT                                               */}
        {/* ============================================================ */}
        <motion.div
          variants={stack}
          initial="hidden"
          whileInView="show"
          viewport={VIEW}
          className="flex flex-col justify-center px-6 pb-4 pt-14 sm:px-10 lg:py-0 lg:pl-[0.8%] lg:pr-[3.2%]"
        >
          {/* Eyebrow */}
          <motion.div variants={rise} className="flex items-center gap-[1.2vw] max-lg:gap-4">
            <span
              className="text-[13px] font-extrabold uppercase tracking-[0.38em] sm:text-sm lg:text-[clamp(13px,1.2vw,23px)]"
              style={{ color: C.navy }}
            >
              About Us
            </span>
            <motion.span
              variants={{
                hidden: { scaleX: 0 },
                show: { scaleX: 1, transition: { duration: 0.8, delay: 0.4, ease: EASE } },
              }}
              style={{
                originX: 0,
                background: `linear-gradient(90deg,${C.orange},${C.orangeLight})`,
              }}
              className="h-[3px] w-[4.5vw] min-w-[48px] rounded-full"
            />
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={words}
            className="mt-[2.4vw] text-[clamp(30px,3.65vw,72px)] font-extrabold leading-[1.1] tracking-[-0.035em] max-lg:mt-5 xl:whitespace-nowrap"
          >
            <Word>Built</Word> <Word>for</Word> <Word orange>Modern</Word>{" "}
            <Word orange>Retail</Word> <Word orange>Spaces</Word>
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            variants={rise}
            className="mt-[2.2vw] max-w-[50ch] text-[15px] leading-[1.45] sm:text-base lg:max-w-[47vw] lg:text-[clamp(14px,1.28vw,25px)] max-lg:mt-5"
            style={{ color: C.body }}
          >
            We are a leading manufacturer and supplier of supermarket display
            racks, shelving systems, and retail fixtures in India. With in-house
            manufacturing and a focus on quality, durability, and smart design,
            we help retailers create organized, efficient, and visually
            appealing store spaces.
          </motion.p>

          {/* Features */}
          <motion.div
            variants={rise}
            className="mt-[3.6vw] flex flex-wrap items-center justify-between gap-x-4 gap-y-8 lg:flex-nowrap lg:gap-[1.2vw] max-lg:mt-9"
          >
            {FEATURES.map(({ icon: Icon, label }, i) => (
              <div key={label.join(" ")} className="contents">
                <motion.div
                  variants={pop}
                  className="flex flex-col items-center text-center"
                >
                  <motion.span
                    whileHover={{ y: -5, rotate: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 14 }}
                    className="block"
                  >
                    <Icon
                      strokeWidth={1.5}
                      style={{ color: C.orange }}
                      className="h-[44px] w-[44px] lg:h-[clamp(40px,3.8vw,74px)] lg:w-[clamp(40px,3.8vw,74px)]"
                    />
                  </motion.span>
                  <span
                    className="mt-[0.9vw] text-[12px] font-bold leading-[1.25] sm:text-sm max-lg:mt-2 lg:text-[clamp(12px,1.12vw,22px)]"
                    style={{ color: C.navy }}
                  >
                    {label[0]}
                    <br />
                    {label[1]}
                  </span>
                </motion.div>

                {i < FEATURES.length - 1 && (
                  <motion.span
                    aria-hidden
                    variants={{
                      hidden: { scaleY: 0 },
                      show: {
                        scaleY: 1,
                        transition: { duration: 0.6, delay: 0.5 + i * 0.12 },
                      },
                    }}
                    style={{ background: C.divider }}
                    className="hidden h-[clamp(60px,5.6vw,108px)] w-px lg:block"
                  />
                )}
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={rise} className="mt-[3.8vw] max-lg:mt-9">
            <motion.a
              href="/about"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative inline-flex h-[58px] items-center gap-[2.6vw] overflow-hidden rounded-full pl-8 pr-[6px] text-[16px] font-bold text-white shadow-[0_14px_30px_rgba(242,106,18,0.35)] max-lg:gap-8 lg:h-[clamp(58px,4vw,78px)] lg:pl-[2.8vw] lg:text-[clamp(16px,1.3vw,25px)]"
              style={{
                background: `linear-gradient(90deg,#F4620C,${C.orangeLight})`,
              }}
            >
              More About Us
              <span className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white lg:h-[clamp(46px,3.3vw,64px)] lg:w-[clamp(46px,3.3vw,64px)]">
                <ArrowRight
                  strokeWidth={2.6}
                  style={{ color: C.navy }}
                  className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 lg:h-[clamp(22px,1.7vw,32px)] lg:w-[clamp(22px,1.7vw,32px)]"
                />
              </span>
              {/* shine */}
              <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/4 -skew-x-[20deg] bg-white/30 opacity-0 blur-sm transition-all duration-700 group-hover:left-[110%] group-hover:opacity-100" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}