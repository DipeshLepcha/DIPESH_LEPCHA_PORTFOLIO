import React, { useEffect, useState } from 'react';
import fujiRedMoonImg from '../assets/images/fuji_red_moon_1792145160786.jpg';

interface JapaneseMountainLandscapeProps {
  className?: string;
  defaultMood?: 'red' | 'ivory';
}

export const JapaneseMountainLandscape: React.FC<JapaneseMountainLandscapeProps> = ({
  className = '',
  defaultMood = 'red',
}) => {
  const [scrollY, setScrollY] = useState(0);
  const isRedMood = defaultMood === 'red';

  useEffect(() => {
    const handleScroll = () => {
      // Passive scroll tracking capped to hero height zone for optimal performance
      const y = window.scrollY;
      if (y < 1200) {
        setScrollY(y);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax translation factors for different depth layers
  const distantY = scrollY * 0.12;
  const fujiY = scrollY * 0.22;
  const midgroundY = scrollY * 0.38;
  const foregroundY = scrollY * 0.55;
  const branchY = scrollY * 0.07;

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {/* =========================================================================
          BACKGROUND ARTWORK TEXTURE: Authentic Sumi-e Mount Fuji & Red Moon Art
          ========================================================================= */}
      <div
        className="absolute inset-0 transition-opacity duration-700 ease-in-out pointer-events-none"
        style={{
          opacity: isRedMood ? 0.32 : 0.18,
          mixBlendMode: 'multiply',
          transform: `scale(1.05) translateY(${scrollY * 0.05}px)`,
        }}
      >
        <img
          src={fujiRedMoonImg}
          alt=""
          className="w-full h-full object-cover object-center filter contrast-110 saturate-125"
          loading="eager"
        />
        {/* Soft rice-paper overlay gradient blending image into base */}
        <div
          className="absolute inset-0"
          style={{
            background: isRedMood
              ? 'radial-gradient(ellipse at 35% 25%, rgba(189, 73, 59, 0.2) 0%, rgba(244, 240, 232, 0.5) 45%, #F4F0E8 85%)'
              : 'radial-gradient(ellipse at 70% 25%, rgba(255, 253, 247, 0.6) 0%, rgba(244, 240, 232, 0.5) 45%, #F4F0E8 85%)',
          }}
        />
      </div>

      {/* =========================================================================
          DRIFT-MIST LAYER 1 (High Altitude Mist drifting behind Mount Fuji)
          ========================================================================= */}
      <div
        className="absolute top-[28%] sm:top-[30%] -left-[10%] w-[120%] h-28 sm:h-36 opacity-40 sm:opacity-50 animate-mist-slow pointer-events-none"
        style={{
          transform: `translateY(${scrollY * -0.12}px)`,
        }}
      >
        <svg viewBox="0 0 1400 120" className="w-full h-full" preserveAspectRatio="none" fill="none">
          <path
            d="M0 60 C250 15, 450 100, 750 40 C1050 -10, 1250 85, 1400 50 L1400 120 L0 120 Z"
            fill="url(#mistGrad1)"
          />
          <defs>
            <linearGradient id="mistGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="45%" stopColor={isRedMood ? "#F8EAE6" : "#F4F0E8"} stopOpacity="0.8" />
              <stop offset="100%" stopColor="#E8E0D2" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* =========================================================================
          LAYER 1: Distant Misty Mountain Ridge (Stone Beige)
          ========================================================================= */}
      <div
        className="absolute inset-x-0 bottom-0 h-[68%] transition-transform duration-75 ease-out will-change-transform"
        style={{ transform: `translateY(${distantY}px)` }}
      >
        <svg
          viewBox="0 0 1440 600"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 420 
               C180 380, 280 430, 440 370 
               C580 310, 720 390, 890 340 
               C1040 290, 1200 370, 1440 310 
               L1440 600 L0 600 Z"
            fill="url(#fujiDistantGrad)"
          />
          <defs>
            <linearGradient id="fujiDistantGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#817865" stopOpacity="0.22" />
              <stop offset="50%" stopColor="#A89F8B" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#E8E0D2" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* =========================================================================
          LAYER 2: Majestic Mount Fuji Silhouette (Central Feature)
          Snow-capped summit with ivory highlights and sumi ink wash slope
          ========================================================================= */}
      <div
        className="absolute inset-x-0 bottom-0 h-[78%] sm:h-[84%] transition-transform duration-75 ease-out will-change-transform"
        style={{ transform: `translateY(${fujiY}px)` }}
      >
        <svg
          viewBox="0 0 1440 700"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Fuji Ink Slope Gradient */}
            <linearGradient id="mainFujiGrad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#343630" stopOpacity="0.82" />
              <stop offset="35%" stopColor="#343630" stopOpacity="0.7" />
              <stop offset="70%" stopColor="#817865" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#F4F0E8" stopOpacity="0.2" />
            </linearGradient>

            {/* Snow Cap Gradient */}
            <linearGradient id="mainSnowGrad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.96" />
              <stop offset="60%" stopColor="#F4F0E8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#E8E0D2" stopOpacity="0.35" />
            </linearGradient>

            {/* Crevasse Shader */}
            <linearGradient id="fujiCrevasseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#222421" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#343630" stopOpacity="0.6" />
            </linearGradient>
          </defs>

          {/* Fuji Mountain Silhouette Body: Conical graceful slope centered at x=720 */}
          <path
            d="M 280 650 
               C 420 540, 560 410, 660 190 
               C 675 168, 705 162, 720 162 
               C 735 162, 765 168, 780 190 
               C 880 410, 1020 540, 1160 650 
               L 1440 680 L 1440 700 L 0 700 L 0 680 Z"
            fill="url(#mainFujiGrad)"
          />

          {/* Snow Summit Crown with cascading icy ravines */}
          <path
            d="M 660 190 
               C 675 168, 705 162, 720 162 
               C 735 162, 765 168, 780 190 
               C 795 220, 810 250, 825 285 
               L 805 275 L 795 305 L 780 280 L 765 315 L 750 285 L 735 320 
               L 720 290 L 705 320 L 690 285 L 675 310 L 660 275 L 640 295 L 630 270 
               C 645 235, 652 210, 660 190 Z"
            fill="url(#mainSnowGrad)"
          />

          {/* Sumi-e Vertical Crevasses down Fuji's snow gorges */}
          <path
            d="M 720 165 L 718 240 L 710 330 
               M 700 180 L 685 260 L 670 340 
               M 740 180 L 755 260 L 770 340 
               M 678 220 L 650 310 
               M 762 220 L 790 310"
            stroke="url(#fujiCrevasseGrad)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeDasharray="20 4 8 3"
            opacity="0.4"
          />

          {/* Peak Rim Highlight */}
          <path
            d="M 685 166 C 705 162, 735 162, 755 166"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.95"
          />
        </svg>
      </div>

      {/* =========================================================================
          DRIFT-MIST LAYER 2 (Mid-Valley Ribbon drifting across Fuji base)
          ========================================================================= */}
      <div
        className="absolute top-[48%] sm:top-[52%] -left-[15%] w-[130%] h-32 sm:h-44 opacity-45 sm:opacity-55 animate-mist-reverse pointer-events-none"
        style={{
          transform: `translateY(${scrollY * -0.25}px)`,
        }}
      >
        <svg viewBox="0 0 1400 140" className="w-full h-full" preserveAspectRatio="none" fill="none">
          <path
            d="M0 70 C300 100, 500 20, 850 80 C1100 120, 1300 30, 1400 65 L1400 140 L0 140 Z"
            fill="url(#mistGrad2)"
          />
          <defs>
            <linearGradient id="mistGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="50%" stopColor={isRedMood ? "#F9ECE8" : "#F4F0E8"} stopOpacity="0.88" />
              <stop offset="100%" stopColor="#F4F0E8" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* =========================================================================
          LAYER 3: Midground Mountain Ridges with Pine Shading (Charcoal #343630)
          ========================================================================= */}
      <div
        className="absolute inset-x-0 bottom-0 h-[58%] sm:h-[62%] transition-transform duration-75 ease-out will-change-transform"
        style={{ transform: `translateY(${midgroundY}px)` }}
      >
        <svg
          viewBox="0 0 1440 500"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0 350 
               C 120 310, 220 340, 340 280 
               C 440 230, 520 290, 620 260 
               C 740 220, 840 280, 960 240 
               C 1080 200, 1180 270, 1310 230 
               C 1370 210, 1410 230, 1440 220 
               L 1440 500 L 0 500 Z"
            fill="url(#fujiMidRidgeGrad)"
          />
          <defs>
            <linearGradient id="fujiMidRidgeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#343630" stopOpacity="0.6" />
              <stop offset="40%" stopColor="#343630" stopOpacity="0.48" />
              <stop offset="85%" stopColor="#817865" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#F4F0E8" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Clustered Pine Tree Silhouettes */}
          <g opacity="0.35" stroke="#222421" strokeWidth="1.2">
            <path d="M 335 282 L 340 272 L 345 282 M 344 283 L 348 275 L 352 283 M 615 262 L 620 252 L 625 262 M 955 242 L 960 232 L 965 242 M 1305 232 L 1310 222 L 1315 232" />
          </g>
        </svg>
      </div>

      {/* =========================================================================
          LAYER 4: Foreground Japanese Ink Ridge (Deep Ink Black #222421)
          ========================================================================= */}
      <div
        className="absolute inset-x-0 bottom-0 h-[38%] sm:h-[42%] transition-transform duration-75 ease-out will-change-transform"
        style={{ transform: `translateY(${foregroundY}px)` }}
      >
        <svg
          viewBox="0 0 1440 380"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0 220 
               C 160 180, 260 240, 420 190 
               C 560 150, 680 230, 840 180 
               C 990 140, 1140 220, 1300 170 
               C 1380 150, 1410 180, 1440 160 
               L 1440 380 L 0 380 Z"
            fill="url(#fujiForegroundGrad)"
          />
          <defs>
            <linearGradient id="fujiForegroundGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#222421" stopOpacity="0.8" />
              <stop offset="45%" stopColor="#222421" stopOpacity="0.65" />
              <stop offset="85%" stopColor="#343630" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#F4F0E8" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Ink Brush Accent Highlights */}
          <path
            d="M 80 215 C 200 185, 320 230, 440 190 M 700 200 C 820 165, 960 210, 1100 175"
            stroke="#BD493B"
            strokeWidth="0.8"
            strokeOpacity="0.3"
            strokeDasharray="6 8"
          />
        </svg>
      </div>

      {/* =========================================================================
          LAYER 5: Cherry Blossom (Sakura) Branch Frame
          ========================================================================= */}
      <div
        className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-56 sm:h-72 pointer-events-none opacity-90 transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${branchY}px)` }}
      >
        <svg
          viewBox="0 0 400 300"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Gnarled Branch */}
          <path
            d="M 400 20 
               C 340 35, 290 30, 240 70 
               C 200 100, 170 95, 120 140 
               C 90 170, 60 180, 20 210"
            stroke="#222421"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M 280 45 C 240 40, 200 70, 170 60
               M 210 85 C 190 120, 150 130, 130 165
               M 140 125 C 110 110, 90 130, 70 120"
            stroke="#222421"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Blossoms with Vermilion Red / Blush Core */}
          <circle cx="120" cy="140" r="5.5" fill="#BD493B" fillOpacity="0.75" />
          <circle cx="115" cy="135" r="4.5" fill="#FFFDF8" fillOpacity="0.95" />
          <circle cx="125" cy="135" r="4.5" fill="#FFFDF8" fillOpacity="0.95" />
          <circle cx="117" cy="145" r="4" fill="#F4F0E8" fillOpacity="0.85" />
          <circle cx="126" cy="144" r="4" fill="#F4F0E8" fillOpacity="0.85" />
          <circle cx="120" cy="140" r="1.5" fill="#BD493B" />

          <circle cx="210" cy="85" r="6" fill="#BD493B" fillOpacity="0.8" />
          <circle cx="204" cy="80" r="5" fill="#FFFDF8" fillOpacity="0.95" />
          <circle cx="216" cy="80" r="5" fill="#FFFDF8" fillOpacity="0.95" />
          <circle cx="206" cy="91" r="5" fill="#F4F0E8" fillOpacity="0.9" />
          <circle cx="216" cy="91" r="5" fill="#F4F0E8" fillOpacity="0.9" />
          <circle cx="210" cy="85" r="1.8" fill="#BD493B" />

          <circle cx="170" cy="62" r="5" fill="#BD493B" fillOpacity="0.7" />
          <circle cx="165" cy="58" r="4" fill="#FFFDF8" fillOpacity="0.9" />
          <circle cx="175" cy="58" r="4" fill="#FFFDF8" fillOpacity="0.9" />
          <circle cx="170" cy="62" r="1.5" fill="#BD493B" />
        </svg>
      </div>

      {/* Seamless Fog Blend into page background */}
      <div
        className="absolute bottom-0 inset-x-0 h-36 sm:h-48 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(244, 240, 232, 0.6) 40%, #F4F0E8 95%)',
        }}
      />
    </div>
  );
};
