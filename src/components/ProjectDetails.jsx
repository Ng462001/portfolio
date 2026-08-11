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
  Code2,
  FileCode,
  Palette,
  Server,
  Database,
  Share2,
  Lock,
  ShieldCheck,
  Cloud,
  CreditCard,
  Coffee,
  Globe,
  Layout,
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import SectionReveal from "./SectionReveal";
import { scrollToTop } from "../hooks/useSmoothScroll";

// Mapping technology tags to custom Lucide icons, colors, and background accents
const TAG_CONFIG = {
  React: { icon: Code2, color: "#61DAFB", bg: "rgba(97, 218, 251, 0.12)" },
  "Node.js": { icon: Server, color: "#43D443", bg: "rgba(67, 212, 67, 0.12)" },
  Express: { icon: Server, color: "#F7DF1E", bg: "rgba(247, 223, 30, 0.12)" },
  MongoDB: { icon: Database, color: "#47A248", bg: "rgba(71, 162, 72, 0.12)" },
  "REST API": {
    icon: Share2,
    color: "#FF6C37",
    bg: "rgba(255, 108, 55, 0.12)",
  },
  "Tailwind CSS": {
    icon: Palette,
    color: "#06B6D4",
    bg: "rgba(6, 182, 212, 0.12)",
  },
  "Material UI": {
    icon: Layers,
    color: "#0081CB",
    bg: "rgba(0, 129, 203, 0.12)",
  },
  JWT: { icon: Lock, color: "#F59E0B", bg: "rgba(245, 158, 11, 0.12)" },
  Cloudinary: { icon: Cloud, color: "#3448C5", bg: "rgba(52, 72, 197, 0.12)" },
  Stripe: { icon: CreditCard, color: "#635BFF", bg: "rgba(99, 91, 255, 0.12)" },
  Java: { icon: Coffee, color: "#ED8B00", bg: "rgba(237, 139, 0, 0.12)" },
  "Spring Boot": {
    icon: Cpu,
    color: "#6DB33F",
    bg: "rgba(109, 179, 63, 0.12)",
  },
  "Spring Security": {
    icon: ShieldCheck,
    color: "#10B981",
    bg: "rgba(16, 185, 129, 0.12)",
  },
  MySQL: { icon: Database, color: "#4479A1", bg: "rgba(68, 121, 161, 0.12)" },
  "Spring Data JPA": {
    icon: Database,
    color: "#6DB33F",
    bg: "rgba(109, 179, 63, 0.12)",
  },
  Axios: {
    icon: CheckCircle2,
    color: "#8B5CF6",
    bg: "rgba(139, 92, 246, 0.12)",
  },
  "Bootstrap 5": {
    icon: Palette,
    color: "#A855F7",
    bg: "rgba(168, 85, 247, 0.12)",
  },
  Bootstrap: {
    icon: Palette,
    color: "#A855F7",
    bg: "rgba(168, 85, 247, 0.12)",
  },
  HTML5: { icon: Code2, color: "#E34F26", bg: "rgba(227, 79, 38, 0.12)" },
  CSS3: { icon: FileCode, color: "#1572B6", bg: "rgba(21, 114, 182, 0.12)" },
  JavaScript: {
    icon: FileCode,
    color: "#F7DF1E",
    bg: "rgba(247, 223, 30, 0.12)",
  },
  CORS: { icon: Globe, color: "#00B4D8", bg: "rgba(0, 180, 216, 0.12)" },
  "Responsive Web Design": {
    icon: Layout,
    color: "#38BDF8",
    bg: "rgba(56, 189, 248, 0.12)",
  },
};

export default function ProjectDetails({
  project,
  allProjects,
  onBack,
  onSelectProject,
}) {
  useEffect(() => {
    scrollToTop(true);
    const t1 = setTimeout(() => scrollToTop(true), 0);
    const t2 = setTimeout(() => scrollToTop(true), 50);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
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

            <div className="space-y-1 relative group/tooltip cursor-pointer">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1">
                <Tag className="w-3 h-3 text-violet-400" /> Core Stack
              </span>
              <span
                title={project.category}
                className="text-base font-bold text-cyan-300 block truncate"
              >
                {project.category}
              </span>
              {/* Tooltip Popup */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/tooltip:flex flex-col items-center z-50 pointer-events-none w-max max-w-xs sm:max-w-sm">
                <div className="bg-slate-900 text-cyan-300 text-xs font-semibold px-3.5 py-2 rounded-xl shadow-2xl border border-cyan-500/40 backdrop-blur-md text-center leading-snug">
                  {project.category}
                </div>
                <div className="w-2 h-2 -mt-1 bg-slate-900 border-r border-b border-cyan-500/40 rotate-45" />
              </div>
            </div>

            <div className="space-y-1 relative group/tooltip cursor-pointer">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-400" /> Key Highlight
              </span>
              <span
                title={project.highlight}
                className="text-base font-bold text-emerald-400 block truncate"
              >
                {project.highlight}
              </span>
              {/* Tooltip Popup */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/tooltip:flex flex-col items-center z-50 pointer-events-none w-max max-w-xs sm:max-w-sm">
                <div className="bg-slate-900 text-emerald-300 text-xs font-semibold px-3.5 py-2 rounded-xl shadow-2xl border border-emerald-500/40 backdrop-blur-md text-center leading-snug">
                  {project.highlight}
                </div>
                <div className="w-2 h-2 -mt-1 bg-slate-900 border-r border-b border-emerald-500/40 rotate-45" />
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Full Technology Stack Pills */}
        <SectionReveal className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
            <Cpu className="w-5 h-5 text-cyan-400" />
            Technologies & Tools Utilized
          </h3>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => {
              const conf = TAG_CONFIG[tag] || {
                icon: Code2,
                color: "#38BDF8",
                bg: "rgba(56, 189, 248, 0.12)",
              };
              const TagIcon = conf.icon;
              return (
                <div
                  key={tag}
                  className="px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/15 hover:border-cyan-400/40 text-sm font-mono text-slate-200 transition-all flex items-center gap-2.5 shadow-md hover:scale-[1.03] group cursor-default"
                >
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: conf.bg, color: conf.color }}
                  >
                    <TagIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold text-slate-200 group-hover:text-white transition-colors">
                    {tag}
                  </span>
                </div>
              );
            })}
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
