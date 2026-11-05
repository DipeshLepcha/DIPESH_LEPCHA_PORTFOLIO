import React from 'react';
import { Github, Linkedin, Mail, Mountain } from 'lucide-react';
import { dipeshProfile } from '../data/profile.ts';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#222421] bg-dark-grain text-[#F4F0E8] pt-16 pb-12 border-t border-[#FFFFFF]/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-[#FFFFFF]/10">
          
          {/* Brand & Wordmark */}
          <div className="md:col-span-6 flex flex-col">
            <div className="flex items-center space-x-2.5 mb-2">
              {/* Hanko Stamp */}
              <div className="w-8 h-8 rounded border-2 border-[#BD493B] bg-[#BD493B]/15 text-[#BD493B] flex items-center justify-center font-serif font-bold text-xs">
                DL
              </div>
              <span className="font-serif font-bold tracking-widest text-lg text-[#F4F0E8]">
                DIPESH LEPCHA
              </span>
              <span className="text-[10px] text-[#817865] uppercase tracking-wider font-mono">
                DEVELOPER
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#F4F0E8]/70 max-w-md leading-relaxed font-sans">
              Software Developer specializing in ASP.NET Core, .NET, MySQL, SQL stored procedures, and dynamic web applications.
            </p>
          </div>

          {/* Quick Anchor Links */}
          <div className="md:col-span-3 flex flex-col space-y-1.5 text-xs text-[#F4F0E8]/80">
            <span className="font-semibold text-[#BD493B] uppercase tracking-wider mb-1 font-sans">
              Navigation
            </span>
            <a href="#about" className="hover:text-[#BD493B] transition-colors">About Me</a>
            <a href="#experience" className="hover:text-[#BD493B] transition-colors">Engineering Journey</a>
            <a href="#architecture" className="hover:text-[#BD493B] transition-colors">System Architecture</a>
            <a href="#projects" className="hover:text-[#BD493B] transition-colors">Case Studies</a>
            <a href="#skills" className="hover:text-[#BD493B] transition-colors">Technical Skills</a>
            <a href="#photography" className="hover:text-[#BD493B] transition-colors">Himalayan Photography</a>
            <a href="#contact" className="hover:text-[#BD493B] transition-colors">Contact</a>
          </div>

          {/* Social Profiles */}
          <div className="md:col-span-3 flex flex-col md:items-end space-y-3">
            <span className="font-semibold text-[#BD493B] uppercase tracking-wider text-xs font-sans">
              Connect
            </span>
            <div className="flex items-center space-x-3">
              <a
                href={dipeshProfile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#FFFFFF]/10 hover:bg-[#BD493B] hover:text-[#FFFFFF] flex items-center justify-center text-[#F4F0E8] transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={dipeshProfile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#FFFFFF]/10 hover:bg-[#BD493B] hover:text-[#FFFFFF] flex items-center justify-center text-[#F4F0E8] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${dipeshProfile.email}`}
                className="w-9 h-9 rounded-full bg-[#FFFFFF]/10 hover:bg-[#BD493B] hover:text-[#FFFFFF] flex items-center justify-center text-[#F4F0E8] transition-colors"
                aria-label="Email Dipesh"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <span className="text-[11px] text-[#F4F0E8]/60 font-mono">
              Sikkim &bull; Darjeeling &bull; India
            </span>
          </div>

        </div>

        {/* Bottom Copyright & Quote */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F4F0E8]/60 gap-4 font-sans">
          <p>
            &copy; {currentYear} Dipesh Lepcha. All rights reserved.
          </p>

          <div className="flex items-center space-x-1.5 text-xs text-[#F4F0E8]/70">
            <span>Crafted with shokunin precision for clean code and high mountains</span>
            <Mountain className="w-3.5 h-3.5 text-[#BD493B]" />
          </div>
        </div>

      </div>
    </footer>
  );
};
