import React, { useEffect, useState, useRef } from 'react';
import { Wind, Sparkles } from 'lucide-react';

interface ActivePetal {
  id: number;
  x: number; // percentage (0 to 100)
  size: number; // px
  duration: number; // seconds
  swayDuration: number; // seconds
  delay: number; // seconds
  rotation: number;
  opacity: number;
  colorType: 'vermilion' | 'blush' | 'ivory';
}

interface StoredPetal {
  id: number;
  left: number; // 2% to 98%
  bottom: number; // px from ground (0 to 35px)
  rotation: number; // deg (-80 to 80)
  scale: number;
  opacity: number;
  colorType: 'vermilion' | 'blush' | 'ivory';
}

export const GlobalSakuraRain: React.FC = () => {
  const [activePetals, setActivePetals] = useState<ActivePetal[]>([]);
  const [storedPetals, setStoredPetals] = useState<StoredPetal[]>([]);
  const [isBreezeActive, setIsBreezeActive] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);
  const nextPetalId = useRef(100);

  // Initialize petals and check motion preference
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(media.matches);

    // Initial resting petals stored at the bottom
    const initialStored: StoredPetal[] = Array.from({ length: 32 }, (_, i) => ({
      id: i,
      left: Math.random() * 94 + 3,
      bottom: Math.random() * 26 + 4,
      rotation: Math.random() * 140 - 70,
      scale: Math.random() * 0.4 + 0.8,
      opacity: Math.random() * 0.35 + 0.55,
      colorType: Math.random() > 0.4 ? 'vermilion' : Math.random() > 0.5 ? 'blush' : 'ivory',
    }));
    setStoredPetals(initialStored);

    if (media.matches) return;

    // Active falling petals across the page
    const petalCount = window.innerWidth < 768 ? 10 : 20;
    const initialFalling: ActivePetal[] = Array.from({ length: petalCount }, (_, i) => ({
      id: i,
      x: Math.random() * 96 + 2,
      size: Math.random() * 8 + 12,
      duration: Math.random() * 6 + 10,
      swayDuration: Math.random() * 2 + 3.5,
      delay: Math.random() * 10,
      rotation: Math.random() * 360,
      opacity: Math.random() * 0.4 + 0.45,
      colorType: Math.random() > 0.35 ? 'vermilion' : Math.random() > 0.5 ? 'blush' : 'ivory',
    }));
    setActivePetals(initialFalling);

    // Continuous accumulation: As petals fall and reach bottom, store them
    const storeInterval = setInterval(() => {
      setStoredPetals((prev) => {
        if (prev.length >= 80) return prev; // Limit max stored petals for DOM smoothness
        const newPetal: StoredPetal = {
          id: nextPetalId.current++,
          left: Math.random() * 94 + 3,
          bottom: Math.random() * 28 + 4,
          rotation: Math.random() * 160 - 80,
          scale: Math.random() * 0.4 + 0.85,
          opacity: Math.random() * 0.3 + 0.6,
          colorType: Math.random() > 0.4 ? 'vermilion' : 'blush',
        };
        return [...prev, newPetal];
      });
    }, 4500);

    return () => clearInterval(storeInterval);
  }, []);

  // Trigger Spring Breeze: scatters stored petals back into the sky
  const handleScatterBreeze = () => {
    setIsBreezeActive(true);
    setTimeout(() => {
      // Re-scatter stored petals
      setStoredPetals((prev) =>
        prev.map((p) => ({
          ...p,
          left: Math.random() * 94 + 3,
          bottom: Math.random() * 24 + 4,
          rotation: Math.random() * 180 - 90,
        }))
      );
      setIsBreezeActive(false);
    }, 1200);
  };

  // Drop an extra petal manually
  const handleDropPetal = () => {
    const newId = nextPetalId.current++;
    const extraPetal: ActivePetal = {
      id: newId,
      x: Math.random() * 90 + 5,
      size: Math.random() * 6 + 14,
      duration: 8,
      swayDuration: 3,
      delay: 0,
      rotation: Math.random() * 360,
      opacity: 0.85,
      colorType: 'vermilion',
    };
    setActivePetals((prev) => [...prev.slice(-24), extraPetal]);

    // Add to stored ground after falling duration
    setTimeout(() => {
      setStoredPetals((prev) => [
        ...prev,
        {
          id: newId,
          left: extraPetal.x,
          bottom: Math.random() * 24 + 4,
          rotation: Math.random() * 120 - 60,
          scale: 1,
          opacity: 0.85,
          colorType: 'vermilion',
        },
      ]);
    }, 7800);
  };

  const getPetalGradient = (colorType: 'vermilion' | 'blush' | 'ivory', id: number | string) => {
    if (colorType === 'vermilion') {
      return (
        <linearGradient id={`sakuraGrad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="35%" stopColor="#FAF0E6" stopOpacity="0.9" />
          <stop offset="75%" stopColor="#BD493B" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#A83226" stopOpacity="0.88" />
        </linearGradient>
      );
    }
    if (colorType === 'blush') {
      return (
        <linearGradient id={`sakuraGrad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
          <stop offset="40%" stopColor="#FFF2EE" stopOpacity="0.9" />
          <stop offset="85%" stopColor="#E07A6D" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#BD493B" stopOpacity="0.65" />
        </linearGradient>
      );
    }
    return (
      <linearGradient id={`sakuraGrad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
        <stop offset="60%" stopColor="#F4F0E8" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#E8E0D2" stopOpacity="0.7" />
      </linearGradient>
    );
  };

  return (
    <>
      {/* =========================================================================
          FALLING SAKURA RAIN (Drifts continuously across every component)
          ========================================================================= */}
      {!prefersReduced && (
        <div
          className="fixed inset-0 pointer-events-none z-30 overflow-hidden select-none"
          aria-hidden="true"
        >
          {activePetals.map((petal) => (
            <div
              key={petal.id}
              className="absolute -top-10 will-change-transform"
              style={{
                left: `${petal.x}%`,
                animation: `globalSakuraFall ${petal.duration}s linear infinite, globalSakuraSway ${petal.swayDuration}s ease-in-out infinite alternate`,
                animationDelay: `${petal.delay}s`,
                opacity: petal.opacity,
              }}
            >
              <svg
                width={petal.size}
                height={petal.size * 1.3}
                viewBox="0 0 30 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  transform: `rotate(${petal.rotation}deg)`,
                  animation: `globalSakuraSpin ${petal.swayDuration * 1.6}s ease-in-out infinite alternate`,
                }}
              >
                <defs>{getPetalGradient(petal.colorType, petal.id)}</defs>
                {/* Traditional Japanese notched sakura petal silhouette */}
                <path
                  d="M15 2 
                     C10 8, 4 16, 5 26 
                     C6 32, 10 37, 13 38 
                     C14 36.5, 16 36.5, 17 38 
                     C20 37, 24 32, 25 26 
                     C26 16, 20 8, 15 2 Z"
                  fill={`url(#sakuraGrad-${petal.id})`}
                />
                <path
                  d="M15 6 L15 32"
                  stroke="#BD493B"
                  strokeWidth="0.5"
                  strokeOpacity="0.3"
                />
              </svg>
            </div>
          ))}

          {/* Embedded falling keyframes */}
          <style>{`
            @keyframes globalSakuraFall {
              0% {
                top: -6%;
                transform: translateY(0);
              }
              100% {
                top: 104%;
                transform: translateY(105vh);
              }
            }
            @keyframes globalSakuraSway {
              0% {
                transform: translateX(-35px) rotate(0deg);
              }
              50% {
                transform: translateX(40px) rotate(30deg);
              }
              100% {
                transform: translateX(-25px) rotate(-20deg);
              }
            }
            @keyframes globalSakuraSpin {
              0% {
                transform: rotate(0deg) scaleX(1);
              }
              50% {
                transform: rotate(180deg) scaleX(0.75);
              }
              100% {
                transform: rotate(360deg) scaleX(1);
              }
            }
          `}</style>
        </div>
      )}

      {/* =========================================================================
          PETALS STORED AT THE BOTTOM:
          Natural accumulation layer at the base of the page/footer
          ========================================================================= */}
      <div className="relative w-full overflow-hidden bg-[#222421] border-t border-[#FFFFFF]/10 pt-4 pb-6 select-none z-20">
        
        {/* Decorative Ground Line & Zen Rock Shadow */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#141513] to-transparent pointer-events-none" />

        {/* The Bed of Stored Petals resting along the ground */}
        <div className="relative h-14 sm:h-16 w-full max-w-7xl mx-auto px-4 overflow-hidden">
          {storedPetals.map((petal) => (
            <div
              key={petal.id}
              className={`absolute transition-all duration-700 pointer-events-none ${
                isBreezeActive ? 'translate-y-[-60px] opacity-0 rotate-180 scale-125' : ''
              }`}
              style={{
                left: `${petal.left}%`,
                bottom: `${petal.bottom}px`,
                transform: `rotate(${petal.rotation}deg) scale(${petal.scale})`,
                opacity: petal.opacity,
              }}
            >
              <svg width="20" height="26" viewBox="0 0 30 40" fill="none">
                <defs>{getPetalGradient(petal.colorType, `stored-${petal.id}`)}</defs>
                <path
                  d="M15 2 
                     C10 8, 4 16, 5 26 
                     C6 32, 10 37, 13 38 
                     C14 36.5, 16 36.5, 17 38 
                     C20 37, 24 32, 25 26 
                     C26 16, 20 8, 15 2 Z"
                  fill={`url(#sakuraGrad-stored-${petal.id})`}
                />
              </svg>
            </div>
          ))}
        </div>

        {/* Interactive Bottom Petal Status & Controls */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#F4F0E8]/70">
          
          {/* Petal Count Status Badge */}
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#BD493B] animate-pulse" />
            <span className="font-serif italic text-sm text-[#F4F0E8]">
              Sakura Bed &bull;
            </span>
            <span className="font-mono text-[#BD493B] font-semibold">
              {storedPetals.length} Petals Stored at Bottom
            </span>
          </div>

          {/* Interactive Actions */}
          <div className="flex items-center space-x-2.5">
            <button
              onClick={handleDropPetal}
              className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/15 text-[#F4F0E8] border border-[#FFFFFF]/15 transition-all text-xs font-medium cursor-pointer active:scale-95"
              title="Release a new blossom petal to fall from top"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#BD493B]" />
              <span>Release Blossom</span>
            </button>

            <button
              onClick={handleScatterBreeze}
              className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-[#BD493B]/20 hover:bg-[#BD493B]/30 text-[#F4F0E8] border border-[#BD493B]/40 transition-all text-xs font-medium cursor-pointer active:scale-95"
              title="Gently scatter the fallen petals with a spring breeze"
            >
              <Wind className="w-3.5 h-3.5 text-[#BD493B]" />
              <span>Gently Scatter</span>
            </button>
          </div>

        </div>

      </div>
    </>
  );
};
