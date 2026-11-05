import React, { useEffect, useRef } from 'react';
import { ArrowDown, Code2, Database, ShieldCheck, CreditCard, Layers } from 'lucide-react';
import gsap from 'gsap';
import { dipeshProfile } from '../data/profile.ts';
import { JapaneseMountainLandscape } from './JapaneseMountainLandscape.tsx';

interface HeroProps {
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const portraitFrameRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.35, ease: 'power2.out' }
      );

      gsap.fromTo(
        portraitFrameRef.current,
        { opacity: 0, scale: 0.95, y: 15 },
        { opacity: 1, scale: 1, y: 0, duration: 0.45, delay: 0.1, ease: 'power2.out' }
      );

      gsap.fromTo(
        [headlineRef.current, subtitleRef.current, introRef.current, badgesRef.current, actionsRef.current],
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, stagger: 0.08, duration: 0.4, delay: 0.05, ease: 'power2.out' }
      );

      gsap.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, delay: 0.45 }
      );

      // Continuous gentle bounce for scroll indicator
      gsap.to(scrollIndicatorRef.current, {
        y: 5,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: 'sine.inOut',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const focusPillars = [
    { label: 'ASP.NET Core & .NET', icon: Code2 },
    { label: 'MySQL & SQL', icon: Database },
    { label: 'REST APIs & Backend', icon: Layers },
    { label: 'Dynamic Web Apps', icon: ShieldCheck },
    { label: 'Payment Gateway Integrations', icon: CreditCard },
  ];

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[95vh] pt-24 sm:pt-28 pb-12 sm:pb-16 flex flex-col justify-center bg-gradient-to-b from-[#F4F0E8] via-[#E8E0D2]/40 to-[#F4F0E8] bg-grain overflow-hidden"
    >
      {/* Layered Japanese Mountain Landscape with Mount Fuji and Drift Mist */}
      <JapaneseMountainLandscape />

      {/* Decorative Japanese Sumi Ink Geometry & Enso Linework */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] flex items-center justify-center">
        <svg
          className="w-full h-full max-w-7xl"
          viewBox="0 0 1200 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Zen Enso circular brush motif */}
          <circle cx="960" cy="240" r="160" stroke="#222421" strokeWidth="2.5" strokeDasharray="18 8" />
          <circle cx="960" cy="240" r="230" stroke="#BD493B" strokeWidth="1.5" opacity="0.6" />
          {/* Flowing horizontal ink water paths */}
          <path
            d="M0 450 C300 380, 500 520, 800 390 C1000 300, 1100 440, 1200 360"
            stroke="#222421"
            strokeWidth="1.5"
          />
          <path
            d="M0 350 C250 280, 480 400, 750 310 C980 230, 1080 340, 1200 280"
            stroke="#BD493B"
            strokeWidth="1.2"
            strokeDasharray="5 5"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Asymmetric Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Oversized Editorial Typography & Identity */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Editorial Label with Hanko Seal Stamp */}
            <div className="flex items-center space-x-2.5 text-xs font-semibold tracking-widest text-[#BD493B] uppercase mb-4">
              <span className="w-8 h-[1.5px] bg-[#BD493B]" />
              <span className="hanko-stamp px-2 py-0.5 text-[10px] leading-none tracking-wider">DEV</span>
              <span>Darjeeling &bull; Engineering Portfolio</span>
            </div>

            {/* Oversized Name */}
            <h1
              ref={headlineRef}
              className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold text-[#222421] tracking-tight leading-[0.98] mb-3 drop-shadow-xs"
            >
              {dipeshProfile.name}
            </h1>

            {/* Subtitle & Focus */}
            <div
              ref={subtitleRef}
              className="font-sans text-lg sm:text-xl lg:text-2xl font-semibold text-[#343630] mb-5 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3"
            >
              <span>{dipeshProfile.title}</span>
              <span className="text-[#BD493B] hidden sm:inline">&bull;</span>
              <span className="font-medium text-[#817865]">{dipeshProfile.subtitle}</span>
            </div>

            {/* Introductory Brief */}
            <p
              ref={introRef}
              className="text-[#222421]/90 text-base sm:text-lg leading-relaxed max-w-2xl mb-6 font-normal font-sans bg-[#F4F0E8]/70 backdrop-blur-xs p-3.5 -ml-3.5 rounded-lg border border-[#222421]/5"
            >
              "{dipeshProfile.bioIntro}"
            </p>

            {/* Core Focus Badges */}
            <div
              ref={badgesRef}
              className="flex flex-wrap gap-2 mb-8"
              aria-label="Core Engineering Focus" 
            >
              {focusPillars.map((item) =>{
                const IconComponent = item.icon;
                return (
                  <div key={item.label} className="inline-flex items-center space-x-1.5 bg-[#FFFFFF]/90 border 
                  border-[#222421]/15 px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium text-[#222421] shadow-xs 
                  backdrop-blur-xs hover:border-[#BD493B]/60 transition-colors">
                    <IconComponent className="w-3.5 h-3.5 text-[#BD493B]" />
                  <span>{item.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Primary Actions */}
            <div
              ref={actionsRef}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4"
            >
              <a
                href="#projects"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center bg-[#222421] hover:bg-[#343630] text-[#F4F0E8] px-7 py-3.5 rounded-lg font-medium text-sm sm:text-base tracking-wide transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#BD493B]"
              >
                <span>Explore My Work</span>
                <span className="ml-2 text-xs opacity-75">&rarr;</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[#FFFFFF] hover:bg-[#E8E0D2] text-[#222421] border border-[#222421]/20 px-6 py-3.5 rounded-lg font-medium text-sm sm:text-base tracking-wide transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-[#BD493B]"
              >
                <span>Get In Touch</span>
              </a>
            </div>
          </div>

          {/* Right Column: Black-and-White Portrait / Editorial Composition Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              ref={portraitFrameRef}
              className="relative w-full max-w-sm sm:max-w-md aspect-[4/4.9] p-3.5 bg-[#FFFFFF] border border-[#222421]/15 rounded-2xl shadow-2xl elevation-card"
            >
              {/* Inner Portrait Frame with Black-and-White Sumi Ink Charcoal Tone */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-b from-[#222421] via-[#1A1C19] to-[#0F100E] flex flex-col justify-between p-6 text-[#F4F0E8]">
                
                {/* Monochrome Zen Peak Line Watermark */}
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                  <svg
                    viewBox="0 0 400 500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full object-cover"
                  >
                    <polygon points="200,80 340,380 60,380" fill="#FFFFFF" opacity="0.3" />
                    <polygon points="120,160 220,380 20,380" fill="#FFFFFF" opacity="0.2" />
                    <polygon points="290,140 390,380 190,380" fill="#FFFFFF" opacity="0.25" />
                  </svg>
                </div>

                {/* Top Badge: Availability */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="inline-flex items-center space-x-1.5 bg-[#FFFFFF]/15 backdrop-blur-md px-3 py-1 rounded-full text-xs text-[#F4F0E8] border border-[#FFFFFF]/20">
                    <span className="w-2 h-2 rounded-full bg-[#BD493B] animate-pulse" />
                    <span className="font-medium tracking-wide">Available for Projects</span>
                  </span>

                  <span className="text-[11px] font-mono tracking-widest text-[#BD493B] uppercase">
                    .NET &bull; SQL &bull; API
                  </span>
                </div>

                {/* Center Badge: Black-and-White Editorial Portrait Seal */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-6">
                  {/* Monogram Seal with Vermilion Hanko Border */}
                  {/* <div className="w-24 h-24 rounded-full border-2 border-[#BD493B] bg-[#222421] flex items-center justify-center mb-3.5 shadow-inner">
                    <span className="font-serif text-3xl font-bold tracking-widest text-[#F4F0E8]">
                      DL
                    </span>
                  </div> */}
                  <div className="w-24 h-24 rounded-full border-2 border-[#BD493B] bg-[#222421] flex items-center justify-center mb-3.5 shadow-inner overflow-hidden">
                  <img
                    src="/images/dipesh.jpg"
                    alt="Dipesh Lepcha"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                  <div className="flex items-center space-x-2 justify-center mb-1">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F4F0E8] tracking-wide">
                      Dipesh Lepcha
                    </h3>
                    <span className="hanko-stamp px-1.5 py-0.2 text-[9px] text-[#BD493B] border-[#BD493B]">
                      SEAL
                    </span>
                  </div>
                  <p className="text-xs text-[#BD493B] font-medium tracking-wider uppercase">
                    Sikkim &bull; Darjeeling &bull; India
                  </p>
                </div>

                {/* Bottom Card Summary */}
                <div className="relative z-10 bg-[#FFFFFF]/10 backdrop-blur-md rounded-lg p-3.5 border border-[#FFFFFF]/15">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-[#F4F0E8]/80 font-medium">Core Stack</span>
                    <span className="text-[#BD493B] font-semibold">C# &bull; ASP.NET Core &bull; MySQL</span>
                  </div>
                  <p className="text-[11px] text-[#F4F0E8]/70 leading-snug">
                    Engineering scalable web applications, transactional database procedures, and multi-tier booking systems.
                  </p>
                </div>

                {/* Traditional Vermilion corner framing brackets */}
                <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#BD493B]/70" />
                <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#BD493B]/70" />
                <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#BD493B]/70" />
                <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#BD493B]/70" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="relative z-10 mt-10 flex flex-col items-center justify-center text-center"
      >
        <a
          href="#about"
          className="group inline-flex flex-col items-center text-[#817865] hover:text-[#222421] transition-colors focus:outline-none"
          aria-label="Scroll to About Me section"
        >
          <span className="text-[11px] uppercase tracking-widest font-semibold mb-1">
            Scroll to Discover
          </span>
          <ArrowDown className="w-4 h-4 text-[#BD493B] transition-transform group-hover:translate-y-1" />
        </a>
      </div>
    </section>
  );
};
