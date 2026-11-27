"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, Mail, Phone, User, X } from "lucide-react";

const BUSINESS_EMAIL = "aryaindustry36@gmail.com";
const EASE = [0.22, 1, 0.36, 1];

export default function Popup({ open, onClose }) {
  const reduce = useReducedMotion();
  const [form, setForm] = useState({ name: "", phone: "", email: "", requirement: "" });

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  const update = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Quote Request - ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || "Not provided"}\nRequirement: ${form.requirement || "Not provided"}`
    );
    window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#06183E]/65 px-4 py-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => event.target === event.currentTarget && onClose()}
        >
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-popup-title"
            initial={reduce ? false : { opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="relative my-auto w-full max-w-[560px] overflow-hidden rounded-[26px] bg-white shadow-[0_30px_90px_rgba(0,0,0,0.3)]"
          >
            <div className="relative overflow-hidden px-6 py-7 text-white sm:px-8 sm:py-8" style={{ background: "linear-gradient(125deg,#0A2457 0%,#12418f 100%)" }}>
              <span className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rotate-45 bg-[#F26A12]/90" />
              <span className="pointer-events-none absolute -bottom-20 right-24 h-36 w-36 rotate-45 bg-white/10" />
              <button type="button" onClick={onClose} aria-label="Close quote form" className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
                <X size={21} />
              </button>
              <div className="relative z-[1]">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/85">
                  <CheckCircle2 size={13} /> Get a Quote
                </span>
                <h2 id="quote-popup-title" className="mt-4 !text-2xl font-extrabold sm:text-[30px] !text-white">Let’s discuss your requirements.</h2>
                <p className="mt-2 max-w-[410px] text-sm leading-relaxed !text-white">Share a few details and our team will connect with you.</p>
              </div>
            </div>

            <form onSubmit={submit} className="space-y-4 px-6 py-6 sm:px-8 sm:py-7">
              <div>
                <label htmlFor="quote-name" className="mb-1.5 block text-xs font-bold text-[#243451]">Full Name <span className="text-[#F26A12]">*</span></label>
                <div className="relative">
                  <User size={17} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8290A8]" />
                  <input id="quote-name" name="name" value={form.name} onChange={update} required placeholder="Enter your name" className="h-12 w-full rounded-xl border border-[#E1E7F0] bg-[#F8FAFD] pl-10 pr-4 text-sm text-[#172746] outline-none transition focus:border-[#0B57E3] focus:bg-white focus:ring-4 focus:ring-[#0B57E3]/10" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="quote-phone" className="mb-1.5 block text-xs font-bold text-[#243451]">Phone Number <span className="text-[#F26A12]">*</span></label>
                  <div className="relative">
                    <Phone size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8290A8]" />
                    <input id="quote-phone" name="phone" type="tel" value={form.phone} onChange={update} required pattern="[0-9+() -]{7,}" placeholder="Enter phone number" className="h-12 w-full rounded-xl border border-[#E1E7F0] bg-[#F8FAFD] pl-10 pr-3 text-sm text-[#172746] outline-none transition focus:border-[#0B57E3] focus:bg-white focus:ring-4 focus:ring-[#0B57E3]/10" />
                  </div>
                </div>
                <div>
                  <label htmlFor="quote-email" className="mb-1.5 block text-xs font-bold text-[#243451]">Email Address</label>
                  <div className="relative">
                    <Mail size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8290A8]" />
                    <input id="quote-email" name="email" type="email" value={form.email} onChange={update} placeholder="Your email" className="h-12 w-full rounded-xl border border-[#E1E7F0] bg-[#F8FAFD] pl-10 pr-3 text-sm text-[#172746] outline-none transition focus:border-[#0B57E3] focus:bg-white focus:ring-4 focus:ring-[#0B57E3]/10" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="quote-requirement" className="mb-1.5 block text-xs font-bold text-[#243451]">Your Requirement</label>
                <textarea id="quote-requirement" name="requirement" rows={3} value={form.requirement} onChange={update} placeholder="Tell us about the racks or display system you need..." className="w-full resize-none rounded-xl border border-[#E1E7F0] bg-[#F8FAFD] px-4 py-3 text-sm text-[#172746] outline-none transition focus:border-[#0B57E3] focus:bg-white focus:ring-4 focus:ring-[#0B57E3]/10" />
              </div>

              <button type="submit" className="group flex h-[50px] w-full items-center justify-center gap-3 rounded-xl text-sm font-extrabold text-white shadow-[0_10px_22px_rgba(242,106,18,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(242,106,18,0.32)]" style={{ background: "linear-gradient(90deg,#F26A12,#FF8A1F)" }}>
                Submit Quote Request <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
