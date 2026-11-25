"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

// Replace these placeholders with your official contact details.
const CONTACT_PHONE = "+919876543210";
const WHATSAPP_NUMBER = "919876543210";

export default function CTA() {
  const reduce = useReducedMotion();

  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to know more about your display racks."
  );

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="mb-7 flex flex-col gap-5 rounded-[20px] border border-[#E2E9F2]
        bg-[#F5F7FA] p-3 shadow-[0_8px_24px_rgba(15,42,75,0.05)]
        sm:mb-8 sm:flex-row sm:items-center sm:justify-between sm:px-7 py-10"
    >
      <div className="max-w-2xl">
        <span className="mb-2 block text-[10px] font-extrabold uppercase
          tracking-[0.18em] text-[#F67516]">
          Need expert assistance?
        </span>

        <h3 className="!text-[40px] font-extrabold leading-snug tracking-tight
          text-[#193653] sm:text-xl">
          Let’s find the right display rack <br />for your business.
        </h3>

        <p className="mt-1 text-xs leading-relaxed text-[#64748B] sm:text-sm">
          Talk to our team for product details, pricing and custom requirements.
        </p>
      </div>

      <div className="flex w-full flex-col gap-2 sm:w-auto sm:min-w-[300px] sm:flex-row">
        <a
          href={`tel:${CONTACT_PHONE}`}
          className="inline-flex min-h-11 flex-1 items-center justify-center gap-2
            rounded-xl border border-[#193653] bg-[#193653] px-5 py-3
            text-sm font-bold !text-white transition-all duration-300
            hover:-translate-y-0.5 hover:bg-[#102B4A]"
        >
          <Phone size={16} />
          Call Now
        </a>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 flex-1 items-center justify-center gap-2
            rounded-xl border border-[#B9E4CB] bg-white px-5 py-3
            text-sm font-bold text-[#16834A] transition-all duration-300
            hover:-translate-y-0.5 hover:border-[#16834A] hover:bg-[#F2FBF5]"
        >
          <MessageCircle size={17} />
          WhatsApp
        </a>
      </div>
    </motion.div>
  );
}
