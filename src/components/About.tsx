import React, { useEffect, useRef, useState } from 'react';
import { MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { dipeshProfile } from '../data/profile.ts';
import ichigoMaskImg from '../assets/images/ichigo-mask.png';

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-[#F4F0E8] bg-grain relative overflow-hidden border-t border-[#222421]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Japanese Notation */}
        <div className="mb-16">
          <div className="flex items-center space-x-2.5 text-xs font-semibold tracking-widest text-[#BD493B] uppercase mb-3">
            <span className="w-8 h-[1.5px] bg-[#BD493B]" />
            <span className="font-mono">01</span>
            <span>&bull;</span>
            <span className="tracking-wider uppercase">PROFILE</span>
            <span className="text-[#817865] normal-case tracking-normal hidden sm:inline">&bull; Personal Introduction</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-[#222421] tracking-tight">
            Meet the Developer
          </h2>
          <p className="mt-2 text-base sm:text-lg text-[#817865] max-w-2xl font-sans">
            Rooted in the Himalayas, focused on building clean, high-performance web applications and resilient database systems.
          </p>
        </div>

        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Visual Frame & Authentic Highlights */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#222421]/15 bg-[#E8E0D2]/60 p-6 shadow-sm">
              
              {/* Himalayan Monochrome Editorial Frame */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-b from-[#222421] via-[#1A1C19] to-[#0F100E] text-[#F4F0E8] p-6 flex flex-col justify-between shadow-inner">
                {/* Decorative mountain contours */}
                <div className="absolute inset-0 opacity-15">
                  <svg viewBox="0 0 500 350" fill="none" className="w-full h-full object-cover">
                    <path d="M0 250 L150 120 L270 200 L400 80 L500 230 L500 350 L0 350 Z" fill="#FFFFFF" />
                  </svg>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-[#BD493B]" />
                    <span className="text-xs font-medium tracking-wide">Sikkim &amp; Darjeeling Hills</span>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase bg-[#FFFFFF]/10 px-2 py-0.5 rounded border border-[#FFFFFF]/15">
                    India
                  </span>
                </div>

                <div className="relative z-10 my-auto text-center py-4">
                  <span className="text-xs uppercase tracking-widest text-[#BD493B] font-semibold block mb-1">
                    Engineering Philosophy
                  </span>
                  <blockquote className="font-serif text-lg sm:text-xl italic text-[#F4F0E8] leading-relaxed">
                    "Reliability is not an afterthought; it is built into the architecture from the very first line of code."
                  </blockquote>
                </div>

                <div className="relative z-10 flex items-center justify-between pt-2 border-t border-[#FFFFFF]/15 text-xs text-[#F4F0E8]/80">
                  <span>Backend &amp; Database Focused</span>
                  <span className="text-[#BD493B]">&bull;</span>
                  <span>C# / .NET / MySQL</span>
                </div>
              </div>

              {/* Supporting Highlights Grid */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                {dipeshProfile.quickHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="p-3.5 bg-[#FFFFFF] rounded-xl border border-[#222421]/8 shadow-xs"
                  >
                    <span className="text-[11px] font-semibold tracking-wider text-[#817865] uppercase block mb-1">
                      {item.label}
                    </span>
                    <span className="font-serif font-bold text-base sm:text-lg text-[#222421] block leading-tight mb-1">
                      {item.value}
                    </span>
                    <span className="text-[11px] text-[#817865] block leading-snug">
                      {item.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability Box */}
            <div className="p-4 bg-[#222421]/5 border border-[#222421]/15 rounded-xl flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-[#222421] text-[#F4F0E8] flex items-center justify-center shrink-0">
                <Terminal className="w-4 h-4 text-[#BD493B]" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-semibold text-[#222421] block">Current Status</span>
                <span className="text-xs text-[#222421]/80 block leading-tight">
                  {dipeshProfile.currentAvailability}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Story & Principles */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Developer Story Introduction with Subtle Ichigo Mask */}
            <div className="relative">
              {/* Subtle Ichigo Mask Background Illustration */}
              <div
                className={`absolute -top-6 -right-2 sm:-right-6 lg:-right-10 xl:-right-14 w-40 sm:w-56 md:w-64 lg:w-80 max-w-[42%] sm:max-w-[48%] lg:max-w-none pointer-events-none select-none z-0 transition-opacity duration-1000 ease-out ${
                  inView ? 'opacity-[0.10] sm:opacity-[0.13] lg:opacity-[0.16]' : 'opacity-0'
                }`}
                aria-hidden="true"
              >
                <img
                  src={ichigoMaskImg}
                  alt=""
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>

              <div className="relative z-10 prose prose-lg text-[#222421]/85 leading-relaxed space-y-4 font-sans">
                {dipeshProfile.bioStory.map((paragraph, index) => (
                  <p key={index} className="text-base sm:text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Core Pillars / Development Approach */}
            <div className="pt-6 border-t border-[#222421]/12">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#222421] mb-5">
                My Approach to Software Engineering
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dipeshProfile.corePillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-xl bg-[#FFFFFF] border border-[#222421]/10 hover:border-[#BD493B]/50 transition-colors shadow-xs"
                  >
                    <div className="flex items-center space-x-2 text-[#222421] mb-2">
                      <CheckCircle2 className="w-4 h-4 text-[#BD493B] shrink-0" />
                      <h4 className="font-semibold text-sm sm:text-base text-[#222421]">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#817865] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action */}
            <div className="pt-4 flex items-center space-x-4">
              <a
                href="#experience"
                className="inline-flex items-center text-sm font-semibold text-[#222421] hover:text-[#BD493B] group transition-colors"
              >
                <span>View Engineering Journey</span>
                <span className="ml-1 transition-transform group-hover:translate-x-1">&rarr;</span>
              </a>
              <span className="text-[#222421]/20">|</span>
              <a
                href="#photography"
                className="inline-flex items-center text-sm font-semibold text-[#BD493B] hover:text-[#817865] group transition-colors"
              >
                <span>Discover Himalayan Photography</span>
                <span className="ml-1 transition-transform group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
