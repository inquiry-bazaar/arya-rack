
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";

const videos = [
  {
    id: "rwtP2lnHRVw",
    title: "Supermarket Display Racks",
    number: "01",
  },
  {
    id: "Thu8pAkt4gg",
    title: "Grocery Store Racks",
    number: "02",
  },
  {
    id: "uLoB7KTVS3A",
    title: "Fruits & Vegetable Racks",
    number: "03",
  },
  {
    id: "JBAWity6n5k",
    title: "Heavy Duty Display Racks",
    number: "04",
  },
  {
    id: "arBo9VtUVQg",
    title: "Shop Furniture & Shelving",
    number: "05",
  },
];

export default function VideosSection() {
  return (
    <section className="hidden md:block bg-gray-100  py-14 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-[2px] bg-[#F26A12]"></span>
              <span className="text-[#FF8A1F] text-xs font-bold tracking-[0.25em] uppercase">
                Watch Our Videos
              </span>
            </div>

            <h2 className="text-white text-4xl lg:text-5xl font-bold leading-tight">
              See Our Products
            
              <span className="text-[#2252A3]"> In Action.</span>
            </h2>

            
          </div>

          <a
            href="https://www.youtube.com/@aryaindustry1074"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#F26A12] hover:bg-white
             hover:text-[#06183E] text-black px-6 py-4 rounded-full text-sm font-bold 
             transition-all duration-300 w-fit"
          >
           <Play size={19} fill="currentColor" />
            Visit Our YouTube
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* Video Cards */}
        <div className="grid grid-cols-5 gap-5">
          {videos.map((video, index) => (
            <motion.div
              key={video.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-[#0A2457] border border-white/10 shadow-xl">

                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${video.id}&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3`}
                  title={video.title}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />

                <div className="absolute top-4 left-4 z-10 pointer-events-none">
                 
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#06183E]/90 to-transparent pointer-events-none" />

              </div>

            </motion.div>
          ))}
        </div>

          

      </div>
    </section>
  );
}
