import React, { useEffect, useState } from 'react';

interface PetalConfig {
  id: number;
  left: number; // percentage (0 to 100)
  size: number; // width in px
  delay: number; // seconds
  duration: number; // seconds
  swayDuration: number; // seconds
  opacity: number;
  rotation: number; // initial deg
}

export const SakuraPetals: React.FC = () => {
  const [petals, setPetals] = useState<PetalConfig[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(media.matches);

    const count = window.innerWidth < 768 ? 8 : 16;
    const generated: PetalConfig[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 95,
      size: Math.random() * 8 + 10, // 10px to 18px
      delay: Math.random() * 8,
      duration: Math.random() * 6 + 10, // 10s to 16s fall
      swayDuration: Math.random() * 2 + 3.5, // 3.5s to 5.5s sway
      opacity: Math.random() * 0.4 + 0.35, // 0.35 to 0.75
      rotation: Math.random() * 360,
    }));

    setPetals(generated);
  }, []);

  if (reducedMotion) {
    // Beautiful static composition: a few petals softly resting in the upper and lower corners
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <svg
          className="absolute top-16 left-[18%] w-4 h-4 opacity-40 rotate-12"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2 C8 6, 4 12, 6 18 C8 22, 16 22, 18 18 C20 12, 16 6, 12 2 Z"
            fill="#BD493B"
            fillOpacity="0.5"
          />
        </svg>
        <svg
          className="absolute top-44 right-[25%] w-3.5 h-3.5 opacity-50 -rotate-45"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2 C8 6, 4 12, 6 18 C8 22, 16 22, 18 18 C20 12, 16 6, 12 2 Z"
            fill="#BD493B"
            fillOpacity="0.4"
          />
        </svg>
        <svg
          className="absolute bottom-28 left-[35%] w-4 h-4 opacity-35 rotate-75"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2 C8 6, 4 12, 6 18 C8 22, 16 22, 18 18 C20 12, 16 6, 12 2 Z"
            fill="#BD493B"
            fillOpacity="0.45"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute -top-8 will-change-transform"
          style={{
            left: `${petal.left}%`,
            animation: `sakuraFall ${petal.duration}s linear infinite, sakuraSway ${petal.swayDuration}s ease-in-out infinite alternate`,
            animationDelay: `${petal.delay}s`,
            opacity: petal.opacity,
          }}
        >
          {/* Authentic notched sakura petal SVG */}
          <svg
            width={petal.size}
            height={petal.size * 1.3}
            viewBox="0 0 30 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: `rotate(${petal.rotation}deg)`,
              animation: `sakuraSpin ${petal.swayDuration * 1.5}s ease-in-out infinite alternate`,
            }}
          >
            <defs>
              <linearGradient id={`petalGrad-${petal.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="35%" stopColor="#FAF4EB" stopOpacity="0.85" />
                <stop offset="80%" stopColor="#BD493B" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#BD493B" stopOpacity="0.85" />
              </linearGradient>
            </defs>
            {/* Sakura petal silhouette with distinctive tip notch */}
            <path
              d="M15 2 
                 C10 8, 4 16, 5 26 
                 C6 32, 10 37, 13 38 
                 C14 36.5, 16 36.5, 17 38 
                 C20 37, 24 32, 25 26 
                 C26 16, 20 8, 15 2 Z"
              fill={`url(#petalGrad-${petal.id})`}
            />
            {/* Delicate central petal vein */}
            <path
              d="M15 6 L15 32"
              stroke="#BD493B"
              strokeWidth="0.5"
              strokeOpacity="0.35"
            />
          </svg>
        </div>
      ))}

      {/* Embedded CSS keyframes for organic petal physics */}
      <style>{`
        @keyframes sakuraFall {
          0% {
            top: -5%;
            transform: translateY(0);
          }
          100% {
            top: 105%;
            transform: translateY(100vh);
          }
        }
        @keyframes sakuraSway {
          0% {
            transform: translateX(-24px) rotate(0deg);
          }
          50% {
            transform: translateX(28px) rotate(25deg);
          }
          100% {
            transform: translateX(-16px) rotate(-15deg);
          }
        }
        @keyframes sakuraSpin {
          0% {
            transform: rotate(0deg) scaleX(1);
          }
          50% {
            transform: rotate(180deg) scaleX(0.7);
          }
          100% {
            transform: rotate(360deg) scaleX(1);
          }
        }
      `}</style>
    </div>
  );
};
