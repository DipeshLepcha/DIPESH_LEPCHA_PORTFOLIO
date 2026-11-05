import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ScrollProgressBar: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    // Initialize progress bar scale to 0 from the left
    gsap.set(bar, { scaleX: 0, transformOrigin: 'left center' });

    // GSAP ScrollTrigger to track the entire document scroll progress
    const trigger = ScrollTrigger.create({
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(bar, {
          scaleX: progress,
          duration: 0.1,
          ease: 'none',
          overwrite: 'auto',
        });
        setProgressPercent(Math.round(progress * 100));
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent pointer-events-none"
      role="progressbar"
      aria-label="Reading progress through portfolio"
      aria-valuenow={progressPercent}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* Subtle background rail */}
      <div className="absolute inset-0 bg-[#222421]/10 opacity-30" />

      {/* Elegant GSAP-animated indicator using Japanese Ink & Vermilion palette */}
      <div
        ref={barRef}
        className="h-full w-full bg-gradient-to-r from-[#222421] via-[#BD493B] to-[#D85A4B] shadow-[0_1px_8px_rgba(189,73,59,0.65)]"
      />
    </div>
  );
};
