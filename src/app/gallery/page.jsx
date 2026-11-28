
"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

const rackImages = [
  "/racks/1711775886_fifoflowrack (1).webp",
  "/racks/about-syd.webp",

  "/racks/arya-display-rack-3.webp",
  "/racks/arya-display-rack-4.webp",
  "/racks/arya-display-rack-9.webp",
  "/racks/arya-display-rack-10.png",
  "/racks/arya-display-rack-12.webp",
  "/racks/arya-display-rack-13.webp",
  "/racks/arya-display-rack-14.webp",
  "/racks/arya-display-rack-15.webp",
  "/racks/arya-display-rack-18.webp",
  "/racks/arya-display-rack-19.webp",
  "/racks/arya-display-rack-22 (1).webp",
  "/racks/arya-display-rack-23 (1).webp",
  "/racks/arya-display-rack-25 (1).webp",
  "/racks/arya-display-rack-26.webp",
  "/racks/arya-display-rack-27 (1).webp",
  "/racks/arya-display-rack-28.webp",
  "/racks/arya-display-rack-38.webp",
  "/racks/arya-display-rack.webp",
  "/racks/aryadisplay-rack-1.png",
  "/racks/rack (1).webp",
  "/racks/sloted-angle-rack-6.webp",
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const validImages = rackImages.filter(
    (image) => typeof image === "string" && image.trim()
  );

  // Open image
  const openImage = (image, index) => {
    setSelectedImage({ image, index });
  };

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  // Previous / Next
  const changeImage = useCallback(
    (direction) => {
      if (!selectedImage || !validImages.length) return;

      const nextIndex =
        (selectedImage.index + direction + validImages.length) %
        validImages.length;

      setSelectedImage({
        image: validImages[nextIndex],
        index: nextIndex,
      });
    },
    [selectedImage, validImages]
  );

  // Keyboard controls
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") changeImage(1);
      if (e.key === "ArrowLeft") changeImage(-1);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, closeLightbox, changeImage]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}
      <section className="bg-[#f2f5f6] px-5 py-10 
      md:px-10 lg:px-[6%] lg:py-12">
        <div className="mx-auto max-w-[1300px] text-center">

          <span className="text-[11px] font-bold tracking-[3px] text-[#35647e]">
            OUR VISUAL COLLECTION
          </span>

          <div className="mt-5  gap-5 md:flex-row md:items-end">

            <h1 className="text-5xl font-extrabold tracking-tight text-[#172b3c] sm:text-7xl">
               Our Gallery.
              
            </h1>

       

          </div>

        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="mx-auto max-w-[1500px] px-4 py-1 
      sm:px-8 md:py-12 lg:px-[6%]">

      

        {/* MASONRY GRID */}
        <div className="columns-2 gap-3 sm:columns-2 sm:gap-4 lg:columns-3 xl:columns-4">

          {validImages.map((image, index) => (

            <div
              key={`${image}-${index}`}
              className="mb-3 inline-block w-full break-inside-avoid overflow-hidden rounded-xl bg-[#f2f5f6] sm:mb-4"
            >

              <button
                onClick={() => openImage(image, index)}
                aria-label={`View gallery image ${index + 1}`}
                className="group relative block w-full overflow-hidden"
              >

                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  width={800}
                  height={1000}
                  unoptimized={image.startsWith("http")}
                  className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Expand Icon */}
                <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-[#172b3c] opacity-0 shadow-md transition-all group-hover:opacity-100 max-sm:opacity-100">
                  <Maximize2 size={16} />
                </span>

              </button>

            </div>

          ))}

        </div>

        {validImages.length === 0 && (
          <div className="py-20 text-center text-sm text-gray-400">
            No images available.
          </div>
        )}

      </section>

      {/* LIGHTBOX */}
      {selectedImage && (

        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#09131b]/95 p-4 backdrop-blur-md sm:p-10"
        >

          {/* CLOSE */}
          <button
            onClick={closeLightbox}
            aria-label="Close preview"
            className="absolute right-5 top-5 z-30 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white hover:text-black"
          >
            <X size={23} />
          </button>

          {/* PREVIOUS */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              changeImage(-1);
            }}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 z-30 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white hover:text-black sm:left-8"
          >
            <ChevronLeft size={28} />
          </button>

          {/* IMAGE */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative h-[75vh] w-full max-w-[1100px]"
          >

            <Image
              src={selectedImage.image}
              alt="Gallery preview"
              fill
              priority
              unoptimized={selectedImage.image.startsWith("http")}
              sizes="95vw"
              className="object-contain"
            />

          </div>

          {/* NEXT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              changeImage(1);
            }}
            aria-label="Next image"
            className="absolute right-2 top-1/2 z-30 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white hover:text-black sm:right-8"
          >
            <ChevronRight size={28} />
          </button>

          {/* COUNTER */}
          <span className="absolute bottom-5 text-xs text-white/70">
            {selectedImage.index + 1} / {validImages.length}
          </span>

        </div>

      )}

    </main>
  );
}
