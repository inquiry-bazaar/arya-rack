"use client"
import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  User, Phone, Mail, Store, Maximize2, FileText, ChevronDown,
  ArrowRight, PencilRuler, Layers, Wrench, CheckCircle2,
} from "lucide-react";

/**
 * form.jsx  —  npm i framer-motion lucide-react
 *
 * <QuoteForm onSubmit={(data) => fetch("/api/quote", {...})} image="/images/rack.jpg" />
 * - onSubmit: optional, receives { name, mobile, email, storeType, area, message }
 * - image: optional photo for the centre panel (a built-in SVG rack scene is used otherwise)
 */

const NAVY = "#F67516";
const INK = "#12469C";
const BLUE = "#12469C";
const ORANGE = "#F67516";

const storeTypes = ["Pharmacy / Medical store", "Supermarket / Kirana", "General store", "Stationery / Gift shop", "Garments / Fashion", "Electronics / Mobile", "Warehouse / Godown", "Other"];
const areas = ["Below 200 sq. ft.", "200 – 500 sq. ft.", "500 – 1,000 sq. ft.", "1,000 – 2,500 sq. ft.", "Above 2,500 sq. ft."];

const features = [
  { icon: PencilRuler, label: "Smart Planning" },
  { icon: Layers, label: "Quality Manufacturing" },
  { icon: Wrench, label: "Hassle-Free Installation" },
];

/* ---------- Built-in rack scene (stand-in for the photo) ---------- */
function RackScene() {
  const shelves = [92, 176, 260, 344];
  const boxCols = ["#fff", "#fff", ORANGE, "#fff", "#2a8be8"];
  return (
    <svg viewBox="0 0 560 480" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" aria-hidden="true">
      <defs>
        <linearGradient id="fmBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f4f7fb" /><stop offset="1" stopColor="#cfd8e5" />
        </linearGradient>
      </defs>
      <rect width="560" height="480" fill="url(#fmBg)" />
      {[0, 1, 2, 3].map((i) => <rect key={i} x={40 + i * 130} y="14" width="70" height="10" rx="5" fill="#fff" opacity=".9" />)}
      {/* far aisle */}
      <rect x="0" y="120" width="120" height="300" fill="#c6d0df" opacity=".7" />
      {/* gondola */}
      <rect x="90" y="40" width="330" height="360" fill="#fff" />
      <rect x="404" y="30" width="18" height="380" fill="#1d5fd0" />
      {shelves.map((y, r) => (
        <g key={y}>
          {Array.from({ length: 4 }).map((_, i) => {
            const c = r === 2 ? ORANGE : r === 3 && i < 2 ? "#2a8be8" : boxCols[(i + r) % 4 === 2 ? 0 : 0];
            const h = 52 + ((i + r) % 2) * 8;
            return <rect key={i} x={108 + i * 74} y={y - h} width="64" height={h} rx="3" fill={c} stroke="#d5dce8" />;
          })}
          <rect x="90" y={y} width="332" height="9" fill="#1d5fd0" />
          <rect x="90" y={y + 9} width="332" height="6" fill="#e4e9f1" />
        </g>
      ))}
      {/* right neighbour rack */}
      <rect x="422" y="70" width="140" height="340" fill="#eef2f8" />
      {[110, 190, 270, 350].map((y) => <g key={y}><rect x="430" y={y - 38} width="120" height="38" fill="#f6a940" opacity=".85" /><rect x="422" y={y} width="140" height="6" fill="#8fb4ea" /></g>)}
      {/* base */}
      <polygon points="70,404 420,404 440,436 60,436" fill="#1d5fd0" />
      <rect x="0" y="436" width="560" height="44" fill="#dfe5ee" />
    </svg>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
.fm{position:relative;overflow:hidden;font-family:Inter,"Segoe UI",system-ui,sans-serif;color:${INK};padding:72px 24px 96px;background:linear-gradient(135deg,#fff 0%,#f1f5fb 60%,#e9f0fa 100%)}
.fm *{box-sizing:border-box}
.fm-b1{position:absolute;top:-60px;left:-90px;width:300px;height:280px;background:${NAVY};clip-path:polygon(0 0,70% 0,0 100%)}
.fm-b2{position:absolute;top:0;left:110px;width:130px;height:60px;background:linear-gradient(90deg,#8cc4ff,#4aa3ff);clip-path:polygon(25% 0,100% 0,60% 100%,0 70%);opacity:.9}
.fm-b3{position:absolute;left:0;bottom:0;width:min(440px,70%);height:80px;background:linear-gradient(90deg,#0a4aa8,${NAVY});clip-path:path('M0 80V30C60 -2 190 10 260 52L300 80Z')}
.fm-b4{position:absolute;right:0;bottom:0;width:200px;height:80px;background:${NAVY};clip-path:polygon(100% 0,100% 100%,30% 100%)}
.fm-b5{position:absolute;right:50px;bottom:0;width:200px;height:34px;background:${ORANGE};clip-path:polygon(18% 0,100% 0,60% 100%,0 100%)}
.fm-stage{position:relative;max-width:1400px;margin:0 auto;display:grid;grid-template-columns:minmax(0,36%) minmax(0,64%);align-items:center;min-height:620px}
.fm-left{position:relative;z-index:3;padding-right:12px}
.fm-eyebrow{display:flex;align-items:center;gap:16px;font-weight:800;letter-spacing:.24em;font-size:15px;text-transform:uppercase}
.fm-eyebrow i{display:block;width:54px;height:3px;background:${ORANGE};border-radius:3px}
.fm-h1{margin:26px 0 0;font-size:clamp(34px,4.1vw,58px);line-height:1.12;font-weight:800;letter-spacing:-.025em}
.fm-h1 em{position:relative;font-style:normal;color:${BLUE};white-space:nowrap}
.fm-h1 em svg{position:absolute;left:-4%;bottom:-16px;width:108%;height:16px}
.fm-p{margin:34px 0 0;max-width:30em;font-size:clamp(16px,1.5vw,21px);line-height:1.55;color:#33415f}
.fm-feats{display:flex;align-items:flex-start;margin-top:44px;gap:0}
.fm-feat{display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px;padding:0 20px;font-weight:700;font-size:16px;line-height:1.2;max-width:150px}
.fm-feat + .fm-feat{border-left:2px solid #c6d3ea;margin-left:0}
.fm-feat:first-child{padding-left:0}
.fm-tile{width:68px;height:68px;border-radius:20px;background:#fff;color:${NAVY};display:flex;align-items:center;justify-content:center;box-shadow:0 12px 24px -10px rgba(18,52,122,.3)}
.fm-right{position:relative;display:flex;justify-content:flex-end;align-items:center}
.fm-img{position:absolute;z-index:1;left:-8%;top:-34px;bottom:-34px;width:66%;background:${ORANGE};clip-path:polygon(0 88%,31% 16%,100% 0,100% 100%,5% 100%)}
.fm-img > div{position:absolute;inset:0 0 0 9px;overflow:hidden;background:#dfe6f1;clip-path:polygon(0 88%,31% 16%,100% 0,100% 100%,5% 100%)}
.fm-img img{width:100%;height:100%;object-fit:cover}
.fm-card{position:relative;z-index:2;width:56%;min-width:0;background:#fff;border-radius:44px;padding:40px 34px 44px;box-shadow:0 40px 70px -30px rgba(18,52,122,.4),0 0 0 1px rgba(18,52,122,.04)}
.fm-card::before{content:"";position:absolute;top:-16px;right:-12px;width:46%;height:90px;border-top:12px solid ${ORANGE};border-right:12px solid ${ORANGE};border-radius:0 52px 0 0;pointer-events:none;
  -webkit-mask-image:linear-gradient(225deg,#000 40%,transparent 80%);mask-image:linear-gradient(225deg,#000 40%,transparent 80%)}
.fm-title{display:flex;align-items:center;justify-content:center;gap:14px;margin:0;font-size:clamp(24px,2.4vw,36px);font-weight:800;letter-spacing:-.02em;text-align:center}
.fm-title svg{color:${BLUE};flex:none}

.fm-uline{display:block;width:104px;height:5px;margin:10px auto 34px;border-radius:5px;background:${BLUE}}
.fm-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px}
.fm-field{position:relative;display:block}
.fm-field > svg.fm-ic{position:absolute;left:16px;top:18px;color:${INK};pointer-events:none}
.fm-chev{position:absolute;right:16px;top:20px;color:${INK};pointer-events:none}
.fm-in{width:100%;height:56px;padding:0 40px 0 52px;border:1.5px solid #e1e8f4;border-radius:20px;background:#f7f9fd;font:500 16px/1 Inter,system-ui,sans-serif;color:${INK};outline:none;appearance:none;-webkit-appearance:none;
  box-shadow:inset 0 2px 4px rgba(18,52,122,.04);transition:border-color .2s,box-shadow .2s,background .2s}
.fm-in::placeholder{color:#59627a}
.fm-in:focus{border-color:${BLUE};background:#fff;box-shadow:0 0 0 4px rgba(10,91,224,.14)}
.fm-in.sel{font-weight:600}.fm-in.sel:invalid{color:#59627a;font-weight:500}
.fm-ta{height:128px;padding:16px 16px 16px 52px;line-height:1.4;resize:vertical}
.fm-err{display:block;margin:6px 0 0 6px;font-size:13px;color:#d6361f;font-weight:600}
.fm-in[aria-invalid="true"]{border-color:#e5533d}
.fm-btnwrap{display:flex;justify-content:center;margin-top:34px}
.fm-btn{display:inline-flex;align-items:center;justify-content:center;gap:12px;min-width:min(100%,360px);height:68px;padding:0 36px;border:0;border-radius:999px;cursor:pointer;color:#fff;font:700 22px/1 Inter,system-ui,sans-serif;
  background:linear-gradient(180deg,#ffa52e,#f4800a);box-shadow:0 18px 30px -12px rgba(244,128,10,.7),inset 0 1px 0 rgba(255,255,255,.4)}
.fm-btn:focus-visible{outline:3px solid ${NAVY};outline-offset:3px}
.fm-btn[disabled]{opacity:.7;cursor:wait}
.fm-ok{display:flex;flex-direction:column;align-items:center;text-align:center;gap:14px;padding:50px 10px}
.fm-ok svg{color:#16a05b}
.fm-ok h3{margin:0;font-size:28px;font-weight:800}
.fm-ok p{margin:0;max-width:26em;color:#3d4a69;line-height:1.5}
.fm-link{margin-top:8px;background:none;border:0;color:${BLUE};font:700 16px Inter,sans-serif;cursor:pointer;text-decoration:underline}

@media (max-width:1279px){
  .fm{padding:56px 24px 84px}
  .fm-stage{grid-template-columns:1fr;gap:0}
  .fm-left{padding:0 0 36px}
  .fm-right{flex-direction:column;align-items:stretch;justify-content:flex-start}
  .fm-img{position:relative;left:0;top:0;bottom:0;width:100%;height:340px;clip-path:polygon(0 10%,14% 0,100% 0,100% 100%,0 100%);border-radius:0}
  .fm-img > div{clip-path:polygon(0 10%,14% 0,100% 0,100% 100%,0 100%)}
  .fm-card{width:100%;max-width:720px;margin:-56px auto 0}
}
@media (max-width:640px){
  .fm{padding:44px 16px 80px}
  .fm-eyebrow{font-size:13px;gap:12px}.fm-eyebrow i{width:38px}
  .fm-p{margin-top:28px}
  .fm-feats{margin-top:32px}
  .fm-feat{padding:0 10px;font-size:13.5px}
  .fm-tile{width:58px;height:58px;border-radius:18px}
  .fm-img{height:240px}
  .fm-card{padding:32px 18px 34px;border-radius:32px;margin-top:-40px}
  .fm-row{grid-template-columns:1fr;gap:14px;margin-bottom:14px}
  .fm-title{flex-direction:column;gap:6px}
  .fm-btn{width:100%;height:62px;font-size:20px}
  .fm-b1{width:200px;height:180px}.fm-b2{left:70px;width:90px}
}
@media (max-width:380px){ .fm-feats{flex-wrap:wrap;row-gap:20px} }
`;

const ease = [0.22, 1, 0.36, 1];
const empty = { name: "", mobile: "", email: "", storeType: "", area: "", message: "" };

export default function Form({ onSubmit, image = "/r2zc3tfbbmdoezexsefm.webp" }) {
  const reduce = useReducedMotion();
  const [data, setData] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | done

  const set = (k) => (e) => {
    setData((d) => ({ ...d, [k]: e.target.value }));
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!data.name.trim()) e.name = "Please enter your name.";
    if (!/^(\+?91[\s-]?)?[6-9]\d{9}$/.test(data.mobile.replace(/\s|-/g, ""))) e.mobile = "Enter a valid 10-digit mobile number.";
    if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) e.email = "Enter a valid email address.";
    return e;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus("sending");
    try {
      if (onSubmit) await onSubmit(data);
      else console.log("Quote request:", data);
      setStatus("done");
    } catch {
      setStatus("idle");
      setErrors({ form: "Something went wrong. Please try again." });
    }
  };

  const fade = (d = 0, y = 30) => ({
    initial: reduce ? false : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease, delay: d },
  });

  const Err = ({ k }) => (errors[k] ? <span className="fm-err" role="alert">{errors[k]}</span> : null);

  return (
    <section className="fm" aria-labelledby="fm-h1" id="get-a-quote">
      <style>{css}</style>
      <div className="fm-b1" aria-hidden="true" /><div className="fm-b2" aria-hidden="true" />
      <div className="fm-b3" aria-hidden="true" /><div className="fm-b4" aria-hidden="true" /><div className="fm-b5" aria-hidden="true" />

      <div className="fm-stage">
        {/* ---------- Left copy ---------- */}
        <div className="fm-left">
          <motion.div className="fm-eyebrow" {...fade(0, 16)}>
            <motion.i initial={reduce ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} style={{ originX: 0 }} />
            Get a quote
          </motion.div>

          <motion.h1 id="fm-h1" className="fm-h1" {...fade(0.1)}>
            Let’s Build Your Perfect{" "}
            <em>
              Retail Space
              <svg viewBox="0 0 300 16" preserveAspectRatio="none" aria-hidden="true">
                <motion.path d="M2 10 C 70 3, 170 6, 298 6 M110 11 C 150 4, 190 8, 240 13" fill="none" stroke={ORANGE} strokeWidth="3" strokeLinecap="round"
                  initial={reduce ? false : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.7, ease: "easeOut" }} />
              </svg>
            </em>
          </motion.h1>

          <motion.p className="fm-p" {...fade(0.2)}>
            From planning to installation, Arya Insulation provides complete racking solutions tailored to your store.
          </motion.p>

          <ul className="fm-feats" style={{ listStyle: "none", padding: 0 }}>
            {features.map(({ icon: Icon, label }, i) => (
              <motion.li key={label} className="fm-feat" {...fade(0.35 + i * 0.12, 20)}>
                <motion.span className="fm-tile" whileHover={reduce ? undefined : { y: -4, rotate: -4 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                  <Icon size={34} strokeWidth={1.7} />
                </motion.span>
                {label}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* ---------- Image + form ---------- */}
        <div className="fm-right">
          <motion.div
            className="fm-img"
            initial={reduce ? false : { opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease }}
          >
            <div>{image ? <img src={image} alt="Blue and white retail racking in a store" /> : <RackScene />}
            </div>
          </motion.div>

          <motion.div className="fm-card" {...fade(0.25, 50)}>
            <AnimatePresence mode="wait" initial={false}>
              {status === "done" ? (
                <motion.div key="ok" className="fm-ok" role="status" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.1 }}>
                    <CheckCircle2 size={72} strokeWidth={1.6} />
                  </motion.div>
                  <h3>Thank you, {data.name.split(" ")[0]}!</h3>
                  <p>We have your request. Our team will call you on {data.mobile} with a layout and quotation.</p>
                  <button type="button" className="fm-link" onClick={() => { setData(empty); setStatus("idle"); }}>Send another request</button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={submit} noValidate exit={{ opacity: 0 }}>
                  <h2 className="fm-title"><Store size={44} strokeWidth={1.7} aria-hidden="true" /><span>Request a <b style={{ color: ORANGE }}>Free Quote</b></span></h2>
                  <motion.i className="fm-uline" initial={reduce ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }} />

                  <div className="fm-row">
                    <div>
                      <label className="fm-field">
                        <User className="fm-ic" size={24} strokeWidth={1.8} />
                        <input className="fm-in" placeholder="Your Name*" autoComplete="name" value={data.name} onChange={set("name")} aria-label="Your name" aria-invalid={!!errors.name} />
                      </label>
                      <Err k="name" />
                    </div>
                    <div>
                      <label className="fm-field">
                        <Phone className="fm-ic" size={24} strokeWidth={1.8} />
                        <input className="fm-in" type="tel" inputMode="tel" placeholder="Mobile Number*" autoComplete="tel" value={data.mobile} onChange={set("mobile")} aria-label="Mobile number" aria-invalid={!!errors.mobile} />
                      </label>
                      <Err k="mobile" />
                    </div>
                  </div>

                  <div style={{ marginBottom: 16 }}>
                    <label className="fm-field">
                      <Mail className="fm-ic" size={24} strokeWidth={1.8} />
                      <input className="fm-in" type="email" placeholder="Email Address" autoComplete="email" value={data.email} onChange={set("email")} aria-label="Email address" aria-invalid={!!errors.email} />
                    </label>
                    <Err k="email" />
                  </div>

                  <div className="fm-row">
                    <label className="fm-field">
                      <Store className="fm-ic" size={24} strokeWidth={1.8} />
                      <select className="fm-in sel" required value={data.storeType} onChange={set("storeType")} aria-label="Shop or store type">
                        <option value="" disabled>Shop / Store Type</option>
                        {storeTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                      <ChevronDown className="fm-chev" size={22} strokeWidth={2.4} />
                    </label>
                    <label className="fm-field">
                      <Maximize2 className="fm-ic" size={24} strokeWidth={1.8} />
                      <select className="fm-in sel" required value={data.area} onChange={set("area")} aria-label="Approximate area in square feet">
                        <option value="" disabled>Approx. Area (sq. ft.)</option>
                        {areas.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                      <ChevronDown className="fm-chev" size={22} strokeWidth={2.4} />
                    </label>
                  </div>

                  <label className="fm-field">
                    <FileText className="fm-ic" size={24} strokeWidth={1.8} />
                    <textarea className="fm-in fm-ta" placeholder="Tell us your requirement..." value={data.message} onChange={set("message")} aria-label="Your requirement" />
                  </label>

                  {errors.form && <span className="fm-err" role="alert">{errors.form}</span>}

                  <div className="fm-btnwrap">
                    <motion.button type="submit" className="fm-btn" disabled={status === "sending"}
                      whileHover={reduce ? undefined : { y: -3, scale: 1.02 }} whileTap={reduce ? undefined : { scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}>
                      {status === "sending" ? "Sending..." : "Get a Quote Now"}
                      <motion.span style={{ display: "inline-flex" }} animate={reduce ? undefined : { x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                        <ArrowRight size={26} strokeWidth={2.4} />
                      </motion.span>
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}