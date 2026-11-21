
"use client";

import { useEffect, useState } from "react";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Download,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  MessageCircle,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "/products", dropdown: true },
  { label: "Our Gallery", href: "/gallery" },
  { label: "Sitemap", href: "/sitemap" },
  { label: "Contact Us", href: "/contact" },
];

const PRODUCT_LINKS = [
  "Supermarket & Grocery Display Racks",
  "Fruit & Vegetable Display Racks",
  "Garment & Clothing Display Racks",
  "Footwear & Shoe Display Racks",
  "Pharmacy & Medical Store Racks",
  "Mobile & Electronics Display Racks",
  "Cosmetic, Beauty & Accessories Display Racks",
  "Bakery, Snacks & Confectionery Display Racks",
];

const PHONE = "+918587901795";
const PHONE_DISPLAY = "+91 8587901795";
const EMAIL = "aryaindustry36@gmail.com";
const WHATSAPP_URL = `https://wa.me/${PHONE.replace("+", "")}`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= MAIN STICKY HEADER ================= */}

      <header
        className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-[0_5px_25px_rgba(11,31,58,0.12)]" : ""
        }`}
      >

        {/* ================= TOP INFORMATION BAR ================= */}

        <div className="relative z-20 h-[42px] overflow-hidden bg-[var(--primary)] text-white sm:h-[55px]">

          <div className="flex h-full items-center justify-between">

            {/* LEFT INFORMATION */}
            <div className="flex h-full items-center gap-3 px-4 text-[11px] font-bold sm:gap-5 sm:px-8 sm:text-sm lg:px-12">

              <span className="flex items-center gap-2 whitespace-nowrap">
                <MapPin
                  size={17}
                  className="shrink-0 text-[var(--accent)] sm:h-[19px] sm:w-[19px]"
                />
                Delhi, India
              </span>

              <span className="h-5 w-px bg-white/40" />

              <span className="flex items-center gap-2 whitespace-nowrap">
                <Clock
                  size={18}
                  className="shrink-0 text-[var(--accent)]"
                />
                <span className="hidden sm:inline">
                  Mon - Sat: 9:30 AM - 6:30 PM
                </span>
                <span className="sm:hidden">
                  Mon - Sat
                </span>
              </span>

            </div>

            {/* RIGHT ORANGE CONTACT STRIP */}
            <div
              className="relative hidden h-full items-center gap-5 bg-[var(--accent)] pl-12 pr-8 text-white md:flex lg:gap-8 lg:pl-16 lg:pr-12"
              style={{
                clipPath: "polygon(5% 0, 100% 0, 100% 100%, 0 100%)",
              }}
            >

              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 whitespace-nowrap text-sm font-bold transition-opacity hover:opacity-75 lg:text-base"
              >
                <Phone size={19} fill="currentColor" />
                {PHONE_DISPLAY}
              </a>

              <span className="h-5 w-px bg-white/60" />

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 whitespace-nowrap text-sm font-bold transition-opacity hover:opacity-75 lg:text-base"
              >
                <Mail size={21} />
                {EMAIL}
              </a>

            </div>

          </div>
        </div>

        {/* ================= MAIN NAVIGATION ================= */}

        <nav className="relative border-b border-[var(--border)] bg-white">

          <div className="mx-auto flex h-[78px] max-w-[1750px] items-center justify-between gap-4 px-4 sm:h-[90px] sm:px-6 lg:h-[105px] lg:px-8 xl:px-12">

            {/* LOGO */}
            <a
              href="/"
              className="group flex shrink-0 items-center gap-3"
            >

              {/* Logo box */}
              <div className="relative flex h-[55px] w-[58px] items-center justify-center overflow-hidden rounded-xl bg-[var(--primary)] shadow-md transition-transform duration-300 group-hover:-rotate-3 sm:h-[68px] sm:w-[72px]">

                <span className="relative z-10 text-xl font-black tracking-tight text-white sm:text-2xl">
                  AI
                </span>

                <div className="absolute -bottom-3 -right-2 h-8 w-8 rotate-45 bg-[var(--accent)]" />

              </div>

              {/* Company name */}
              <div className="leading-tight">

                <h2 className="whitespace-nowrap text-[17px] font-extrabold tracking-tight text-[var(--primary)] sm:text-[22px] lg:text-[25px]">
                  ARYA INSULATION
                </h2>

                <div className="mt-1 flex items-center gap-2">
                  <span className="h-[2px] w-5 bg-[var(--accent)]" />

                  <span className="whitespace-nowrap text-[8px] font-bold tracking-[0.18em] text-[var(--heading-color)] sm:text-[10px]">
                    PVT. LTD.
                  </span>

                  <span className="h-[2px] w-5 bg-[var(--accent)]" />
                </div>

              </div>

            </a>

            {/* DESKTOP NAV LINKS */}
            <ul className="hidden items-center gap-5 xl:flex 2xl:gap-7">

              {NAV_LINKS.map((link) => (
                <li
                  key={link.label}
                  className="group relative"
                  onMouseEnter={() =>
                    link.dropdown && setProductOpen(true)
                  }
                  onMouseLeave={() =>
                    link.dropdown && setProductOpen(false)
                  }
                >

                  <a
                    href={link.href}
                    className={`relative flex items-center gap-1.5 whitespace-nowrap py-4 text-[14px] font-bold transition-colors 2xl:text-[16px] ${
                      link.label === "Home"
                        ? "text-[var(--primary)]"
                        : "text-[var(--heading-color)] hover:text-[var(--primary)]"
                    }`}
                  >

                    {link.label}

                    {link.dropdown && (
                      <ChevronDown
                        size={17}
                        className={`transition-transform duration-300 ${
                          productOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}

                    <span
                      className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-[var(--primary)] transition-all duration-300 ${
                        link.label === "Home"
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />

                  </a>

                  {/* PRODUCTS DROPDOWN */}
                  {link.dropdown && (
                    <div
                      className={`invisible absolute left-0 top-full z-50 w-[320px] translate-y-3 rounded-xl border border-[var(--border)] bg-white p-3 opacity-0 shadow-[0_15px_45px_rgba(11,31,58,0.15)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${
                        productOpen
                          ? "!visible !translate-y-0 !opacity-100"
                          : ""
                      }`}
                    >

                      <div className="mb-2 border-b border-[var(--border)] px-3 pb-3">
                        <p className="text-sm font-extrabold text-[var(--primary)]">
                          Our Product Categories
                        </p>
                        <p className="mt-1 text-xs text-[var(--secondary)]">
                          Explore our product range
                        </p>
                      </div>

                      <div className="max-h-[380px] overflow-y-auto">

                        {PRODUCT_LINKS.map((product, index) => (
                          <a
                            key={product}
                            href={`/products`}
                            className="group/item flex items-center gap-3 rounded-lg px-3 py-2.5 text-[12px] font-semibold text-[var(--text)] transition-all hover:bg-[var(--primary-light)] hover:text-[var(--primary)]"
                          >

                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[var(--primary-light)] text-[10px] font-bold text-[var(--primary)] transition-colors group-hover/item:bg-[var(--primary)] group-hover/item:text-white">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            {product}

                            <ArrowRight
                              size={14}
                              className="ml-auto shrink-0 opacity-0 transition-all group-hover/item:translate-x-1 group-hover/item:opacity-100"
                            />

                          </a>
                        ))}

                      </div>

                    </div>
                  )}

                </li>
              ))}

            </ul>

            {/* RIGHT CTA BUTTONS */}
            <div className="flex shrink-0 items-center gap-3">

              <span className="hidden h-11 w-px bg-[var(--border)] 2xl:block" />

              {/* BROCHURE */}
              <a
                href="/brochure.pdf"
                className="hidden items-center gap-2 rounded-xl border-2 border-[var(--primary)] px-4 py-3 text-sm font-bold text-[var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white 2xl:flex"
              >
                <Download size={18} />
                Brochure Download
              </a>

              {/* FREE QUOTE */}
              <a
                href="/contact"
                className="hidden items-center gap-3 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-extrabold text-[var(--heading-color)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--accent-hover)] hover:shadow-lg md:flex"
              >
                Free Quote

                <ArrowRight size={19} strokeWidth={2.5} />
              </a>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--primary-light)] text-[var(--primary)] transition-colors hover:bg-[var(--primary)] hover:text-white xl:hidden"
              >
                {menuOpen ? <X size={25} /> : <Menu size={25} />}
              </button>

            </div>

          </div>

          {/* ================= MOBILE MENU ================= */}

          <div
            className={`absolute left-0 right-0 top-full z-50 overflow-hidden border-t border-[var(--border)] bg-white shadow-xl transition-all duration-300 xl:hidden ${
              menuOpen
                ? "visible max-h-[85vh] overflow-y-auto opacity-100"
                : "invisible max-h-0 opacity-0"
            }`}
          >

            <div className="mx-auto max-w-7xl px-5 py-4">

              <div className="flex flex-col">

                {NAV_LINKS.map((link) => (
                  <div
                    key={link.label}
                    className="border-b border-[var(--border)]"
                  >

                    <div className="flex items-center justify-between">

                      <a
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex-1 py-4 text-sm font-bold text-[var(--heading-color)] transition-colors hover:text-[var(--primary)]"
                      >
                        {link.label}
                      </a>

                      {link.dropdown && (
                        <button
                          onClick={() => setProductOpen(!productOpen)}
                          aria-label="Toggle product categories"
                          className="flex h-10 w-10 items-center justify-center text-[var(--primary)]"
                        >
                          <ChevronDown
                            size={19}
                            className={`transition-transform ${
                              productOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}

                    </div>

                    {/* MOBILE PRODUCTS */}
                    {link.dropdown && productOpen && (
                      <div className="mb-3 rounded-lg bg-[var(--background-light)] p-2">

                        {PRODUCT_LINKS.map((product, index) => (
                          <a
                            key={product}
                            href="/products"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-3 rounded-md px-3 py-2.5 text-xs font-semibold text-[var(--secondary)] transition-colors hover:bg-[var(--primary-light)] hover:text-[var(--primary)]"
                          >
                            <span className="font-bold text-[var(--primary)]">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            {product}
                          </a>
                        ))}

                      </div>
                    )}

                  </div>
                ))}

              </div>

              {/* MOBILE CTA */}
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">

                <a
                  href="/brochure.pdf"
                  className="flex items-center justify-center gap-2 rounded-xl border-2 border-[var(--primary)] py-3 text-sm font-bold text-[var(--primary)]"
                >
                  <Download size={17} />
                  Brochure Download
                </a>

                <a
                  href="/contact"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] py-3 text-sm font-bold text-[var(--heading-color)]"
                >
                  Free Quote
                  <ArrowRight size={17} />
                </a>

              </div>

              {/* MOBILE CONTACT INFO */}
              <div className="mt-5 flex flex-col gap-3 border-t border-[var(--border)] pt-4 text-sm font-semibold text-[var(--secondary)]">

                <a href={`tel:${PHONE}`} className="flex items-center gap-3">
                  <Phone size={17} className="text-[var(--primary)]" />
                  {PHONE_DISPLAY}
                </a>

                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 break-all">
                  <Mail size={17} className="text-[var(--primary)]" />
                  {EMAIL}
                </a>

              </div>

            </div>
          </div>

        </nav>

      </header>

      {/* ================= FLOATING CONTACT BUTTONS ================= */}

      <div className="fixed bottom-6 left-5 z-40 flex flex-col gap-3">

        {/* CALL */}
        <a
          href={`tel:${PHONE}`}
          aria-label="Call us"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary)] text-white shadow-[0_5px_20px_rgba(0,81,254,0.25)] transition-all duration-300 hover:scale-110 hover:bg-[var(--primary-hover)]"
        >
          <Phone size={23} fill="currentColor" />
        </a>

        {/* WHATSAPP */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110"
        >
          <MessageCircle size={26} />
        </a>

      </div>

    </>
  );
}
