
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Factory,
  MapPin,
  Play,
  Truck,
  Wrench,
  Award,
} from "lucide-react";

const FEATURES = [
  { icon: Factory, label: ["In-House", "Manufacturing"] },
  { icon: Award, label: ["High-Quality", "& Durable"] },
  { icon: Wrench, label: ["Custom", "Solutions"] },
  { icon: Truck, label: ["On-Time", "Execution"] },
];

// Replace demo images with your actual images
const GALLERY = {
  main: "/r2zc3tfbbmdoezexsefm.webp.webp",
  top: "https://picsum.photos/seed/msc-top/800/600",
  bottom: "https://picsum.photos/seed/msc-bottom/800/600",
};

const UNITS = [
  { name: "", src: "https://picsum.photos/seed/unit-1/600/400" },
  { name: "", src: "https://picsum.photos/seed/unit-2/600/400" },
  { name: "", src: "https://picsum.photos/seed/unit-3/600/400" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const textStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

// Skewed photo tile
function SkewTile({
  src,
  alt,
  className = "",
  initial,
  delay = 0,
  hoverZoom = true,
}) {
  return (
    <motion.div
      initial={initial}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`absolute ${className}`}
    >
      <div className="-skew-x-[8deg] overflow-hidden rounded-2xl border-[5px] border-white bg-white shadow-2xl">
        <div className="skew-x-[8deg] h-full w-full scale-110 overflow-hidden">
          <motion.img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            whileHover={hoverZoom ? { scale: 1.06 } : undefined}
            transition={{ duration: 0.6 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[var(--background-light)] to-[var(--background-blue)]">

      {/* =====================================
          DECORATIVE BACKGROUND ELEMENTS
      ===================================== */}

      {/* Blue floating shape */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[30%] top-0 h-16 w-72 -skew-x-12 rounded-b-lg bg-[var(--primary)]/10 blur-[1px]"
      />

      {/* Small orange accent */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[26%] left-[46%] h-14 w-80 -skew-x-12 rounded-t-lg bg-[var(--primary-light)]"
      />

      {/* Decorative dots */}
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="pointer-events-none absolute right-6 top-[52%] grid grid-cols-4 gap-2.5"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-1.5 rounded-full ${
              i % 4 === 0
                ? "bg-[var(--accent)]"
                : "bg-[var(--primary)]/25"
            }`}
          />
        ))}
      </motion.div>

      {/* =====================================
          MAIN ABOUT CONTENT
      ===================================== */}

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 
      pb-12 pt-14 md:px-10 lg:grid-cols-2 lg:pt-20">

        {/* LEFT: TEXT CONTENT */}

        <motion.div
          variants={textStagger}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >

          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4"
          >
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-[var(--primary)] md:text-sm">
              India&apos;s Trusted
            </span>

            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ originX: 0 }}
              className="h-[2px] w-24 bg-gradient-to-r from-[var(--primary)] to-transparent"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-[var(--heading-color)] md:text-5xl"
          >
            Supermarket Display Racks

            <span className="block text-[var(--primary)]">
              Manufacturer in India
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-5 text-sm leading-relaxed text-[var(--paragraph-color)] md:text-base"
          >
            We are one of the leading organisations engaged in manufacturing and
            supplying supermarket display racks, shelving systems, and retail
            fixtures. All the products are manufactured in-house with the help of
            the latest machinery and equipment.
          </motion.p>

          {/* =====================================
              FEATURES
          ===================================== */}

          <motion.div
            variants={fadeUp}
            className="mt-7 flex max-w-lg items-center"
          >
            {FEATURES.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label.join(" ")}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6 + i * 0.12,
                  duration: 0.5,
                }}
                className="flex flex-1 items-center"
              >
                <div className="flex flex-1 flex-col items-center text-center">

                  <motion.div
                    whileHover={{ y: -4, rotate: -6 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <Icon
                      size={30}
                      strokeWidth={1.8}
                      className="text-[var(--primary)]"
                    />
                  </motion.div>

                  <span className="mt-2 text-xs font-semibold leading-tight text-[var(--heading-color)]">
                    {label[0]}
                    <br />
                    {label[1]}
                  </span>

                </div>

                {i < FEATURES.length - 1 && (
                  <span className="mx-1 h-12 w-px bg-[var(--border)]" />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* =====================================
              BUTTONS
          ===================================== */}

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-4"
          >

            {/* About Button */}
            <motion.a
              href="/about"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 rounded-full bg-[var(--primary)] 
              py-3 pl-6 pr-3 text-sm font-bold text-white 
              shadow-[0_8px_22px_rgba(0,81,254,0.18)] transition-all hover:bg-[var(--primary-hover)] hover:shadow-xl"
            >
              More About Us

              <span className="flex h-8 w-8 items-center justify-center rounded-full
               bg-white text-[var(--primary)]">
                <ArrowRight size={16} />
              </span>
            </motion.a>

            {/* Presentation Button */}
            <motion.a
              href="/presentation.pdf"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 rounded-full border-2 border-[var(--primary)] bg-white px-6 py-3 text-sm font-bold text-[var(--primary)] transition-all hover:bg-[var(--primary-light)]"
            >
              <Play
                size={16}
                className="fill-[var(--primary)] text-[var(--primary)]"
              />

              Presentation
            </motion.a>

          </motion.div>
        </motion.div>

        {/* =====================================
            RIGHT: PHOTO COLLAGE
        ===================================== */}

        <div className="relative h-[340px] md:h-[420px]">

          {/* Main Image */}
          <SkewTile
            src="/r2zc3tfbbmdoezexsefm.webp"
            alt="Supermarket display racks showroom"
            className="left-0 top-[12%] h-[70%] w-[88%]"
            initial={{ opacity: 0, x: -60, y: 20 }}
            delay={0.2}
          />

          {/* Top Right Image */}
          <SkewTile
            src={GALLERY.top}
            alt="Wooden retail shelving"
            className="right-0 top-0 h-[38%] w-[48%]"
            initial={{ opacity: 0, x: 60, y: -20 }}
            delay={0.45}
          />

          {/* Bottom Right Image */}
          <SkewTile
            src={GALLERY.bottom}
            alt="Gondola shelving units"
            className="bottom-0 right-[2%] h-[40%] w-[46%]"
            initial={{ opacity: 0, x: 60, y: 20 }}
            delay={0.65}
          />

        </div>
      </div>

      {/* =====================================
          MANUFACTURING UNITS SECTION
      ===================================== */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >

        <div
          className="relative bg-[var(--primary)] px-6 pb-8 pt-10 md:px-10 md:pb-10"
          style={{
            clipPath: "polygon(0 0, 97% 0, 100% 100%, 0 100%)",
          }}
        >

          {/* Orange diagonal accent */}
          <div
            className="absolute -left-2 bottom-0 top-8 w-16 bg-[var(--accent)]"
            style={{
              clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0 100%)",
            }}
          />

          <div className="relative mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:gap-8">

            {/* Section Heading */}
            <div className="flex items-center gap-4 md:min-w-[200px] md:border-r
             md:border-white/20 md:pr-8">

            <h3 className="text-lg font-bold !text-white md:text-xl">
                Our Manufacturing Units
              </h3>

            </div>

            {/* Manufacturing Gallery */}
            <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-3">

              {UNITS.map((unit, i) => (
                <motion.div
                  key={unit.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.15,
                    duration: 0.5,
                  }}
                  whileHover={{ y: -6 }}
                  className="group overflow-hidden rounded-xl border-2 border-white/80 bg-white shadow-lg"
                >

                  {/* Unit Image */}
                  <div className="h-24 overflow-hidden md:h-28">
                    <img
                      src={unit.src}
                      alt={unit.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Unit Name */}
                  <div className="flex items-center gap-2 bg-[var(--background-dark)] px-3 py-2 text-xs font-semibold text-white">
                    {/* <MapPin
                      size={14}
                      className="shrink-0 text-[var(--accent)]"
                    /> */}

                    {unit.name}
                  </div>

                </motion.div>
              ))}

            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
