import React, { useState } from "react";
import { Navbar } from "./components/Navbar.tsx";
import { Hero } from "./components/Hero.tsx";
import { About } from "./components/About.tsx";
import { Experience } from "./components/Experience.tsx";
import { ArchitectureDiagram } from "./components/ArchitectureDiagram.tsx";
import { Projects } from "./components/Projects.tsx";
import { Skills } from "./components/Skills.tsx";
import { Contact } from "./components/Contact.tsx";
import { PhotographyGallery } from "./components/PhotographyGallery.tsx";
import { Footer } from "./components/Footer.tsx";
import { PandaCursor } from "./components/PandaCursor.tsx";
import { ScrollProgressBar } from "./components/ScrollProgressBar.tsx";
import { GlobalSakuraRain } from "./components/GlobalSakuraRain.tsx";
import { HobbyCarouselList } from "./components/Hobby.tsx";

export default function App() {
  const [pandaEnabled, setPandaEnabled] = useState(false);

  const togglePanda = () => {
    setPandaEnabled((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F0E8] text-[#222421] selection:bg-[#BD493B]/20 selection:text-[#222421] relative overflow-x-hidden font-sans">
      {/* Thin, elegant Japanese vermilion scroll progress indicator fixed to top */}
      <ScrollProgressBar />

      {/* Optional Desktop Companion */}
      <PandaCursor enabled={pandaEnabled} />

      {/* Main Refined Japanese Editorial Navigation */}
      <Navbar pandaEnabled={pandaEnabled} onTogglePanda={togglePanda} />

      {/* Cinematic Storytelling Narrative Sequence */}
      <main className="flex-1">
        {/* 1. Meet the developer: Hero with Mount Fuji Japanese Mountain Landscape */}
        <Hero />

        {/* 2. Discover the developer: About */}
        <About />

        {/* 3. Engineering Journey: Experience Timeline */}
        <Experience />

        {/* 4. Technical Systems Architecture Diagram */}
        <section
          id="architecture"
          className="py-24 bg-[#F4F0E8] relative overflow-hidden border-t border-[#222421]/8"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <div className="flex items-center space-x-2 text-xs font-semibold tracking-widest text-[#BD493B] uppercase mb-2">
                <span className="w-8 h-[1.5px] bg-[#BD493B]" />
                <span className="font-mono">03</span>
                <span>&bull;</span>
                <span className="tracking-wider uppercase">ARCHITECTURE</span>
                <span className="text-[#817865] normal-case tracking-normal hidden sm:inline">
                  &bull; System Architecture
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#222421] tracking-tight">
                Architectural Blueprint & Security
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#817865] max-w-2xl font-sans">
                A transparent, production-proven layout of backend services,
                transactional stored procedures, and webhook reconciliation
                engines.
              </p>
            </div>

            <ArchitectureDiagram />
          </div>
        </section>

        {/* 5. Explore the work: Case Studies */}
        <Projects />

        {/* 6. Understand the skills: Competencies */}
        <Skills />

        {/* 7. Connect with the developer: Contact */}
        <Contact />

        {/* 8. Signature Finale: Himalayan Photography Gallery */}
        <PhotographyGallery />

        <HobbyCarouselList />
      </main>

      {/* Global Sakura Falling System: drifts across every component and stores petals at bottom */}
      <GlobalSakuraRain />

      {/* Footer immediately following petal storage bed */}
      <Footer />
    </div>
  );
}
