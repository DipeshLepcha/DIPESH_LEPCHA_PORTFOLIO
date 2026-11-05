import React from 'react';

interface MistLayersProps {
  className?: string;
  scrollOffset?: number;
}

export const MistLayers: React.FC<MistLayersProps> = ({ className = '', scrollOffset = 0 }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}>
      {/* High Ridge Mist Ribbon (Drifting gently left-to-right behind Mt. Fuji) */}
      <div
        className="absolute top-[32%] -left-[10%] w-[120%] h-24 sm:h-32 opacity-35 sm:opacity-45 animate-mist-slow"
        style={{
          transform: `translateY(${scrollOffset * -0.15}px)`,
        }}
      >
        <svg viewBox="0 0 1400 120" className="w-full h-full" preserveAspectRatio="none" fill="none">
          <path
            d="M0 60 C250 15, 450 100, 750 40 C1050 -10, 1250 85, 1400 50 L1400 120 L0 120 Z"
            fill="url(#mistGradTop)"
          />
          <defs>
            <linearGradient id="mistGradTop" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="40%" stopColor="#F4F0E8" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#E8E0D2" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Mid Valley Mist Ribbon (Drifting reverse across midground ridges) */}
      <div
        className="absolute top-[52%] -left-[15%] w-[130%] h-28 sm:h-40 opacity-40 sm:opacity-50 animate-mist-reverse"
        style={{
          transform: `translateY(${scrollOffset * -0.28}px)`,
        }}
      >
        <svg viewBox="0 0 1400 140" className="w-full h-full" preserveAspectRatio="none" fill="none">
          <path
            d="M0 70 C300 100, 500 20, 850 80 C1100 120, 1300 30, 1400 65 L1400 140 L0 140 Z"
            fill="url(#mistGradMid)"
          />
          <defs>
            <linearGradient id="mistGradMid" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="50%" stopColor="#F4F0E8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#F4F0E8" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Low Valley Mist Blanket (Connecting mountain base seamlessly to rice-paper) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 sm:h-56 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #F4F0E8 25%, rgba(244, 240, 232, 0.85) 60%, rgba(244, 240, 232, 0) 100%)',
        }}
      />
    </div>
  );
};
