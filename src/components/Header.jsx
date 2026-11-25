"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Clock,
  Download,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  CONFIG                                                             */
/* ------------------------------------------------------------------ */

const C = {
  navy: "#0A2457",
  blue: "#0B57E3",
  orange: "#F26A12",
  orangeLight: "#FF8A1F",
};
const EASE = [0.22, 1, 0.36, 1];

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Products", href: "/products", dropdown: true },
  { label: "Our Gallery", href: "/gallery" },
  { label: "Sitemap", href: "/sitemap" },
  { label: "Contact Us", href: "/contact-us" },
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

function WhatsAppIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  LOGO                                                               */
/* ------------------------------------------------------------------ */

function Logo({ compact }) {
  return (
    <a href="/" aria-label="Arya Insulation home" className="group flex shrink-0 items-center gap-3">
      <motion.span
        whileHover={{ rotate: -6, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 16 }}
        className={`relative flex items-center justify-center overflow-hidden rounded-[14px] shadow-[0_8px_18px_rgba(10,36,87,0.3)] transition-all duration-300 ${
          compact ? "h-[48px] w-[52px]" : "h-[56px] w-[60px] sm:h-[64px] sm:w-[68px]"
        }`}
        style={{ background: `linear-gradient(145deg,#12418f,${C.navy})` }}
      >
        <span className="relative z-10 text-xl font-black tracking-tight text-white sm:text-2xl">AI</span>
        <span className="absolute -bottom-4 -right-3 h-10 w-10 rotate-45" style={{ background: C.orange }} />
        <span className="absolute -left-3 -top-4 h-8 w-8 rotate-45 bg-white/10" />
      </motion.span>

      <span className="leading-tight">
        <span className="block whitespace-nowrap text-[17px] font-extrabold tracking-tight text-[#0A2457] sm:text-[21px] lg:text-[24px]">
          ARYA INSULATION
        </span>
        <span className="mt-1 flex items-center gap-2">
          <span className="h-[2px] w-5 rounded-full" style={{ background: C.orange }} />
          <span className="whitespace-nowrap text-[8px] font-bold tracking-[0.2em] text-[#33415f] sm:text-[10px]">
            PVT. LTD.
          </span>
          <span className="h-[2px] w-5 rounded-full" style={{ background: C.orange }} />
        </span>
      </span>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  HEADER                                                             */
/* ------------------------------------------------------------------ */

export default function Header() {
  const reduce = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false); // desktop mega menu
  const [mobileProducts, setMobileProducts] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [path, setPath] = useState("/");
  const navRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });

  useEffect(() => {
    setPath(window.location.pathname);
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menus: Escape, outside click, lock body scroll when mobile menu is open
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setProductOpen(false);
        setMenuOpen(false);
      }
    };
    const onDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setProductOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-[0_10px_30px_rgba(10,36,87,0.14)]" : ""
        }`}
      >
        {/* ================= TOP INFORMATION BAR ================= */}
        <motion.div
          initial={false}
          animate={{ height: scrolled ? 0 : "var(--tb-h)", opacity: scrolled ? 0 : 1 }}
          transition={{ duration: reduce ? 0 : 0.35, ease: EASE }}
          className="relative z-20 overflow-hidden text-white [--tb-h:40px] sm:[--tb-h:50px]"
          style={{ background: `linear-gradient(100deg,${C.navy} 0%,#0d2f6b 100%)` }}
        >
          <div className="flex h-full items-center justify-between">
            <div className="flex h-full items-center gap-3 px-4 text-[11px] font-semibold sm:gap-5 sm:px-8 sm:text-[13px] lg:px-12">
              <span className="flex items-center gap-2 whitespace-nowrap">
                <MapPin size={16} className="shrink-0" style={{ color: C.orangeLight }} />
                Delhi, India
              </span>
              <span className="h-4 w-px bg-white/35" />
              <span className="flex items-center gap-2 whitespace-nowrap">
                <Clock size={16} className="shrink-0" style={{ color: C.orangeLight }} />
                <span className="hidden sm:inline">Mon - Sat: 9:30 AM - 6:30 PM</span>
                <span className="sm:hidden">Mon - Sat</span>
              </span>
            </div>

            <div
              className="relative hidden h-full items-center gap-5 pl-14 pr-8 md:flex lg:gap-8 lg:pl-20 lg:pr-12"
              style={{
                background: `linear-gradient(90deg,${C.orange},${C.orangeLight})`,
                clipPath: "polygon(6% 0,100% 0,100% 100%,0 100%)",
              }}
            >
              <a href={`tel:${PHONE}`} className="flex items-center gap-2 whitespace-nowrap text-sm font-bold transition-opacity hover:opacity-80">
                <Phone size={17} fill="currentColor" />
                {PHONE_DISPLAY}
              </a>
              <span className="h-4 w-px bg-white/60" />
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 whitespace-nowrap text-sm font-bold transition-opacity hover:opacity-80">
                <Mail size={18} />
                {EMAIL}
              </a>
            </div>
          </div>
        </motion.div>

        {/* ================= MAIN NAVIGATION ================= */}
        <nav ref={navRef} aria-label="Main" className="relative border-b border-[#E3E9F4]">
          <div
            className={`relative mx-auto flex max-w-[1750px] items-center justify-between gap-4 px-4 transition-[height] duration-300 sm:px-6 lg:px-8 xl:px-12 ${
              scrolled ? "h-[66px] sm:h-[72px]" : "h-[65px] sm:h-[86px] lg:h-[75px]"
            }`}
          >
            <Logo compact={scrolled} />

            {/* DESKTOP LINKS */}
            <ul
              className="hidden h-full items-center gap-1 xl:flex 2xl:gap-2"
              onMouseLeave={() => setHovered(null)}
            >
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <li
                    key={link.label}
                    className="flex h-full items-center"
                    onMouseEnter={() => {
                      setHovered(link.label);
                      if (link.dropdown) setProductOpen(true);
                    }}
                    onMouseLeave={() => link.dropdown && setProductOpen(false)}
                  >
                    <a
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      aria-haspopup={link.dropdown ? "true" : undefined}
                      aria-expanded={link.dropdown ? productOpen : undefined}
                      onFocus={() => link.dropdown && setProductOpen(true)}
                      className={`relative flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2.5 text-[14px] font-bold transition-colors 2xl:px-5 2xl:text-[15.5px] ${
                        active ? "text-[#0B57E3]" : "text-[#1b2a4a] hover:text-[#0A2457]"
                      }`}
                    >
                      {hovered === link.label && (
                        <motion.span
                          layoutId="nav-hover"
                          aria-hidden
                          className="absolute inset-0 -z-10 rounded-full bg-[#EEF3FB]"
                          transition={{ type: "spring", stiffness: 420, damping: 34 }}
                        />
                      )}
                      {link.label}
                      {link.dropdown && (
                        <ChevronDown size={16} strokeWidth={2.6} className={`transition-transform duration-300 ${productOpen ? "rotate-180" : ""}`} />
                      )}
                      {active && (
                        <motion.span
                          layoutId="nav-active"
                          aria-hidden
                          className="absolute -bottom-[2px] left-5 right-5 h-[3px] rounded-full"
                          style={{ background: `linear-gradient(90deg,${C.orange},${C.orangeLight})` }}
                        />
                      )}
                    </a>

                    {/* ===== MEGA DROPDOWN ===== */}
                    <AnimatePresence>
                      {link.dropdown && productOpen && (
                        <motion.div
                          initial={reduce ? false : { opacity: 0, y: 14, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.25, ease: EASE }}
                          className="absolute left-1/2 top-full z-50 w-[min(820px,92vw)] -translate-x-1/2 pt-2"
                        >
                          <div className="grid grid-cols-[240px_1fr] overflow-hidden rounded-[22px] border border-[#E3E9F4] bg-white shadow-[0_28px_60px_-18px_rgba(10,36,87,0.35)]">
                            {/* feature panel */}
                            <div
                              className="relative flex flex-col justify-between overflow-hidden p-6 text-white"
                              style={{ background: `linear-gradient(160deg,#12418f,${C.navy})` }}
                            >
                              <span aria-hidden className="absolute -bottom-10 -right-10 h-40 w-40 rotate-45" style={{ background: C.orange, opacity: 0.95 }} />
                              <span aria-hidden className="absolute -bottom-2 -right-14 h-32 w-32 rotate-45 bg-white/10" />
                              <div className="relative">
                                <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-white/70">Our Products</p>
                                <h3 className="mt-3 text-[22px] font-extrabold leading-tight">Racks built for every kind of store</h3>
                                <p className="mt-3 text-[13px] leading-relaxed text-white/75">
                                  Cut, bent, welded and powder coated in our own factory.
                                </p>
                              </div>
                              <a
                                href="/contact"
                                className="relative mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[13px] font-extrabold text-[#0A2457] transition-transform hover:-translate-y-0.5"
                              >
                                Free Quote <ArrowRight size={16} strokeWidth={2.6} />
                              </a>
                            </div>

                            {/* product grid */}
                            <div className="p-4">
                              <div className="grid grid-cols-2 gap-1">
                                {PRODUCT_LINKS.map((product, i) => (
                                  <motion.a
                                    key={product}
                                    href="/products"
                                    initial={reduce ? false : { opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.04 * i, duration: 0.3, ease: EASE }}
                                    className="group/item flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-semibold leading-snug text-[#1b2a4a] transition-colors hover:bg-[#EEF3FB] hover:text-[#0B57E3]"
                                  >
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FB] text-[10px] font-extrabold text-[#0B57E3] transition-colors group-hover/item:bg-[#0B57E3] group-hover/item:text-white">
                                      {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="flex-1">{product}</span>
                                  </motion.a>
                                ))}
                              </div>
                              <a
                                href="/products"
                                className="mt-3 flex items-center justify-between rounded-xl bg-[#F6F8FC] px-4 py-3 text-[13px] font-extrabold text-[#0A2457] transition-colors hover:bg-[#EEF3FB]"
                              >
                                View all products
                                <ArrowRight size={17} strokeWidth={2.6} style={{ color: C.orange }} />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>

            {/* RIGHT CTAs */}
            <div className="flex shrink-0 items-center gap-3">
              {/* <motion.a
                href="/brochure.pdf"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="hidden items-center gap-2 rounded-full border-2 border-[#0A2457] px-5 py-2.5 text-sm font-bold text-[#0A2457] transition-colors duration-300 hover:bg-[#0A2457] hover:text-white 2xl:flex"
              >
                <Download size={17} />
                Brochure
              </motion.a> */}

              <motion.a
                href="/contact-us"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="group relative hidden h-[46px] items-center gap-3 overflow-hidden rounded-full pl-6 pr-2 text-sm font-extrabold text-white shadow-[0_12px_24px_-8px_rgba(242,106,18,0.7)] md:flex"
                style={{ background: `linear-gradient(90deg,${C.orange},${C.orangeLight})` }}
              >
                Free Quote
                <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-[#F26A12] transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight size={18} strokeWidth={2.8} />
                </span>
                <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/4 -skew-x-[20deg] bg-white/35 opacity-0 blur-sm transition-all duration-700 group-hover:left-[110%] group-hover:opacity-100" />
              </motion.a>

              <button
                type="button"
                onClick={() => setMenuOpen((o) => !o)}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF3FB] text-[#0A2457] transition-colors hover:bg-[#0A2457] hover:text-white xl:hidden"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={menuOpen ? "x" : "m"}
                    initial={reduce ? false : { rotate: -80, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 80, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="flex"
                  >
                    {menuOpen ? <X size={25} /> : <Menu size={25} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* scroll progress */}
          <motion.span
            aria-hidden
            style={{ scaleX: progress, originX: 0, background: `linear-gradient(90deg,${C.orange},${C.orangeLight})` }}
            className="absolute -bottom-px left-0 right-0 h-[3px]"
          />

          {/* ================= MOBILE MENU ================= */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                id="mobile-menu"
                initial={reduce ? false : { opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="absolute left-0 right-0 top-full z-50 max-h-[calc(100svh-72px)] overflow-y-auto border-t border-[#E3E9F4] bg-white shadow-2xl xl:hidden"
              >
                <div className="mx-auto max-w-3xl px-5 py-4">
                  <ul className="flex flex-col">
                    {NAV_LINKS.map((link, i) => (
                      <motion.li
                        key={link.label}
                        initial={reduce ? false : { opacity: 0, x: -18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + i * 0.05, duration: 0.35, ease: EASE }}
                        className="border-b border-[#E3E9F4]"
                      >
                        <div className="flex items-center justify-between">
                          <a
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            aria-current={isActive(link.href) ? "page" : undefined}
                            className={`flex-1 py-4 text-[15px] font-bold transition-colors ${
                              isActive(link.href) ? "text-[#0B57E3]" : "text-[#1b2a4a] hover:text-[#0B57E3]"
                            }`}
                          >
                            {link.label}
                          </a>
                          {link.dropdown && (
                            <button
                              type="button"
                              onClick={() => setMobileProducts((o) => !o)}
                              aria-label="Toggle product categories"
                              aria-expanded={mobileProducts}
                              className="flex h-10 w-10 items-center justify-center rounded-lg text-[#0B57E3]"
                            >
                              <ChevronDown size={20} className={`transition-transform duration-300 ${mobileProducts ? "rotate-180" : ""}`} />
                            </button>
                          )}
                        </div>

                        <AnimatePresence initial={false}>
                          {link.dropdown && mobileProducts && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: EASE }}
                              className="overflow-hidden"
                            >
                              <div className="mb-3 rounded-xl bg-[#F6F8FC] p-2">
                                {PRODUCT_LINKS.map((product, idx) => (
                                  <a
                                    key={product}
                                    href="/products"
                                    onClick={() => setMenuOpen(false)}
                                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-semibold text-[#33415f] transition-colors hover:bg-[#EEF3FB] hover:text-[#0B57E3]"
                                  >
                                    <span className="font-extrabold text-[#0B57E3]">{String(idx + 1).padStart(2, "0")}</span>
                                    {product}
                                  </a>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <a
                      href="/brochure.pdf"
                      className="flex items-center justify-center gap-2 rounded-full border-2 border-[#0A2457] py-3 text-sm font-bold text-[#0A2457]"
                    >
                      <Download size={17} /> Brochure Download
                    </a>
                    <a
                      href="/contact"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-center gap-2 rounded-full py-3 text-sm font-extrabold text-white"
                      style={{ background: `linear-gradient(90deg,${C.orange},${C.orangeLight})` }}
                    >
                      Free Quote <ArrowRight size={17} />
                    </a>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 border-t border-[#E3E9F4] pt-4 text-sm font-semibold text-[#33415f]">
                    <a href={`tel:${PHONE}`} className="flex items-center gap-3">
                      <Phone size={17} className="text-[#0B57E3]" /> {PHONE_DISPLAY}
                    </a>
                    <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 break-all">
                      <Mail size={17} className="text-[#0B57E3]" /> {EMAIL}
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* dim page behind the open mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#06183E]/40 xl:hidden"
          />
        )}
      </AnimatePresence>

      {/* ================= FLOATING CONTACT BUTTONS ================= */}
      <div className="fixed bottom-6 left-5 z-40 flex flex-col gap-3">
        {[
          {
            href: `tel:${PHONE}`,
            label: "Call us",
            bg: "#DC2626",
            icon: (
              <span className="flex h-10 w-10 items-center justify-center rounded-full text-white">
                <Phone size={21} fill="currentColor" />
              </span>
            ),
            ring: "#DC2626",
          },
          { href: WHATSAPP_URL, label: "Chat on WhatsApp", bg: "#25D366", icon: <WhatsAppIcon size={28} />, ring: "#25D366", ext: true },
        ].map((b, i) => (
          <motion.a
            key={b.label}
            href={b.href}
            aria-label={b.label}
            {...(b.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            initial={reduce ? false : { opacity: 0, scale: 0, x: -30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 1 + i * 0.15, type: "spring", stiffness: 300, damping: 16 }}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.92 }}
            className="relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_10px_24px_rgba(10,36,87,0.3)]"
            style={{ background: b.bg }}
          >
            {!reduce && (
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-full border-2"
                style={{ borderColor: b.ring }}
                animate={{ scale: [1, 1.5], opacity: [0.55, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: i * 0.6 }}
              />
            )}
            {b.icon}
          </motion.a>
        ))}
      </div>
    </>
  );
}