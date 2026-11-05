import React, { useEffect, useState } from 'react';
import { Moon } from './Moon.tsx';
import { MountainLayers } from './MountainLayers.tsx';
import { MistLayers } from './MistLayers.tsx';
import { SakuraPetals } from './SakuraPetals.tsx';

interface MoonlitMountainLandscapeProps {
  className?: string;
}

export const MoonlitMountainLandscape: React.FC<MoonlitMountainLandscapeProps> = ({
  className = '',
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Passive scroll tracking capped to hero height zone
      const y = window.scrollY;
      if (y < 1200) {
        setScrollY(y);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax translation for the luminous moon (moves very slowly to create extreme cosmic distance)
  const moonParallaxY = scrollY * 0.08;
  const moonParallaxX = scrollY * 0.02;

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {/* Soft atmospheric nightfall haze gradient across the rice paper */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 65% 25%, rgba(255, 253, 247, 0.8) 0%, rgba(244, 240, 232, 0.4) 45%, rgba(232, 224, 210, 0.25) 75%, transparent 100%)',
        }}
      />

      {/* Luminous Full Moon positioned behind Mount Fuji's majestic shoulder */}
      <div
        className="absolute top-[8%] sm:top-[6%] right-[14%] sm:right-[22%] md:right-[26%] will-change-transform transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${moonParallaxX}px, ${moonParallaxY}px)`,
        }}
      >
        <Moon />
      </div>

      {/* Atmospheric Mist Drift - Back Layer */}
      <MistLayers scrollOffset={scrollY} />

      {/* Multi-layered Japanese Sumi Ink Mountain Silhouettes including Mount Fuji */}
      <MountainLayers scrollY={scrollY} />

      {/* Drifting Sakura Cherry Blossom Petals */}
      <SakuraPetals />

      {/* Seamless Rice Paper Fog Blend: Softly fades mountain foothills into page background */}
      <div
        className="absolute bottom-0 inset-x-0 h-36 sm:h-48 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(244, 240, 232, 0.6) 40%, #F4F0E8 95%)',
        }}
      />
    </div>
  );
};
