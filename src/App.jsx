import React, { useState } from 'react';
import { portfolioData } from './data/portfolio';
import { useSmoothScroll, scrollToTop } from './hooks/useSmoothScroll';

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillsMarquee from './components/SkillsMarquee';
import ProjectGrid from './components/ProjectGrid';
import ProjectDetails from './components/ProjectDetails';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  // Initialize Lenis smooth scroll
  useSmoothScroll();

  // State for selected project full page view
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    scrollToTop(true);
  };

  const handleBackToHome = () => {
    setSelectedProject(null);
    scrollToTop(true);
  };

  return (
    <div className="min-h-screen bg-[#070709] text-slate-100 selection:bg-indigo-600 selection:text-white relative">
      {/* Custom Context-Aware Magnetic Cursor */}
      <CustomCursor />

      {selectedProject ? (
        /* Full Separate Project Details Page */
        <div>
          <ProjectDetails
            project={selectedProject}
            allProjects={portfolioData.projects}
            onBack={handleBackToHome}
            onSelectProject={handleSelectProject}
          />
          <Footer personal={portfolioData.personal} />
        </div>
      ) : (
        /* Portfolio Home View */
        <div>
          <Navbar personal={portfolioData.personal} />
          <main>
            <Hero
              personal={portfolioData.personal}
              stats={portfolioData.stats}
            />

            <About
              personal={portfolioData.personal}
              experience={portfolioData.experience}
              education={portfolioData.education}
            />

            <SkillsMarquee
              skillCategories={portfolioData.skillCategories}
              skills={portfolioData.skills}
            />

            <ProjectGrid
              projects={portfolioData.projects}
              onSelectProject={handleSelectProject}
            />

            <ContactSection personal={portfolioData.personal} />
          </main>

          <Footer personal={portfolioData.personal} />
        </div>
      )}
    </div>
  );
}
