import React, { useState } from 'react';
import { Server, Database, Layout, Wrench } from 'lucide-react';
import { skillsData } from '../data/skills.ts';
import { groupSkillsByCategory } from '../utils/portfolio-logic.ts';
import type { SkillCategory } from '../types/portfolio.ts';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'All'>('All');

  const grouped = groupSkillsByCategory(skillsData);

  const categoryIcons: Record<SkillCategory, React.ElementType> = {
    Backend: Server,
    Database: Database,
    Frontend: Layout,
    'Tools and Engineering': Wrench,
  };

  const categories: SkillCategory[] = [
    'Backend',
    'Database',
    'Frontend',
    'Tools and Engineering',
  ];

  return (
    <section id="skills" className="py-24 bg-[#E8E0D2]/40 relative overflow-hidden border-t border-[#222421]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <div>
            <div className="flex items-center space-x-2 text-xs font-semibold tracking-widest text-[#BD493B] uppercase mb-2">
              <span className="w-8 h-[1.5px] bg-[#BD493B]" />
              <span className="font-mono">05</span>
              <span>&bull;</span>
              <span className="tracking-wider uppercase">SKILLS</span>
              <span className="text-[#817865] normal-case tracking-normal hidden sm:inline">&bull; Core Competencies</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#222421] tracking-tight">
              Skills &amp; Engineering Tooling
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#817865] max-w-xl font-sans">
              Authentic tools and practices honed through hands-on development. Categorized by functional discipline rather than subjective percentage meters.
            </p>
          </div>

          {/* Quick Filter Buttons */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'All'
                  ? 'bg-[#222421] text-[#F4F0E8]'
                  : 'bg-[#FFFFFF] text-[#222421] border border-[#222421]/10 hover:bg-[#E8E0D2]'
              }`}
            >
              All Disciplines
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#222421] text-[#F4F0E8]'
                    : 'bg-[#FFFFFF] text-[#222421] border border-[#222421]/10 hover:bg-[#E8E0D2]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories
            .filter((cat) => selectedCategory === 'All' || selectedCategory === cat)
            .map((category) => {
              const IconComponent = categoryIcons[category];
              const categorySkills = grouped[category];

              return (
                <div
                  key={category}
                  className="bg-[#FFFFFF] rounded-2xl border border-[#222421]/12 p-6 sm:p-8 shadow-xs"
                >
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-[#222421]/10">
                    <div className="w-10 h-10 rounded-xl bg-[#222421] text-[#F4F0E8] flex items-center justify-center shadow-xs">
                      <IconComponent className="w-5 h-5 text-[#BD493B]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#222421]">
                        {category}
                      </h3>
                      <span className="text-xs text-[#817865] font-sans">
                        {categorySkills.length} Core Capabilities
                      </span>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {categorySkills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3.5 rounded-xl bg-[#F4F0E8] border border-[#222421]/8 hover:border-[#BD493B]/40 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="font-semibold text-sm sm:text-base text-[#222421]">
                            {skill.name}
                          </h4>
                          {skill.featured && (
                            <span className="text-[10px] font-bold tracking-wider uppercase text-[#BD493B] bg-[#BD493B]/15 px-2 py-0.5 rounded font-mono">
                              Core
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-[#817865] leading-normal mb-2.5 font-sans">
                          {skill.levelDescription}
                        </p>

                        {/* Keyword tags */}
                        {skill.tags && (
                          <div className="flex flex-wrap gap-1.5">
                            {skill.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 bg-[#FFFFFF] border border-[#222421]/8 rounded text-[10px] font-medium text-[#222421]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
        </div>

      </div>
    </section>
  );
};
