"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, FileText, ClipboardCheck, Factory, Wrench, Headset, ArrowRight } from "lucide-react";

/**
 * howwork.jsx  —  npm i framer-motion lucide-react
 * Photos: set `image: "/images/step-1.jpg"` on any step to replace the built-in SVG scene.
 */

const NAVY = "#12469C";
const INK = "#12469C";
const BLUE = "#12469C";
const ORANGE = "#f7931e";

/* ---------- Built-in scenes (stand-ins for the photos) ---------- */
const S = ({ children }) => (
  <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" aria-hidden="true">
    {children}
  </svg>
);

const Scene1 = () => (
  <S>
    <rect width="400" height="240" fill="#cfd8e3" />
    <circle cx="60" cy="70" r="70" fill="#b8c4d2" opacity=".7" />
    <circle cx="340" cy="40" r="60" fill="#e4e9f0" opacity=".8" />
    <ellipse cx="120" cy="230" rx="90" ry="60" fill="#e9b898" />
    <g transform="rotate(14 205 120)">
      <rect x="150" y="10" width="112" height="215" rx="18" fill="#161616" />
      <rect x="157" y="20" width="98" height="195" rx="12" fill="#14803c" />
      <circle cx="206" cy="108" r="30" fill="none" stroke="#fff" strokeWidth="6" />
      <path d="M193 98c2 12 10 22 22 26l6-6-8-5-4 3c-4-2-7-5-9-9l3-4-5-8z" fill="#fff" />
    </g>
  </S>
);

const Scene2 = () => (
  <S>
    <rect width="400" height="240" fill="#eef3fa" />
    <g fill="none" stroke="#5b78a8" strokeWidth="1.4" opacity=".85">
      <rect x="40" y="40" width="330" height="170" />
      <rect x="70" y="70" width="90" height="100" /><rect x="76" y="76" width="78" height="88" />
      <rect x="180" y="70" width="30" height="100" /><rect x="230" y="70" width="60" height="100" />
      <rect x="300" y="70" width="50" height="100" />
      <path d="M40 120h330M215 40v170" opacity=".4" />
    </g>
    <polygon points="300,200 365,120 372,128 310,208" fill="#2b2f3a" />
    <polygon points="365,120 380,108 380,118 372,128" fill="#e9c6a1" />
  </S>
);

const Scene3 = () => (
  <S>
    <rect width="400" height="240" fill="#e4ecf8" />
    <rect x="115" y="22" width="170" height="205" rx="14" fill="#fff" />
    <rect x="165" y="12" width="70" height="26" rx="8" fill={NAVY} />
    {[70, 118, 166].map((y) => (
      <g key={y}>
        <circle cx="147" cy={y} r="13" fill={ORANGE} />
        <path d={`M140 ${y}l5 5 9-10`} fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" />
        <rect x="172" y={y - 9} width="88" height="8" rx="4" fill="#b8c7e0" />
        <rect x="172" y={y + 3} width="60" height="6" rx="3" fill="#d6e0f0" />
      </g>
    ))}
  </S>
);

const Scene4 = () => (
  <S>
    <defs>
      <radialGradient id="hwSpark">
        <stop offset="0" stopColor="#fff" /><stop offset=".25" stopColor="#ffd37a" />
        <stop offset=".6" stopColor={ORANGE} stopOpacity=".7" /><stop offset="1" stopColor={ORANGE} stopOpacity="0" />
      </radialGradient>
      <linearGradient id="hwPlate" x1="0" x2="1">
        <stop offset="0" stopColor="#3a465e" /><stop offset=".5" stopColor="#7f8da6" /><stop offset="1" stopColor="#27324a" />
      </linearGradient>
    </defs>
    <rect width="400" height="240" fill="#18233d" />
    <rect x="0" y="0" width="400" height="60" fill="#2a3a5c" opacity=".6" />
    <polygon points="0,170 400,130 400,240 0,240" fill="url(#hwPlate)" />
    <rect x="170" y="0" width="70" height="95" fill="#f2b01e" />
    <rect x="240" y="0" width="90" height="95" fill="#1f4fa8" />
    <rect x="195" y="95" width="26" height="42" fill="#c9ced8" />
    <circle cx="208" cy="148" r="70" fill="url(#hwSpark)" />
    <g stroke="#ffd37a" strokeWidth="2" strokeLinecap="round">
      <path d="M208 148l60-30M208 148l-70-20M208 148l50 26M208 148l-48 30M208 148l20-70" />
    </g>
  </S>
);

const Scene5 = () => (
  <S>
    <rect width="400" height="240" fill="#f3f5f9" />
    <rect x="180" y="20" width="200" height="200" fill="#fff" stroke="#d3dae6" strokeWidth="3" />
    {[70, 118, 166].map((y) => <rect key={y} x="180" y={y} width="200" height="5" fill="#cfd7e4" />)}
    {[{ x: 70, f: 0 }, { x: 330, f: 1 }].map(({ x }) => (
      <g key={x}>
        <rect x={x - 28} y="95" width="56" height="80" rx="14" fill={NAVY} />
        <circle cx={x} cy="72" r="20" fill="#e2ad8a" />
        <path d={`M${x - 22} 68a22 22 0 0144 0z`} fill={NAVY} />
        <rect x={x - 24} y="170" width="48" height="60" fill="#3b3f48" />
      </g>
    ))}
  </S>
);

const Scene6 = () => (
  <S>
    <rect width="400" height="240" fill="#e6eef9" />
    <rect x="50" y="40" width="190" height="64" rx="18" fill={NAVY} />
    <text x="72" y="78" fontSize="22" fontWeight="700" fill="#fff" fontFamily="Inter,sans-serif">Rack code: R-204</text>
    <rect x="160" y="124" width="190" height="64" rx="18" fill="#fff" />
    <circle cx="192" cy="156" r="14" fill={ORANGE} />
    <path d="M185 156l5 5 9-10" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" />
    <text x="216" y="163" fontSize="20" fontWeight="700" fill={INK} fontFamily="Inter,sans-serif">We will match it</text>
  </S>
);

const steps = [
  { title: "Tell us what you need.", text: "Call or WhatsApp Arya Insulation with your shop size, a few photos and what you plan to sell.", icon: Phone, Scene: Scene1 },
  { title: "Get a layout and quotation.", text: "We send a simple drawing showing where each rack goes and how wide the aisles are, with a quotation listing size, sheet thickness and finish.", icon: FileText, Scene: Scene2 },
  { title: "Approve and confirm.", text: "You choose colours and final sizes, and production starts once the order is confirmed.", icon: ClipboardCheck, Scene: Scene3 },
  { title: "We manufacture and check.", text: "Every batch is cut, punched, bent, welded and powder coated in our factory, then checked for finish and load before packing.", icon: Factory, Scene: Scene4 },
  { title: "Delivery and installation.", text: "Racks arrive in knock-down packs. Our team assembles them, levels them on your floor and fixes price strips.", icon: Wrench, Scene: Scene5 },
  { title: "Support after you open.", text: "Need more shelves, hooks or a new section later? Send us the rack code and we will match it.", icon: Headset, Scene: Scene6 },
].map((s) => ({ image: "", ...s }));

const css = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap');
.hw{position:relative;overflow:hidden;font-family:Inter,"Segoe UI",system-ui,sans-serif;color:${INK};padding:56px 20px 110px;background:linear-gradient(180deg,#fff,#f3f6fc)}
.hw *{box-sizing:border-box}
.hw-shelves{position:absolute;top:0;right:0;width:46%;height:60%;opacity:.5;pointer-events:none;
  -webkit-mask-image:linear-gradient(270deg,#000 0,transparent 85%);mask-image:linear-gradient(270deg,#000 0,transparent 85%)}
.hw-tl{position:absolute;top:-30px;left:-80px;width:300px;height:260px;background:${NAVY};border-radius:0 0 70% 0 / 0 0 100% 0;clip-path:polygon(0 0,100% 0,62% 100%,0 100%)}
.hw-tl2{position:absolute;top:0;left:130px;width:80px;height:92px;background:${ORANGE};clip-path:polygon(40% 0,100% 0,34% 100%,0 100%)}
.hw-bl{position:absolute;left:0;bottom:0;width:42%;height:54px;background:${NAVY};clip-path:path('M0 54V20C120 4 260 34 420 54Z');width:420px}
.hw-br{position:absolute;right:0;bottom:0;width:230px;height:150px;background:${NAVY};clip-path:polygon(100% 0,100% 100%,18% 100%)}
.hw-br2{position:absolute;right:0;bottom:68px;width:150px;height:84px;background:${ORANGE};clip-path:polygon(100% 0,100% 30%,0 100%,18% 100%)}
.hw-wrap{position:relative;max-width:1240px;margin:0 auto;--gap:52px}
.hw-head{text-align:center;margin:0 auto 64px}
.hw-pill{display:inline-flex;align-items:center;gap:16px}
.hw-pill i{display:block;width:48px;height:2px;background:${ORANGE}}
.hw-pill span{position:relative;padding:6px 24px;font-weight:800;font-size:15px;letter-spacing:.3em;text-transform:uppercase;border:1.5px solid ${ORANGE};border-radius:14px;border-top-color:${INK};border-bottom-color:${INK};border-left-color:${ORANGE};border-right-color:${ORANGE}}
.hw-h2{margin:22px 0 0;font-size:clamp(30px,4.6vw,58px);line-height:1.1;font-weight:800;letter-spacing:-.025em}
.hw-h2 em{position:relative;font-style:normal;color:${BLUE};white-space:nowrap}
.hw-h2 em svg{position:absolute;left:-2%;bottom:-12px;width:104%;height:14px}
.hw-sub{margin:22px auto 0;color:#4a5878;font-size:clamp(15px,1.6vw,19px)}
.hw-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:64px var(--gap);list-style:none;margin:0;padding:0}
.hw-item{position:relative}
.hw-card{position:relative;height:100%;display:flex;flex-direction:column;align-items:center;text-align:center;background:#fff;
  border-radius:30px 46px 44px 44px;padding:0 22px 30px;
  box-shadow:0 26px 50px -26px rgba(18,52,122,.38),0 0 0 1px rgba(18,52,122,.04)}
.hw-media{position:relative;width:calc(100% + 44px);height:230px;margin:0 -22px;overflow:hidden;border-radius:0 46px 0 0;
  clip-path:polygon(13% 0,100% 0,100% 56%,0 100%,0 22%)}
.hw-media img{width:100%;height:100%;object-fit:cover}
.hw-edge{position:absolute;inset:0;pointer-events:none}
.hw-num{position:absolute;z-index:3;top:-16px;left:30px;width:124px;height:66px;display:flex;align-items:center;justify-content:center;padding-right:10px;
  color:#fff;font-size:40px;font-weight:800;letter-spacing:-.01em;background:linear-gradient(120deg,#1b4396,${NAVY} 60%,#0e2a66);
  clip-path:polygon(14% 0,100% 0,100% 8%,86% 100%,0 100%,0 92%);border-radius:12px 18px 0 0;filter:drop-shadow(0 10px 8px rgba(11,27,74,.3))}
.hw-icon{position:relative;z-index:2;margin-top:-42px;width:84px;height:84px;border-radius:26px;background:#fff;color:${NAVY};
  display:flex;align-items:center;justify-content:center;box-shadow:0 12px 26px -8px rgba(18,52,122,.35)}
.hw-title{margin:22px 0 12px;font-size:26px;line-height:1.2;font-weight:800;letter-spacing:-.015em;max-width:12em}
.hw-text{margin:0;font-size:16px;line-height:1.5;color:#2d3855;max-width:31ch}
.hw-bar{margin-top:auto;padding-top:24px}
.hw-bar span{display:block;width:86px;height:4px;border-radius:4px;background:${ORANGE}}
.hw-arrow{position:absolute;z-index:6;top:262px;right:calc(var(--gap) * -1);width:var(--gap);height:42px;display:flex;align-items:center;justify-content:center}
.hw-arrow::before{content:"";position:absolute;left:0;right:0;top:50%;height:2px;background:#c3cde2}
.hw-arrow b{position:relative;width:40px;height:40px;border-radius:50%;background:${ORANGE};color:#fff;display:flex;align-items:center;justify-content:center;
  box-shadow:0 0 0 5px #fff,0 8px 18px rgba(247,147,30,.4)}
.hw-item:nth-child(3n) .hw-arrow{display:none}
@media (min-width:1600px){
  .hw-wrap{max-width:1700px;--gap:46px}
  .hw-grid{grid-template-columns:repeat(6,1fr);row-gap:0}
  .hw-item:nth-child(3n) .hw-arrow{display:flex}
  .hw-item:last-child .hw-arrow{display:none}
  .hw-title{font-size:22px}.hw-text{font-size:14.5px}
  .hw-media{height:190px}.hw-arrow{top:222px}
}
@media (max-width:1023px){
  .hw-grid{grid-template-columns:repeat(2,1fr);gap:60px 28px}
  .hw-arrow{display:none!important}
  .hw-tl,.hw-tl2{transform:scale(.7);transform-origin:top left}
}
@media (max-width:640px){
  .hw{padding:48px 16px 90px}
  .hw-grid{grid-template-columns:1fr;gap:56px}
  .hw-pill i{width:22px}.hw-pill span{font-size:12px;padding:5px 14px}
}
`;

const ease = [0.22, 1, 0.36, 1];

export default function HowWork() {
  const reduce = useReducedMotion();
  const list = { hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : 0.15, delayChildren: 0.1 } } };
  const item = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
  };

  return (
    <section className="hw" aria-labelledby="hw-title">
      <style>{css}</style>

      <svg className="hw-shelves" viewBox="0 0 600 400" preserveAspectRatio="xMaxYMin slice" aria-hidden="true">
        {[60, 150, 240, 330].map((y) => (
          <g key={y}>
            <rect x="0" y={y} width="600" height="5" fill="#dfe6f1" />
            {Array.from({ length: 14 }).map((_, i) => (
              <rect key={i} x={10 + i * 42} y={y - 44} width="26" height="44" rx="5" fill="#e9eef6" stroke="#dbe3ef" />
            ))}
          </g>
        ))}
      </svg>
      <div className="hw-tl" aria-hidden="true" />
      <div className="hw-tl2" aria-hidden="true" />
      <div className="hw-bl" aria-hidden="true" />
      <div className="hw-br" aria-hidden="true" />
      <div className="hw-br2" aria-hidden="true" />

      <div className="hw-wrap">
        <motion.header
          className="hw-head"
          initial={reduce ? false : { opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="hw-pill">
            <motion.i initial={reduce ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} style={{ originX: 1 }} />
            <span>How we work</span>
            <motion.i initial={reduce ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} style={{ originX: 0 }} />
          </div>

          <h2 id="hw-title" className="hw-h2">
            From Your First Call to a{" "}
            <em>
              Fully Fitted Store
              <svg viewBox="0 0 300 14" preserveAspectRatio="none" aria-hidden="true">
                <motion.path
                  d="M2 9 C 80 2, 210 2, 298 6"
                  fill="none" stroke={ORANGE} strokeWidth="3" strokeLinecap="round"
                  initial={reduce ? false : { pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                />
              </svg>
            </em>
          </h2>

          <p className="hw-sub">A simple, end-to-end process to plan, manufacture and set up the right racking solution for your store.</p>
        </motion.header>

        <motion.ol className="hw-grid" variants={list} initial="hidden" whileInView="show" 
        viewport={{ once: true, amount: 0.08 }}>
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.li key={s.title} className="hw-item" variants={item}>
                <motion.article
                  className="hw-card"
                  whileHover={reduce ? undefined : { y: -8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  {/* <div className="hw-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</div> */}

                  {/* <div className="hw-media">
                    {s.image ? <img src={s.image} alt="" loading="lazy" /> : <s.Scene />}
                    <svg className="hw-edge" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                      <line x1="52" y1="78" x2="100" y2="56" stroke={ORANGE} strokeWidth="2.6" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
                    </svg>
                  </div> */}

                  <motion.div
                    className="hw-icon"
                    initial={reduce ? false : { scale: 0, rotate: -18 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 16, delay: 0.25 }}
                  >
                    <Icon size={40} strokeWidth={1.8} />
                  </motion.div>

                  <h3 className="hw-title">{s.title}</h3>
                  <p className="hw-text">{s.text}</p>

                  <div className="hw-bar" aria-hidden="true">
                    <motion.span
                      initial={reduce ? false : { scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5, ease }}
                    />
                  </div>
                </motion.article>

                <div className="hw-arrow" aria-hidden="true">
                  <motion.b
                    animate={reduce ? undefined : { x: [0, 3, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                  >
                    <ArrowRight size={20} strokeWidth={2.4} />
                  </motion.b>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
}