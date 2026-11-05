import React from 'react';

interface MoonProps {
  className?: string;
}

export const Moon: React.FC<MoonProps> = ({ className = '' }) => {
  return (
    <div className={`relative pointer-events-none select-none ${className}`}>
      {/* Outer Atmospheric Moon Halo (Soft radial glow on rice-paper) */}
      <div
        className="absolute -inset-16 sm:-inset-24 rounded-full opacity-60 mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 252, 244, 0.45) 0%, rgba(244, 240, 232, 0.25) 40%, rgba(232, 224, 210, 0.1) 65%, transparent 80%)',
          filter: 'blur(16px)',
        }}
      />

      {/* Mid Atmospheric Corona */}
      <div
        className="absolute -inset-8 sm:-inset-10 rounded-full opacity-70 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.75) 10%, rgba(244, 240, 232, 0.4) 55%, transparent 75%)',
          filter: 'blur(8px)',
        }}
      />

      {/* Primary Luminous Moon Disc with Traditional Ink-Wash Texture */}
      <svg
        viewBox="0 0 200 200"
        className="w-28 h-28 sm:w-40 sm:h-40 md:w-52 md:h-52 drop-shadow-[0_4px_24px_rgba(244,240,232,0.6)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Luminous Ivory Moon Gradient */}
          <radialGradient id="moonGlowGrad" cx="38%" cy="38%" r="62%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#FAF6EE" />
            <stop offset="85%" stopColor="#EFE8D8" />
            <stop offset="100%" stopColor="#E2D9C6" />
          </radialGradient>

          {/* Subtle Sumi Ink Mare / Moon Texture Wash */}
          <linearGradient id="moonWashGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#343630" stopOpacity="0.02" />
            <stop offset="60%" stopColor="#817865" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#222421" stopOpacity="0.05" />
          </linearGradient>

          <filter id="moonSoftHaze" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Moon Disc */}
        <circle
          cx="100"
          cy="100"
          r="94"
          fill="url(#moonGlowGrad)"
          filter="url(#moonSoftHaze)"
        />

        {/* Soft Sumi-e Cloud/Mare shading across the moon surface */}
        <path
          d="M60 70 C75 55, 110 50, 130 65 C145 76, 155 95, 145 115 C132 135, 100 145, 78 135 C58 126, 48 100, 54 85 Z"
          fill="url(#moonWashGrad)"
        />
        <path
          d="M85 110 C95 105, 120 115, 135 125 C140 130, 128 145, 110 148 C90 150, 75 138, 80 120 Z"
          fill="#817865"
          fillOpacity="0.05"
        />

        {/* Delicate Golden Vermilion Halo Rim (Subtle Japanese seal resonance) */}
        <circle
          cx="100"
          cy="100"
          r="95"
          stroke="#BD493B"
          strokeWidth="0.75"
          strokeOpacity="0.18"
          strokeDasharray="4 8"
        />
      </svg>
    </div>
  );
};
