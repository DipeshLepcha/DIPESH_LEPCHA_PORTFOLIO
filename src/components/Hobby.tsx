import React from "react";
import { ArrowUp } from "lucide-react";
import { HobbyPhotoList } from "../data/hobby.ts";

export const HobbyCarouselList: React.FC = () => {
  const carouselItems = [...HobbyPhotoList, ...HobbyPhotoList];
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section id="Hobbies" className="py-20 bg-[#F4F0E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#BD493B] mb-3">
            Beyond Development
          </p>

          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-[#222421]">
            Life Beyond Coding
          </h2>

          <p className="mt-4 text-base text-[#817865] leading-relaxed">
            A collection of interests, experiences and little things that make
            life interesting beyond programming.
          </p>
        </div>
        <div className="overflow-hidden group">
          <div className="flex w-max animate-hobby-scroll group-hover:[animation-play-state:paused]">
            {carouselItems.map((hobby, index) => (
              <div
                key={`${hobby.id}-${index}`}
                aria-hidden={index >= HobbyPhotoList.length}
                className="relative w-[280px] sm:w-[320px] h-[380px] shrink-0 mr-6 overflow-hidden rounded-2xl group/card"
              >
                <img
                  src={hobby.imageUrl}
                  alt={hobby.name}
                  draggable={false}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black-/90 via-black/25 to-transparent" />

                <div className="absolute inset-0 flex  flex-col justify-end p-6 text-white">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {hobby.categories.map((category) => (
                      <span
                        key={category}
                        className="px-3 py-1 rounded-full bg--white/20 backdrop-blur-sm border border-white/30 text-xs"
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-serif text-3xl font-semibold mb-2">
                    {hobby.name}
                  </h3>
                  <p className="text-sm text-white/85 leading-relaxed">
                    {hobby.description}
                  </p>

                  <p className="mt-3 text-sm italic text-[#F2B5A9]">
                    {hobby.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-20 pt-12 border-t border-[#222421]/12 text-center max-w-xl mx-auto flex flex-col items-center">
        <p className="font-serif text-lg italic text-[#222421]/90 mb-6">
          "Life is more than the lines of code we write."
        </p>
        <button
          onClick={scrollToTop}
          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#FFFFFF] hover:bg-[#222421] hover:text-[#F4F0E8] text-[#222421] border border-[#222421]/20 text-xs font-semibold tracking-wider uppercase transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-[#BD493B] group"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
        </button>
      </div>
    </section>
  );
};
export default HobbyCarouselList;
