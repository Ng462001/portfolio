import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Sparkles,
  Layers,
  Calendar,
  User,
  Tag,
  ArrowRight,
  Send,
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import SectionReveal from "./SectionReveal";

export default function ProjectDetails({
  project,
  allProjects,
  onBack,
  onSelectProject,
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [project]);

  if (!project) return null;

  // Find index of current project to determine Prev / Next project
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject =
    allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div className="min-h-screen bg-[#070709] text-slate-100 selection:bg-indigo-600 selection:text-white relative pt-24 pb-20">
      {/* Background Glow Accents */}
      <div className="fixed top-20 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/15 via-cyan-600/10 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-20 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-purple-600/15 via-blue-600/10 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Sticky Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-[#070709]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <button
            onClick={onBack}
            data-cursor="magnetic"
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-xs transition-all hover:-translate-x-1 group"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-slate-400">
            <span className="text-slate-500">Portfolio</span>
            <span>/</span>
            <span className="text-cyan-300 font-semibold">{project.title}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg hover:shadow-cyan-500/30 transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs flex items-center gap-1.5 backdrop-blur-md transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub Code</span>
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* Main Page Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        {/* Page Header & Title */}
        <SectionReveal className="space-y-6 pt-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-bold tracking-wider uppercase">
              {project.categoryTag}
            </span>
            {project.featured && (
              <span className="px-3 py-1 rounded-full bg-indigo-600/30 border border-indigo-400/30 text-indigo-300 text-xs font-mono font-bold flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-cyan-300" />
                Featured Case Study
              </span>
            )}
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-slate-300 text-lg sm:text-2xl max-w-4xl font-light leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Quick Metadata Bar Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1">
                <User className="w-3 h-3 text-cyan-400" /> My Role
              </span>
              <span className="text-base font-bold text-white block">
                {project.role}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1">
                <Calendar className="w-3 h-3 text-indigo-400" /> Timeline
              </span>
              <span className="text-base font-bold text-white block">
                {project.duration}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1">
                <Tag className="w-3 h-3 text-violet-400" /> Core Stack
              </span>
              <span className="text-base font-bold text-cyan-300 block truncate">
                {project.category}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-400" /> Key Highlight
              </span>
              <span className="text-base font-bold text-emerald-400 block truncate">
                {project.highlight}
              </span>
            </div>
          </div>
        </SectionReveal>

        {/* Hero HD Image Banner Showcase */}
        <SectionReveal className="relative rounded-3xl overflow-hidden border border-white/15 bg-slate-900 shadow-2xl group">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-80" />
          </div>
        </SectionReveal>

        {/* Technical Metric Cards */}
        {project.metrics && project.metrics.length > 0 && (
          <SectionReveal className="space-y-4">
            <h3 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
              // Key Performance Highlights & Tech Specs
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-cyan-950/20 via-white/[0.02] to-transparent border border-white/10 hover:border-cyan-400/50 text-center transition-all shadow-xl space-y-2 group"
                >
                  <div className="text-3xl sm:text-5xl font-black text-cyan-400 drop-shadow-lg group-hover:scale-110 transition-transform">
                    {m.value}
                  </div>
                  <div className="text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        )}

        {/* Problem & Solution Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SectionReveal
            direction="left"
            className="p-8 sm:p-10 rounded-3xl bg-indigo-950/20 border border-indigo-500/30 backdrop-blur-xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              01. The Challenge & Problem
            </div>
            <h3 className="text-2xl font-bold text-white">Problem Statement</h3>
            <p className="text-slate-300 leading-relaxed text-base">
              {project.problem}
            </p>
          </SectionReveal>

          <SectionReveal
            direction="right"
            className="p-8 sm:p-10 rounded-3xl bg-cyan-950/20 border border-cyan-500/30 backdrop-blur-xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              02. Engineering & Technical Solution
            </div>
            <h3 className="text-2xl font-bold text-white">
              Architectural Solution
            </h3>
            <p className="text-slate-300 leading-relaxed text-base">
              {project.solution}
            </p>
          </SectionReveal>
        </div>

        {/* System Architecture & Technical Blueprint */}
        <SectionReveal className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/15 backdrop-blur-xl space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  System Architecture
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  // Technical Infrastructure & Data Flow
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#040406] border border-white/10 font-mono text-sm leading-relaxed text-slate-300 space-y-3 overflow-x-auto">
            <div className="text-xs text-slate-500">
              // Technical Blueprint & Stack Pipeline
            </div>
            <p className="text-cyan-300 font-semibold">
              {project.systemArchitecture}
            </p>
          </div>
        </SectionReveal>

        {/* Comprehensive Delivered Features Grid */}
        <SectionReveal className="space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
              <Layers className="w-4 h-4" /> Feature Catalog
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white">
              Delivered Key Features
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.keyFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 hover:border-cyan-400/40 transition-all flex items-start gap-4 group"
              >
                <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono text-slate-400">
                    Feature #{idx + 1}
                  </span>
                  <p className="text-base text-slate-200 leading-relaxed">
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Full Technology Stack Pills */}
        <SectionReveal className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
          <h3 className="text-xl font-bold text-white">
            Technologies & Tools Utilized
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-sm font-mono text-cyan-300 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </SectionReveal>

        {/* Next / Previous Project Navigation Bar */}
        <SectionReveal className="pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Previous Project Button */}
          <button
            onClick={() => onSelectProject(prevProject)}
            data-cursor="magnetic"
            className="p-6 rounded-3xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-cyan-400/40 transition-all text-left group flex flex-col justify-between space-y-4"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
              <span>Previous Project</span>
            </div>
            <div>
              <span className="text-xs text-cyan-300 font-mono block mb-1">
                {prevProject.categoryTag}
              </span>
              <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {prevProject.title}
              </h4>
            </div>
          </button>

          {/* Next Project Button */}
          <button
            onClick={() => onSelectProject(nextProject)}
            data-cursor="magnetic"
            className="p-6 rounded-3xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-cyan-400/40 transition-all text-right group flex flex-col items-end justify-between space-y-4"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span>Next Project</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </div>
            <div>
              <span className="text-xs text-cyan-300 font-mono block mb-1">
                {nextProject.categoryTag}
              </span>
              <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {nextProject.title}
              </h4>
            </div>
          </button>
        </SectionReveal>
      </div>
    </div>
  );
}
