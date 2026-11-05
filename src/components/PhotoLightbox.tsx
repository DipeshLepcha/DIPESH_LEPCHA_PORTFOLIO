import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Camera } from 'lucide-react';
import type { HimalayanPhoto } from '../types/portfolio.ts';
import { formatSlideCounter } from '../utils/portfolio-logic.ts';

interface PhotoLightboxProps {
  photo: HimalayanPhoto | null;
  currentIndex: number;
  totalPhotos: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  photo,
  currentIndex,
  totalPhotos,
  onClose,
  onPrev,
  onNext,
}) => {
  const lightboxRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const touchStartXRef = useRef<number | null>(null);

  useEffect(() => {
    if (!photo) return;

    const previouslyFocused = document.activeElement as HTMLElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [photo, onClose, onPrev, onNext]);

  if (!photo) return null;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

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
    <div
      ref={lightboxRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#222421]/95 backdrop-blur-md p-3 sm:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Fullscreen Himalayan photograph viewer"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top Header Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-[#F4F0E8] pointer-events-auto">
        <div className="flex items-center space-x-3">
          <span className="font-serif text-sm sm:text-base font-bold tracking-wide">
            {photo.title}
          </span>
          <span className="text-xs text-[#BD493B] font-mono">
            {formatSlideCounter(currentIndex, totalPhotos)}
          </span>
        </div>

        <button
          ref={closeBtnRef}
          onClick={onClose}
          className="p-2.5 rounded-full bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/25 text-[#F4F0E8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#BD493B]"
          aria-label="Close fullscreen view"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev / Next Floating Controls (Desktop) */}
      <button
        onClick={onPrev}
        className="hidden md:flex absolute left-4 z-20 p-3 rounded-full bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/25 text-[#F4F0E8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#BD493B]"
        aria-label="Previous photograph"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        className="hidden md:flex absolute right-4 z-20 p-3 rounded-full bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/25 text-[#F4F0E8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#BD493B]"
        aria-label="Next photograph"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="relative max-w-6xl w-full max-h-[85vh] flex flex-col items-center justify-center">
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-h-[68vh] w-auto max-w-full object-contain rounded-lg shadow-2xl transition-opacity duration-300"
        />

        {/* Bottom Details Banner */}
        <div className="w-full mt-4 bg-[#1A1C19]/85 backdrop-blur-md rounded-xl p-4 border border-[#FFFFFF]/10 text-[#F4F0E8] max-w-3xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 font-sans">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[#BD493B] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide">
                {photo.location}
              </span>
              <span className="text-[#BD493B]">&bull;</span>
              <span className="text-xs text-[#F4F0E8]/80">{photo.region}</span>
            </div>

            {photo.cameraMeta && (
              <div className="flex items-center space-x-2 text-[11px] text-[#BD493B] font-mono">
                <Camera className="w-3.5 h-3.5" />
                <span>{photo.cameraMeta.settings || photo.cameraMeta.season}</span>
              </div>
            )}
          </div>

          <p className="text-xs sm:text-sm text-[#F4F0E8]/85 leading-relaxed font-sans">
            {photo.caption}
          </p>

          {photo.story && (
            <p className="mt-2 text-xs italic text-[#BD493B]/90 font-serif">
              "{photo.story}"
            </p>
          )}

          {/* Mobile Prev / Next Buttons */}
          <div className="mt-3 pt-3 border-t border-[#FFFFFF]/10 flex md:hidden items-center justify-between text-xs font-sans">
            <button
              onClick={onPrev}
              className="px-3 py-1.5 rounded-lg bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/20 text-[#F4F0E8] font-medium"
            >
              &larr; Previous
            </button>
            <span className="text-xs text-[#BD493B] font-mono">
              {formatSlideCounter(currentIndex, totalPhotos)}
            </span>
            <button
              onClick={onNext}
              className="px-3 py-1.5 rounded-lg bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/20 text-[#F4F0E8] font-medium"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
