
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

/* ------------------------------------------------------------------ */
/* CONFIG                                                              */
/* ------------------------------------------------------------------ */

const C = {
  navy: "#0A2457",
  navyDeep: "#06183E",
  blue: "#0B57E3",
  orange: "#F26A12",
  orangeLight: "#FF8A1F",
  orangeDark: "#E4560A",
};

const SLIDES = [
  {
    src: "/r2zc3tfbbmdoezexsefm.webp",
    alt: "Supermarket aisle with modern white shelving",
    tone: "none",
  },
  {
    src: "/green%20rack.webp",
    alt: "Supermarket aisle with fresh produce shelving",
    tone: "hue-rotate(28deg) saturate(1.1)",
  },
];

const INTERVAL = 6000;
const EASE = [0.22, 1, 0.36, 1];

/* ------------------------------------------------------------------ */
/* BUILT-IN STORE SCENE                                                */
/* ------------------------------------------------------------------ */

const PALETTE = [
  "#e8412f",
  "#f6b21b",
  "#2f8de4",
  "#3bb273",
  "#fff",
  "#f26a12",
  "#c9a36b",
  "#2547a8",
];

function Products({ x, y, w, h, n, seed = 0, gap = 6 }) {
  const bw = (w - gap * (n - 1)) / n;

  return Array.from({ length: n }).map((_, i) => (
    <rect
      key={i}
      x={x + i * (bw + gap)}
      y={y - h * (0.8 + ((i + seed) % 3) * 0.1)}
      width={bw}
      height={h * (0.8 + ((i + seed) % 3) * 0.1)}
      rx="3"
      fill={PALETTE[(i * 3 + seed) % PALETTE.length]}
      stroke="#dfe4ec"
      strokeWidth="1"
    />
  ));
}

function Rack({
  x,
  y,
  w,
  h,
  rows,
  n,
  seed = 0,
  left = true,
}) {
  const step = h / rows;

  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill="#f4f6f9" />

      <rect
        x={left ? x + w - 10 : x}
        y={y - 10}
        width="10"
        height={h + 10}
        fill="#fff"
        stroke="#d5dbe5"
      />

      {Array.from({ length: rows }).map((_, r) => {
        const sy = y + step * (r + 1);

        return (
          <g key={r}>
            <Products
              x={x + 8}
              y={sy - 4}
              w={w - 28}
              h={step - 22}
              n={n}
              seed={seed + r * 2}
              gap={4}
            />

            <rect
              x={x}
              y={sy - 4}
              width={w}
              height="9"
              fill="#ecd7b0"
            />
          </g>
        );
      })}
    </g>
  );
}

function StoreScene() {
  return (
    <svg
      viewBox="0 0 1909 824"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="bnWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6f8fc" />
          <stop offset="1" stopColor="#e3e9f2" />
        </linearGradient>

        <linearGradient id="bnFloor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e6ebf2" />
          <stop offset="1" stopColor="#bfc8d6" />
        </linearGradient>

        <filter id="bnBlur">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      <rect width="1909" height="824" fill="url(#bnWall)" />

      {[
        [350, 6, 120],
        [1410, 6, 120],
        [140, 150, 100],
        [1660, 150, 100],
      ].map(([x, y, w], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width={w}
          height="38"
          rx="6"
          fill="#fff"
        />
      ))}

      <rect y="590" width="1909" height="234" fill="url(#bnFloor)" />

      <ellipse
        cx="954"
        cy="700"
        rx="520"
        ry="60"
        fill="#fff"
        opacity=".45"
      />

      {/* Distant aisles */}

      <g filter="url(#bnBlur)" opacity=".85">
        {[0, 1, 2, 3].map((k) => (
          <g key={k}>
            <Rack
              x={480 + k * 28}
              y={440 + k * 6}
              w={118 - k * 8}
              h={170 - k * 10}
              rows={4}
              n={4}
              seed={k}
            />

            <Rack
              x={1330 + k * 28}
              y={440 + k * 6}
              w={118 - k * 8}
              h={170 - k * 10}
              rows={4}
              n={4}
              seed={k + 3}
              left={false}
            />
          </g>
        ))}
      </g>

      {/* Mid racks */}

      <Rack x={150} y={290} w={175} h={400} rows={5} n={5} seed={1} />

      <Rack
        x={1585}
        y={290}
        w={175}
        h={400}
        rows={5}
        n={5}
        seed={4}
        left={false}
      />

      <Rack x={325} y={345} w={90} h={300} rows={5} n={3} seed={2} />

      <Rack
        x={1500}
        y={345}
        w={90}
        h={300}
        rows={5}
        n={3}
        seed={5}
        left={false}
      />

      {/* Near racks */}

      <Rack x={0} y={190} w={148} h={600} rows={6} n={4} seed={6} />

      <Rack
        x={1765}
        y={190}
        w={144}
        h={600}
        rows={6}
        n={4}
        seed={2}
        left={false}
      />

      {/* Centre gondola */}

      <g>
        <rect
          x="592"
          y="335"
          width="696"
          height="445"
          fill="#f3f5f8"
          stroke="#d9dfe9"
        />

        <rect
          x="938"
          y="335"
          width="4"
          height="445"
          fill="#cfd6e2"
        />

        {[455, 585, 678, 760].map((y) => (
          <rect
            key={y}
            x="592"
            y={y}
            width="696"
            height="11"
            fill="#efdcb8"
          />
        ))}

        <rect x="592" y="332" width="696" height="9" fill="#efdcb8" />

        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={634 + i * 78}
            y={375}
            width="62"
            height="76"
            rx="4"
            fill={i === 3 ? "#f1ece4" : "#d8b98a"}
            stroke="#c5a574"
          />
        ))}

        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect
              x={978 + i * 76}
              y="420"
              width="30"
              height="30"
              rx="4"
              fill="#4a4f5a"
            />

            <ellipse
              cx={993 + i * 76}
              cy="400"
              rx="26"
              ry="32"
              fill="#3f9a45"
            />
          </g>
        ))}

        <Products
          x={612}
          y={583}
          w={320}
          h={100}
          n={9}
          seed={1}
          gap={8}
        />

        <Products
          x={950}
          y={583}
          w={320}
          h={70}
          n={5}
          seed={4}
          gap={10}
        />

        <Products
          x={612}
          y={676}
          w={320}
          h={66}
          n={9}
          seed={0}
          gap={6}
        />

        <Products
          x={950}
          y={676}
          w={320}
          h={66}
          n={9}
          seed={3}
          gap={6}
        />

        {[0, 1, 2, 3].map((i) => (
          <ellipse
            key={i}
            cx={655 + i * 84}
            cy="738"
            rx="38"
            ry="24"
            fill="#d7b98c"
          />
        ))}

        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect
            key={i}
            x={955 + i * 46}
            y="712"
            width="40"
            height="48"
            rx="5"
            fill={i % 2 ? "#f0f2f6" : "#fff"}
            stroke="#d0d7e3"
          />
        ))}

        <rect x="592" y="776" width="706" height="10" fill="#efdcb8" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* SLIDER ANIMATIONS                                                   */
/* ------------------------------------------------------------------ */

const bgVariants = {
  enter: (d) => ({
    opacity: 0,
    x: d > 0 ? 70 : -70,
  }),

  center: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: EASE,
    },
  },

  exit: (d) => ({
    opacity: 0,
    x: d > 0 ? -70 : 70,
    transition: {
      duration: 0.6,
      ease: EASE,
    },
  }),
};

/* ------------------------------------------------------------------ */
/* BANNER                                                              */
/* ------------------------------------------------------------------ */

export default function Banner() {
  const reduce = useReducedMotion();

  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const goTo = (i, d = 1) => {
    setDir(d);
    setCurrent((i + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    if (paused || reduce || SLIDES.length < 2) return;

    const id = setInterval(() => {
      setDir(1);
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, INTERVAL);

    return () => clearInterval(id);
  }, [paused, reduce, current]);

  const slide = SLIDES[current];

  return (
    <section
      className="
        relative isolate w-full overflow-hidden bg-[#eef2f8]
        h-[420px]
        xs:h-[450px]
        sm:h-[480px]
        md:h-[520px]
        lg:aspect-[1909/824] lg:h-auto
      "
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Supermarket shelving showcase"
    >
      {/* ------------------------------------------------------------ */}
      {/* BACKGROUND SLIDES                                            */}
      {/* ------------------------------------------------------------ */}

      <AnimatePresence initial={false} custom={dir}>
        <motion.div
          key={current}
          custom={dir}
          variants={reduce ? undefined : bgVariants}
          initial={reduce ? false : "enter"}
          animate="center"
          exit="exit"
          drag={reduce ? false : "x"}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={(_, info) => {
            if (info.offset.x < -80) goTo(current + 1, 1);
            else if (info.offset.x > 80) goTo(current - 1, -1);
          }}
          className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing"
        >
          <motion.div
            className="h-full w-full"
            initial={{ scale: 1 }}
            animate={reduce ? undefined : { scale: 1.06 }}
            transition={{
              duration: INTERVAL / 1000 + 2,
              ease: "linear",
            }}
            style={{
              filter: slide.tone === "none" ? undefined : slide.tone,
            }}
          >
            {slide.src ? (
              <img
                src={slide.src}
                alt={slide.alt}
                draggable={false}
                className="
                  h-full w-full select-none object-cover
                  object-center
                "
              />
            ) : (
              <StoreScene />
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* WHITE OVERLAY */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg,rgba(255,255,255,.55) 0%,rgba(255,255,255,0) 42%)",
        }}
      />

      {/* ------------------------------------------------------------ */}
      {/* TOP LEFT DECORATION                                          */}
      {/* ------------------------------------------------------------ */}

      <motion.svg
        aria-hidden
        viewBox="0 0 270 170"
        className="
          pointer-events-none absolute left-0 top-0 z-[2]
          w-[30%] min-w-[85px] max-w-[200px]
          sm:w-[22%]
          lg:w-[14.2%] lg:max-w-[300px]
        "
        initial={reduce ? false : { x: -120, y: -80, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: EASE }}
      >
        <path d="M0 0H205C150 50 70 95 0 135Z" fill={C.navy} />

        <path
          d="M262 0H228C158 62 78 112 0 150V160C86 124 178 62 262 0Z"
          fill={C.orange}
        />
      </motion.svg>

      {/* ------------------------------------------------------------ */}
      {/* BOTTOM RIGHT DECORATION                                      */}
      {/* ------------------------------------------------------------ */}

      <motion.svg
        aria-hidden
        viewBox="0 0 460 214"
        className="
          pointer-events-none absolute bottom-0 right-0 z-[2]
          w-[35%] min-w-[125px] max-w-[260px]
          sm:w-[32%]
          lg:w-[24%] lg:max-w-[460px]
        "
        initial={reduce ? false : { x: 140, y: 80, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.15,
          ease: EASE,
        }}
      >
        <path
          d="M460 214V36C385 120 250 178 60 214Z"
          fill={C.navy}
        />

        <path
          d="M460 6C395 96 262 168 20 214H62C252 176 388 120 460 38Z"
          fill={C.orange}
        />
      </motion.svg>

      {/* ------------------------------------------------------------ */}
      {/* TITLE CARD                                                    */}
      {/* ------------------------------------------------------------ */}

      <div
        className="
          absolute bottom-[9%] left-[5%] z-10 w-[90%]
          sm:bottom-[10%] sm:left-[10%] sm:w-[80%]
          md:bottom-[9%] md:left-[15%] md:w-[70%]
          lg:bottom-[7%] lg:left-[19.4%] lg:w-[61.5%]
        "
      >
        {/* CART BADGE + LINES */}

        <div
          className="
            absolute left-1/2 top-0 z-20
            flex w-full -translate-x-1/2 -translate-y-1/2
            items-center justify-center gap-[1%]
          "
        >
          <motion.span
            aria-hidden
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 1,
              duration: 0.8,
              ease: EASE,
            }}
            className="hidden h-[2px] w-[18%] sm:block"
            style={{
              originX: 1,
              background: `linear-gradient(90deg,transparent,${C.navy})`,
            }}
          />

          <motion.span
            initial={reduce ? false : { scale: 0, rotate: -40 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 300,
              damping: 14,
            }}
            className="
              relative flex h-[42px] w-[42px]
              items-center justify-center rounded-full
              text-white shadow-[0_10px_24px_rgba(11,87,227,.45)]
              sm:h-[54px] sm:w-[54px]
              md:h-[62px] md:w-[62px]
              lg:h-[clamp(64px,5.2vw,100px)]
              lg:w-[clamp(64px,5.2vw,100px)]
            "
            style={{
              background: `linear-gradient(145deg,#1b6ff0,${C.navy})`,
            }}
          >
            {!reduce && (
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-full border-2"
                style={{ borderColor: C.blue }}
                animate={{
                  scale: [1, 1.55],
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 1.4,
                }}
              />
            )}

            <ShoppingCart
              className="h-[55%] w-[55%]"
              strokeWidth={1.8}
            />
          </motion.span>

          <motion.span
            aria-hidden
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 1,
              duration: 0.8,
              ease: EASE,
            }}
            className="hidden h-[2px] w-[18%] sm:block"
            style={{
              originX: 0,
              background: `linear-gradient(270deg,transparent,${C.navy})`,
            }}
          />
        </div>

        {/* WHITE CARD */}

        <motion.div
          aria-hidden
          initial={
            reduce
              ? false
              : {
                  opacity: 0,
                  clipPath: "inset(0 50% 0 50%)",
                }
          }
          animate={{
            opacity: 1,
            clipPath: "inset(-20% -10% -20% -10%)",
          }}
          transition={{
            duration: 1,
            ease: EASE,
          }}
          className="
            absolute inset-0 -skew-x-[10deg]
            rounded-[16px] border-2 border-white/60
            bg-white/35
            shadow-[0_24px_50px_rgba(10,36,87,0.18)]
            backdrop-blur-sm
            sm:-skew-x-[14deg] sm:rounded-[20px]
            lg:-skew-x-[18deg] lg:rounded-[1.5vw]
            lg:border-[3px]
          "
        >
          {/* BLUE ACCENTS */}

          <span
            className="
              absolute -left-[2px] -top-[2px]
              h-[42%] w-[26%]
              rounded-tl-[inherit]
              border-l-2 border-t-2
              lg:-left-[3px] lg:-top-[3px]
              lg:border-l-[3px] lg:border-t-[3px]
            "
            style={{ borderColor: C.blue }}
          />

          <span
            className="
              absolute -bottom-[2px] -right-[2px]
              h-[42%] w-[26%]
              rounded-br-[inherit]
              border-b-2 border-r-2
              lg:-bottom-[3px] lg:-right-[3px]
              lg:border-b-[3px] lg:border-r-[3px]
            "
            style={{ borderColor: C.blue }}
          />
        </motion.div>

        {/* SIDE STRIPES */}

        {[
          {
            side: "left-[-2.6%]",
            top: "top-[16%]",
            from: -50,
          },
          {
            side: "right-[-2.6%]",
            top: "top-[22%]",
            from: 50,
          },
        ].map(({ side, top, from }) => (
          <motion.span
            key={side}
            aria-hidden
            initial={
              reduce
                ? false
                : {
                    opacity: 0,
                    x: from,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.9,
              duration: 0.7,
              ease: EASE,
            }}
            className={`
              absolute ${side} ${top}
              hidden h-[50%] items-stretch gap-[0.5vw]
              sm:flex
            `}
          >
            <span
              className="
                block w-[0.45vw] min-w-[4px]
                -skew-x-[18deg]
              "
              style={{ background: C.blue }}
            />

            <span
              className="
                block w-[1.5vw] min-w-[10px]
                -skew-x-[18deg]
              "
              style={{ background: C.orange }}
            />
          </motion.span>
        ))}

        {/* ---------------------------------------------------------- */}
        {/* MAIN HEADING                                               */}
        {/* ---------------------------------------------------------- */}

        <h1
          className="
            relative z-10 flex flex-col
            items-center px-2 pb-4 pt-7
            text-center font-extrabold
            leading-[1.12] tracking-[-0.03em]
            sm:px-3 sm:pb-5 sm:pt-9
            lg:px-[2vw] lg:pb-[1.1vw] lg:pt-[2.2vw]
          "
        >
          <motion.span
            initial={
              reduce
                ? false
                : {
                    opacity: 0,
                    y: 24,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.7,
              duration: 0.8,
              ease: EASE,
            }}
            className="
              text-[clamp(21px,5.8vw,32px)]
              sm:text-[clamp(30px,4.5vw,46px)]
              lg:text-[clamp(40px,4.3vw,86px)]
            "
            style={{ color: C.navy }}
          >
            Supermarket Display Rack
          </motion.span>

          {/* ORANGE HEADING */}

          <span className="relative mt-1 inline-flex items-center justify-center lg:mt-[0.2vw]">
            <motion.span
              aria-hidden
              initial={
                reduce
                  ? false
                  : {
                      clipPath: "inset(0 100% 0 0)",
                    }
              }
              animate={{
                clipPath: "inset(0 0% 0 0)",
              }}
              transition={{
                delay: 1.05,
                duration: 0.9,
                ease: EASE,
              }}
              className="
                absolute inset-0
                -skew-x-[10deg] overflow-hidden
                rounded-[8px]
                shadow-[0_10px_24px_rgba(242,106,18,0.35)]
                sm:-skew-x-[14deg] sm:rounded-[12px]
                lg:-skew-x-[18deg] lg:rounded-[1vw]
              "
              style={{
                background: `linear-gradient(90deg,${C.orangeDark},${C.orangeLight} 55%,${C.orange})`,
              }}
            >
              {!reduce && (
                <motion.span
                  className="
                    absolute inset-y-0 w-[22%]
                    bg-white/35 blur-md
                  "
                  initial={{ x: "-120%" }}
                  animate={{ x: "560%" }}
                  transition={{
                    delay: 2.4,
                    duration: 1.4,
                    repeat: Infinity,
                    repeatDelay: 4.5,
                    ease: "easeInOut",
                  }}
                />
              )}
            </motion.span>

            <motion.span
              initial={
                reduce
                  ? false
                  : {
                      opacity: 0,
                      x: -24,
                    }
              }
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 1.35,
                duration: 0.7,
                ease: EASE,
              }}
              className="
                relative px-5 py-1
                text-[clamp(22px,6vw,34px)]
                italic text-white
                sm:px-10 sm:py-1
                sm:text-[clamp(32px,4.8vw,48px)]
                lg:px-[4.4vw] lg:py-[0.4vw]
                lg:text-[clamp(40px,4.4vw,75px)]
              "
            >
              Manufacturer in Delhi
            </motion.span>
          </span>
        </h1>
      </div>

      {/* ------------------------------------------------------------ */}
      {/* SLIDER ARROWS                                                 */}
      {/* ------------------------------------------------------------ */}

      {[
        {
          side: "left",
          label: "Previous slide",
          Icon: ChevronLeft,
          bg: C.navy,
          onClick: () => goTo(current - 1, -1),
        },
        {
          side: "right",
          label: "Next slide",
          Icon: ChevronRight,
          bg: C.orange,
          onClick: () => goTo(current + 1, 1),
        },
      ].map(({ side, label, Icon, bg, onClick }) => (
        <motion.button
          key={side}
          type="button"
          onClick={onClick}
          aria-label={label}
          initial={
            reduce
              ? false
              : {
                  opacity: 0,
                  x: side === "left" ? -24 : 24,
                }
          }
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 1.2,
            duration: 0.5,
          }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.9 }}
          className={`
            absolute top-[48%] z-30
            flex h-[34px] w-[34px]
            -translate-y-1/2
            items-center justify-center
            rounded-full border-2 border-white
            text-white
            shadow-[0_8px_22px_rgba(10,36,87,0.35)]
            sm:h-[40px] sm:w-[40px]
            md:h-[46px] md:w-[46px]
            lg:top-[52%]
            lg:h-[clamp(46px,3.8vw,74px)]
            lg:w-[clamp(46px,3.8vw,74px)]
            ${
              side === "left"
                ? "left-2 sm:left-4 lg:left-[3.2%]"
                : "right-2 sm:right-4 lg:right-[3.2%]"
            }
          `}
          style={{ background: bg }}
        >
          <Icon
            className="h-[58%] w-[58%]"
            strokeWidth={3.2}
          />
        </motion.button>
      ))}
    </section>
  );
}
