"use client";

import React from "react";
import {
  Boxes,
  Settings2,
  ShieldCheck,
  Factory,
  Store,
  Layers3,
  PanelsTopLeft,
  ArrowUpRight,
} from "lucide-react";

const MARQUEE_ITEMS = [
  { label: "Heavy Duty Storage Racks", Icon: Boxes },
  { label: "Customized Rack Systems", Icon: Settings2 },
  { label: "Premium Quality", Icon: ShieldCheck },
  { label: "Built to Last", Icon: Factory },
  { label: "Supermarket Display Racks", Icon: Store },
  { label: "Gondola Racks", Icon: Layers3 },
  { label: "Wall Mounted Racks", Icon: PanelsTopLeft },
];

export default function FeatureMarquee() {
  // Duplicate the sequence for a seamless, continuously moving track.
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section
      aria-label="Arya Insulation product strengths"
      className="relative isolate overflow-hidden bg-[#F3F6FA] py-5 sm:py-6"
    >
      <style jsx>{`
        @keyframes arya-marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .arya-marquee-track {
          width: max-content;
          animation: arya-marquee-scroll 34s linear infinite;
          will-change: transform;
        }

        /* Keep the marquee moving continuously, including while hovered. */
      `}</style>

      <div className="mx-auto mb-3 flex max-w-[1500px] items-center justify-between px-5 sm:px-8">
        <div className="flex items-center gap-2">
          <span className="h-[3px] w-7 rounded-full bg-[#F47B20]" />
          <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#173653] sm:text-[11px]">
            The Arya Standard
          </span>
        </div>
        <span className="hidden items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#718096] sm:flex">
          Engineered for everyday performance
          <ArrowUpRight size={13} className="text-[#F47B20]" />
        </span>
      </div>

      <div className="relative">
        {/* Soft edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#F3F6FA] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#F3F6FA] to-transparent sm:w-24" />

        <div className="arya-marquee-track flex w-max gap-3 px-3">
          {items.map((item, index) => {
            const Icon = item.Icon;
            return (
              <div
                key={`${item.label}-${index}`}
                aria-hidden={index >= MARQUEE_ITEMS.length}
                className="group flex min-h-[58px] items-center gap-3 rounded-2xl border border-[#DCE5EF] bg-white px-4 py-3 shadow-[0_5px_18px_rgba(12,39,69,0.055)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F47B20]/50 hover:shadow-[0_10px_24px_rgba(12,39,69,0.10)] sm:min-h-[66px] sm:gap-3.5 sm:px-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F47B20]/10 text-[#E87519] transition-colors duration-300 group-hover:bg-[#F47B20] group-hover:text-white sm:h-10 sm:w-10">
                  <Icon size={18} strokeWidth={2.1} />
                </span>
                <span className="whitespace-nowrap text-[11px] font-extrabold uppercase tracking-[0.07em] text-[#173653] sm:text-xs">
                  {item.label}
                </span>
                <span className="ml-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F47B20]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
