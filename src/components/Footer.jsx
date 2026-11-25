"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowUp,
  Phone,
  Mail,
  MapPin,
  Clock3,
  MessageCircle,
  MoveUpRight,
  Plus,
} from "lucide-react";

/*
  Arya Insulation — Creative Footer
  Install: pnpm add framer-motion lucide-react
  Replace the placeholder contact details and links in `site` before publishing.
*/

const site = {
  name: "Arya Insulation",
  shortName: "ARYA",
  tagline:
    "Retail and warehouse racking, planned, manufactured and installed for your store.",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "info@aryainsulation.com",
  address: "Plot No. 00, Industrial Area, New Delhi, India",
  hours: "Mon – Sat, 9:30 am – 7:00 pm",
  credit: "Inquiry Bazaar Pvt. Ltd.",
  creditUrl: "https://inquirybazaar.com/",
};

const exploreLinks = [
  { no: "01", label: "Home", href: "/" },
  { no: "02", label: "About Us", href: "/about" },
  { no: "03", label: "How We Work", href: "/#how-we-work" },
  { no: "04", label: "Our Racks", href: "/products" },
  { no: "05", label: "Gallery", href: "/gallery" },
  { no: "06", label: "Contact", href: "/contact" },
];

const productLinks = [
  { label: "Supermarket Racks", href: "/products/supermarket" },
  { label: "Pharmacy Racks", href: "/products/pharmacy" },
  { label: "Wall & Gondola Racks", href: "/products/gondola" },
  { label: "Warehouse Racks", href: "/products/warehouse" },
  { label: "Custom Racks", href: "/products/custom" },
];

const ease = [0.22, 1, 0.36, 1];

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap');
.arya-footer{--af-navy:#08264b;--af-deep:#061a35;--af-blue:#123d70;--af-orange:#f58220;position:relative;margin-top:100px;color:#eaf1fb;font-family:'DM Sans',Arial,sans-serif;isolation:isolate}
.arya-footer *{box-sizing:border-box}
.arya-footer a{color:inherit;text-decoration:none}
.af-cta-wrap{position:relative;z-index:3;max-width:1280px;margin:0 auto;padding:0 28px}
.af-cta{position:relative;overflow:hidden;display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:28px;padding:34px 42px;border-radius:24px;background:#f4f6f8;color:var(--af-deep);box-shadow:0 22px 55px rgba(4,24,49,.14)}
.af-cta:before{content:"";position:absolute;inset:0 auto 0 0;width:7px;background:var(--af-orange)}
.af-cta:after{content:"";position:absolute;right:190px;top:-105px;width:250px;height:250px;border:1px solid rgba(8,38,75,.09);border-radius:50%;box-shadow:0 0 0 28px rgba(8,38,75,.025),0 0 0 56px rgba(8,38,75,.02);pointer-events:none}
.af-cta-copy,.af-cta-actions{position:relative;z-index:1}
.af-kicker{display:flex;align-items:center;gap:9px;color:var(--af-orange);font-size:11px;font-weight:800;letter-spacing:.19em;text-transform:uppercase}
.af-kicker:before{content:"";width:25px;height:2px;background:currentColor}
.af-cta h2{margin:12px 0 0;font:800 clamp(25px,3vw,39px)/1.12 'Manrope',sans-serif;letter-spacing:-.045em}
.af-cta h2 span{color:#e97816}
.af-cta p{margin:10px 0 0;color:#61718a;font-size:14px;line-height:1.65;max-width:570px}
.af-cta-actions{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.af-action{min-height:49px;padding:0 20px;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:13px;font-weight:800;transition:transform .25s,background .25s,box-shadow .25s}
.af-action:hover{transform:translateY(-3px)}
.af-action.primary{background:var(--af-orange);color:#fff;box-shadow:0 9px 22px rgba(245,130,32,.23)}
.af-action.primary:hover{background:#e9710e}
.af-action.whatsapp{background:#fff;color:#16864a;border:1px solid #c9e8d6}
.af-action.whatsapp:hover{box-shadow:0 8px 20px rgba(10,80,40,.09)}
.af-main{position:relative;overflow:hidden;margin-top:-55px;padding:120px 28px 0;background:linear-gradient(130deg,#0b315d 0%,#08264b 48%,#061a35 100%)}
.af-main:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:62px 62px;mask-image:linear-gradient(90deg,black,transparent 75%);pointer-events:none}
.af-main:after{content:"";position:absolute;right:-150px;top:60px;width:470px;height:470px;border:1px solid rgba(255,255,255,.09);border-radius:50%;box-shadow:0 0 0 42px rgba(255,255,255,.018),0 0 0 84px rgba(255,255,255,.015);pointer-events:none}
.af-container{position:relative;z-index:1;max-width:1224px;margin:0 auto}
.af-topline{display:flex;align-items:center;justify-content:space-between;gap:20px;padding-bottom:28px;border-bottom:1px solid rgba(255,255,255,.15)}
.af-brand{display:flex;align-items:center;gap:13px}
.af-mark{width:48px;height:48px;display:grid;place-items:center;background:var(--af-orange);color:#fff;border-radius:13px 13px 13px 3px;font:800 23px 'Manrope',sans-serif;transform:skew(-7deg)}
.af-brand-name{font:800 21px 'Manrope',sans-serif;letter-spacing:-.04em;color:#fff}
.af-brand-sub{margin-top:3px;color:#9fb3cf;font-size:10px;letter-spacing:.13em;text-transform:uppercase}
.af-top-note{display:flex;align-items:center;gap:10px;color:#a9bad2;font-size:12px}
.af-top-note b{color:#fff;font-weight:700}
.af-content{display:grid;grid-template-columns:1.25fr .72fr .92fr 1.05fr;gap:48px;padding:54px 0 60px}
.af-manifesto{min-width:0}
.af-manifesto .af-kicker{color:#ff9b43}
.af-manifesto h2{margin:18px 0 16px;max-width:440px;color:#fff;font:800 clamp(34px,4.2vw,58px)/.99 'Manrope',sans-serif;letter-spacing:-.065em}
.af-manifesto h2 em{font-style:normal;color:#ff922f}
.af-manifesto p{max-width:340px;margin:0;color:#aebed3;font-size:14px;line-height:1.8}
.af-socials{display:flex;gap:9px;margin-top:25px}
.af-socials a{width:38px;height:38px;border:1px solid rgba(255,255,255,.18);border-radius:50%;display:grid;place-items:center;color:#fff;transition:.25s}
.af-socials a:hover{background:var(--af-orange);border-color:var(--af-orange);transform:translateY(-3px)}
.af-col{padding-top:7px}
.af-col-head{display:flex;align-items:center;gap:10px;margin:0 0 22px;color:#fff;font:800 12px 'Manrope',sans-serif;letter-spacing:.14em;text-transform:uppercase}
.af-col-head span{color:#ff9b43;font-size:10px;letter-spacing:0}
.af-links{list-style:none;padding:0;margin:0;display:grid;gap:15px}
.af-links a{display:inline-flex;align-items:center;gap:8px;color:#aebed3;font-size:13px;transition:color .2s,transform .2s}
.af-links a:hover{color:#fff;transform:translateX(4px)}
.af-links .af-number{color:#6884a9;font-size:10px;font-weight:700}
.af-product-links a:before{content:"";width:5px;height:5px;border-radius:50%;background:var(--af-orange);opacity:.85}
.af-contact-list{display:grid;gap:17px}
.af-contact-item{display:grid;grid-template-columns:36px 1fr;gap:11px;align-items:start}
.af-contact-icon{width:36px;height:36px;border-radius:10px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.1);display:grid;place-items:center;color:#ff9b43}
.af-contact-label{display:block;margin:1px 0 4px;color:#7892b5;font-size:9px;font-weight:800;letter-spacing:.13em;text-transform:uppercase}
.af-contact-value{color:#e9f0fa;font-size:12px;line-height:1.55;overflow-wrap:anywhere}
.af-contact-value a:hover{color:#ffad65}
.af-bigword{position:relative;display:flex;align-items:center;justify-content:space-between;gap:20px;padding:22px 0 24px;border-top:1px solid rgba(255,255,255,.15)}
.af-bigword strong{font:800 clamp(42px,10vw,132px)/.82 'Manrope',sans-serif;letter-spacing:-.085em;color:rgba(255,255,255,.07);white-space:nowrap}
.af-bigword span{flex:none;color:#ff9b43;font-size:10px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;writing-mode:vertical-rl}
.af-bottom{border-top:1px solid rgba(255,255,255,.12);background:rgba(2,13,29,.28)}
.af-bottom-inner{max-width:1224px;margin:0 auto;padding:18px 0;display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap;color:#8fa5c3;font-size:11px}
.af-bottom-links{display:flex;gap:20px;flex-wrap:wrap}
.af-bottom a:hover{color:#fff}
.af-credit a{color:#d9e4f4;text-decoration:underline;text-underline-offset:3px}
.af-backtop{position:absolute;right:max(28px,calc((100vw - 1224px)/2));bottom:74px;width:46px;height:46px;border:0;border-radius:50%;display:grid;place-items:center;background:var(--af-orange);color:#fff;cursor:pointer;box-shadow:0 10px 25px rgba(0,0,0,.22);transition:transform .2s,background .2s}
.af-backtop:hover{transform:translateY(-4px);background:#ff9a3d}
.arya-footer a:focus-visible,.arya-footer button:focus-visible{outline:3px solid #ffb36e;outline-offset:4px}
@media(max-width:1050px){.af-content{grid-template-columns:1.2fr 1fr 1fr;gap:42px 32px}.af-manifesto{grid-column:1/-1}.af-manifesto h2{max-width:600px}.af-contact-col{grid-column:1/-1}.af-contact-list{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:700px){.arya-footer{margin-top:80px}.af-cta-wrap{padding:0 16px}.af-cta{grid-template-columns:1fr;padding:27px 22px 24px;gap:20px;border-radius:18px}.af-cta:after{right:-80px}.af-cta-actions{width:100%}.af-action{flex:1;padding:0 13px;font-size:12px}.af-main{padding:105px 20px 0;margin-top:-42px}.af-topline{align-items:flex-start;flex-direction:column}.af-content{grid-template-columns:1fr 1fr;gap:36px 22px;padding:38px 0 38px}.af-manifesto{grid-column:1/-1}.af-manifesto h2{font-size:clamp(42px,12vw,58px)}.af-contact-col{grid-column:1/-1}.af-contact-list{grid-template-columns:1fr 1fr;gap:18px 12px}.af-bigword{padding:19px 0}.af-bigword strong{font-size:clamp(43px,12vw,78px)}.af-bigword span{font-size:8px}.af-backtop{right:20px;bottom:86px;width:42px;height:42px}.af-bottom-inner{padding:17px 0;align-items:flex-start;flex-direction:column}.af-bottom-links{gap:14px}}
@media(max-width:420px){.af-content{grid-template-columns:1fr 1fr;gap:30px 16px}.af-contact-list{grid-template-columns:1fr}.af-cta-actions{flex-direction:column;align-items:stretch}.af-action{width:100%}.af-bigword strong{font-size:42px}}
@media(prefers-reduced-motion:reduce){.arya-footer *{scroll-behavior:auto!important;transition:none!important}}
`;

export default function Footer() {
  const reduce = useReducedMotion();
  const year = new Date().getFullYear();

  const reveal = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.65, ease, delay },
  });

  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello, I would like to discuss a rack requirement."
  )}`;

  return (
    <footer className="arya-footer">
      <style>{styles}</style>

      <div className="af-cta-wrap">
        <motion.div className="af-cta" {...reveal(0)}>
          <div className="af-cta-copy">
            <div className="af-kicker">Have a space to organise?</div>
            <h2>
              Let’s build a smarter
              <br />
              <span>display space.</span>
            </h2>
            <p>
              Tell us about your store, warehouse or project. We’ll help you
              find a practical racking solution that fits your space.
            </p>
          </div>
          <div className="af-cta-actions">
            <a className="af-action primary" href="/contact">
              Start a project <ArrowUpRight size={17} />
            </a>
            <a
              className="af-action whatsapp"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={17} /> WhatsApp us
            </a>
          </div>
        </motion.div>
      </div>

      <div className="af-main">
        <div className="af-container">
          <motion.div className="af-topline" {...reveal(0.05)}>
            <a href="/" className="af-brand" aria-label={`${site.name} home`}>
              <span className="af-mark">A</span>
              <span>
                <span className="af-brand-name">{site.name}</span>
              
              </span>
            </a>
            <div className="af-top-note">
              <Plus size={15} color="#ff9b43" />
              <span>
                <b>Designed around your space.</b> Built for everyday business.
              </span>
            </div>
          </motion.div>

          <div className="af-content">
            <motion.div className="af-manifesto" {...reveal(0.08)}>
              <div className="af-kicker">Space made productive</div>
              <h2>
                Make room
                <br />
                for <em>better</em>
                <br />
                business.
              </h2>
              <p>{site.tagline}</p>
              <div className="af-socials" aria-label="Social links">
                <a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noreferrer">
                  <span style={{ fontSize: 16, fontWeight: 800 }}>ig</span>
                </a>
                <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noreferrer">
                  <span style={{ fontSize: 18, fontWeight: 800 }}>f</span>
                </a>
                <a href="https://www.linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                  <span style={{ fontSize: 14, fontWeight: 800 }}>in</span>
                </a>
              </div>
            </motion.div>

            <motion.nav className="af-col" aria-label="Explore" {...reveal(0.14)}>
              <h3 className="af-col-head"><span>01 /</span> Explore</h3>
              <ul className="af-links">
                {exploreLinks.map((item) => (
                  <li key={item.no}>
                    <a href={item.href}>
                      <span className="af-number">{item.no}</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>

            <motion.nav className="af-col" aria-label="Product categories" {...reveal(0.2)}>
              <h3 className="af-col-head"><span>02 /</span> Find your rack</h3>
              <ul className="af-links af-product-links">
                {productLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </motion.nav>

            <motion.div className="af-col af-contact-col" {...reveal(0.26)}>
              <h3 className="af-col-head"><span>03 /</span> Talk to our team</h3>
              <div className="af-contact-list">
                <div className="af-contact-item">
                  <span className="af-contact-icon"><Phone size={16} /></span>
                  <div>
                    <span className="af-contact-label">Call us</span>
                    <div className="af-contact-value">
                      <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>{site.phone}</a>
                    </div>
                  </div>
                </div>
                <div className="af-contact-item">
                  <span className="af-contact-icon"><Mail size={16} /></span>
                  <div>
                    <span className="af-contact-label">Email</span>
                    <div className="af-contact-value">
                      <a href={`mailto:${site.email}`}>{site.email}</a>
                    </div>
                  </div>
                </div>
                <div className="af-contact-item">
                  <span className="af-contact-icon"><MapPin size={16} /></span>
                  <div>
                    <span className="af-contact-label">Visit</span>
                    <div className="af-contact-value">{site.address}</div>
                  </div>
                </div>
                <div className="af-contact-item">
                  <span className="af-contact-icon"><Clock3 size={16} /></span>
                  <div>
                    <span className="af-contact-label">Working hours</span>
                    <div className="af-contact-value">{site.hours}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

     
        </div>

        <div className="af-bottom">
          <div className="af-container af-bottom-inner">
            <span>© {year} {site.name}. All rights reserved.</span>
            <div className="af-bottom-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-and-conditions">Terms</a>
            </div>
            <span className="af-credit">
              Website by{" "}
              <a href={site.creditUrl} target="_blank" rel="noreferrer">
                {site.credit}
              </a>
            </span>
          </div>
        </div>

        <motion.button
          type="button"
          className="af-backtop"
          aria-label="Back to top"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })
          }
          whileHover={reduce ? undefined : { y: -4 }}
          whileTap={reduce ? undefined : { scale: 0.92 }}
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </footer>
  );
}
