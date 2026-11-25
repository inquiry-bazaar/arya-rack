 "use client";

import { useMemo, useState } from "react";
import { useParams, notFound } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { raw, slugify } from "@/Data/product-source.mjs";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  Image as ImageIcon,
  Layers3,
  MessageCircle,
  MoveVertical,
  Package,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
  Maximize2,
} from "lucide-react";

// Replace these placeholders with Arya Insulation's actual contact details.
const BRAND = {
  name: "Arya Industry",
  whatsapp: "91XXXXXXXXXX",
  tel: "tel:+91XXXXXXXXXX",
};

const END_DISPLAY_PRODUCT = {
  title: "End Display Rack",
  image: "/images/products/end-display-rack.jpg",
  category: "Supermarket & Grocery Display Racks",
  subtitle: "5 ft, 4 shelves",
  desc: "Designed to maximise product visibility at aisle ends, the End Display Rack offers a strong and organised solution for promotional and fast-moving items. Its sturdy backsheet, panel beading and stoppers keep products secure, while the powder-coated finish ensures long-term durability.",
  page: "end-display-rack",
  specs: {
    "Rack Type": "Gondola End Cap",
    Material: "Mild Steel",
    Height: "5 ft",
    "No. of Shelves": "4 Shelves",
    Backsheet: "Available",
    Finish: "Powder Coated",
    Brand: "Arya Industry",
    "Usage/Application": "Supermarket, Retail Store",
  },
};

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const waLink = (message = "") =>
  `https://wa.me/${BRAND.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

function SectionEyebrow({ children }) {
  return (
    <p className="mb-3 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#e96b20] sm:text-[11px]">
      <span className="h-[2px] w-7 rounded-full bg-[#ed7628]" />
      {children}
    </p>
  );
}

function SpecTile({ icon: Icon, value, label }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -5 }}
      className="flex min-h-[104px] flex-col items-center justify-center rounded-2xl border border-[#dce6f0] bg-white/90 px-2 py-4 text-center shadow-[0_8px_20px_rgba(16,49,78,0.07)]"
    >
      <Icon size={27} strokeWidth={1.8} className="mb-2 text-[#174f7e]" />
      <strong className="text-[13px] font-black leading-tight text-[#182b3e] sm:text-sm">
        {value}
      </strong>
      <span className="mt-1 text-[11px] text-slate-500">{label}</span>
    </motion.div>
  );
}

function ProductAnatomy({ product, height }) {
  const labels = [
    { title: "Top Canopy", sub: "(Optional)", side: "left", top: "13%" },
    { title: "Adjustable", sub: "Shelf", side: "left", top: "43%" },
    { title: "Base Shelf", sub: "", side: "left", top: "77%" },
    { title: "Upright", sub: "Frame", side: "right", top: "25%" },
    { title: "Back Panel", sub: "", side: "right", top: "62%" },
  ];

  return (
    <div className="relative min-h-[370px] overflow-hidden rounded-[28px] bg-[radial-gradient(ellipse_at_52%_48%,#ffffff_0%,#eef4f9_58%,#e6eef6_100%)] px-3 py-5 sm:min-h-[450px] sm:px-5">
      <div className="absolute left-1/2 top-1/2 h-[78%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#c8d8e7]" />
      <div className="absolute left-1/2 top-1/2 h-[66%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 shadow-[0_18px_45px_rgba(20,58,91,0.08)]" />
      <motion.img
        initial={{ opacity: 0, scale: 0.92, y: 12 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.85, ease }}
        src={product.image}
        alt={`${product.title} component overview`}
        className="absolute left-1/2 top-1/2 z-10 max-h-[82%] w-[68%] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_20px_20px_rgba(17,42,65,0.15)]"
        onError={(event) => { event.currentTarget.style.opacity = "0"; }}
      />

      {labels.map((item, index) => (
        <motion.div
          key={item.title + item.side}
          initial={{ opacity: 0, x: item.side === "left" ? -14 : 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 + index * 0.08, duration: 0.5, ease }}
          className={`absolute z-20 hidden -translate-y-1/2 items-center sm:flex ${
            item.side === "left" ? "left-2" : "right-2"
          }`}
          style={{ top: item.top }}
        >
          {item.side === "left" ? (
            <>
              <span className="min-w-[94px] rounded-xl border border-[#d6e1ec] bg-white/95 px-3 py-2 text-center text-[10px] font-extrabold leading-tight text-[#173653] shadow-[0_6px_15px_rgba(17,42,65,0.08)]">
                {item.title}<br />{item.sub}
              </span>
              <span className="h-px w-5 bg-[#ed7628]" />
              <span className="h-2 w-2 rounded-full bg-[#ed7628] ring-4 ring-orange-100" />
            </>
          ) : (
            <>
              <span className="h-2 w-2 rounded-full bg-[#ed7628] ring-4 ring-orange-100" />
              <span className="h-px w-5 bg-[#ed7628]" />
              <span className="min-w-[94px] rounded-xl border border-[#d6e1ec] bg-white/95 px-3 py-2 text-center text-[10px] font-extrabold leading-tight text-[#173653] shadow-[0_6px_15px_rgba(17,42,65,0.08)]">
                {item.title}<br />{item.sub}
              </span>
            </>
          )}
        </motion.div>
      ))}

      <div className="absolute bottom-4 left-4 z-20 rounded-xl border border-[#dce6ef] bg-white/90 px-3 py-2 text-center shadow-sm sm:hidden">
        <MoveVertical size={17} className="mx-auto mb-1 text-[#174f7e]" />
        <strong className="block text-xs text-[#173653]">{height}</strong>
        <span className="text-[9px] text-slate-500">Height</span>
      </div>
      <span className="absolute bottom-3 right-3 z-20 rounded-full bg-white/90 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-500 shadow-sm">
        Product component guide
      </span>
    </div>
  );
}

export default function SingleProductPage() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState("specifications");
  const [selectedImage, setSelectedImage] = useState(0);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });

  const PRODUCT =
    slug === "end-display-rack"
      ? END_DISPLAY_PRODUCT
      : raw.find((item) => slugify(item.title) === slug)
        || raw.find((item) => slugify(item.page) === slug);

  if (!PRODUCT) notFound();

  const SPECS = Object.entries(PRODUCT.specs || {});
  const getSpec = (keywords, fallback = "Custom") => {
    const match = SPECS.find(([key]) =>
      keywords.some((word) => key.toLowerCase().includes(word.toLowerCase()))
    );
    return match?.[1] || fallback;
  };

  const HEIGHT = getSpec(["height"]);
  const SHELVES = getSpec(["shelves", "levels", "baskets"]);
  const MATERIAL = getSpec(["material"]);
  const FINISH = getSpec(["finish"]);

  const galleryImages = useMemo(() => {
    const supplied = PRODUCT.gallery || PRODUCT.images || [];
    const images = supplied
      .map((item) => typeof item === "string" ? item : item?.src || item?.image)
      .filter(Boolean);
    return images.length ? images : [PRODUCT.image];
  }, [PRODUCT]);

  const currentImage = galleryImages[selectedImage] || PRODUCT.image;

  const RELATED = raw
    .filter((item) => item.category === PRODUCT.category && item.title !== PRODUCT.title)
    .slice(0, 4)
    .map((item) => ({
      name: item.title,
      image: item.image,
      href: `/${slugify(item.title)}`,
    }));

  const FEATURES = [
    {
      icon: ShieldCheck,
      title: "Durable & Sturdy",
      text: "Long-lasting performance for everyday retail use.",
    },
    {
      icon: Layers3,
      title: "Space Optimisation",
      text: "Organised product display and better floor planning.",
    },
    {
      icon: Wrench,
      title: "Customised Options",
      text: "Configurations tailored to your store layout.",
    },
    {
      icon: Sparkles,
      title: "Premium Finish",
      text: "Clean, modern look with a quality surface finish.",
    },
  ];

  const whatsappMessage = `Hello ${BRAND.name}, I am interested in ${PRODUCT.title}.`;
  const update = (key) => (event) =>
    setForm((old) => ({ ...old, [key]: event.target.value }));

  const submitInquiry = (event) => {
    event.preventDefault();
    const message = [
      `Hello ${BRAND.name}, I want to enquire about ${PRODUCT.title}.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Location: ${form.location}`,
      `Product: ${PRODUCT.title}`,
      `Requirement: ${form.message}`,
    ].join("\n");
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  };

  const tabs = [
    { id: "specifications", label: "Specifications", icon: FileText },
    { id: "description", label: "Description", icon: Package },
    { id: "gallery", label: "Gallery", icon: ImageIcon },
  ];

  const changeImage = (direction) => {
    setSelectedImage((current) =>
      (current + direction + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white font-sans text-[#1c2936]">
      {/* PRODUCT HERO */}
      <section className="relative isolate overflow-hidden bg-[linear-gradient(118deg,#f7f9fb_0%,#eef3f8_48%,#ffffff_100%)]">
        <div className="pointer-events-none absolute -right-28 top-0 h-full w-[43%] -skew-x-[24deg] bg-white/70" />
        <div className="pointer-events-none absolute -right-20 top-[-18%] h-[520px] w-[520px] rounded-full border-[54px] border-[#dce7f1]/50" />

        <div className="relative mx-auto max-w-[1440px] px-5 pb-8 pt-4 sm:px-8 lg:px-10 lg:pb-10">
          {/* Keep the site's global header/navbar outside this component. */}
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-[11px] font-semibold text-slate-500">
            <a href="/" className="transition hover:text-[#174f7e]">Home</a>
            <ChevronRight size={13} />
            <a href="/products" className="transition hover:text-[#174f7e]">Products</a>
            <ChevronRight size={13} />
            <span className="font-extrabold text-[#263442]">{PRODUCT.title}</span>
          </nav>

          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            {/* Gallery */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger}
              className="grid min-w-0 grid-cols-[54px_minmax(0,1fr)] items-center gap-3 sm:grid-cols-[68px_minmax(0,1fr)] sm:gap-5"
            >
              <div className="flex flex-col items-center gap-3">
                <button
                  type="button"
                  onClick={() => changeImage(-1)}
                  aria-label="Previous image"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d5e0ea] bg-white text-[#174f7e] shadow-sm transition hover:border-[#ed7628]"
                >
                  <ChevronDown size={17} className="rotate-180" />
                </button>
                {galleryImages.slice(0, 4).map((image, index) => (
                  <motion.button
                    variants={fadeUp}
                    type="button"
                    key={`${image}-${index}`}
                    onClick={() => setSelectedImage(index)}
                    aria-label={`View product image ${index + 1}`}
                    className={`h-[62px] w-[54px] overflow-hidden rounded-xl border-2 bg-white p-1 transition sm:h-[76px] sm:w-[68px] ${
                      selectedImage === index
                        ? "border-[#ed7628] shadow-[0_5px_15px_rgba(237,118,40,0.16)]"
                        : "border-[#dce4ec] hover:border-[#8ba9c3]"
                    }`}
                  >
                    <img src={image} alt={`${PRODUCT.title} view ${index + 1}`} className="h-full w-full object-contain" />
                  </motion.button>
                ))}
                <button
                  type="button"
                  onClick={() => changeImage(1)}
                  aria-label="Next image"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d5e0ea] bg-white text-[#174f7e] shadow-sm transition hover:border-[#ed7628]"
                >
                  <ChevronDown size={17} />
                </button>
              </div>

              <div className="group relative flex min-h-[330px] items-center justify-center overflow-hidden rounded-[28px] border border-white bg-[radial-gradient(circle_at_50%_42%,#ffffff_0%,#f1f4f7_70%,#e7edf3_100%)] p-4 shadow-[0_18px_45px_rgba(29,54,77,0.08)] sm:min-h-[455px] sm:p-7">
                <div className="absolute left-1/2 top-1/2 h-[76%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 shadow-[0_20px_55px_rgba(29,54,77,0.08)]" />
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={currentImage}
                    alt={PRODUCT.title}
                    initial={{ opacity: 0, scale: 0.96, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45, ease }}
                    className="relative z-10 max-h-[390px] w-full object-contain drop-shadow-[0_22px_20px_rgba(28,48,66,0.15)] sm:max-h-[470px]"
                    onError={(event) => { event.currentTarget.style.opacity = "0"; }}
                  />
                </AnimatePresence>
                <span className="absolute bottom-4 left-4 z-20 rounded-full border border-[#dce5ed] bg-white/90 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-wider text-slate-500">
                  Product view {selectedImage + 1}
                </span>
                <span className="absolute bottom-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#174f7e] text-white shadow-md transition group-hover:scale-105">
                  <Maximize2 size={16} />
                </span>
              </div>
            </motion.div>

            {/* Product information */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.12, ease }}
              className="relative z-10 py-2 lg:pl-1"
            >
              <span className="inline-flex rounded-full border border-[#edc9ae] bg-[#fff5ed] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-[#d96520] sm:text-[11px]">
                {PRODUCT.category}
              </span>
              <h1 className="mt-5 max-w-[620px] text-[39px] font-black leading-[0.99] tracking-[-0.055em] text-[#202c38] sm:text-5xl lg:text-[60px]">
                {PRODUCT.title}
              </h1>
              <span className="mt-4 block h-[4px] w-[66px] rounded-full bg-[#ed7628]" />
              <p className="mt-5 max-w-[590px] text-[14px] leading-[1.7] text-slate-600 sm:text-[15px]">
                {PRODUCT.desc}
              </p>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4"
              >
                <SpecTile icon={MoveVertical} value={HEIGHT} label="Height" />
                <SpecTile icon={Layers3} value={SHELVES} label="Shelves" />
                <SpecTile icon={Wrench} value={MATERIAL} label="Material" />
                <SpecTile icon={Sparkles} value={FINISH} label="Coated Finish" />
              </motion.div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#enquiry"
                  className="inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-[#ed7628] px-7 text-sm font-extrabold text-white shadow-[0_10px_22px_rgba(237,118,40,0.2)] transition duration-300 hover:-translate-y-1 hover:bg-[#dc641b]"
                >
                  Request a Quote <ArrowRight size={17} />
                </a>
                <a
                  href={waLink(whatsappMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#174f7e] bg-white px-5 text-sm font-extrabold text-[#174f7e] transition duration-300 hover:-translate-y-1 hover:bg-[#edf4f9]"
                >
                  <Download size={17} /> Download Brochure
                </a>
              </div>
            </motion.div>
          </div>

          {/* Navy-blue benefit ribbon: blue is a strong secondary colour, orange stays restrained. */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative z-10 mt-8 grid grid-cols-2 gap-y-5 overflow-hidden rounded-[22px] bg-gradient-to-r from-[#174f7e] via-[#0d426f] to-[#08365f] px-4 py-5 text-white shadow-[0_15px_35px_rgba(18,66,105,0.18)] sm:grid-cols-4 sm:px-6 lg:mt-9"
          >
            {FEATURES.map(({ icon: Icon, title, text }, index) => (
              <motion.div
                variants={fadeUp}
                key={title}
                className={`flex items-center gap-3 px-2 sm:px-4 ${
                  index > 0 ? "sm:border-l sm:border-white/25" : ""
                }`}
              >
                <Icon size={31} strokeWidth={1.7} className="shrink-0 text-white" />
                <div>
                  <strong className="block text-xs font-extrabold sm:text-sm">{title}</strong>
                  <span className="mt-1 block text-[10px] leading-4 text-blue-100 sm:text-[11px]">{text}</span>
                </div>
              </motion.div>
            ))}
            <span className="absolute -right-1 bottom-0 top-0 hidden w-2 skew-x-[-22deg] bg-[#ed7628] sm:block" />
          </motion.div>
        </div>
      </section>

      {/* KEY HIGHLIGHTS + PRODUCT ANATOMY */}
      <section className="bg-white px-5 py-11 sm:px-8 lg:py-14">
        <div className="mx-auto grid max-w-[1360px] items-center gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative rounded-[28px] border border-[#dce5ed] bg-[linear-gradient(145deg,#f7f9fb,#edf3f8)] p-6 shadow-[0_14px_35px_rgba(25,52,75,0.07)] sm:p-8"
          >
            <span className="absolute -left-2 -top-2 h-16 w-28 rounded-tl-[28px] border-l-[5px] border-t-[5px] border-[#174f7e]" />
            <h2 className="relative text-2xl font-black tracking-[-0.045em] text-[#202c38] sm:text-[30px]">
              Key <span className="text-[#174f7e]">Highlights</span>
            </h2>
            <span className="mt-3 block h-[4px] w-12 rounded-full bg-[#ed7628]" />
            <ul className="mt-6 space-y-4">
              {[
                "Adjustable shelving for flexible display",
                "High load-bearing capacity",
                "Premium powder-coated finish",
                "Ideal for supermarkets & grocery stores",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.45, ease }}
                  className="flex items-center gap-3 text-[13px] font-semibold text-[#334252] sm:text-sm"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#174f7e] text-white">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mb-3">
              <h2 className="text-2xl font-black tracking-[-0.045em] text-[#202c38] sm:text-[30px]">
                Product <span className="text-[#174f7e]">Anatomy</span>
              </h2>
              <span className="mt-3 block h-[4px] w-12 rounded-full bg-[#ed7628]" />
            </div>
            <ProductAnatomy product={PRODUCT} height={HEIGHT} />
          </motion.div>
        </div>
      </section>

      {/* PRODUCT DETAILS TABS */}
      <section className="bg-[linear-gradient(180deg,#f7f9fb_0%,#eef3f8_100%)] px-5 pb-12 sm:px-8 lg:pb-16">
        <div className="mx-auto max-w-[1360px]">
          <div className="flex max-w-[690px] flex-wrap gap-1 rounded-t-[20px] border border-[#dce5ed] border-b-0 bg-white/80 p-1.5">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setActiveTab(id)}
                className={`flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl px-3 py-3 text-xs font-extrabold transition sm:text-sm ${
                  activeTab === id
                    ? "bg-[#174f7e] text-white shadow-[0_6px_15px_rgba(23,79,126,0.2)]"
                    : "text-[#34485b] hover:bg-[#edf3f8]"
                }`}
              >
                <Icon size={17} /> {label}
              </button>
            ))}
          </div>

          <div className="min-h-[275px] overflow-hidden rounded-b-[24px] rounded-tr-[24px] border border-[#dce5ed] bg-white p-5 shadow-[0_14px_35px_rgba(25,52,75,0.07)] sm:p-7">
            <AnimatePresence mode="wait">
              {activeTab === "specifications" && (
                <motion.div
                  key="specifications"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease }}
                  className="grid items-center gap-6 lg:grid-cols-[1.12fr_0.88fr]"
                >
                  <div className="overflow-hidden rounded-xl border border-[#dce5ed]">
                    {SPECS.map(([key, value], index) => (
                      <div
                        key={key}
                        className={`grid grid-cols-[0.9fr_1.1fr] text-[11px] sm:text-[13px] ${
                          index % 2 === 0 ? "bg-[#edf3f8]" : "bg-white"
                        }`}
                      >
                        <div className="border-r border-[#dce5ed] px-3 py-2 font-extrabold text-[#263747] sm:px-5">{key}</div>
                        <div className="break-words px-3 py-2 text-slate-600 sm:px-5">{value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex min-h-[220px] items-center justify-center overflow-hidden rounded-2xl bg-[#eef3f7] p-4 sm:min-h-[250px]">
                    <img src={currentImage} alt={`${PRODUCT.title} detail`} className="max-h-[250px] w-full object-contain" />
                  </div>
                </motion.div>
              )}

              {activeTab === "description" && (
                <motion.div
                  key="description"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease }}
                  className="grid items-center gap-7 lg:grid-cols-[1fr_0.8fr]"
                >
                  <div>
                    <SectionEyebrow>Product information</SectionEyebrow>
                    <h3 className="text-2xl font-black tracking-tight text-[#202c38]">Built for organised retail spaces</h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">{PRODUCT.desc}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      <span className="rounded-lg bg-[#edf3f8] px-3 py-2 text-xs font-bold text-[#174f7e]">{PRODUCT.category}</span>
                      <span className="rounded-lg bg-[#fff4eb] px-3 py-2 text-xs font-bold text-[#d96520]">{PRODUCT.subtitle || "Customised Options Available"}</span>
                    </div>
                  </div>
                  <div className="flex min-h-[220px] items-center justify-center rounded-2xl bg-[#eef3f7] p-5">
                    <img src={currentImage} alt={PRODUCT.title} className="max-h-[250px] w-full object-contain" />
                  </div>
                </motion.div>
              )}

              {activeTab === "gallery" && (
                <motion.div
                  key="gallery"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease }}
                >
                  <SectionEyebrow>Product images</SectionEyebrow>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                    {galleryImages.map((image, index) => (
                      <button
                        key={`${image}-tab-${index}`}
                        type="button"
                        onClick={() => {
                          setSelectedImage(index);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="group flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-[#dce5ed] bg-[#f0f4f7] p-3 transition hover:border-[#ed7628]"
                      >
                        <img src={image} alt={`${PRODUCT.title} gallery ${index + 1}`} className="h-full w-full object-contain transition duration-500 group-hover:scale-105" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

     

      {/* RELATED PRODUCTS */}
      {RELATED.length > 0 && (
        <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f3f6f9_100%)] px-5 py-11 sm:px-8 lg:py-14">
          <div className="mx-auto max-w-[1360px]">
            <div className="mb-7 flex items-end justify-between gap-4">
              <div>
                <SectionEyebrow>Explore more</SectionEyebrow>
                <h2 className="text-2xl font-black tracking-[-0.045em] text-[#202c38] sm:text-[32px]">
                  Related <span className="text-[#174f7e]">Products</span>
                </h2>
                <span className="mt-3 block h-[4px] w-12 rounded-full bg-[#ed7628]" />
              </div>
              <a href="/products" className="hidden items-center gap-2 rounded-full border border-[#174f7e] px-4 py-2.5 text-xs font-extrabold text-[#174f7e] transition hover:bg-[#174f7e] hover:text-white sm:inline-flex">
                View All Products <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {RELATED.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08, duration: 0.55, ease }}
                  whileHover={{ y: -6 }}
                  className="group overflow-hidden rounded-[21px] border border-[#dce5ed] bg-white p-3 shadow-[0_8px_24px_rgba(25,52,75,0.06)] transition-shadow hover:shadow-[0_18px_35px_rgba(25,52,75,0.12)]"
                >
                  <div className="flex h-66 items-center justify-center overflow-hidden rounded-xl
                   bg-[#eef2f5] p-3">
                    <img src={item.image} alt={item.name} className="h-full w-full object-fit 
                    transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex items-center justify-between gap-2 px-1 pb-1 pt-4">
                    <div className="min-w-0">
                      {/* <span className="mb-1 block text-[9px] font-black tracking-widest text-[#ed7628]">{String(index + 1).padStart(2, "0")}</span> */}
                      <h3 className="text-sm font-extrabold leading-snug text-[#263747]">{item.name}</h3>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#174f7e] text-[#174f7e] transition group-hover:bg-[#174f7e] group-hover:text-white">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* MOBILE QUICK ACTIONS */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-2 border-t border-[#dce5ed] bg-white/95 p-2 shadow-[0_-8px_25px_rgba(25,52,75,0.08)] backdrop-blur lg:hidden">
        <a href={BRAND.tel} className="flex items-center justify-center gap-2 rounded-lg bg-[#174f7e] py-3 text-xs font-extrabold text-white">
          <Phone size={15} /> Call
        </a>
        <a href={waLink(whatsappMessage)} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-lg bg-[#174f7e] py-3 text-xs font-extrabold text-white">
          <MessageCircle size={15} /> WhatsApp
        </a>
        <a href="#enquiry" className="flex items-center justify-center gap-2 rounded-lg bg-[#ed7628] py-3 text-xs font-extrabold text-white">
          Quote <ArrowRight size={14} />
        </a>
      </div>
      <div className="h-16 lg:hidden" />
    </main>
  );
}
