import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projectCaseStudies } from '../data/projects.ts';
import { ProjectModal } from './ProjectModal.tsx';
import type { ProjectCaseStudy } from '../types/portfolio.ts';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectCaseStudy | null>(null);

  const categories = ['All', 'Payment & Booking', 'Web Applications', 'Enterprise .NET', 'API & Microservices'];

  const filteredProjects = selectedCategory === 'All'
    ? projectCaseStudies
    : projectCaseStudies.filter((p) => p.category === selectedCategory);

  const featuredProject = projectCaseStudies.find((p) => p.featured) || projectCaseStudies[0];

  return (
    <section id="projects" className="py-24 bg-[#F4F0E8] bg-grain relative overflow-hidden border-t border-[#222421]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 text-xs font-semibold tracking-widest text-[#BD493B] uppercase mb-2">
              <span className="w-8 h-[1.5px] bg-[#BD493B]" />
              <span className="font-mono">04</span>
              <span>&bull;</span>
              <span className="tracking-wider uppercase">PROJECTS</span>
              <span className="text-[#817865] normal-case tracking-normal hidden sm:inline">&bull; Featured Case Studies</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#222421] tracking-tight">
              Featured Engineering Work
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#817865] max-w-xl font-sans">
              Architecting production-ready .NET web applications, MySQL stored procedures, and secure transaction workflows.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2" role="tablist" aria-label="Project Categories">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                role="tab"
                aria-selected={selectedCategory === cat}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#222421] text-[#F4F0E8] shadow-xs'
                    : 'bg-[#E8E0D2]/80 text-[#222421] hover:bg-[#E8E0D2]'
                } focus:outline-none focus:ring-2 focus:ring-[#BD493B]`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Case Study Hero Card */}
        {selectedCategory === 'All' && featuredProject && (
          <div className="mb-14 rounded-3xl bg-gradient-to-br from-[#222421] to-[#151614] text-[#F4F0E8] p-8 sm:p-12 shadow-xl elevation-card overflow-hidden relative border border-[#FFFFFF]/15">
            {/* Zen Enso & Topographical background accent */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg viewBox="0 0 800 400" fill="none" className="w-full h-full object-cover">
                <circle cx="650" cy="200" r="140" stroke="#BD493B" strokeWidth="2" strokeDasharray="8 6" />
                <path d="M0 300 Q200 150 400 280 T800 200" stroke="#F4F0E8" strokeWidth="1.5" />
              </svg>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center space-x-2 bg-[#BD493B]/20 text-[#BD493B] px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-[#BD493B]/40">
                  <span>★ Flagship Case Study</span>
                  <span>&bull;</span>
                  <span>{featuredProject.category}</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-[#F4F0E8]">
                  {featuredProject.title}
                </h3>

                <p className="text-sm sm:text-base text-[#F4F0E8]/85 leading-relaxed mb-6 font-sans">
                  {featuredProject.shortOverview}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-8 font-sans">
                  {featuredProject.technicalApproach.slice(0, 3).map((approach, aIdx) => (
                    <div key={aIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-[#F4F0E8]/80">
                      <span className="text-[#BD493B] font-bold">&bull;</span>
                      <span>{approach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#FFFFFF]/10 border border-[#FFFFFF]/15 rounded-md text-xs font-medium text-[#F4F0E8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActiveModalProject(featuredProject)}
                  className="inline-flex items-center space-x-2 bg-[#BD493B] hover:bg-[#a63d30] text-[#FFFFFF] font-semibold px-6 py-3 rounded-lg text-sm tracking-wide transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]"
                >
                  <span>Explore Architecture &amp; Code Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Right column: Impact Metrics callout */}
              <div className="lg:col-span-5 bg-[#FFFFFF]/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-[#FFFFFF]/15">
                <span className="text-xs font-bold tracking-widest uppercase text-[#BD493B] block mb-4">
                  Key Production Metrics
                </span>
                <div className="space-y-4">
                  {featuredProject.outcomes.map((metric, mIdx) => (
                    <div key={mIdx} className="p-3 rounded-xl bg-[#FFFFFF]/8 border border-[#FFFFFF]/10">
                      <p className="text-xs sm:text-sm text-[#F4F0E8]/90 leading-snug font-sans">
                        {metric}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#FFFFFF] rounded-2xl border border-[#222421]/12 p-6 sm:p-7 flex flex-col justify-between shadow-xs elevation-card-hover"
            >
              <div>
                {/* Category label */}
                <div className="flex items-center justify-between text-xs font-semibold tracking-wider text-[#BD493B] uppercase mb-3">
                  <span>{project.category}</span>
                  <span className="text-[10px] text-[#817865] font-mono">.NET / SQL</span>
                </div>

                {/* Title */}
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#222421] mb-2.5 group-hover:text-[#BD493B] transition-colors">
                  {project.title}
                </h4>

                {/* Short overview */}
                <p className="text-xs sm:text-sm text-[#817865] leading-relaxed mb-5 line-clamp-3 font-sans">
                  {project.shortOverview}
                </p>

                {/* Approach summary */}
                <div className="mb-5 p-3 rounded-xl bg-[#E8E0D2]/50 border border-[#222421]/8 text-xs text-[#222421]/80 leading-relaxed font-sans">
                  <span className="font-bold text-[#222421] block mb-1">Architecture Note:</span>
                  {project.architectureHighlights[0]}
                </div>
              </div>

              <div>
                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-[#E8E0D2]/80 text-[#222421] rounded text-[11px] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[11px] text-[#817865]">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action button */}
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="w-full inline-flex items-center justify-center space-x-1.5 py-2.5 rounded-lg border border-[#222421]/20 hover:border-[#222421] hover:bg-[#222421] hover:text-[#F4F0E8] text-[#222421] text-xs font-semibold tracking-wide transition-all focus:outline-none focus:ring-2 focus:ring-[#BD493B]"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Accessible Case Study Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
