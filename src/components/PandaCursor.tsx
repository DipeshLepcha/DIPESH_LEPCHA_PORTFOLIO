import React, { useEffect, useState, useRef } from 'react';
import { computePandaDirection } from '../utils/portfolio-logic.ts';

interface PandaCursorProps {
  enabled: boolean;
}

export const PandaCursor: React.FC<PandaCursorProps> = ({ enabled }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [facing, setFacing] = useState<'left' | 'right'>('right');
  const [isMoving, setIsMoving] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const targetRef = useRef({ x: -100, y: -100 });
  const currentPosRef = useRef({ x: -100, y: -100 });
  const animationFrameRef = useRef<number | null>(null);
  const stopTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Check if touch device or screen < 768px or prefers reduced motion
    const touchQuery = window.matchMedia('(pointer: coarse)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (touchQuery.matches || window.innerWidth < 768 || motionQuery.matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Offset slightly so cursor is always clearly visible and not occluded
      targetRef.current = { x: e.clientX + 16, y: e.clientY + 16 };
      setIsMoving(true);

      if (stopTimeoutRef.current) {
        clearTimeout(stopTimeoutRef.current);
      }
      stopTimeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 150);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Smooth lerp animation loop
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const updateLoop = () => {
      const curX = currentPosRef.current.x;
      const curY = currentPosRef.current.y;
      const targetX = targetRef.current.x;
      const targetY = targetRef.current.y;

      const nextX = lerp(curX, targetX, 0.12);
      const nextY = lerp(curY, targetY, 0.12);

      const dir = computePandaDirection(nextX, curX, 1);
      if (dir === 'left' || dir === 'right') {
        setFacing(dir);
      }

      currentPosRef.current = { x: nextX, y: nextY };
      setPosition({ x: nextX, y: nextY });

      animationFrameRef.current = requestAnimationFrame(updateLoop);
    };

    animationFrameRef.current = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (stopTimeoutRef.current) clearTimeout(stopTimeoutRef.current);
    };
  }, []);

  if (!enabled || isTouchDevice || position.x < 0) {
    return null;
  }

  return (
    <div
      className="fixed pointer-events-none z-30 transition-transform duration-75 select-none"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        left: 0,
        top: 0,
      }}
      aria-hidden="true"
    >
      <div
        className={`w-9 h-9 transition-transform duration-150 ${
          facing === 'left' ? '-scale-x-100' : 'scale-x-100'
        } ${isMoving ? 'animate-bounce' : ''}`}
        style={{ animationDuration: '0.4s' }}
      >
        {/* Full-body Kung-Fu Panda SVG Character */}
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          {/* Panda Ears */}
          <circle cx="20" cy="18" r="7" fill="#18352B" />
          <circle cx="44" cy="18" r="7" fill="#18352B" />
          <circle cx="20" cy="18" r="3.5" fill="#B69A61" />
          <circle cx="44" cy="18" r="3.5" fill="#B69A61" />

          {/* Panda Kung-Fu Red/Gold Headband */}
          <rect x="16" y="24" width="32" height="5" rx="2" fill="#B69A61" />
          {/* Headband ribbon tails trailing */}
          <path d="M16 26 L8 28 L14 31 Z" fill="#B69A61" />

          {/* Panda Head */}
          <circle cx="32" cy="28" r="14" fill="#FFFFFF" stroke="#18352B" strokeWidth="1.5" />

          {/* Eye Patches */}
          <ellipse cx="27" cy="28" rx="4" ry="4.5" fill="#18352B" />
          <ellipse cx="37" cy="28" rx="4" ry="4.5" fill="#18352B" />

          {/* Eyes (Kung-Fu Determined Gaze) */}
          <circle cx="28" cy="27.5" r="1.5" fill="#FFFFFF" />
          <circle cx="38" cy="27.5" r="1.5" fill="#FFFFFF" />
          <circle cx="28.5" cy="27.5" r="0.7" fill="#18352B" />
          <circle cx="38.5" cy="27.5" r="0.7" fill="#18352B" />

          {/* Nose & Snout */}
          <ellipse cx="32" cy="33" rx="2" ry="1.2" fill="#18352B" />
          <path d="M32 34.2 L32 36 M30.5 36 Q32 37.5 33.5 36" stroke="#18352B" strokeWidth="1" strokeLinecap="round" />

          {/* Panda Body (White chest with martial arts sash) */}
          <ellipse cx="32" cy="45" rx="11" ry="9" fill="#FFFFFF" stroke="#18352B" strokeWidth="1.5" />
          {/* Kung-fu vest sash */}
          <path d="M24 38 L32 46 L40 38" stroke="#244638" strokeWidth="3" fill="none" />
          <rect x="23" y="47" width="18" height="3" rx="1.5" fill="#B69A61" />

          {/* Kung-Fu Stance Arms (Paws forward/ready) */}
          <ellipse cx="20" cy="42" rx="4.5" ry="3.5" fill="#18352B" transform="rotate(-20 20 42)" />
          <ellipse cx="44" cy="42" rx="4.5" ry="3.5" fill="#18352B" transform="rotate(20 44 42)" />

          {/* Legs in stance */}
          <ellipse cx="26" cy="54" rx="4" ry="3" fill="#18352B" />
          <ellipse cx="38" cy="54" rx="4" ry="3" fill="#18352B" />
        </svg>
      </div>
    </div>
  );
};
