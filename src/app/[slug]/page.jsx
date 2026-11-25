"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronRight,
  Layers,
  MessageCircle,
  PackageCheck,
  Paintbrush,
  Phone,
  Ruler,
  Send,
  ShieldCheck,
  Star,
  Timer,
  X,
  ZoomIn,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  PRODUCT DATA  (source: supermarketdisplayrack.in/product/end-display-racks) */
/* ------------------------------------------------------------------ */

// Primary = navy #0C2961  |  Secondary = orange
const C = {
  navy: "#0C2961", // primary
  navyLight: "#254A85", // lighter tint of the primary (gradient partner)
  navyDeep: "#182635",
  orange: "#E75B0C", // secondary
  orangeLight: "#D99A70",
  ink: "black",
  muted: "#68727D",
  bg: "#F7F7F5",
};

const BRAND = {
  name: "Arya Industry",
  phone: "+91-8587901795",
  tel: "tel:+918587901795",
  whatsapp: "918587901795",
  email: "aryaindustry36@gmail.com",
};

const PRODUCT = {
  name: "End Display Rack",
  category: "Supermarket Display Rack",
  categoryHref: "/products/supermarket-display-rack",
  image:
    "https://supermarketdisplayrack.in/wp-content/uploads/2025/01/arya-display-rack-25.webp",
  summary:
    "A premium end-cap rack that puts promotional and fast-moving products right where shoppers turn. Four tiered shelves, a strong backsheet and a rust-resistant powder-coated finish keep it stable, tidy and low-maintenance in busy stores.",
};

// Shelf depths in inches, shelf 1 → 4, exactly as listed on the product page.
// (The 4th depth reads 1″ on the source page – edit here if that needs correcting.)
const DEPTHS = [18, 15, 12, 1];

const SPECS = [
  ["Number of Shelves", "4 Nos"],
  ["Height", "5 feet (Ht-5)"],
  ["Backsheet", "Included for stability"],
  ["Panel with Beading", "Yes"],
  ["Stopper", "Secures items"],
  ["Shelf Depth (1st to 4th)", "18″ · 15″ · 12″ · 1″"],
  ["Finish", "Powder-coated for durability"],
  ["Applications", "Retail stores, supermarkets, showrooms"],
  ["Durability", "Long-lasting, low maintenance"],
];

const RELATED = [
  { name: "Wooden Center Rack", href: "/products/wooden-center-rack", icon: Layers },
  { name: "Store Display Racks", href: "/products/store-display-racks", icon: Layers },
  { name: "Supermarket Storage Racks", href: "/products/supermarket-storage-racks", icon: PackageCheck },
  { name: "Wall Faced Side Display Rack", href: "/products/wall-faced-side-display-racks", icon: ShieldCheck },
];

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "anatomy", label: "Anatomy" },
  { id: "specs", label: "Specifications" },
  { id: "enquiry", label: "Enquiry" },
  { id: "related", label: "Related Products" },
];

const EASE = [0.22, 1, 0.36, 1];
const VIEW = { once: true, amount: 0.2 };
const waLink = (text = "") =>
  `https://wa.me/${BRAND.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

const inputCls =
  "w-full rounded-xl border border-slate-200 bg-[#F7F8F8] px-4 py-3.5 text-[15px] font-semibold outline-none transition focus:border-[#0C2961] focus:bg-white focus:shadow-[0_0_0_4px_rgba(12,41,97,0.12)]";

/* ------------------------------------------------------------------ */
/*  SMALL HELPERS                                                      */
/* ------------------------------------------------------------------ */

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
                backgroundImage: `linear-gradient(90deg,${C.navy},${C.navyLight})`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }
            : undefined
        }
      >
        {children}
      </motion.span>
    </span>
  );
}

function Reveal({ children, delay = 0, y = 18, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEW}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

function SectionHead({ eyebrow, children, center = false }) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
        <span
          className="h-[3px] w-10 rounded-full"
          style={{ background: `linear-gradient(90deg,${C.orange},${C.orangeLight})` }}
        />
        <span className="text-xs font-extrabold uppercase tracking-[0.3em]" style={{ color: C.navy }}>
          {eyebrow}
        </span>
      </div>
      <h2
        className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-4xl lg:text-[44px]"
        style={{ color: C.ink }}
      >
        {children}
      </h2>
    </Reveal>
  );
}

const Accent = ({ children }) => <span>{children}</span>;

/* ------------------------------------------------------------------ */
/*  BLUEPRINT (light side-view schematic driven by the real depths)    */
/* ------------------------------------------------------------------ */

const PX = 12; // px per inch
const X0 = 114;
const Y0 = 330;
const STEP = 84;

function Blueprint({ active, setActive }) {
  return (
    <motion.svg
      viewBox="0 0 560 440"
      initial="hidden"
      whileInView="show"
      viewport={VIEW}
      className="h-auto w-full"
      role="img"
      aria-label="Side view of the End Display Rack showing the depth of each of its four shelves"
    >
      <defs>
        <pattern id="bp-grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="rgba(12,41,97,.07)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="560" height="440" fill="url(#bp-grid)" />

      {/* floor */}
      <line x1="30" y1="392" x2="540" y2="392" stroke="rgba(12,41,97,.4)" strokeWidth="2" />

      {/* height dimension */}
      <g stroke="rgba(12,41,97,.55)" strokeWidth="1.5" fill="none">
        <path d="M62 40V392" />
        <path d="M55 50L62 38L69 50" />
        <path d="M55 382L62 394L69 382" />
      </g>
      <text
        x="44"
        y="216"
        transform="rotate(-90 44 216)"
        textAnchor="middle"
        fill={C.navy}
        fontSize="14"
        fontWeight="700"
      >
        5 ft (Ht-5)
      </text>

      {/* backsheet */}
      <motion.rect
        x="100"
        y="40"
        width="14"
        height="352"
        rx="3"
        fill={C.navyLight}
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
        }}
      />
      <text x="107" y="28" textAnchor="middle" fontSize="11" fill="rgba(12,41,97,.6)" letterSpacing="1.5">
        BACKSHEET
      </text>

      {DEPTHS.map((d, i) => {
        const len = d * PX;
        const y = Y0 - i * STEP;
        const on = active === i;
        const color = on ? C.orange : C.navy;
        return (
          <g
            key={i}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            className="cursor-pointer"
          >
            <rect x="100" y={y - 28} width="440" height="76" fill="transparent" />

            {/* bracket */}
            <path
              d={`M${X0} ${y + 9}H${X0 + Math.min(len, 46)}L${X0} ${y + 43}Z`}
              fill="rgba(12,41,97,.12)"
            />

            {/* products */}
            {Array.from({ length: Math.floor(len / 50) }).map((_, k) => (
              <motion.rect
                key={k}
                x={X0 + 12 + k * 50}
                y={y - 24}
                width="34"
                height="24"
                rx="4"
                className="transition-colors duration-300"
                style={{ fill: on ? "rgba(196,122,74,.35)" : "rgba(12,41,97,.18)" }}
                variants={{
                  hidden: { opacity: 0, y: -18 },
                  show: { opacity: 1, y: 0, transition: { delay: 0.9 + i * 0.15 + k * 0.08 } },
                }}
              />
            ))}

            {/* shelf plate */}
            <motion.rect
              x={X0}
              y={y}
              height="9"
              rx="3"
              className="transition-colors duration-300"
              style={{ fill: color }}
              variants={{
                hidden: { width: 0 },
                show: { width: len, transition: { delay: 0.4 + i * 0.15, duration: 0.8, ease: EASE } },
              }}
            />

            {/* stopper lip */}
            <motion.rect
              x={X0 + len - 5}
              y={y - 16}
              width="5"
              height="16"
              rx="2"
              className="transition-colors duration-300"
              style={{ fill: color }}
              variants={{
                hidden: { opacity: 0, x: -(len - 5) },
                show: { opacity: 1, x: 0, transition: { delay: 0.9 + i * 0.15, duration: 0.4 } },
              }}
            />

            {/* depth dimension */}
            <line
              x1={X0}
              x2={X0 + len}
              y1={y + 26}
              y2={y + 26}
              strokeDasharray="4 4"
              strokeWidth="1.5"
              className="transition-colors duration-300"
              style={{ stroke: on ? C.orange : "rgba(12,41,97,.4)" }}
            />
            <text
              x={len > 60 ? X0 + len / 2 : X0 + len + 10}
              y={len > 60 ? y + 42 : y + 30}
              textAnchor={len > 60 ? "middle" : "start"}
              fontSize="13"
              fontWeight="700"
              className="transition-colors duration-300"
              style={{ fill: on ? C.orange : C.navy }}
            >
              {d}″
            </text>

            <text x="540" y={y + 7} textAnchor="end" fontSize="11" letterSpacing="2" fill="rgba(12,41,97,.5)">
              SHELF {i + 1}
            </text>
          </g>
        );
      })}
    </motion.svg>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function ProductPage() {
  const reduce = useReducedMotion();

  const [zoom, setZoom] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const [section, setSection] = useState("");
  const [shelf, setShelf] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "", qty: "", msg: "" });
  const [sent, setSent] = useState(false);

  /* sticky nav visibility */
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setShowBar(v > 560));

  /* scroll-spy */
  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setSection(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* lightbox ESC */
  useEffect(() => {
    if (!zoom) return;
    const onKey = (e) => e.key === "Escape" && setZoom(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoom]);

  /* hero tilt */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 16 });
  const sy = useSpring(my, { stiffness: 80, damping: 16 });
  const rotY = useTransform(sx, [-0.5, 0.5], [9, -9]);
  const rotX = useTransform(sy, [-0.5, 0.5], [-7, 7]);
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

  const submit = (e) => {
    e.preventDefault();
    const text = [
      `Hello ${BRAND.name}, I'd like a quote for the ${PRODUCT.name}.`,
      form.name && `Name: ${form.name}`,
      form.phone && `Phone: ${form.phone}`,
      form.qty && `Quantity: ${form.qty}`,
      form.msg && `Message: ${form.msg}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: PRODUCT.name,
    image: PRODUCT.image,
    description: PRODUCT.summary,
    brand: { "@type": "Brand", name: BRAND.name },
    category: PRODUCT.category,
  };

  const fade = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative pb-20 lg:pb-0" style={{ background: C.bg, color: C.ink }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />



        {/* ================= HERO ================= */}
        <section
          className="relative isolate overflow-hidden"
          style={{ background: "linear-gradient(135deg,#FFFFFF 0%,#F6F7F7 55%,#ECEFF1 100%)" }}
        >
          {/* soft light decoration */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full blur-2xl"
            style={{ background: "rgba(12,41,97,0.10)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 right-0 h-[380px] w-[380px] rounded-full blur-2xl"
            style={{ background: "rgba(196,122,74,0.14)" }}
          />
          <motion.div
            aria-hidden
            initial={{ opacity: 0, x: -80, y: -80 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, ease: EASE }}
            className="pointer-events-none absolute left-0 top-0 h-[240px] w-[150px]"
            style={{
              background: `linear-gradient(135deg,${C.navyLight},${C.navy})`,
              clipPath: "polygon(0 0,100% 0,0 100%)",
              opacity: 0.14,
            }}
          />
          <motion.div
            aria-hidden
            initial={{ opacity: 0, x: 80, y: 80 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
            className="pointer-events-none absolute bottom-0 right-0 h-[190px] w-[250px]"
            style={{
              background: `linear-gradient(135deg,${C.orangeLight},${C.orange})`,
              clipPath: "polygon(100% 0,100% 100%,18% 100%)",
              opacity: 0.28,
            }}
          />

          <div className="mx-auto max-w-[1280px] px-5 pb-20 pt-6 sm:px-8 lg:pb-28">
            {/* breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-1.5 text-[13px] font-semibold"
              style={{ color: C.muted }}
            >
              <a href="/" className="hover:text-[#0C2961]">Home</a>
              <ChevronRight size={14} />
              <a href="/products" className="hover:text-[#0C2961]">Products</a>
              <ChevronRight size={14} />
              <a href={PRODUCT.categoryHref} className="hover:text-[#0C2961]">{PRODUCT.category}</a>
              <ChevronRight size={14} />
              <span style={{ color: C.navy }}>{PRODUCT.name}</span>
            </motion.nav>

            <div className="mt-10 grid items-center gap-14 lg:grid-cols-[1fr_1.02fr] lg:gap-16">
              {/* ---------- IMAGE STAGE ---------- */}
              <div
                className="relative mx-auto w-full max-w-[540px] [perspective:1100px]"
                onMouseMove={onMove}
                onMouseLeave={onLeave}
              >
                <motion.span
                  aria-hidden
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
                  className="pointer-events-none absolute -left-6 -top-10 select-none whitespace-nowrap text-[88px] font-black leading-none tracking-tighter text-transparent sm:text-[120px]"
                  style={{ WebkitTextStroke: "1.5px rgba(12,41,97,0.1)" }}
                >
                  END CAP
                </motion.span>

                <motion.div
                  aria-hidden
                  initial={{ opacity: 0, rotate: 0, scale: 0.92 }}
                  animate={{ opacity: 1, rotate: -5, scale: 1 }}
                  transition={{ duration: 0.65, delay: 0.12, ease: EASE }}
                  className="absolute inset-0 rounded-[36px]"
                  style={{ background: `linear-gradient(145deg,${C.orangeLight},${C.orange})` }}
                />
                <motion.div
                  aria-hidden
                  initial={{ opacity: 0, rotate: 0, scale: 0.92 }}
                  animate={{ opacity: 1, rotate: 4, scale: 1 }}
                  transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
                  className="absolute inset-0 rounded-[36px]"
                  style={{ background: `linear-gradient(145deg,${C.navyLight},${C.navy})` }}
                />

                <motion.button
                  type="button"
                  onClick={() => setZoom(true)}
                  aria-label="Zoom product image"
                  initial={{ opacity: 0, y: 50, scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
                  style={{ rotateX: reduce ? 0 : rotX, rotateY: reduce ? 0 : rotY }}
                  className="group relative block aspect-[4/5] w-full cursor-zoom-in rounded-[32px] bg-gradient-to-b from-white to-[#F2F3F3] p-6 shadow-[0_24px_48px_rgba(12,41,97,0.12)] ring-1 ring-white"
                >
                  <img
                    src={PRODUCT.image}
                    alt="Arya Industry End Display Rack with four shelves and powder-coated finish"
                    fetchPriority="high"
                    className="h-full w-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-[#0C2961] px-3 py-1.5 text-[11px] font-bold text-white opacity-90 transition-opacity group-hover:opacity-100">
                    <ZoomIn size={14} /> Tap to zoom
                  </span>
                </motion.button>

                {[
                  { icon: Ruler, label: "5 ft tall", pos: "-left-3 top-[12%] sm:-left-8", d: 0 },
                  { icon: Layers, label: "4 shelves", pos: "-right-3 top-[42%] sm:-right-8", d: 0.8 },
                  { icon: Paintbrush, label: "Powder-coated", pos: "-left-3 bottom-[10%] sm:-left-8", d: 1.6 },
                ].map(({ icon: Icon, label, pos, d }, i) => (
                  <motion.div
                    key={label}
                    className={`absolute z-10 ${pos}`}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.15, type: "spring", stiffness: 220, damping: 15 }}
                  >
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: d }}
                      className="flex items-center gap-2 rounded-2xl border border-slate-200/80 bg-white px-3.5 py-2.5 text-[13px] font-extrabold shadow-[0_14px_30px_rgba(12,41,97,0.16)]"
                      style={{ color: C.navy }}
                    >
                      <Icon size={18} style={{ color: C.orange }} strokeWidth={2.2} />
                      {label}
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* ---------- INFO ---------- */}
              <motion.div
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } } }}
              >
                <motion.div variants={fade} className="flex flex-wrap items-center gap-3">
                  <span
                    className="rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.22em] text-white"
                    style={{ background: `linear-gradient(90deg,${C.orange},${C.orangeLight})` }}
                  >
                    {PRODUCT.category}
                  </span>
                  <span className="flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1.5 text-xs font-bold text-emerald-700">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    In stock
                  </span>
                </motion.div>

                <motion.h1
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
                  className="mt-5 text-[44px] font-extrabold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-[68px]"
                  style={{ color: C.ink }}
                >
                  <Word>End</Word> <Word orange>Display</Word> <Word>Rack</Word>
                </motion.h1>

                <motion.p
                  variants={fade}
                  className="mt-5 max-w-[56ch] text-base leading-relaxed sm:text-lg"
                  style={{ color: C.muted }}
                >
                  {PRODUCT.summary}
                </motion.p>

                <motion.div variants={fade} className="mt-7 grid grid-cols-2 gap-3">
                  {[
                    { icon: Layers, v: "4 Nos", l: "Shelves" },
                    { icon: Ruler, v: "5 feet", l: "Height (Ht-5)" },
                    { icon: PackageCheck, v: "18″ · 15″ · 12″ · 1″", l: "Shelf depths" },
                    { icon: Paintbrush, v: "Powder-coated", l: "Durable finish" },
                  ].map(({ icon: Icon, v, l }) => (
                    <motion.div
                      key={l}
                      whileHover={{ y: -2 }}
                      className="flex items-center gap-3 rounded-2xl border border-white bg-white p-3.5 shadow-[0_10px_26px_rgba(12,41,97,0.07)]"
                    >
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                        style={{ background: "rgba(196,122,74,0.12)", color: C.orange }}
                      >
                        <Icon size={20} strokeWidth={2} />
                      </span>
                      <span>
                        <span className="block text-[15px] font-extrabold leading-tight" style={{ color: C.ink }}>{v}</span>
                        <span className="text-xs font-semibold" style={{ color: C.muted }}>{l}</span>
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div variants={fade} className="mt-8">
                  
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <motion.a
                      href="#enquiry"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="group relative inline-flex h-14 items-center 
                      gap-4 overflow-hidden rounded-full pl-7 pr-1.5 text-base font-bold !text-white shadow-[0_10px_24px_rgba(12,41,97,0.12)]"
                      style={{ background: `linear-gradient(90deg,${C.navy},${C.navyLight})` }}
                    >
                      Request a Quote
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                        <ArrowRight
                          size={22}
                          strokeWidth={2.8}
                          style={{ color: C.orange }}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/4 -skew-x-[20deg] bg-white/30 opacity-0 blur-sm transition-all duration-700 group-hover:left-[110%] group-hover:opacity-100" />
                    </motion.a>

                    <motion.a
                      href={waLink(`Hello ${BRAND.name}, I'm interested in the ${PRODUCT.name}.`)}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex h-14 items-center gap-2.5 rounded-full bg-green-600 px-6 
                      text-base font-bold !text-white shadow-[0_14px_30px_rgba(12,41,97,0.12)]"
                    >
                      <MessageCircle size={20} /> WhatsApp Now
                    </motion.a>

                    <motion.a
                      href={BRAND.tel}
                      aria-label="Call us"
                      whileHover={{ y: -3, rotate: -8 }}
                      className="flex h-14 w-14 items-center justify-center rounded-full border-2 bg-white"
                      style={{ borderColor: C.navy, color: C.navy }}
                    >
                      <Phone size={20} fill="currentColor" />
                    </motion.a>
                  </div>

                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= OVERVIEW ================= */}
        <section id="overview" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-10 bg-white">
          <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHead eyebrow="Product Overview">
                Made for the <Accent>end of every aisle</Accent>
              </SectionHead>
              <Reveal delay={0.1} className="mt-6 space-y-5 text-base leading-[1.75] sm:text-[17px]">
                <p style={{ color: C.muted }}>
                  The End Display Rack from {BRAND.name} is a premium retail shelving
                  solution designed to improve product visibility and use store space
                  well. It creates attractive end-cap displays that help retailers
                  spotlight promotional and fast-moving products.
                </p>
                <p style={{ color: C.muted }}>
                  A sturdy structure with a durable backsheet keeps it reliable in
                  high-traffic stores, while the 5 ft height and four spacious shelves
                  organise products neatly within a compact footprint.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.15} className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Layers, t: "Four tiers", d: "Spacious shelves for organised display" },
                { icon: ShieldCheck, t: "Stable build", d: "Backsheet adds support in busy aisles" },
                { icon: Paintbrush, t: "Rust-resistant", d: "Powder-coated, scratch & corrosion resistant" },
                { icon: Timer, t: "Low upkeep", d: "Long-lasting with minimal maintenance" },
              ].map(({ t, d }, i) => (
                <motion.div
                  key={t}
                  whileHover={{ y: -2 }}
                  className="relative overflow-hidden rounded-3xl border border-white bg-white p-6 shadow-[0_12px_32px_rgba(12,41,97,0.07)]"
                >
                  <span
                    className="absolute right-0 top-0 h-1.5 w-1/3 rounded-bl-xl"
                    style={{ background: `linear-gradient(90deg,${C.orangeLight},${C.orange})` }}
                  />
                  <h3 className="mt-4 text-lg font-extrabold">{t}</h3>
                  <p className="mt-1 text-sm leading-relaxed" style={{ color: C.muted }}>{d}</p>
                </motion.div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ================= ANATOMY / BLUEPRINT ================= */}
        <section id="anatomy" className="scroll-mt-24 px-5 sm:px-8">
          <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[36px] border border-white bg-white p-6 shadow-[0_24px_60px_rgba(12,41,97,0.08)] sm:p-10 lg:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full blur-2xl"
              style={{ background: "rgba(12,41,97,0.10)" }}
            />
            <SectionHead eyebrow="Anatomy">
              See the <Accent>tiered depths</Accent> at a glance
            </SectionHead>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-[60ch]" style={{ color: C.muted }}>
                A side-view schematic built from the rack&rsquo;s actual specifications.
                Hover or tap a shelf to explore it.
              </p>
            </Reveal>

            <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <Reveal className="rounded-3xl border border-slate-200 bg-[#F5F6F6] p-3 sm:p-5">
                <Blueprint active={shelf} setActive={setShelf} />
              </Reveal>

              <div className="space-y-3">
                {DEPTHS.map((d, i) => {
                  const on = shelf === i;
                  return (
                    <motion.button
                      key={i}
                      type="button"
                      onMouseEnter={() => setShelf(i)}
                      onClick={() => setShelf(i)}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={VIEW}
                      transition={{ delay: 0.15 * i, duration: 0.6, ease: EASE }}
                      className={`w-full rounded-2xl border p-4 text-left transition-colors ${
                        on
                          ? "border-[#D99A70]/70 bg-orange-50"
                          : "border-slate-200 bg-white hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs font-extrabold uppercase tracking-[0.22em]" style={{ color: C.muted }}>
                          Shelf {i + 1}
                        </span>
                        <span className="text-2xl font-extrabold" style={{ color: on ? C.orange : C.navy }}>
                          {d}″
                        </span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-slate-200">
                        <motion.div
                          className="h-2 rounded-full"
                          style={{
                            background: on
                              ? `linear-gradient(90deg,${C.orange},${C.orangeLight})`
                              : "rgba(12,41,97,0.5)",
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.max((d / 18) * 100, 4)}%` }}
                          viewport={VIEW}
                          transition={{ duration: 0.9, delay: 0.3 + i * 0.1, ease: EASE }}
                        />
                      </div>
                    </motion.button>
                  );
                })}

                <div className="flex flex-wrap gap-2 pt-2">
                  {["Backsheet for stability", "Panel with beading", "Stopper secures items"].map((t) => (
                    <span
                      key={t}
                      className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-bold"
                      style={{ color: C.navy }}
                    >
                      <Check size={13} style={{ color: C.orange }} /> {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SPECIFICATIONS ================= */}
        <section id="specs" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-14">
          <div className="mx-auto max-w-[1000px]">
            <SectionHead eyebrow="Specifications" center>
              Technical <Accent>details</Accent>
            </SectionHead>

            <div className="mt-12 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(12,41,97,0.08)]">
              {SPECS.map(([k, v], i) => (
                <motion.div
                  key={k}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                  whileHover={{ backgroundColor: "#F3F5F6" }}
                  className="group grid grid-cols-1 gap-1 border-b border-slate-100 px-6 py-4 last:border-0 sm:grid-cols-[260px_1fr] sm:items-center sm:gap-6 sm:px-8"
                >
                  <span className="flex items-center gap-3 text-sm font-bold uppercase tracking-wide" style={{ color: C.muted }}>
                    <span
                      className="h-2 w-2 rounded-full transition-transform duration-300 group-hover:scale-150"
                      style={{ background: C.orange }}
                    />
                    {k}
                  </span>
                  <span className="text-base font-extrabold" style={{ color: C.ink }}>{v}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ENQUIRY ================= */}
        <section className="px-5 pb-16 sm:px-8 lg:pb-20">
          <div className="mx-auto max-w-[1280px]">
            <div id="enquiry" className="scroll-mt-24">
              <Reveal delay={0.1}>
                <form
                  onSubmit={submit}
                  className="relative overflow-hidden rounded-[32px] border border-white bg-white p-7 shadow-[0_18px_44px_rgba(12,41,97,0.07)] sm:p-9"
                >
                  <span
                    aria-hidden
                    className="absolute right-0 top-0 h-2 w-1/3 rounded-bl-2xl"
                    style={{ background: `linear-gradient(90deg,${C.orangeLight},${C.orange})` }}
                  />
                  <span className="text-xs font-extrabold uppercase tracking-[0.3em]" style={{ color: C.orange }}>
                    Enquiry Now
                  </span>
                  <h3 className="mt-2 text-2xl font-extrabold tracking-tight">Request a quote</h3>
                  <p className="mt-1 text-sm" style={{ color: C.muted }}>
                    For <strong style={{ color: C.ink }}>{PRODUCT.name}</strong> — your details open in WhatsApp so we can reply quickly.
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {[
                      { k: "name", l: "Your name", t: "text" },
                      { k: "phone", l: "Phone number", t: "tel" },
                    ].map(({ k, l, t }) => (
                      <label key={k} className="block">
                        <span className="mb-1.5 block text-xs font-extrabold uppercase tracking-wider" style={{ color: C.muted }}>{l}</span>
                        <input
                          type={t}
                          required
                          value={form[k]}
                          onChange={(e) => setForm({ ...form, [k]: e.target.value })}
                          className={inputCls}
                        />
                      </label>
                    ))}
                    <label className="block sm:col-span-2">
                      <span className="mb-1.5 block text-xs font-extrabold uppercase tracking-wider" style={{ color: C.muted }}>Quantity needed</span>
                      <input
                        type="text"
                        value={form.qty}
                        onChange={(e) => setForm({ ...form, qty: e.target.value })}
                        placeholder="e.g. 10 racks"
                        className={inputCls}
                      />
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="mb-1.5 block text-xs font-extrabold uppercase tracking-wider" style={{ color: C.muted }}>Message</span>
                      <textarea
                        rows={4}
                        value={form.msg}
                        onChange={(e) => setForm({ ...form, msg: e.target.value })}
                        placeholder="Store size, colours, branding needs…"
                        className={`${inputCls} resize-none`}
                      />
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-6 inline-flex h-14 w-full items-center justify-center gap-3 rounded-full text-base font-bold text-white shadow-[0_10px_24px_rgba(12,41,97,0.12)]"
                    style={{ background: `linear-gradient(90deg,${C.navy},${C.navyLight})` }}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {sent ? (
                        <motion.span
                          key="sent"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-2"
                        >
                          <Check size={20} /> Opened in WhatsApp – send again?
                        </motion.span>
                      ) : (
                        <motion.span
                          key="send"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-2"
                        >
                          <Send size={19} /> Send enquiry on WhatsApp
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </form>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ================= RELATED PRODUCTS ================= */}
        <section id="related" className="scroll-mt-24 px-5 pb-24 sm:px-8 lg:pb-28">
          <div className="mx-auto max-w-[1280px]">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <SectionHead eyebrow="Explore More">
                  Related <Accent>Products</Accent>
                </SectionHead>
              </div>
              <a href="/products" className="mb-1 inline-flex items-center gap-2 rounded-full border border-[#0C2961] px-5 py-3 text-sm font-bold text-[#0C2961] transition hover:bg-[#0C2961] hover:text-white">
                View All Products <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {RELATED.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEW}
                    transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                    whileHover={{ y: -5 }}
                    className="group flex min-h-[132px] items-center justify-between gap-4 rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(12,41,97,0.06)]"
                  >
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-[#0C2961] transition group-hover:bg-orange-50 group-hover:text-[#E75B0C]">
                      <Icon size={34} strokeWidth={1.5} />
                    </span>
                    <span className="flex-1 text-sm font-extrabold leading-snug text-[#0C2961]">{item.name}</span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E75B0C] text-white transition group-hover:translate-x-1">
                      <ArrowRight size={17} />
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>
        {/* ================= MOBILE ACTION BAR ================= */}
        <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 gap-2 border-t border-slate-200 bg-white/95 p-3 backdrop-blur-xl lg:hidden">
          <a href={BRAND.tel} className="flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-white" style={{ background: C.navy }}>
            <Phone size={17} fill="currentColor" /> Call
          </a>
          <a
            href={waLink(`Hello ${BRAND.name}, I'm interested in the ${PRODUCT.name}.`)}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#526B61] py-3 text-sm font-bold text-white"
          >
            <MessageCircle size={17} /> Chat
          </a>
          <a href="#enquiry" className="flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-white" style={{ background: C.navy }}>
            Quote
          </a>
        </div>

        {/* ================= LIGHTBOX ================= */}
        <AnimatePresence>
          {zoom && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setZoom(false)}
              className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-[#0C2961]/60 p-6 backdrop-blur-md"
            >
              <motion.img
                src={PRODUCT.image}
                alt={PRODUCT.name}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ type: "spring", stiffness: 220, damping: 24 }}
                className="max-h-[88vh] max-w-full rounded-3xl bg-white object-contain p-4 shadow-2xl"
              />
              <button
                type="button"
                aria-label="Close"
                onClick={() => setZoom(false)}
                className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0C2961]"
              >
                <X size={22} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}