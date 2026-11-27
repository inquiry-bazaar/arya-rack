
"use client";

import { useState } from "react";
import Link from "next/link";
import Popup from "./Popup";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  MessageCircle,
  ShieldCheck,
  Layers3,
  Wrench,
  Sparkles,
  FileText,
  ChevronUp,
  ChevronDown,
  Send,
  CheckCircle2,
  Package,
  Ruler,
  Download,
} from "lucide-react";

export default function ProductDetail({ product }) {
  const [activeTab, setActiveTab] = useState("specifications");
  const [selectedImage, setSelectedImage] = useState(0);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });


 // PRODUCT SPECIFICATIONS
const specs = Object.entries(product.specs || {});

// GET QUICK SPEC VALUE
const getSpec = (key, fallback) => {
  return product.quickSpecs?.[key] || fallback;
};

// QUICK SPECIFICATIONS
const quickSpecs = [
  {
    icon: Ruler,
    value: getSpec("height", "6–7 ft"),
    label: "Height",
  },
  {
    icon: Layers3,
    value: getSpec("displayLevels", "5–6 Levels"),
    label: "Display Levels",
  },
  {
    icon: Wrench,
    value: getSpec("material", "Mild Steel"),
    label: "Material",
  },
  {
    icon: Sparkles,
    value: getSpec("finish", "Powder Coated"),
    label: "Finish",
  },
];



  // PRODUCT GALLERY - ONLY IN HERO
  const gallery = [
    product.image,
    ...(product.gallery || product.images || []),
  ]
    .map((item) =>
      typeof item === "string" ? item : item?.src || item?.image
    )
    .filter(Boolean);

  const currentImage = gallery[selectedImage] || product.image;

  // WHATSAPP LINK
  const whatsapp = `https://wa.me/918587901795?text=${encodeURIComponent(
    `Hello Arya Industry, I am interested in ${product.title}.`
  )}`;


  // PRODUCT FEATURES
  const features = product.features?.length
    ? product.features.map((feature) => ({
        title:
          typeof feature === "string" ? feature : feature.title,
      }))
    : [
        { title: "Adjustable shelving for flexible display" },
        { title: "High load-bearing capacity" },
        { title: "Premium powder-coated finish" },
        { title: "Ideal for supermarkets & grocery stores" },
      ];

  // QUICK SPECIFICATIONS


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // FORM SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hello Arya Industry,

Product: ${product.title}

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

Requirement:
${form.message}
`;

    window.open(
      `https://wa.me/918587901795?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  // IMAGE NAVIGATION
  const previousImage = () => {
    if (!gallery.length) return;

    setSelectedImage(
      (prev) => (prev - 1 + gallery.length) % gallery.length
    );
  };

  const nextImage = () => {
    if (!gallery.length) return;

    setSelectedImage(
      (prev) => (prev + 1) % gallery.length
    );
  };

  return (
    <>
    <main className="overflow-hidden bg-white text-[#102b49]">

      {/* =========================================
          HERO SECTION - PRODUCT IMAGE ONLY HERE
      ========================================= */}

      <section className="relative overflow-hidden bg-[#f2f6fa]">

        <div className="pointer-events-none absolute -right-20 -top-28 h-[500px] w-[500px] rounded-full border-[55px] border-white/70" />

        <div className="pointer-events-none absolute -right-10 top-20 h-[350px] w-[350px] rounded-full border-[35px] border-white/40" />

        <div className="relative mx-auto max-w-[1440px] px-5 pb-12 pt-4 sm:px-8 lg:px-12">

          {/* BREADCRUMB */}

          <div className="mb-5 flex flex-wrap items-center gap-2 text-[15px] text-[#64788e]">
            <Link href="/" className="hover:text-[#174f7e]">
              Home
            </Link>

            <span>/</span>

            <Link href="/products" className="hover:text-[#174f7e]">
              Products
            </Link>

            <span>/</span>

            <span className="font-bold text-[#102b49]">
              {product.title}
            </span>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

            {/* PRODUCT IMAGE GALLERY */}

            <div className="grid grid-cols-[42px_1fr] items-center gap-2 sm:grid-cols-[55px_1fr] sm:gap-4">

              <div className="flex flex-col items-center gap-3">

                
              </div>

              {/* MAIN PRODUCT IMAGE */}

              <div className="relative flex min-h-[310px] items-center justify-center overflow-hidden rounded-[20px] border border-white bg-gradient-to-br from-white to-[#eaf1f7] p-5 shadow-[0_15px_35px_rgba(15,45,75,0.07)] sm:min-h-[440px] sm:p-8">

                {currentImage ? (
                  <img
                    src={currentImage}
                    alt={product.title}
                    className="relative z-10 max-h-[390px] w-full object-contain"
                  />
                ) : (
                  <Package
                    size={70}
                    className="text-[#b6c6d5]"
                  />
                )}

                <span className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#174f7e] shadow-sm">
                  Product View {selectedImage + 1}
                </span>

                <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#174f7e] text-white">
                  <ArrowUpRight size={15} />
                </span>

              </div>
            </div>

            {/* PRODUCT INFORMATION */}

            <div className="relative z-10">

              <span className="inline-flex rounded-full border border-[#f5c79e] bg-[#fff6ed] px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-wide text-[#e86c19]">
                {product.category || "Product Collection"}
              </span>

              <h1 className="mt-4 text-4xl font-black leading-[1.08] tracking-tight text-[#102b49] sm:text-5xl lg:text-[54px]">
                {product.title}
              </h1>

              <p className="mt-4 max-w-xl text-xs leading-6 text-[#6a7c8e] sm:text-sm">
                { product.desc}
              </p>

              {/* QUICK SPECIFICATIONS */}

              <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">

                {quickSpecs.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="flex min-h-[78px] flex-col items-center justify-center 
                    rounded-xl border border-[#e0e8ef] bg-white px-2 py-3 text-center 
                    shadow-[0_5px_15px_rgba(20,50,80,0.04)]"
                  >
                    <Icon
                      size={18}
                      className="mb-1.5 text-[#174f7e]"
                    />

                    <strong className="text-[15px]  text-[#102b49]">
                      {value}
                    </strong>

                    <span className="mt-0.5 text-[14px] text-[#7b8c9c]">
                      {label}
                    </span>
                  </div>
                ))}

              </div>

              {/* ACTION BUTTONS */}

              <div className="mt-5 flex flex-wrap gap-2">

                <button
                  type="button"
                  onClick={() => setQuoteOpen(true)}
                  className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#f47721] px-5 text-[15px] font-extrabold text-white shadow-md shadow-orange-100 transition hover:bg-[#e56815]"
                >
                  Request a Quote
                  <ArrowRight size={14} />
                </button>

                {product.brochure ? (
                  <a
                    href={product.brochure}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 items-center gap-2 rounded-lg border border-[#174f7e] bg-white px-4 text-[15px] font-bold text-[#174f7e] transition hover:bg-[#edf4f9]"
                  >
                    <Download size={13} />
                    Download Brochure
                  </a>
                ) : (
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 items-center gap-2 rounded-lg border border-[#174f7e] bg-white px-4 text-[15px] font-bold text-[#174f7e] transition hover:bg-[#edf4f9]"
                  >
                    <MessageCircle size={13} />
                    WhatsApp Enquiry
                  </a>
                )}

              </div>
            </div>
          </div>

          {/* BENEFIT STRIP */}

          <div className="mt-8 grid grid-cols-2 gap-4 rounded-xl bg-gradient-to-r from-[#174f7e] 
          to-[#0b3c64] px-5 py-5 !text-white shadow-[0_15px_25px_rgba(20,60,100,0.2)] md:grid-cols-4">

            {[
              {
                icon: ShieldCheck,
                title: "Durable & Sturdy",
                desc: "Long-lasting performance for everyday retail use",
              },
              {
                icon: Layers3,
                title: "Space Optimisation",
                desc: "Organised product display and better floor planning",
              },
              {
                icon: Wrench,
                title: "Customised Options",
                desc: "Configurations tailored to your store layout",
              },
              {
                icon: Sparkles,
                title: "Premium Finish",
                desc: "Clean, modern look with a quality surface finish",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex !text-white items-center gap-3 border-white/20 md:border-r md:last:border-0 md:px-3"
              >
                <Icon size={21} className="shrink-0" />

                <div>
                  <h3 className="text-[14px] font-extrabold !text-white">
                    {title}
                  </h3>

                  <p className="mt-1 text-[10px] leading-4 !text-white">
                    {desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================
          KEY HIGHLIGHTS + ENQUIRY FORM
      ========================================= */}

      <section className="bg-white px-5 py-12 sm:px-8 lg:px-12">

        <div className="mx-auto grid max-w-[1360px] items-center gap-7 lg:grid-cols-[0.8fr_1.2fr]">

          {/* KEY HIGHLIGHTS */}

          <div className="relative rounded-2xl border border-[#e0e8ef] bg-gradient-to-br from-[#f5f8fb] to-[#edf3f8] p-6 shadow-[0_10px_25px_rgba(20,50,80,0.05)] sm:p-8">

            <div className="absolute -left-1 -top-1 h-9 w-14 rounded-tl-2xl border-l-[3px] border-t-[3px] border-[#174f7e]" />

            <h2 className="text-2xl font-black tracking-tight text-[#102b49]">
              Key <span className="text-[#174f7e]">Highlights</span>
            </h2>

            <div className="mt-3 h-[3px] w-9 bg-[#f47721]" />

            <div className="mt-6 space-y-4">

              {features.map(({ title }, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#174f7e] text-white">
                    <CheckCircle2 size={12} />
                  </span>

                  <p className="text-xs font-medium leading-5 text-[#344e68]">
                    {title}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* ENQUIRY FORM */}

          <div
            id="enquiry-form"
            className="relative scroll-mt-24 overflow-hidden rounded-2xl border border-[#e0e8ef] bg-[#f2f6fa] p-6 shadow-[0_10px_25px_rgba(20,50,80,0.06)] sm:p-8"
          >

            <div className="pointer-events-none absolute -right-12 -top-20 h-52 w-52 rounded-full border-[30px] border-white/60" />

            <div className="relative z-10">

              <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#f47721]">
                Have a requirement?
              </span>

              <h2 className="mt-2 text-2xl font-black text-[#102b49]">
                Request a <span className="text-[#174f7e]">Quote</span>
              </h2>

              <p className="mt-2 text-xs leading-5 text-[#6c8093]">
                Share your details and our team will help you find the right solution.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-5 grid gap-3 sm:grid-cols-2"
              >

                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name *"
                  className="h-11 w-full rounded-lg border border-[#dce5ed] bg-white px-4 text-xs outline-none transition focus:border-[#174f7e]"
                />

                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone Number *"
                  className="h-11 w-full rounded-lg border border-[#dce5ed] bg-white px-4 text-xs outline-none transition focus:border-[#174f7e]"
                />

                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="h-11 w-full rounded-lg border border-[#dce5ed] bg-white px-4 text-xs outline-none transition focus:border-[#174f7e] sm:col-span-2"
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about your requirement..."
                  className="w-full resize-none rounded-lg border border-[#dce5ed] bg-white p-4 text-xs outline-none transition focus:border-[#174f7e] sm:col-span-2"
                />

                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#f47721] px-5 text-xs font-extrabold text-white shadow-md transition hover:bg-[#e56815] sm:col-span-2"
                >
                  Submit Enquiry
                  <Send size={14} />
                </button>

              </form>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          PRODUCT DETAILS TABS
          NO PRODUCT IMAGES IN THIS SECTION
      ========================================= */}

      <section className="bg-[#f1f5f8] px-5 pb-12 pt-3 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-[1360px]">

        {/* TAB NAVIGATION */}

<div className="flex max-w-[780px] overflow-hidden rounded-t-2xl border border-[#e0e8ef] border-b-0 bg-white">

  {[
    { id: "description", label: "Description", icon: Layers3 },
    { id: "specifications", label: "Specifications", icon: FileText },

  
  ].map(({ id, label, icon: Icon }) => (
    <button
      type="button"
      key={id}
      onClick={() => setActiveTab(id)}
      className={`flex flex-1 items-center justify-center gap-2 px-3 py-3 text-[10px] font-extrabold transition sm:text-xs ${
        activeTab === id
          ? "bg-[#174f7e] text-white shadow-md"
          : "bg-white text-[#314d68] hover:bg-[#f4f7fa]"
      }`}
    >
      <Icon size={13} />
      {label}
    </button>
  ))}

</div>

          {/* TAB CONTENT */}

          <div className="rounded-b-2xl rounded-tr-2xl border border-[#e0e8ef] bg-white p-4 shadow-[0_15px_30px_rgba(20,50,80,0.05)] sm:p-6">

           


{/* DESCRIPTION TAB */}
{activeTab === "description" && (
  <div className="w-full">
    <h3 className="text-3xl font-black text-[#102b49]">
      Product Description
    </h3>

    <div className="mt-3 h-[3px] w-10 bg-[#f47721]" />

    <p className="mt-5 whitespace-pre-line text-xs leading-7 text-[#64798c]">
      {product.description}
    </p>
  </div>
)}


            {/* SPECIFICATIONS - FULL WIDTH */}

            {activeTab === "specifications" && (
              <div className="w-full overflow-hidden rounded-xl border border-[#e0e8ef]">

                {specs.length > 0 ? (
                  specs.map(([key, value], index) => (
                    <div
                      key={key}
                      className={`grid grid-cols-2 text-[16px] sm:text-xs ${
                        index % 2 === 0
                          ? "bg-[#edf3f8]"
                          : "bg-white"
                      }`}
                    >
                      <div className="border-r border-[#dce5ed] px-3 py-2.5 font-extrabold 
                      text-[#243e57] sm:px-5 text-[14px]">
                        {key}
                      </div>

                      <div className="px-3 py-2.5 text-gray-700 sm:px-5 text-[14px]">
                        {value}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="p-5 text-xs text-gray-500">
                    Specifications coming soon.
                  </p>
                )}

              </div>
            )}

            {/* DESCRIPTION - NO IMAGE */}

            {activeTab === "overview" && (
              <div className="w-full">

                <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#f47721]">
                  Product Description
                </span>

                <h3 className="mt-2 text-2xl font-black text-[#102b49]">
                  {product.title}
                </h3>

                <div className="mt-3 h-[3px] w-10 bg-[#f47721]" />

                <p className="mt-5 whitespace-pre-line text-xs leading-7 text-[#64798c]">
                  {product.desc ||
                    product.description ||
                    "Product information will be updated soon."}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">

                  {features.map(({ title }, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-xs text-[#344e68]"
                    >
                      <CheckCircle2
                        size={15}
                        className="shrink-0 text-[#174f7e]"
                      />

                      {title}
                    </div>
                  ))}

                </div>

              </div>
            )}

          </div>
        </div>
      </section>

      {/* =========================================
          RELATED PRODUCTS - LAST PRODUCT SECTION
      ========================================= */}

      {product.relatedProducts?.length > 0 && (
        <section className="bg-white px-5 py-12 sm:px-8 lg:px-12">

          <div className="mx-auto max-w-[1360px]">

            <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#60778c]">
              — Explore More
            </span>

            <div className="mt-2 flex items-end justify-between gap-4">

              <h2 className="text-2xl font-black text-[#102b49] sm:text-3xl">
                Related <span className="text-[#174f7e]">Products</span>
              </h2>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border border-[#174f7e] px-3 py-2 text-[9px] font-bold text-[#174f7e] transition hover:bg-[#174f7e] hover:text-white"
              >
                View All Products
                <ArrowUpRight size={13} />
              </Link>

            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">

              {product.relatedProducts.map((item, index) => (
                <Link
                  key={item.slug || index}
                  href={`/products/${item.slug}`}
                  className="group overflow-hidden rounded-xl border border-[#e0e8ef] bg-white p-2 shadow-[0_7px_20px_rgba(20,50,80,0.05)] transition hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg bg-[#edf3f8] p-3">

                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                      />
                    )}

                  </div>

                  <div className="flex items-center justify-between gap-2 px-1 pb-1 pt-3">

                    <h3 className="text-[15px] font-extrabold text-[#102b49] sm:text-xs">
                      {item.title}
                    </h3>

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#b9cbdc] text-[#174f7e]">
                      <ArrowRight size={13} />
                    </span>

                  </div>
                </Link>
              ))}

            </div>
          </div>
        </section>
      )}

      {/* MOBILE QUICK ACTIONS */}

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-gray-200 bg-white/95 p-2 shadow-lg backdrop-blur lg:hidden">

        <a
          href="tel:+918587901795"
          className="flex items-center justify-center gap-2 rounded-lg bg-[#174f7e] py-3 text-xs font-bold text-white"
        >
          <Phone size={15} />
          Call Now
        </a>

        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg bg-[#f47721] py-3 text-xs font-bold text-white"
        >
          <MessageCircle size={15} />
          WhatsApp
        </a>

      </div>

      <div className="h-14 lg:hidden" />

    </main>
    <Popup open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
