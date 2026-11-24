
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

function RackIcon() {
  return (
    <svg
      viewBox="0 0 56 56"
      className="w-8 h-8"
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
    return <Icon size={30} strokeWidth={1.7} />;
  };

  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-10 xl:px-12">

      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 xl:gap-20">

        {/* LEFT CONTENT */}
        <div className="flex flex-col">

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="mb-5 flex items-center gap-3 text-[12px] font-bold tracking-[2px] text-[#12469C]">
              <span className="h-[2px] w-7 bg-[#F67516]" />
              HAVE QUESTIONS?
            </div>

            <h2 className="text-[40px] font-bold leading-[1.12] tracking-[-1.8px] text-[#172B4D] sm:text-5xl xl:text-[58px]">
              Frequently Asked
              <span className="block text-[#12469C]">
                Questions
              </span>
            </h2>

            <p className="mt-5 max-w-[420px] text-[15px] leading-8 text-slate-500 sm:text-base">
              Find answers to common questions about our
              products, services and customized store
              solutions.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="group mt-8 h-[260px] w-full overflow-hidden rounded-lg bg-slate-200 sm:h-[340px] lg:h-[300px] xl:h-[370px]"
          >
            {image && (
              <img
                src={image}
                alt="Arya Insulation supermarket display racks"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
            )}
          </motion.div>
        </div>

        {/* RIGHT FAQ */}
        <div className="w-full">

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
                  className={`overflow-hidden rounded-lg border transition-colors duration-300 ${
                    isOpen
                      ? "border-[#C9D9EF] bg-[#F0F5FC]"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="flex min-h-[76px] w-full items-center gap-3 px-3 py-3 text-left sm:min-h-[82px] sm:gap-5 sm:px-5"
                  >
                    {/* ICON */}
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md transition-colors duration-300 ${
                        isOpen
                          ? "bg-[#12469C] text-white"
                          : "bg-[#EDF3FB] text-[#12469C]"
                      }`}
                    >
                      {renderIcon(faq.icon)}
                    </span>

                    {/* QUESTION */}
                    <span className="flex-1 text-[15px] font-semibold leading-snug text-[#172B4D] sm:text-[17px]">
                      {faq.q}
                    </span>

                    {/* ARROW */}
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                        isOpen
                          ? "bg-[#12469C] text-white"
                          : "bg-slate-100 text-[#12469C]"
                      }`}
                    >
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={19} />
                      </motion.span>
                    </span>
                  </button>

                  {/* ANSWER */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: reduce ? 0 : 0.35,
                          ease,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-5 pl-[68px] pr-5 text-[14px] leading-7 text-slate-500 sm:pb-6 sm:pl-[88px] sm:pr-8 sm:text-[15px]">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* BOTTOM CTA */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 px-1 pt-5 text-sm">
            <span className="text-slate-500">
              Still have questions?
            </span>

            <a
              href="/contact"
              className="font-semibold text-[#12469C] transition-colors duration-300 hover:text-[#F67516]"
            >
              Talk to our team →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
