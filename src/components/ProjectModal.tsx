import React, { useEffect, useRef } from 'react';
import { X, CheckCircle2, ChevronRight } from 'lucide-react';
import type { ProjectCaseStudy } from '../types/portfolio.ts';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const previouslyFocused = document.activeElement as HTMLElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#222421]/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#F4F0E8] rounded-2xl border border-[#222421]/15 shadow-2xl p-6 sm:p-8 text-[#222421]"
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#E8E0D2] hover:bg-[#222421] hover:text-[#F4F0E8] text-[#222421] transition-colors focus:outline-none focus:ring-2 focus:ring-[#BD493B]"
          aria-label="Close case study modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Tag */}
        <div className="flex items-center space-x-2 text-xs font-semibold tracking-widest text-[#BD493B] uppercase mb-2">
          <span>Case Study &bull; {project.category}</span>
        </div>

        {/* Title */}
        <h3
          id="case-study-title"
          className="font-serif text-2xl sm:text-4xl font-bold text-[#222421] mb-3 pr-10"
        >
          {project.title}
        </h3>

        {/* Overview */}
        <p className="text-base sm:text-lg text-[#222421]/85 leading-relaxed mb-6 font-medium font-sans">
          {project.shortOverview}
        </p>

        {/* Problem Statement */}
        <div className="mb-6 p-4 rounded-xl bg-[#E8E0D2]/60 border border-[#222421]/10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#BD493B] block mb-1">
            The Problem / Business Challenge
          </span>
          <p className="text-sm text-[#222421]/80 leading-relaxed font-sans">
            {project.problem}
          </p>
        </div>

        {/* Engineering Contribution */}
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#BD493B] block mb-1">
            My Engineering Contribution
          </span>
          <p className="text-sm sm:text-base text-[#222421] leading-relaxed font-sans">
            {project.contribution}
          </p>
        </div>

        {/* Technical Approach & Implementation */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#222421] mb-3">
            Technical Approach &amp; Architecture
          </h4>
          <ul className="space-y-2.5">
            {project.technicalApproach.map((item, idx) => (
              <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#222421]/85 font-sans">
                <ChevronRight className="w-4 h-4 text-[#BD493B] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Highlights */}
        {project.architectureHighlights && project.architectureHighlights.length > 0 && (
          <div className="mb-6 p-4 rounded-xl bg-[#222421]/5 border border-[#222421]/15">
            <span className="text-xs font-bold uppercase tracking-wider text-[#222421] block mb-2">
              Architecture Highlights &amp; Security Guarantees
            </span>
            <ul className="space-y-1.5">
              {project.architectureHighlights.map((arch, aIdx) => (
                <li key={aIdx} className="flex items-center space-x-2 text-xs sm:text-sm text-[#222421] font-medium font-sans">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#BD493B] shrink-0" />
                  <span>{arch}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Verified Outcomes */}
        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#222421] mb-3">
            Verified Outcomes &amp; Production Metrics
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.outcomes.map((outcome, oIdx) => (
              <div
                key={oIdx}
                className="p-3 bg-[#FFFFFF] rounded-lg border border-[#222421]/10 text-xs text-[#222421]/85 leading-snug font-sans"
              >
                &bull; {outcome}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="pt-4 border-t border-[#222421]/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-[#E8E0D2] text-[#222421] rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#222421] hover:bg-[#343630] text-[#F4F0E8] text-xs font-semibold tracking-wide transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
