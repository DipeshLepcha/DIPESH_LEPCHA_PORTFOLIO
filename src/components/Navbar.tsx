import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  pandaEnabled?: boolean;
  onTogglePanda?: () => void;
}

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Architecture', href: '#architecture' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Photography', href: '#photography' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = ['hero', 'about', 'experience', 'architecture', 'projects', 'skills', 'photography', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F4F0E8]/95 backdrop-blur-md py-3 shadow-[0_2px_15px_-3px_rgba(34,36,33,0.07)] border-b border-[#222421]/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Personal Wordmark & Hanko Seal Emblem */}
          <a
            href="#hero"
            className="group flex items-center space-x-2.5 text-[#222421] focus:outline-none focus:ring-2 focus:ring-[#BD493B] rounded px-1"
            aria-label="Dipesh Lepcha - Home"
          >
            {/* Vermilion Hanko Seal Stamp with English Monogram */}
            <div className="w-8 h-8 rounded border-2 border-[#BD493B] bg-[#BD493B]/10 text-[#BD493B] flex items-center justify-center font-serif font-bold text-xs tracking-wider transition-transform group-hover:scale-105 shadow-xs">
              DL
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold tracking-wider text-base sm:text-lg text-[#222421] leading-tight">
                DIPESH LEPCHA
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#817865] font-medium hidden sm:inline">
                .NET &amp; Web Architect
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-2.5 lg:px-3 py-1.5 rounded-md text-xs lg:text-sm font-medium tracking-wide transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#222421] font-semibold bg-[#222421]/8'
                      : 'text-[#222421]/75 hover:text-[#222421] hover:bg-[#222421]/5'
                  } focus:outline-none focus:ring-2 focus:ring-[#BD493B]`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#BD493B] rounded-full" />
                  )}
                </a>
              );
            })}

            {/* Editorial Status Pill */}
            <div className="hidden lg:flex items-center space-x-2 pl-3 ml-2 border-l border-[#222421]/15">
              <span className="w-2 h-2 rounded-full bg-[#BD493B] animate-pulse" />
              <span className="text-[11px] font-sans font-medium text-[#817865] tracking-wider uppercase">
                Open for Roles
              </span>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#222421] hover:text-[#343630] hover:bg-[#222421]/5 focus:outline-none focus:ring-2 focus:ring-[#BD493B]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F4F0E8] border-b border-[#222421]/10 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#222421] text-[#F4F0E8]'
                      : 'text-[#222421] hover:bg-[#222421]/5'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs opacity-60 font-mono">&rarr;</span>
                </a>
              );
            })}
            <div className="pt-3 border-t border-[#222421]/10 flex items-center justify-between px-2">
              <span className="text-xs text-[#817865]">Status</span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#BD493B]/10 text-[#BD493B]">
                Available for Engineering Roles
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
