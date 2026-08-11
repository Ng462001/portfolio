import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function ProjectCard({ project, onSelect, playClickSound }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => {
        if (typeof playClickSound === 'function') playClickSound(800, 'sine', 0.05);
        if (typeof onSelect === 'function') onSelect(project);
      }}
      data-cursor="view"
      data-cursor-text="VIEW"
      className="group relative rounded-3xl bg-white/[0.03] border border-white/10 overflow-hidden hover:border-cyan-400/50 transition-all duration-500 flex flex-col justify-between cursor-pointer shadow-xl hover:shadow-cyan-500/10"
    >
      {/* Cover Image & Hover Glow */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/40 to-transparent" />

        {/* Featured Tag */}
        {project.featured && (
          <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-600/90 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase border border-indigo-400/30 shadow-lg">
            <Sparkles className="w-3 h-3 text-cyan-300" />
            Featured Case Study
          </div>
        )}

        {/* Metric Badges Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
          {project.metrics.slice(0, 2).map((m, idx) => (
            <div
              key={idx}
              className="px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-white flex items-center gap-1.5 text-xs font-mono"
            >
              <span className="text-cyan-400 font-bold">{m.value}</span>
              <span className="text-slate-300 text-[10px]">{m.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              {project.categoryTag}
            </span>
            <span className="text-xs text-slate-500 font-mono">{project.duration}</span>
          </div>

          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3 flex items-center justify-between">
            {project.title}
            <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
            {project.shortDescription}
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-[10px] font-mono text-slate-500 pl-1">
              +{project.tags.length - 4} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
