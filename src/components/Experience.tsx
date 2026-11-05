import React from 'react';
import { Calendar, MapPin, CheckCircle, Award } from 'lucide-react';
import { experienceTimeline } from '../data/experience.ts';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#E8E0D2]/40 relative overflow-hidden border-t border-[#222421]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 text-xs font-semibold tracking-widest text-[#BD493B] uppercase mb-2">
            <span className="w-8 h-[1.5px] bg-[#BD493B]" />
            <span className="font-mono">02</span>
            <span>&bull;</span>
            <span className="tracking-wider uppercase">JOURNEY</span>
            <span className="text-[#817865] normal-case tracking-normal hidden sm:inline">&bull; Engineering Timeline</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#222421] tracking-tight">
            Career Timeline &amp; Impact
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#817865] max-w-2xl font-sans">
            A track record of engineering solid enterprise backends, database procedures, and dependable web applications across the regional technology landscape.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#222421]/15 space-y-12 ml-2 sm:ml-4">
          
          {experienceTimeline.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Marker Pin */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-4 ${
                  item.isCurrent
                    ? 'border-[#222421] bg-[#BD493B]'
                    : 'border-[#E8E0D2] bg-[#343630]'
                } shadow-sm transition-transform group-hover:scale-125 duration-200`}
                aria-hidden="true"
              />

              {/* Experience Card */}
              <div className="bg-[#FFFFFF] border border-[#222421]/10 rounded-2xl p-6 sm:p-8 shadow-xs hover:border-[#BD493B]/50 transition-all duration-300">
                
                {/* Header Row: Role & Organization */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-semibold text-[#BD493B] tracking-widest uppercase block mb-1">
                      {item.organization}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#222421]">
                      {item.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#817865]">
                    <span className="inline-flex items-center space-x-1.5 bg-[#E8E0D2]/60 px-3 py-1 rounded-full font-medium text-[#222421]">
                      <Calendar className="w-3.5 h-3.5 text-[#BD493B]" />
                      <span>{item.startDate} &mdash; {item.endDate}</span>
                    </span>
                    <span className="inline-flex items-center space-x-1 text-[#817865]">
                      <MapPin className="w-3.5 h-3.5 text-[#BD493B]" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-sm sm:text-base text-[#222421]/80 mb-6 leading-relaxed font-sans">
                  {item.description}
                </p>

                {/* Responsibilities List */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold tracking-wider text-[#222421] uppercase mb-3">
                    Key Responsibilities &amp; Engineering Scope
                  </h4>
                  <ul className="space-y-2">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-[#222421]/85 leading-normal">
                        <CheckCircle className="w-4 h-4 text-[#BD493B] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Selected Achievements (if any) */}
                {item.selectedAchievements && item.selectedAchievements.length > 0 && (
                  <div className="mb-6 p-4 rounded-xl bg-[#F4F0E8] border border-[#BD493B]/30">
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#BD493B] mb-2">
                      <Award className="w-4 h-4 text-[#BD493B]" />
                      <span>Selected Engineering Impact</span>
                    </div>
                    <ul className="space-y-1.5">
                      {item.selectedAchievements.map((ach, aIdx) => (
                        <li key={aIdx} className="text-xs sm:text-sm text-[#222421] font-medium leading-relaxed font-sans">
                          &bull; {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technology Badges */}
                <div className="pt-4 border-t border-[#222421]/10">
                  <span className="text-[11px] font-semibold tracking-wider text-[#817865] uppercase block mb-2">
                    Technologies &amp; Tools Deployed
                  </span>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-[#E8E0D2]/70 text-[#222421] rounded-md text-xs font-medium border border-[#222421]/8"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
