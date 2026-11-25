
"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

import {
  PencilRuler,
  Truck,
  ShieldCheck,
  Headset,
  ChevronDown,
  Sparkles,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const BLUE = "#12469C";
const ORANGE = "#F67516";

const faqs = [
  {
    q: "What products does Arya Insulation offer?",
    a: "We provide a complete range of store fixtures, including display racks, shelving systems, checkout counters, and customized retail solutions.",
    icon: "rack",
  },
  {
    q: "Do you provide customized store layouts?",
    a: "Yes. Share your shop size and a few photos, and we will provide a layout showing rack placement, aisle width, dimensions and a detailed quotation.",
    icon: PencilRuler,
  },
  {
    q: "What is the delivery and installation time?",
    a: "The timeline depends on the size of your order and the finish you choose. Once the order is confirmed, we share the production, delivery and installation schedule.",
    icon: Truck,
  },
  {
    q: "Are the racks durable and long-lasting?",
    a: "Every batch is cut, punched, bent, welded and powder coated in our factory, then checked for finish and load before packing.",
    icon: ShieldCheck,
  },
  {
    q: "Do you offer after-sales support?",
    a: "Yes. Need more shelves, hooks or a new section later? Contact our team and we will help you find the right matching solution.",
    icon: Headset,
  },
];

const benefits = [
  "Customized retail solutions",
  "Quality-tested products",
  "Dedicated customer support",
];

function RackIcon() {
  return (
    <svg
      viewBox="0 0 56 56"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 6v44M46 6v44M10 12h36M10 24h36M10 36h36M10 48h36" />
    </svg>
  );
}

const ease = [0.22, 1, 0.36, 1];

export default function FAQ({
  image = "/imgi_148_supermarket-rack-1.webp",
  defaultOpen = 0,
}) {
  const [open, setOpen] = useState(defaultOpen);
  const reduce = useReducedMotion();

  const renderIcon = (item) => {
    if (item === "rack") return <RackIcon />;

    const Icon = item;
    return <Icon size={25} strokeWidth={1.7} />;
  };

  return (
    <section
      id="faq"
      className="relative isolate w-full overflow-hidden bg-white px-5 py-10 
      sm:px-8 sm:py-10 lg:px-10 lg:py-15"
    >
      {/* BACKGROUND DECORATION */}

      <div className="pointer-events-none absolute -left-32 top-10 h-80 
      w-80 rounded-full bg-blue-200/30 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-orange-200/30 blur-[110px]" />

      <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-16">

        {/* LEFT CONTENT */}

        <div className="relative z-10">

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[1.8px] text-[#12469C] shadow-sm">
              <Sparkles size={15} className="text-[#F67516]" />
              Help & Information
            </div>
          </motion.div>

          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="mt-7 max-w-[600px] text-[39px] font-extrabold leading-[1.13] tracking-[-1.5px] text-[#172B4D] sm:text-5xl xl:text-[60px]"
          >
            Frequently Asked {" "}
            <span className="text-[#12469C]">
              Questions
            </span>
          </motion.h2>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="mt-7 max-w-[480px] text-[15px] leading-8 text-slate-500 sm:text-base"
          >
            Have questions about our retail racks, customized
            store layouts or installation? Find helpful answers
            and learn how Arya Insulation can transform your
            retail space.
          </motion.p>


          {/* IMAGE CARD */}

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.35 }}
            className="group relative mt-10 h-[260px] w-full overflow-hidden rounded-2xl bg-slate-200 shadow-xl shadow-blue-900/10 sm:h-[330px] lg:h-[290px] xl:h-[340px]"
          >
            {image && (
              <img
                src={image}
                alt="Arya Insulation retail supermarket display racks"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-[#071D42]/80 via-[#071D42]/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-5 sm:p-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[1.8px] !text-white/75">
                  Arya Insulation
                </p>

                <h3 className="mt-2 text-xl font-bold !text-white sm:text-2xl">
                  Smarter Retail Spaces.
                </h3>
              </div>

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F67516] text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowRight size={22} />
              </div>
            </div>
          </motion.div>

        </div>

        {/* RIGHT FAQ */}

        <div className="relative z-10 min-w-0">


          {/* ACCORDION */}

          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = open === index;

              return (
                <motion.div
                  key={faq.q}
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    ease,
                    delay: index * 0.07,
                  }}
                  className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#C9D9EF] bg-white shadow-lg shadow-blue-900/[0.06]"
                      : "border-slate-200/80 bg-white/80 hover:border-blue-200 hover:bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpen(isOpen ? -1 : index)
                    }
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="flex min-h-[78px] w-full items-center gap-3 px-3 py-4 text-left sm:min-h-[86px] sm:gap-4 sm:px-5"
                  >
                    {/* NUMBER */}

                    <span
                      className={`hidden text-sm font-extrabold sm:block ${
                        isOpen
                          ? "text-[#F67516]"
                          : "text-slate-300"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    {/* ICON */}

                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 sm:h-12 sm:w-12 ${
                        isOpen
                          ? "bg-[#12469C] text-white shadow-md shadow-blue-900/20"
                          : "bg-[#EDF3FB] text-[#12469C] group-hover:bg-blue-100"
                      }`}
                    >
                      {renderIcon(faq.icon)}
                    </span>

                    {/* QUESTION */}

                    <span className="flex-1 text-[14px] font-bold leading-snug text-[#172B4D] sm:text-[16px]">
                      {faq.q}
                    </span>

                    {/* ARROW */}

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-[#F67516] text-white"
                          : "bg-slate-100 text-[#12469C] group-hover:bg-blue-50"
                      }`}
                    >
                      <ChevronDown size={19} />
                    </span>
                  </button>

                  {/* ANSWER */}

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: reduce ? 0 : 0.35,
                          ease,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="ml-[57px] border-l-2 border-[#F67516] pb-5 pl-4 pr-4 text-[13px] leading-7 text-slate-500 sm:ml-[83px] sm:pl-5 sm:pr-7 sm:text-[14px]">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        

        </div>
      </div>
    </section>
  );
}
