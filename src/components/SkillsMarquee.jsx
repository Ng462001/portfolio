import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2, FileCode, Palette, Zap, Box, Server, Terminal,
  Database, Activity, Share2, Container, Cloud, GitBranch, CheckCircle
} from 'lucide-react';
import SectionReveal from './SectionReveal';

const ICON_MAP = {
  Code2, FileCode, Palette, Zap, Box, Server, Terminal,
  Database, Activity, Share2, Container, Cloud, GitBranch, CheckCircle
};

export default function SkillsMarquee({ skillCategories, skills, playClickSound }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  // Duplicate list for infinite smooth marquee ticker loop
  const marqueeItems = [...skills, ...skills];

  return (
    <section id="skills" className="py-24 relative z-10 bg-[#070709] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-indigo-500" />
            <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase">
              02 // Tech Stack & Competencies
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
            Technologies & Software Architecture.
          </h2>
        </SectionReveal>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap gap-2">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                playClickSound?.(650, 'sine', 0.04);
                setActiveCategory(cat.id);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/20'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Infinite Marquee Strip 1 (Left to Right) */}
      <div className="relative w-full overflow-hidden py-4 mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#070709] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#070709] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 35,
            ease: 'linear',
          }}
        >
          {marqueeItems.map((skill, idx) => {
            const IconComponent = ICON_MAP[skill.icon] || Code2;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-cyan-400/50 hover:bg-white/[0.08] transition-all group shrink-0"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 text-cyan-400 group-hover:scale-110 transition-transform"
                  style={{ color: skill.color }}
                >
                  <IconComponent className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {skill.level}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Skill Grid for Filtered View */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {filteredSkills.map((skill, idx) => {
            const IconComponent = ICON_MAP[skill.icon] || Code2;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.03 }}
                className="p-3 rounded-xl bg-white/[0.02] border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all text-center flex flex-col items-center gap-2 group"
              >
                <div
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ color: skill.color }}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
                <span className="text-[9px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                  {skill.level}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
