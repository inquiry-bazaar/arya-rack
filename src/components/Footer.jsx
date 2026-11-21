"use client"
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, ArrowUp,
  Facebook, Instagram, Youtube, Linkedin, ChevronRight,
} from "lucide-react";

/**
 * footer.jsx  —  npm i framer-motion lucide-react
 * <Footer />  — replace the placeholder phone, email, address and links in the `site` object below.
 */

const site = {
  name: "Arya Insulation",
  tagline: "Retail and warehouse racking, planned, manufactured and installed for your store.",
  phone: "+91 98765 43210",
  whatsapp: "919876543210", // country code + number, no spaces or +
  email: "info@aryainsulation.com",
  address: "Plot No. 00, Industrial Area, New Delhi, India",
  hours: "Mon – Sat, 9:30 am – 7:00 pm",

};

const quick = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "How We Work", href: "/#how-we-work" },
  { label: "Our Racks", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const products = [
  { label: "Supermarket Racks", href: "/products/supermarket" },
  { label: "Pharmacy Racks", href: "/products/pharmacy" },
  { label: "Wall & Gondola Racks", href: "/products/gondola" },
  { label: "Warehouse Racks", href: "/products/warehouse" },
  { label: "Custom Racks", href: "/products/custom" },
];

const NAVY = "#12347a";
const DEEP = "#081a47";
const BLUE = "#0a5be0";
const ORANGE = "#f7931e";
const ease = [0.22, 1, 0.36, 1];

const css = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
.ft{position:relative;font-family:Inter,"Segoe UI",system-ui,sans-serif;color:#cdd8f0;margin-top:90px}
.ft *{box-sizing:border-box}
.ft a{color:inherit;text-decoration:none}
.ft-body{position:relative;overflow:hidden;background:linear-gradient(160deg,${NAVY} 0%,${DEEP} 70%);
  clip-path:polygon(0 56px,100% 0,100% 100%,0 100%);padding:150px 24px 0}
.ft-glow{position:absolute;top:-120px;left:-120px;width:420px;height:420px;border-radius:50%;background:radial-gradient(circle,rgba(10,91,224,.45),transparent 70%);pointer-events:none}
.ft-slice{position:absolute;right:0;bottom:0;width:240px;height:110px;background:${ORANGE};clip-path:polygon(100% 0,100% 100%,22% 100%);opacity:.95;pointer-events:none}
.ft-slice2{position:absolute;right:0;bottom:0;width:140px;height:70px;background:#0a2866;clip-path:polygon(100% 0,100% 100%,30% 100%);pointer-events:none}

.ft-cta{position:absolute;z-index:5;top:-72px;left:50%;transform:translateX(-50%);width:min(1120px,calc(100% - 32px));
  display:flex;align-items:center;justify-content:space-between;gap:24px;padding:30px 40px;border-radius:36px;color:#0b1b4a;
  background:#fff;box-shadow:0 30px 60px -28px rgba(8,26,71,.6),0 0 0 1px rgba(18,52,122,.05)}
.ft-cta::before{content:"";position:absolute;left:0;top:26px;bottom:26px;width:6px;border-radius:0 6px 6px 0;background:${ORANGE}}
.ft-cta h2{margin:0;font-size:clamp(22px,2.6vw,32px);font-weight:800;letter-spacing:-.02em;line-height:1.2}
.ft-cta h2 span{color:${BLUE}}
.ft-cta p{margin:8px 0 0;color:#4a5878;font-size:16px}
.ft-cta-btns{display:flex;gap:14px;flex-wrap:wrap;flex:none}
.ft-btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;height:56px;padding:0 28px;border-radius:999px;font-weight:700;font-size:17px;white-space:nowrap}
.ft-btn.pri{color:#fff;background:linear-gradient(180deg,#ffa52e,#f4800a);box-shadow:0 14px 24px -10px rgba(244,128,10,.7)}
.ft-btn.sec{color:#fff;background:#1f9d57;box-shadow:0 14px 24px -10px rgba(31,157,87,.6)}
.ft a:focus-visible,.ft button:focus-visible{outline:3px solid ${ORANGE};outline-offset:3px;border-radius:8px}

.ft-wrap{position:relative;z-index:2;max-width:1240px;margin:0 auto}
.ft-grid{display:grid;grid-template-columns:1.5fr .8fr 1fr 1.3fr;gap:48px 40px;padding-bottom:56px}
.ft-brand{display:flex;align-items:center;gap:12px;color:#fff;font-weight:800;font-size:24px;letter-spacing:-.01em}
.ft-logo{width:46px;height:46px;border-radius:14px;background:#fff;color:${NAVY};display:flex;align-items:center;justify-content:center;font-weight:800;font-size:22px;box-shadow:0 0 0 3px ${ORANGE}}
.ft-tag{margin:18px 0 24px;max-width:30ch;line-height:1.6;font-size:16px}
.ft-social{display:flex;gap:10px;list-style:none;margin:0;padding:0}
.ft-social a{display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:14px;color:#fff;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);transition:background .25s,border-color .25s}
.ft-social a:hover{background:${ORANGE};border-color:${ORANGE}}
.ft h3{margin:0 0 22px;color:#fff;font-size:18px;font-weight:700;display:flex;flex-direction:column;gap:10px}
.ft h3::after{content:"";display:block;width:36px;height:3px;border-radius:3px;background:${ORANGE}}
.ft ul.ft-list{list-style:none;margin:0;padding:0;display:grid;gap:12px}
.ft-list a{display:inline-flex;align-items:center;gap:6px;font-size:16px;transition:color .2s,transform .2s}
.ft-list a:hover{color:#fff;transform:translateX(4px)}
.ft-list a svg{color:${ORANGE};flex:none}
.ft-contact{list-style:none;margin:0;padding:0;display:grid;gap:18px}
.ft-contact li{display:flex;gap:14px;align-items:flex-start;font-size:16px;line-height:1.5}
.ft-ci{flex:none;width:40px;height:40px;border-radius:12px;background:rgba(255,255,255,.08);color:${ORANGE};display:flex;align-items:center;justify-content:center}
.ft-contact a:hover{color:#fff}
.ft-bar{position:relative;z-index:2;border-top:1px solid rgba(255,255,255,.12);padding:22px 0 26px}
.ft-bar .ft-wrap{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;font-size:14.5px;color:#9fb0d6;padding-right:120px}
.ft-legal{display:flex;gap:22px;flex-wrap:wrap}
.ft-legal a:hover{color:#fff}
.ft-top{position:absolute;z-index:4;right:28px;bottom:24px;width:52px;height:52px;border:0;border-radius:50%;cursor:pointer;color:${NAVY};background:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 24px rgba(0,0,0,.3)}

@media (max-width:1023px){
  .ft-grid{grid-template-columns:1fr 1fr;gap:44px 32px}
  .ft-cta{flex-direction:column;align-items:flex-start;padding:28px 28px 28px 32px}
  .ft-body{padding-top:230px}
}
@media (max-width:640px){
  .ft{margin-top:150px}
  .ft-body{padding:290px 20px 0;clip-path:polygon(0 36px,100% 0,100% 100%,0 100%)}
  .ft-cta{top:-120px;border-radius:28px;padding:24px 22px 24px 26px}
  .ft-cta-btns{width:100%}.ft-btn{flex:1;min-width:0;padding:0 18px;font-size:16px}
  .ft-grid{grid-template-columns:1fr;gap:38px}
  .ft-bar .ft-wrap{padding-right:0;flex-direction:column;align-items:flex-start}
  .ft-top{bottom:auto;top:-26px;right:20px;width:48px;height:48px}
}
`;

export default function Footer() {
  const reduce = useReducedMotion();
  const year = new Date().getFullYear();

  const reveal = (d = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease, delay: d },
  });

  const Col = ({ title, items, d }) => (
    <motion.nav aria-label={title} {...reveal(d)}>
      <h3>{title}</h3>
      <ul className="ft-list">
        {items.map((l) => (
          <li key={l.label}>
            <a href={l.href}><ChevronRight size={16} strokeWidth={2.6} aria-hidden="true" />{l.label}</a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );

  return (
    <footer className="ft">
      <style>{css}</style>

     

      <div className="ft-body">
        <div className="ft-glow" aria-hidden="true" />
        <div className="ft-slice" aria-hidden="true" /><div className="ft-slice2" aria-hidden="true" />

        <div className="ft-wrap">
          <div className="ft-grid">
            <motion.div {...reveal(0)}>
              <a href="/" className="ft-brand" aria-label={`${site.name} home`}>
                <span className="ft-logo">A</span>{site.name}
              </a>
              <p className="ft-tag">{site.tagline}</p>
              {/* <ul className="ft-social">
                {site.social.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <motion.a href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                      whileHover={reduce ? undefined : { y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                      <Icon size={20} />
                    </motion.a>
                  </li>
                ))}
              </ul> */}
            </motion.div>

            <Col title="Quick Links" items={quick} d={0.1} />
            <Col title="Our Racks" items={products} d={0.2} />

            <motion.div {...reveal(0.3)}>
              <h3>Contact Us</h3>
              <ul className="ft-contact">
                <li><span className="ft-ci"><Phone size={20} /></span><a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></li>
                <li><span className="ft-ci"><Mail size={20} /></span><a href={`mailto:${site.email}`}>{site.email}</a></li>
                <li><span className="ft-ci"><MapPin size={20} /></span><span>{site.address}</span></li>
                <li><span className="ft-ci"><Clock size={20} /></span><span>{site.hours}</span></li>
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="ft-bar">
          <div className="ft-wrap">
            <span>© {year} {site.name}. All rights reserved.</span>
            <div className="ft-legal">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>

        <motion.button type="button" className="ft-top" aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })}
          whileHover={reduce ? undefined : { y: -4 }} whileTap={reduce ? undefined : { scale: 0.92 }}>
          <ArrowUp size={24} strokeWidth={2.4} />
        </motion.button>
      </div>
    </footer>
  );
}