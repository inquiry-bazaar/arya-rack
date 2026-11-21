"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { PencilRuler, Truck, ShieldCheck, Headset, ChevronDown, ChevronUp } from "lucide-react";

/**
 * faq.jsx  —  npm i framer-motion lucide-react
 * <FAQ />                         default
 * <FAQ image="/images/shelves.jpg" showLogo={false} />
 */

const NAVY = "#0b2a6b";
const BLUE = "#0d5bc0";
const ORANGE = "#f7931e";

const RackIcon = ({ size = 56, color = "#fff" }) => (
  <svg width={size} height={size} viewBox="0 0 56 56" fill="none" stroke={color} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 6v44M46 6v44M10 12h36M10 24h36M10 36h36M10 48h36M10 6h36" />
  </svg>
);

const faqs = [
  {
    q: "What products does Arya Insulation offer?",
    a: "We provide a complete range of store fixtures, including display racks, shelving systems, checkout counters, and customized retail solutions.",
    icon: (p) => <RackIcon {...p} />,
  },
  {
    q: "Do you provide customized store layouts?",
    a: "Yes. Share your shop size and a few photos, and we send a simple drawing showing where each rack goes and how wide the aisles are, with a quotation listing size, sheet thickness and finish.",
    icon: PencilRuler,
  },
  {
    q: "What is the delivery and installation time?",
    a: "The timeline depends on the size of your order and the finish you choose. Production starts once the order is confirmed, and we share the delivery and installation schedule with you at that point.",
    icon: Truck,
  },
  {
    q: "Are the racks durable and long-lasting?",
    a: "Every batch is cut, punched, bent, welded and powder coated in our factory, then checked for finish and load before packing.",
    icon: ShieldCheck,
  },
  {
    q: "Do you offer after-sales support?",
    a: "Yes. Need more shelves, hooks or a new section later? Send us the rack code and we will match it.",
    icon: Headset,
  },
];

/* ---------- Built-in shelf scene (stand-in for the photo) ---------- */
function ShelfScene() {
  const cols = ["#fff", "#e9473f", "#2f8de4", "#fff", "#f6c343", "#fff", "#3bb273"];
  return (
    <svg viewBox="0 0 560 520" preserveAspectRatio="xMinYMax slice" width="100%" height="100%" aria-hidden="true">
      <defs>
        <linearGradient id="fqFloor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#eef2f7" /><stop offset="1" stopColor="#c9d2de" /></linearGradient>
      </defs>
      <rect width="560" height="520" fill="#f6f8fb" />
      <rect y="380" width="560" height="140" fill="url(#fqFloor)" />
      <rect x="470" y="150" width="90" height="230" fill="#dfe8f3" />
      {/* plant */}
      <rect x="486" y="430" width="30" height="70" fill="#4a4f5a" />
      {[[-26, -50], [0, -70], [26, -46], [-12, -28]].map(([dx, dy], i) => (
        <ellipse key={i} cx={501 + dx} cy={430 + dy} rx="14" ry="34" fill="#3f8f4a" transform={`rotate(${dx * 1.2} ${501 + dx} ${430 + dy})`} />
      ))}
      {/* back racks, receding */}
      {[0, 1, 2].map((k) => (
        <g key={k} transform={`translate(${290 + k * 60} ${130 + k * 30}) scale(${0.8 - k * 0.14})`}>
          <rect width="150" height="300" fill="#2a2d35" />
          {[48, 100, 152, 204, 256].map((y) => (
            <g key={y}><rect x="4" y={y} width="142" height="7" fill={ORANGE} />{[0, 1, 2, 3].map((i) => <rect key={i} x={10 + i * 34} y={y - 34} width="28" height="34" fill={cols[(i + k) % 7]} />)}</g>
          ))}
        </g>
      ))}
      {/* front rack */}
      <rect x="0" y="40" width="270" height="440" fill="#23262e" />
      <rect x="0" y="40" width="14" height="440" fill="#14161b" />
      {[100, 190, 280, 370, 455].map((y, r) => (
        <g key={y}>
          {Array.from({ length: 5 }).map((_, i) => (
            <rect key={i} x={26 + i * 48} y={y - 58} width="40" height="58" rx="3" fill={cols[(i * 2 + r) % 7]} stroke="#d7dce6" />
          ))}
          <rect x="14" y={y} width="256" height="11" fill={ORANGE} />
        </g>
      ))}
    </svg>
  );
}

function Logo() {
  
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
.fq{position:relative;overflow:hidden;font-family:Inter,"Segoe UI",system-ui,sans-serif;color:${NAVY};padding:28px 24px 96px;
  background:radial-gradient(1200px 600px at 100% 100%,#e4e9f1 0,transparent 60%),linear-gradient(135deg,#fff 0%,#f1f4f9 100%)}
.fq *{box-sizing:border-box}
.fq-stripe1{position:absolute;top:0;right:150px;width:140px;height:110px;background:${BLUE};clip-path:polygon(32% 0,100% 0,68% 100%,0 100%)}
.fq-stripe2{position:absolute;top:0;right:60px;width:120px;height:110px;background:${ORANGE};clip-path:polygon(32% 0,100% 0,68% 100%,0 100%)}
.fq-dots{position:absolute;right:48px;bottom:56px;width:112px;height:80px;background-image:radial-gradient(${BLUE} 2.4px,transparent 2.6px);background-size:16px 16px;opacity:.9}
.fq-slice{position:absolute;left:36%;bottom:0;width:130px;height:46px;background:${ORANGE};clip-path:polygon(34% 0,100% 0,60% 100%,0 100%)}
.fq-wrap{position:relative;max-width:1360px;margin:0 auto}
.fq-logo{display:flex;align-items:center;gap:10px;margin-bottom:34px}
.fq-logo strong{display:block;font-size:34px;line-height:1;font-weight:800;color:${BLUE};letter-spacing:-.01em}
.fq-logo span{display:block;margin-top:2px;font-size:24px;font-weight:500;color:${NAVY}}
.fq-grid{display:grid;grid-template-columns:minmax(0,38%) minmax(0,62%);grid-template-areas:"head list" "img list";column-gap:40px;align-items:start}
.fq-head{grid-area:head;position:relative;z-index:2}
.fq-bubble{position:relative;display:inline-block;padding:6px 30px 8px;border:3px solid ${ORANGE};border-radius:22px;background:#fff;font-size:42px;font-weight:800;color:${BLUE};line-height:1.1;margin-bottom:12px}
.fq-bubble::after{content:"";position:absolute;left:46px;bottom:-12px;width:20px;height:20px;background:#fff;border-right:3px solid ${ORANGE};border-bottom:3px solid ${ORANGE};transform:rotate(45deg)}
.fq-spark{position:absolute;top:-30px;right:-40px;width:44px;height:40px}
.fq-h1{margin:14px 0 0;font-size:clamp(46px,6.2vw,88px);line-height:.98;font-weight:800;letter-spacing:-.03em}
.fq-q{position:relative;display:inline-block;margin:6px 0 0 -30px;padding:6px 60px 10px 44px;color:#fff;font-size:clamp(46px,6.2vw,88px);line-height:1;font-weight:800;letter-spacing:-.03em;z-index:0}
.fq-q::before{content:"";position:absolute;inset:0 18px 0 0;background:${BLUE};clip-path:polygon(4% 0,100% 0,93% 100%,0 100%);z-index:-1}
.fq-q::after{content:"";position:absolute;top:0;bottom:0;right:0;width:46px;background:${ORANGE};clip-path:polygon(55% 0,100% 0,48% 100%,0 100%);z-index:-2}
.fq-p{margin:26px 0 0;max-width:20em;font-size:clamp(16px,1.5vw,21px);line-height:1.5;color:#27324f}
.fq-uline{display:block;width:120px;height:6px;margin-top:20px;border-radius:6px;background:${ORANGE}}
.fq-img{grid-area:img;position:relative;align-self:end;margin:36px 0 0 -24px;height:440px;overflow:hidden;border-radius:0 44px 0 0;background:#e6ecf5}
.fq-img img{width:100%;height:100%;object-fit:cover}
.fq-img::before{content:"";position:absolute;left:0;bottom:0;z-index:2;width:90px;height:60px;background:${BLUE};clip-path:polygon(0 0,100% 100%,0 100%)}
.fq-list{grid-area:list;list-style:none;margin:0;padding:0;display:grid;gap:14px;padding-top:56px}
.fq-item{border-radius:28px;background:#fff;box-shadow:0 14px 34px -16px rgba(18,52,122,.28),0 0 0 1px rgba(18,52,122,.04);overflow:hidden;transition:background .3s,box-shadow .3s}
.fq-item.open{background:#eaf2fc;box-shadow:0 22px 44px -18px rgba(13,91,192,.45)}
.fq-btn{display:flex;align-items:center;gap:0;width:100%;min-height:90px;padding:0 22px 0 0;border:0;background:transparent;cursor:pointer;text-align:left;font:inherit;color:${NAVY};transition:background .3s,color .3s}
.fq-item.open .fq-btn{background:linear-gradient(90deg,#0b55b8,#0f63c9);color:#fff;border-radius:0 0 0 0;min-height:96px}
.fq-btn:focus-visible{outline:3px solid ${ORANGE};outline-offset:-3px}
.fq-ico{flex:none;display:flex;align-items:center;justify-content:center;width:114px;align-self:stretch;margin:6px 0 6px 6px;border-radius:20px;background:#e3eefb;color:${BLUE}}
.fq-item.open .fq-ico{background:transparent;color:#fff;margin-left:6px}
.fq-div{flex:none;width:2px;height:48px;margin:0 28px 0 4px;background:#d5dceb}
.fq-item.open .fq-div{background:rgba(255,255,255,.55)}
.fq-qt{flex:1;font-size:clamp(17px,2vw,29px);font-weight:700;line-height:1.25;letter-spacing:-.01em}
.fq-chev{flex:none;display:flex;align-items:center;justify-content:center;width:46px;height:46px;margin-left:14px;border-radius:50%;color:${BLUE}}
.fq-item.open .fq-chev{background:#fff;color:${ORANGE}}
.fq-panel{overflow:hidden}
.fq-ans{display:flex;gap:26px;padding:24px 40px 30px 122px;font-size:clamp(16px,1.6vw,22px);line-height:1.5;color:#1f2b48}
.fq-ans i{flex:none;width:5px;border-radius:5px;background:${ORANGE}}
.fq-ans p{margin:0}

@media (max-width:1100px){
  .fq-grid{grid-template-columns:1fr;grid-template-areas:"head" "list" "img";row-gap:12px}
  .fq-list{padding-top:36px}
  .fq-img{margin:40px -24px 0;height:340px;border-radius:0 44px 0 0;max-width:640px}
  .fq-stripe1{right:110px}.fq-stripe2{right:30px}
}
@media (max-width:640px){
  .fq{padding:20px 16px 72px}
  .fq-logo strong{font-size:24px}.fq-logo span{font-size:17px}.fq-logo svg{width:40px;height:40px}
  .fq-stripe1,.fq-stripe2{height:70px;width:90px}.fq-stripe1{right:76px}.fq-stripe2{right:16px}
  .fq-bubble{font-size:30px;padding:4px 22px 6px}
  .fq-q{margin-left:-20px;padding:4px 44px 8px 30px}
  .fq-list{gap:12px}
  .fq-item{border-radius:22px}
  .fq-btn{min-height:76px;padding-right:12px}
  .fq-item.open .fq-btn{min-height:80px}
  .fq-ico{width:62px;margin:5px 0 5px 5px;border-radius:16px}
  .fq-ico svg{width:30px;height:30px}
  .fq-div{height:36px;margin:0 14px 0 4px}
  .fq-chev{width:38px;height:38px;margin-left:8px}
  .fq-ans{gap:16px;padding:18px 20px 22px 24px}
  .fq-img{height:260px;margin-left:-16px;margin-right:-16px}
  .fq-dots{right:16px;bottom:30px;transform:scale(.7);transform-origin:bottom right}
  .fq-slice{left:8%}
}
`;

const ease = [0.22, 1, 0.36, 1];

export default function FAQ({ image = "/imgi_148_supermarket-rack-1.webp", showLogo = true, defaultOpen = 0 }) {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(defaultOpen);

  const rise = (d = 0, y = 26) => ({
    initial: reduce ? false : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease, delay: d },
  });

  return (
    <section className="fq" aria-labelledby="fq-title">
      <style>{css}</style>
      <div className="fq-stripe1" aria-hidden="true" /><div className="fq-stripe2" aria-hidden="true" />
      <div className="fq-dots" aria-hidden="true" /><div className="fq-slice" aria-hidden="true" />

      <div className="fq-wrap">
        {showLogo && <motion.div {...rise(0, -16)}><Logo /></motion.div>}

        <div className="fq-grid">
          <div className="fq-head">
            <motion.div style={{ position: "relative", display: "inline-block" }}
              initial={reduce ? false : { opacity: 0, scale: 0.7, rotate: -6 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }} transition={{ type: "spring", stiffness: 240, damping: 14 }}>
              <div className="fq-bubble">FAQs</div>
              <svg className="fq-spark" viewBox="0 0 44 40" fill="none" stroke={ORANGE} strokeWidth="3.5" strokeLinecap="round" aria-hidden="true">
                <path d="M10 8l7 9M26 2v13M38 22l-12 -2" />
              </svg>
            </motion.div>

            <motion.h2 id="fq-title" className="fq-h1" {...rise(0.1)}>
              Frequently<br />Asked
            </motion.h2>
            <motion.div {...rise(0.2)}>
              <span className="fq-q">Questions</span>
            </motion.div>

            <motion.p className="fq-p" {...rise(0.3)}>
              Find quick answers to common questions about our products, services, and store setup solutions.
            </motion.p>
            <motion.i className="fq-uline" initial={reduce ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5, ease }} style={{ originX: 0 }} />
          </div>

          <motion.div className="fq-img" initial={reduce ? false : { opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.9, ease }}>
            {image ? <img src={image} alt="Orange and black store racking filled with products" /> : <ShelfScene />}
          </motion.div>

          <ul className="fq-list">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              const Icon = f.icon;
              return (
                <motion.li key={f.q} className={`fq-item${isOpen ? " open" : ""}`} {...rise(0.1 + i * 0.1, 36)}
                  whileHover={reduce || isOpen ? undefined : { y: -3 }}>
                  <h3 style={{ margin: 0 }}>
                    <button type="button" className="fq-btn" aria-expanded={isOpen} aria-controls={`fq-panel-${i}`} id={`fq-btn-${i}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}>
                      <span className="fq-ico"><Icon size={44} strokeWidth={1.6} color="currentColor" /></span>
                      <span className="fq-div" aria-hidden="true" />
                      <span className="fq-qt">{f.q}</span>
                      <motion.span className="fq-chev" animate={{ rotate: isOpen ? 0 : 0 }} aria-hidden="true">
                        {isOpen ? <ChevronUp size={26} strokeWidth={3} /> : <ChevronDown size={26} strokeWidth={3} />}
                      </motion.span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div key="p" id={`fq-panel-${i}`} role="region" aria-labelledby={`fq-btn-${i}`} className="fq-panel"
                        initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reduce ? 0 : 0.4, ease }}>
                        <div className="fq-ans">
                          <motion.i initial={reduce ? false : { scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.4, delay: 0.15 }} style={{ originY: 0 }} />
                          <p>{f.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}