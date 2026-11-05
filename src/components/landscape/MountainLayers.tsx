import React from 'react';

interface MountainLayersProps {
  scrollY?: number;
  className?: string;
}

export const MountainLayers: React.FC<MountainLayersProps> = ({ scrollY = 0, className = '' }) => {
  // Parallax offsets (restrained, fluid)
  const distantY = scrollY * 0.12;
  const fujiY = scrollY * 0.22;
  const midgroundY = scrollY * 0.38;
  const foregroundY = scrollY * 0.52;
  const branchY = scrollY * 0.08;

  return (
    <div className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}>
      
      {/* =========================================================================
          LAYER 1: Distant Misty Mountain Ridge (Muted Stone Beige)
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
            fill="url(#distantRidgeGrad)"
          />
          <defs>
            <linearGradient id="distantRidgeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#817865" stopOpacity="0.18" />
              <stop offset="50%" stopColor="#A89F8B" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#E8E0D2" stopOpacity="0.45" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* =========================================================================
          LAYER 2: Majestic Mount Fuji (Iconic Conical Symmetrical Silhouette)
          Snow-capped summit with ivory highlights and soft ink-wash body
          ========================================================================= */}
      <div
        className="absolute inset-x-0 bottom-0 h-[78%] sm:h-[82%] transition-transform duration-75 ease-out will-change-transform"
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
            {/* Mt Fuji Ink Shading */}
            <linearGradient id="fujiInkGrad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#343630" stopOpacity="0.75" />
              <stop offset="40%" stopColor="#343630" stopOpacity="0.6" />
              <stop offset="75%" stopColor="#817865" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#F4F0E8" stopOpacity="0.2" />
            </linearGradient>

            {/* Snow Cap Ivory Gradient */}
            <linearGradient id="fujiSnowGrad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#F4F0E8" stopOpacity="0.88" />
              <stop offset="100%" stopColor="#E8E0D2" stopOpacity="0.3" />
            </linearGradient>

            {/* Sumi-e brush strokes mask for snow crown */}
            <linearGradient id="snowGorgeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#222421" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#343630" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          {/* Fuji Mountain Body: Center at x=720, Peak at y=170 */}
          <path
            d="M 280 650 
               C 420 540, 560 410, 660 190 
               C 675 168, 705 162, 720 162 
               C 735 162, 765 168, 780 190 
               C 880 410, 1020 540, 1160 650 
               L 1440 680 L 1440 700 L 0 700 L 0 680 Z"
            fill="url(#fujiInkGrad)"
          />

          {/* Fuji Snow Cap: Elegant jagged snow tongues descending down the gullies */}
          <path
            d="M 660 190 
               C 675 168, 705 162, 720 162 
               C 735 162, 765 168, 780 190 
               C 795 220, 810 250, 825 285 
               L 805 275 L 795 305 L 780 280 L 765 315 L 750 285 L 735 320 
               L 720 290 L 705 320 L 690 285 L 675 310 L 660 275 L 640 295 L 630 270 
               C 645 235, 652 210, 660 190 Z"
            fill="url(#fujiSnowGrad)"
          />

          {/* Delicate Sumi-e Vertical Gorge Crevasses along Fuji's slope */}
          <path
            d="M 720 165 L 718 240 L 710 330 
               M 700 180 L 685 260 L 670 340 
               M 740 180 L 755 260 L 770 340 
               M 678 220 L 650 310 
               M 762 220 L 790 310"
            stroke="url(#snowGorgeGrad)"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeDasharray="20 4 8 3"
            opacity="0.35"
          />

          {/* Muted Ivory Peak Rim Highlight */}
          <path
            d="M 685 166 C 705 162, 735 162, 755 166"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* =========================================================================
          LAYER 3: Midground Mountain Ridges & Pine Foothills (Charcoal #343630)
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
            fill="url(#midRidgeGrad)"
          />
          <defs>
            <linearGradient id="midRidgeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#343630" stopOpacity="0.55" />
              <stop offset="40%" stopColor="#343630" stopOpacity="0.45" />
              <stop offset="85%" stopColor="#817865" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#F4F0E8" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Subtle Pine Silhouette Ridges across the mid hills */}
          <g opacity="0.35" stroke="#222421" strokeWidth="1.2">
            {/* Clustered tiny pine tree triangles on the ridge peaks */}
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
            fill="url(#foregroundRidgeGrad)"
          />
          <defs>
            <linearGradient id="foregroundRidgeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#222421" stopOpacity="0.75" />
              <stop offset="45%" stopColor="#222421" stopOpacity="0.6" />
              <stop offset="85%" stopColor="#343630" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#F4F0E8" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Ink brush detail lines on foreground ridge */}
          <path
            d="M 80 215 C 200 185, 320 230, 440 190 M 700 200 C 820 165, 960 210, 1100 175"
            stroke="#BD493B"
            strokeWidth="0.8"
            strokeOpacity="0.25"
            strokeDasharray="6 8"
          />
        </svg>
      </div>

      {/* =========================================================================
          LAYER 5: Delicate Cherry Blossom (Sakura) Branch Silhouette
          Overhanging gracefully from top-right corner, framing the moon and mountain
          ========================================================================= */}
      <div
        className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-56 sm:h-72 pointer-events-none opacity-85 transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${branchY}px)` }}
      >
        <svg
          viewBox="0 0 400 300"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Gnarled Branch (Sumi Ink) */}
          <path
            d="M 400 20 
               C 340 35, 290 30, 240 70 
               C 200 100, 170 95, 120 140 
               C 90 170, 60 180, 20 210"
            stroke="#222421"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Sub-branches */}
          <path
            d="M 280 45 C 240 40, 200 70, 170 60
               M 210 85 C 190 120, 150 130, 130 165
               M 140 125 C 110 110, 90 130, 70 120
               M 320 32 C 300 15, 260 20, 230 10"
            stroke="#222421"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M 160 145 C 140 170, 110 185, 90 220
               M 100 155 C 80 150, 60 170, 40 160"
            stroke="#343630"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Sakura Blossoms & Buds with Vermilion-Blush Accents */}
          {/* Cluster 1 */}
          <circle cx="120" cy="140" r="5" fill="#BD493B" fillOpacity="0.7" />
          <circle cx="115" cy="135" r="4.5" fill="#FFFDF8" fillOpacity="0.9" />
          <circle cx="125" cy="135" r="4.5" fill="#FFFDF8" fillOpacity="0.9" />
          <circle cx="117" cy="145" r="4" fill="#F4F0E8" fillOpacity="0.85" />
          <circle cx="126" cy="144" r="4" fill="#F4F0E8" fillOpacity="0.85" />
          <circle cx="120" cy="140" r="1.5" fill="#BD493B" />

          {/* Cluster 2 */}
          <circle cx="170" cy="62" r="5" fill="#BD493B" fillOpacity="0.65" />
          <circle cx="165" cy="58" r="4" fill="#FFFDF8" fillOpacity="0.9" />
          <circle cx="175" cy="58" r="4" fill="#FFFDF8" fillOpacity="0.9" />
          <circle cx="168" cy="67" r="4" fill="#F4F0E8" fillOpacity="0.85" />
          <circle cx="170" cy="62" r="1.5" fill="#BD493B" />

          {/* Cluster 3 (Near moon frame) */}
          <circle cx="210" cy="85" r="6" fill="#BD493B" fillOpacity="0.75" />
          <circle cx="204" cy="80" r="5" fill="#FFFDF8" fillOpacity="0.95" />
          <circle cx="216" cy="80" r="5" fill="#FFFDF8" fillOpacity="0.95" />
          <circle cx="206" cy="91" r="5" fill="#F4F0E8" fillOpacity="0.9" />
          <circle cx="216" cy="91" r="5" fill="#F4F0E8" fillOpacity="0.9" />
          <circle cx="210" cy="85" r="1.8" fill="#BD493B" />

          {/* Cluster 4 */}
          <circle cx="70" cy="120" r="4.5" fill="#BD493B" fillOpacity="0.6" />
          <circle cx="66" cy="116" r="3.5" fill="#FFFDF8" fillOpacity="0.9" />
          <circle cx="74" cy="116" r="3.5" fill="#FFFDF8" fillOpacity="0.9" />
          <circle cx="70" cy="120" r="1.2" fill="#BD493B" />

          {/* Cluster 5 */}
          <circle cx="240" cy="70" r="5" fill="#BD493B" fillOpacity="0.7" />
          <circle cx="235" cy="66" r="4" fill="#FFFDF8" fillOpacity="0.95" />
          <circle cx="245" cy="66" r="4" fill="#FFFDF8" fillOpacity="0.95" />
          <circle cx="240" cy="70" r="1.5" fill="#BD493B" />

          {/* Cluster 6 near edge */}
          <circle cx="30" cy="205" r="4" fill="#BD493B" fillOpacity="0.55" />
          <circle cx="27" cy="202" r="3.5" fill="#FFFDF8" fillOpacity="0.85" />
          <circle cx="33" cy="202" r="3.5" fill="#FFFDF8" fillOpacity="0.85" />

          {/* Fresh Sakura Buds */}
          <ellipse cx="145" cy="110" rx="2.5" ry="4" transform="rotate(-30 145 110)" fill="#BD493B" fillOpacity="0.8" />
          <ellipse cx="185" cy="75" rx="2.5" ry="4" transform="rotate(25 185 75)" fill="#BD493B" fillOpacity="0.8" />
          <ellipse cx="260" cy="40" rx="3" ry="5" transform="rotate(-15 260 40)" fill="#BD493B" fillOpacity="0.8" />
          <ellipse cx="85" cy="175" rx="2" ry="3.5" transform="rotate(45 85 175)" fill="#BD493B" fillOpacity="0.75" />
        </svg>
      </div>

    </div>
  );
};
