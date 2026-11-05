import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, MapPin } from 'lucide-react';
import type { HimalayanPhoto } from '../types/portfolio.ts';
import { formatSlideCounter } from '../utils/portfolio-logic.ts';

interface PhotographyCarouselProps {
  photos: HimalayanPhoto[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  onNext: () => void;
  onPrev: () => void;
  onOpenLightbox: (photo: HimalayanPhoto) => void;
}

export const PhotographyCarousel: React.FC<PhotographyCarouselProps> = ({
  photos,
  currentIndex,
  onSelectIndex,
  onNext,
  onPrev,
  onOpenLightbox,
}) => {
  const touchStartXRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onPrev, onNext]);

  if (!photos || photos.length === 0) {
    return (
      <div className="p-12 text-center text-[#817865] bg-[#FFFFFF] rounded-2xl border border-[#222421]/10">
        No photographs match this category.
      </div>
    );
  }

  const activePhoto = photos[currentIndex] || photos[0];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        onNext();
      } else {
        onPrev();
      }
    }
    touchStartXRef.current = null;
  };

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
      
      {/* 16:9 Cinematic Photo Stage */}
      <div
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative w-full aspect-[16/9] sm:aspect-[16/9] bg-[#222421] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#222421]/20 group"
      >
        {/* Active Photo with gentle zoom styling */}
        <div className="relative w-full h-full overflow-hidden">
          <img
            key={activePhoto.id}
            src={activePhoto.src}
            alt={activePhoto.alt}
            className="w-full h-full object-cover transition-all duration-700 ease-out transform group-hover:scale-105"
            loading="lazy"
          />

          {/* Cinematic Vignette & Bottom Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#222421]/90 via-[#222421]/25 to-transparent pointer-events-none" />
        </div>

        {/* Top Controls Bar */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-[#F4F0E8]">
          {/* Slide counter: e.g. 01 / 08 */}
          <div className="bg-[#222421]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#FFFFFF]/15 text-xs font-mono font-bold tracking-wider text-[#BD493B]">
            {formatSlideCounter(currentIndex, photos.length)}
          </div>

          {/* Fullscreen Expand Action */}
          <button
            onClick={() => onOpenLightbox(activePhoto)}
            className="flex items-center space-x-1.5 bg-[#222421]/80 hover:bg-[#343630] backdrop-blur-md px-3 py-1.5 rounded-full border border-[#FFFFFF]/15 text-xs font-medium text-[#F4F0E8] transition-all focus:outline-none focus:ring-2 focus:ring-[#BD493B]"
            aria-label="View fullscreen photo"
          >
            <Maximize2 className="w-3.5 h-3.5 text-[#BD493B]" />
            <span className="hidden sm:inline">Fullscreen</span>
          </button>
        </div>

        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#222421]/75 hover:bg-[#343630] text-[#F4F0E8] flex items-center justify-center backdrop-blur-md border border-[#FFFFFF]/20 transition-all opacity-85 hover:opacity-100 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#BD493B]"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#222421]/75 hover:bg-[#343630] text-[#F4F0E8] flex items-center justify-center backdrop-blur-md border border-[#FFFFFF]/20 transition-all opacity-85 hover:opacity-100 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#BD493B]"
          aria-label="Next photo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Bottom Details Overlay on Slide */}
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20 text-[#F4F0E8] pointer-events-none">
          <div className="max-w-2xl font-sans">
            <div className="flex items-center space-x-2 text-xs text-[#BD493B] font-semibold tracking-wider uppercase mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{activePhoto.location}</span>
              <span>&bull;</span>
              <span>{activePhoto.region}</span>
            </div>

            <h3 className="font-serif text-xl sm:text-3xl font-bold tracking-tight text-[#F4F0E8] mb-2 leading-tight">
              {activePhoto.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#F4F0E8]/85 line-clamp-2 leading-relaxed hidden sm:block">
              {activePhoto.caption}
            </p>
          </div>
        </div>

      </div>

      {/* Thumbnail Navigation Strip */}
      <div className="w-full mt-6">
        <div className="flex items-center space-x-3 overflow-x-auto pb-2 scrollbar-thin focus:outline-none">
          {photos.map((photo, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={photo.id}
                onClick={() => onSelectIndex(idx)}
                className={`relative shrink-0 w-20 sm:w-24 aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all ${
                  isActive
                    ? 'border-[#BD493B] scale-105 shadow-md ring-2 ring-[#BD493B]/30'
                    : 'border-transparent opacity-60 hover:opacity-100'
                } focus:outline-none focus:ring-2 focus:ring-[#BD493B]`}
                aria-label={`Go to slide ${idx + 1}: ${photo.title}`}
              >
                <img
                  src={photo.thumbnail}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {isActive && (
                  <span className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-[#BD493B]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
