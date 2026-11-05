import React, { useState } from "react";
import { ArrowUp } from "lucide-react";
import { himalayanPhotographyList } from "../data/photography.ts";
import { PhotographyCarousel } from "./PhotographyCarousel.tsx";
import { PhotoLightbox } from "./PhotoLightbox.tsx";
import {
  filterPhotosByCategory,
  getNextSlideIndex,
  getPrevSlideIndex,
} from "../utils/portfolio-logic.ts";
import type { HimalayanPhoto, PhotoCategory } from "../types/portfolio.ts";

export const PhotographyGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<PhotoCategory>("All Photographs");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeLightboxPhoto, setActiveLightboxPhoto] =
    useState<HimalayanPhoto | null>(null);

  const categories: PhotoCategory[] = [
    "All Photographs",
    "Sikkim",
    "Darjeeling",
    "Mountains",
    "Nature",
    "Travel",
  ];

  const filteredPhotos = filterPhotosByCategory(
    himalayanPhotographyList,
    selectedCategory,
  );

  const handleCategorySelect = (category: PhotoCategory) => {
    setSelectedCategory(category);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => getNextSlideIndex(prev, filteredPhotos.length));
    if (activeLightboxPhoto) {
      const nextIdx = getNextSlideIndex(currentIndex, filteredPhotos.length);
      setActiveLightboxPhoto(filteredPhotos[nextIdx]);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => getPrevSlideIndex(prev, filteredPhotos.length));
    if (activeLightboxPhoto) {
      const prevIdx = getPrevSlideIndex(currentIndex, filteredPhotos.length);
      setActiveLightboxPhoto(filteredPhotos[prevIdx]);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="photography"
      className="py-28 bg-[#E8E0D2]/50 relative overflow-hidden transition-colors duration-500 border-t border-[#222421]/8"
    >
      {/* Background Japanese Sumi & Topographic Texture */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg
          viewBox="0 0 1200 800"
          fill="none"
          className="w-full h-full object-cover"
        >
          <circle
            cx="600"
            cy="200"
            r="180"
            stroke="#BD493B"
            strokeWidth="1.5"
            strokeDasharray="12 6"
          />
          <path
            d="M0 500 C300 450, 600 550, 900 420 C1050 350, 1150 480, 1200 400"
            stroke="#222421"
            strokeWidth="2"
          />
          <path
            d="M0 380 C200 320, 500 420, 800 300 C1000 220, 1100 350, 1200 270"
            stroke="#222421"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Creative Bridge & Opening Transition Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest text-[#BD493B] uppercase mb-3">
            <span className="w-8 h-[1.5px] bg-[#BD493B]" />
            <span className="font-mono">07</span>
            <span>&bull;</span>
            <span className="tracking-wider uppercase">GALLERY</span>
            <span className="text-[#817865] normal-case tracking-normal hidden sm:inline">
              &bull; Himalayan Visual Archive
            </span>
            <span className="w-8 h-[1.5px] bg-[#BD493B]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#222421] tracking-tight mb-2">
            Himalayan Stories
          </h2>

          <h3 className="font-serif text-2xl sm:text-4xl italic text-[#343630] font-medium mb-4">
            Through My Lens
          </h3>

          <p className="text-base sm:text-lg text-[#222421]/85 leading-relaxed font-sans max-w-2xl mx-auto">
            "Mountains, mist, winding roads, quiet places, and the moments that
            make the Himalayas unforgettable."
          </p>
        </div>

        {/* Location Filters */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Photography location filters"
        >
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                role="tab"
                aria-selected={isActive}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? "bg-[#222421] text-[#F4F0E8] shadow-md scale-105"
                    : "bg-[#FFFFFF] text-[#222421] border border-[#222421]/12 hover:bg-[#F4F0E8]"
                } focus:outline-none focus:ring-2 focus:ring-[#BD493B]`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Cinematic Photography Carousel */}
        <PhotographyCarousel
          photos={filteredPhotos}
          currentIndex={currentIndex}
          onSelectIndex={(index) => setCurrentIndex(index)}
          onNext={handleNext}
          onPrev={handlePrev}
          onOpenLightbox={(photo) => setActiveLightboxPhoto(photo)}
        />

        {/* Gallery Ending & Back To Top */}
        <div className="mt-20 pt-12 border-t border-[#222421]/12 text-center max-w-xl mx-auto flex flex-col items-center">
          <p className="font-serif text-lg sm:text-xl italic text-[#222421]/90 mb-6">
            "Every place has a story. These are a few of mine."
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#FFFFFF] hover:bg-[#222421] hover:text-[#F4F0E8] text-[#222421] border border-[#222421]/20 text-xs font-semibold tracking-wider uppercase transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-[#BD493B] group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>

      {/* Full-screen Lightbox Photo Viewer */}
      <PhotoLightbox
        photo={activeLightboxPhoto}
        currentIndex={currentIndex}
        totalPhotos={filteredPhotos.length}
        onClose={() => setActiveLightboxPhoto(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
