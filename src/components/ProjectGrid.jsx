import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import SectionReveal from "./SectionReveal";

export default function ProjectGrid({
  projects,
  onSelectProject,
  playClickSound,
}) {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "ui", label: "UI & Design" },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;

    const isFullStackProject =
      p.role.toLowerCase().includes("full stack") ||
      p.categoryTag.toLowerCase().includes("mern") ||
      p.categoryTag.toLowerCase().includes("full stack");

    if (filter === "fullstack") {
      return isFullStackProject;
    }

    if (filter === "frontend") {
      // Exclude Full Stack projects from Frontend tab strictly
      return !isFullStackProject && p.role.toLowerCase().includes("frontend");
    }

    if (filter === "backend") {
      return (
        isFullStackProject ||
        p.category.toLowerCase().includes("node") ||
        p.category.toLowerCase().includes("spring") ||
        p.category.toLowerCase().includes("express")
      );
    }

    if (filter === "ui") {
      return (
        p.categoryTag.toLowerCase().includes("ui") ||
        p.categoryTag.toLowerCase().includes("frontend") ||
        !isFullStackProject
      );
    }

    return true;
  });

  return (
    <section
      id="projects"
      className="py-28 relative z-10 bg-[#070709] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <SectionReveal className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-cyan-400" />
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
              03 // Featured Projects & Case Studies
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Crafted with performance & precision.
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
                Filter by technical layer or click any project card to view full
                engineering details.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    playClickSound?.(650, "sine", 0.04);
                    setFilter(cat.id);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    filter === cat.id
                      ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20"
                      : "bg-white/5 text-slate-400 hover:text-white border border-white/10 hover:border-white/20"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={onSelectProject}
                playClickSound={playClickSound}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
