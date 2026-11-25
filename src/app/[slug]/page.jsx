
"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import { raw, slugify } from "@/Data/product-source.mjs";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Layers3,
  Mail,
  MapPin,
  MessageCircle,
  MoveVertical,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

// ==========================================
// BRAND DETAILS
// ==========================================

const BRAND = {
  name: "Arya Industry",
  whatsapp: "91XXXXXXXXXX",
  tel: "tel:+91XXXXXXXXXX",
};

// ==========================================
// END DISPLAY RACK FALLBACK
// Add this product to raw later if required
// ==========================================

const END_DISPLAY_PRODUCT = {
  title: "End Display Rack",
  image: "/images/products/end-display-rack.jpg",
  category: "Supermarket & Grocery Display Racks",
  subtitle: "5 ft, 4 shelves",
  desc: "Designed to maximise product visibility at aisle ends, the End Display Rack offers a strong and organised solution for promotional and fast-moving items. Its sturdy backsheet, panel beading and stoppers keep products secure, while the powder-coated finish ensures long-term durability.",
  page: "end-display-rack",
  alts: ["End Display Rack"],
  specs: {
    "Rack Type": "Gondola End Cap",
    "Material": "Mild Steel",
    "Height": "5 ft",
    "No. of Shelves": "4 Shelves",
    "Backsheet": "Available",
    "Finish": "Powder Coated",
    "Brand": "Arya Industry",
    "Usage/Application": "Supermarket, Retail Store",
  },
};

// ==========================================
// ANIMATION
// ==========================================

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// WHATSAPP LINK
// ==========================================

const waLink = (message = "") =>
  `https://wa.me/${BRAND.whatsapp}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

// ==========================================
// SECTION LABEL
// ==========================================

function SectionLabel({ children }) {
  return (
    <div className="mb-4 flex items-center gap-3 text-sm font-extrabold uppercase tracking-wide text-orange-600">
      <span className="h-[4px] w-8 rounded-full bg-orange-500" />
      {children}
    </div>
  );
}

// ==========================================
// PRODUCT ANATOMY
// ==========================================

function AnatomyGraphic({ product, height }) {
  return (
    <div className="relative flex min-h-[330px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 p-4 sm:p-7">

      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-center text-[#092b50]">
        <MoveVertical className="mx-auto mb-2" size={25} />

        <strong className="block text-xl sm:text-2xl">
          {height}
        </strong>

        <span className="text-xs">Height</span>
      </div>

      <img
        src={product.image}
        alt={product.title}
        className="h-[290px] w-[58%] object-contain sm:h-[330px]"
        onError={(e) => {
          e.currentTarget.style.opacity = "0";
        }}
      />

      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold tracking-wider text-slate-500">
        PRODUCT DIMENSION GUIDE
      </span>
    </div>
  );
}

// ==========================================
// MAIN DYNAMIC PRODUCT PAGE
// ==========================================

export default function SingleProductPage() {
  const { slug } = useParams();

  const [mobileMenu, setMobileMenu] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);

  // ========================================
  // FIND PRODUCT FROM RAW ARRAY
  // ========================================

  const PRODUCT =
    slug === "end-display-rack"
      ? END_DISPLAY_PRODUCT
      : raw.find(
          (item) => slugify(item.title) === slug
        );

  if (!PRODUCT) {
    notFound();
  }

  // ========================================
  // DYNAMIC PRODUCT SPECIFICATIONS
  // ========================================

  const SPECS = Object.entries(PRODUCT.specs || {});

  const getSpec = (keywords, fallback = "Custom") => {
    const entry = SPECS.find(([key]) =>
      keywords.some((word) =>
        key.toLowerCase().includes(word.toLowerCase())
      )
    );

    return entry?.[1] || fallback;
  };

  const HEIGHT = getSpec(["height"]);
  const SHELVES = getSpec(["shelves", "levels", "baskets"]);
  const MATERIAL = getSpec(["material"]);
  const FINISH = getSpec(["finish"]);

  const LOAD = getSpec(["load capacity", "capacity"]);
  
  // ========================================
  // DYNAMIC RELATED PRODUCTS
  // ========================================

  const RELATED = raw
    .filter(
      (item) =>
        item.category === PRODUCT.category &&
        item.title !== PRODUCT.title
    )
    .slice(0, 4)
    .map((item) => ({
      name: item.title,
      image: item.image,
      href: `/${slugify(item.title)}`,
    }));

  // ========================================
  // DYNAMIC PRODUCT FEATURES
  // ========================================

  const FEATURES = [
    {
      icon: Layers3,
      title: SHELVES !== "Custom" ? SHELVES : "Flexible Display",
      text: `Designed for organised product display with ${SHELVES.toLowerCase()}.`,
    },
    {
      icon: ShieldCheck,
      title: MATERIAL,
      text: `Manufactured using ${MATERIAL.toLowerCase()} for reliable everyday use.`,
    },
    {
      icon: Sparkles,
      title: FINISH,
      text: `Quality surface finish designed for an attractive retail presentation.`,
    },
    {
      icon: Wrench,
      title: "Customisation",
      text: "Available with customised sizes and configurations as per requirements.",
    },
  ];

  // ========================================
  // FORM UPDATE
  // ========================================

  const update = (key) => (event) => {
    setForm((old) => ({
      ...old,
      [key]: event.target.value,
    }));
  };

  // ========================================
  // WHATSAPP ENQUIRY
  // ========================================

  const submitInquiry = (event) => {
    event.preventDefault();

    setSubmitting(true);

    const message = [
      `Hello ${BRAND.name}, I want to enquire about ${PRODUCT.title}.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Location: ${form.location}`,
      `Product: ${PRODUCT.title}`,
      `Requirement: ${form.message}`,
    ].join("\n");

    window.open(
      waLink(message),
      "_blank",
      "noopener,noreferrer"
    );

    setSubmitting(false);
  };

  const whatsappMessage = `Hello ${BRAND.name}, I am interested in ${PRODUCT.title}.`;

  // ========================================
  // PAGE UI
  // ========================================

  return (
    <main className="min-h-screen overflow-hidden bg-white font-sans text-[#09264b]">

      {/* =====================================
          HERO SECTION
      ===================================== */}

      <section className="relative isolate bg-[linear-gradient(112deg,#f8fbff_0%,#edf4fc_54%,#e1ebf7_100%)]">

        <div className="pointer-events-none absolute -right-24 top-0 h-full w-[52%] -skew-x-[23deg] bg-white/50" />

        <div className="relative mx-auto max-w-[1440px] px-5 pb-7 pt-5 sm:px-8 lg:px-11 lg:pb-9">

          {/* Breadcrumb */}

          <div className="mb-5 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">

            <a href="/" className="hover:text-orange-600">
              ⌂ Home
            </a>

            <span>›</span>

            <a href="/products" className="hover:text-orange-600">
              Products
            </a>

            <span>›</span>

            <span className="font-extrabold text-[#09264b]">
              {PRODUCT.title}
            </span>

          </div>

          <div className="grid items-center gap-3 lg:grid-cols-[0.95fr_1.05fr] lg:gap-4">

            {/* Hero Content */}

            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              className="relative z-10 py-3 lg:py-8"
            >

              <span className="inline-flex rounded-lg bg-orange-100 px-3 py-1.5 text-xs font-black uppercase text-orange-600">
                {PRODUCT.category}
              </span>

              <h1 className="mt-4 max-w-[600px] text-[42px] font-black leading-[1.03] tracking-[-0.045em] text-[#09264b] sm:text-5xl lg:text-[64px]">
                {PRODUCT.title}
              </h1>

              <span className="mt-4 block h-[5px] w-16 bg-orange-500" />

              <p className="mt-5 max-w-[560px] text-[15px] leading-[1.65] text-slate-700 sm:text-base">
                {PRODUCT.desc}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                <a
                  href="#enquiry"
                  className="inline-flex h-12 items-center gap-3 rounded-xl bg-orange-500 px-6 text-sm font-extrabold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-600"
                >
                  Request a Quote
                  <ArrowRight size={17} />
                </a>

                <a
                  href={waLink(whatsappMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-xl border border-emerald-600 bg-white px-5 text-sm font-extrabold text-[#09264b] transition hover:bg-emerald-50"
                >
                  <MessageCircle
                    size={19}
                    className="text-emerald-600"
                  />
                  WhatsApp Now
                </a>

              </div>

            </motion.div>

            {/* Hero Product Image */}

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex min-h-[330px] items-center justify-center lg:min-h-[420px]"
            >

              <div className="absolute inset-5 rounded-[48%] bg-white/70 blur-2xl" />

              <img
                src={PRODUCT.image}
                alt={PRODUCT.title}
                className="relative z-10 max-h-[390px] w-[78%] object-contain drop-shadow-[0_24px_22px_rgba(9,38,75,0.16)] sm:max-h-[430px] lg:w-[72%]"
                onError={(e) => {
                  e.currentTarget.style.opacity = "0";
                }}
              />

              {/* Dynamic Height */}

              <div className="absolute right-0 top-[14%] z-20 hidden w-[145px] items-center gap-3 rounded-xl border border-blue-100 bg-white/95 px-3 py-3 shadow-lg sm:flex">

                <MoveVertical className="text-orange-500" size={28} />

                <span className="text-sm font-black leading-tight">
                  {HEIGHT}
                  <br />
                  HEIGHT
                </span>

              </div>

              {/* Dynamic Shelves */}

              <div className="absolute right-0 top-[39%] z-20 hidden w-[145px] items-center gap-3 rounded-xl border border-blue-100 bg-white/95 px-3 py-3 shadow-lg sm:flex">

                <Layers3 className="text-orange-500" size={27} />

                <span className="text-sm font-black leading-tight">
                  {SHELVES}
                  <br />
                  SHELVES
                </span>

              </div>

              {/* Dynamic Material */}

              <div className="absolute right-0 top-[64%] z-20 hidden w-[145px] items-center gap-3 rounded-xl border border-blue-100 bg-white/95 px-3 py-3 shadow-lg sm:flex">

                <Wrench className="text-orange-500" size={27} />

                <span className="text-sm font-black leading-tight">
                  {MATERIAL}
                  <br />
                  MATERIAL
                </span>

              </div>

            </motion.div>

          </div>

          {/* =================================
              SPECIFICATION STRIP
          ================================= */}

          <div className="relative z-10 mt-5 grid grid-cols-2 gap-y-4 rounded-2xl bg-[#082b50] px-5 py-5 text-white shadow-xl sm:grid-cols-4 sm:px-7 lg:mt-1">

            {[
              {
                icon: MoveVertical,
                title: HEIGHT,
                sub: "Height",
              },
              {
                icon: Layers3,
                title: SHELVES,
                sub: "Shelves / Levels",
              },
              {
                icon: ShieldCheck,
                title: MATERIAL,
                sub: "Material",
              },
              {
                icon: PackageCheck,
                title: FINISH,
                sub: "Finish",
              },
            ].map(({ icon: Icon, title, sub }, i) => (

              <div
                key={sub}
                className={`flex items-center justify-center gap-3 ${
                  i > 1
                    ? "sm:border-l sm:border-white/30"
                    : ""
                }`}
              >

                <Icon
                  size={31}
                  strokeWidth={1.8}
                  className="shrink-0 text-white"
                />

                <div className="min-w-0">
                  <strong className="block break-words text-sm sm:text-lg">
                    {title}
                  </strong>

                  <span className="text-sm text-blue-100">
                    {sub}
                  </span>
                </div>

              </div>

            ))}

            <span className="absolute -right-1 bottom-0 top-0 hidden w-3 skew-x-[-23deg] rounded-r-xl bg-orange-500 sm:block" />

          </div>

        </div>
      </section>

      {/* =====================================
          PRODUCT OVERVIEW
      ===================================== */}

      <section
        id="overview"
        className="bg-white px-5 py-14 sm:px-8 lg:py-16"
      >

        <div className="mx-auto grid max-w-[1360px] items-center gap-9 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <SectionLabel>
              Product Overview
            </SectionLabel>

            <h2 className="max-w-[520px] text-3xl font-black leading-[1.12] tracking-tight text-[#09264b] sm:text-[39px]">
              Reliable {PRODUCT.title} for Modern Retail Spaces
            </h2>

            <p className="mt-4 max-w-[570px] text-[15px] leading-[1.7] text-slate-600">
              {PRODUCT.desc}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">

              <span className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-bold text-[#09264b]">
                {PRODUCT.category}
              </span>

              <span className="rounded-lg bg-orange-50 px-3 py-2 text-xs font-bold text-orange-600">
                {PRODUCT.subtitle || "Customised Options Available"}
              </span>

            </div>

          </motion.div>

          {/* Dynamic Features */}

          <div className="grid gap-4 sm:grid-cols-2">

            {FEATURES.map(({ icon: Icon, title, text }, i) => (

              <motion.div
                key={title}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex min-h-[112px] items-center gap-4 rounded-2xl border border-blue-100 bg-[#f2f6fc] p-4 transition hover:-translate-y-1 hover:shadow-lg sm:p-5"
              >

                <Icon
                  className="shrink-0 text-orange-500"
                  size={34}
                  strokeWidth={1.8}
                />

                <div>
                  <h3 className="text-base font-black text-[#09264b] sm:text-lg">
                    {title}
                  </h3>

                  <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {text}
                  </p>
                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================
          PRODUCT ANATOMY + SPECIFICATIONS
      ===================================== */}

      <section className="bg-white px-5 pb-14 sm:px-8 lg:pb-16">

        <div className="mx-auto grid max-w-[1360px] gap-6 lg:grid-cols-[1.2fr_1fr]">

          {/* Product Anatomy */}

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-blue-100 bg-white p-5 shadow-[0_10px_30px_rgba(9,38,75,0.05)] sm:p-6"
          >

            <h2 className="text-2xl font-black tracking-tight text-[#09264b] sm:text-[28px]">
              Product Anatomy
            </h2>

            <span className="mt-2 block h-1 w-12 bg-orange-500" />

            <div className="mt-3">
              <AnatomyGraphic
                product={PRODUCT}
                height={HEIGHT}
              />
            </div>

          </motion.div>

          {/* Specifications */}

          <motion.div
            id="specifications"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-blue-100 bg-white p-5 shadow-[0_10px_30px_rgba(9,38,75,0.05)] sm:p-6"
          >

            <h2 className="text-2xl font-black tracking-tight text-[#09264b] sm:text-[28px]">
              Specifications
            </h2>

            <span className="mt-2 block h-1 w-12 bg-orange-500" />

            <div className="mt-4 overflow-hidden rounded-xl border border-blue-100">

              {SPECS.map(([key, value], i) => (

                <div
                  key={key}
                  className={`grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] text-[12px] sm:text-[13px] ${
                    i % 2 ? "bg-white" : "bg-[#f0f4fa]"
                  }`}
                >

                  <div className="border-r border-blue-100 px-3 py-2 font-extrabold text-[#09264b] sm:px-4">
                    {key}
                  </div>

                  <div className="break-words px-3 py-2 text-slate-700 sm:px-4">
                    {value}
                  </div>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </section>

      {/* =====================================
          ENQUIRY SECTION
      ===================================== */}

      <section
        id="enquiry"
        className="scroll-mt-20 bg-white px-5 py-5 sm:px-8 lg:py-8"
      >

        <div className="mx-auto grid max-w-[1360px] overflow-hidden rounded-[22px] border border-blue-100 bg-white shadow-[0_15px_45px_rgba(9,38,75,0.08)] lg:grid-cols-[0.72fr_1.48fr]">

          {/* Enquiry Content */}

          <div className="relative overflow-hidden bg-[#082b50] p-7 text-white sm:p-9">

            <span className="absolute -bottom-16 -right-10 h-52 w-52 rounded-full border-[22px] border-white/5" />

            <div className="relative z-10">

              <div className="mb-4 flex items-center gap-2 text-sm font-bold">
                <span className="h-[3px] w-7 bg-orange-500" />
                Send an Enquiry
              </div>

              <h2 className="!text-2xl font-black leading-tight sm:text-[36px] !text-white">
                Get a Quote for{" "}
                <span className="text-orange-500">
                  {PRODUCT.title}
                </span>
              </h2>

              <p className="mt-4 max-w-[300px] text-sm leading-relaxed !text-white">
                Share your requirement and our team will get back to you with the right display rack solution.
              </p>

              <div className="mt-7 space-y-4">

                <div className="flex items-center gap-3 text-sm">
                  <Phone size={18} className="text-orange-500" />
                  <span>Contact Our Sales Team</span>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <MessageCircle size={18} className="text-orange-500" />
                  <span>Quick WhatsApp Assistance</span>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle2 size={18} className="text-orange-500" />
                  <span>Customised Product Solutions</span>
                </div>

              </div>

            </div>

          </div>

          {/* Enquiry Form */}

          <form
            onSubmit={submitInquiry}
            className="grid items-end gap-x-5 gap-y-4 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-[1fr_1fr_auto]"
          >

            {/* Name */}

            <label className="block text-xs font-extrabold text-[#09264b]">
              Your Name <span className="text-orange-500">*</span>

              <input
                required
                value={form.name}
                onChange={update("name")}
                placeholder="Enter your name"
                className="mt-2 h-12 w-full rounded-lg border border-blue-100 bg-[#f6f8fc] px-4 text-sm font-medium outline-none transition focus:border-orange-400 focus:bg-white"
              />

            </label>

            {/* Phone */}

            <label className="block text-xs font-extrabold text-[#09264b]">
              Phone Number <span className="text-orange-500">*</span>

              <input
                required
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                placeholder="Enter phone number"
                className="mt-2 h-12 w-full rounded-lg border border-blue-100 bg-[#f6f8fc] px-4 text-sm font-medium outline-none transition focus:border-orange-400 focus:bg-white"
              />

            </label>

            {/* Email */}

            <label className="block text-xs font-extrabold text-[#09264b]">
              Email Address

              <input
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="Enter your email"
                className="mt-2 h-12 w-full rounded-lg border border-blue-100 bg-[#f6f8fc] px-4 text-sm font-medium outline-none transition focus:border-orange-400 focus:bg-white"
              />

            </label>

            {/* Location */}

            <label className="block text-xs font-extrabold text-[#09264b]">
              Location

              <input
                value={form.location}
                onChange={update("location")}
                placeholder="Enter your location"
                className="mt-2 h-12 w-full rounded-lg border border-blue-100 bg-[#f6f8fc] px-4 text-sm font-medium outline-none transition focus:border-orange-400 focus:bg-white"
              />

            </label>

            {/* Requirement */}

            <label className="block text-xs font-extrabold text-[#09264b]">
              Requirement / Message{" "}
              <span className="text-orange-500">*</span>

              <input
                required
                value={form.message}
                onChange={update("message")}
                placeholder="Tell us your requirement..."
                className="mt-2 h-12 w-full rounded-lg border border-blue-100 bg-[#f6f8fc] px-4 text-sm font-medium outline-none transition focus:border-orange-400 focus:bg-white"
              />

            </label>

            {/* Submit */}

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-orange-500 px-5 text-sm font-extrabold text-white transition hover:bg-orange-600 disabled:opacity-60 sm:col-span-2 lg:col-span-1"
            >
              Send Enquiry
              <ArrowRight size={17} />
            </button>

          </form>

        </div>

      </section>

      {/* =====================================
          RELATED PRODUCTS
      ===================================== */}

      {RELATED.length > 0 && (

        <section
          id="related"
          className="bg-white px-5 py-14 sm:px-8 lg:py-16"
        >

          <div className="mx-auto max-w-[1360px]">

            <SectionLabel>
              Explore More
            </SectionLabel>

            <div className="mb-6 flex items-end justify-between gap-4">

              <h2 className="text-3xl font-black tracking-tight text-[#09264b] sm:text-[36px]">
                Related Products
              </h2>

              <a
                href="/products"
                className="hidden items-center gap-2 rounded-lg border border-[#09264b] px-4 py-2.5 text-xs font-extrabold text-[#09264b] transition hover:bg-[#09264b] hover:text-white sm:inline-flex"
              >
                View All Products
                <ArrowUpRight size={15} />
              </a>

            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {RELATED.map((item, i) => (

                <a
                  key={item.name}
                  href={item.href}
                  className="group flex min-h-[118px] items-center gap-3 rounded-2xl border border-blue-100 bg-white p-3 shadow-[0_7px_20px_rgba(9,38,75,0.05)] transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
                >

                  <div className="flex h-[88px] w-[105px] shrink-0 items-center justify-center rounded-xl bg-[#f1f5fa] p-2">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.opacity = "0";
                      }}
                    />

                  </div>

                  <div className="min-w-0 flex-1">

                    <span className="mb-1 block text-[9px] font-black tracking-widest text-orange-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-sm font-extrabold leading-snug text-[#09264b]">
                      {item.name}
                    </h3>

                  </div>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white transition group-hover:translate-x-1">
                    <ArrowRight size={16} />
                  </span>

                </a>

              ))}

            </div>

          </div>

        </section>

      )}

      {/* =====================================
          MOBILE QUICK ACTIONS
      ===================================== */}

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-2 border-t border-slate-200 bg-white/95 p-2 shadow-[0_-8px_25px_rgba(9,38,75,0.08)] backdrop-blur lg:hidden">

        <a
          href={BRAND.tel}
          className="flex items-center justify-center gap-2 rounded-lg bg-[#082b50] py-3 text-xs font-extrabold text-white"
        >
          <Phone size={15} />
          Call
        </a>

        <a
          href={waLink(whatsappMessage)}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 py-3 text-xs font-extrabold text-white"
        >
          <MessageCircle size={15} />
          WhatsApp
        </a>

        <a
          href="#enquiry"
          className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 py-3 text-xs font-extrabold text-white"
        >
          Quote
          <ArrowRight size={14} />
        </a>

      </div>

    </main>
  );
}
