import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  Download,
  MapPin,
} from "lucide-react";
import SectionReveal from "./SectionReveal";

export default function About({
  personal,
  experience,
  education,
  playClickSound,
}) {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section
      id="about"
      className="py-28 relative z-10 border-t border-white/5 bg-[#08080c]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <SectionReveal className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-cyan-400" />
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
              01 // About & Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Architecting modern web software with passion.
          </h2>
        </SectionReveal>

        {/* Top Grid: Bio + Visual Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Bio Column */}
          <SectionReveal direction="left" className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
              {personal.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-sm text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Open for Developer Roles</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClickSound?.(600, "sine", 0.05)}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-sm transition-all group"
              >
                <Download className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Full Resume</span>
              </a>
            </div>
          </SectionReveal>

          {/* Visual Frame / Avatar Shield */}
          <SectionReveal
            direction="right"
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 group">
              {/* Outer Glowing Rings */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-30 blur-xl group-hover:opacity-60 transition duration-500" />

              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/20 bg-slate-900 shadow-2xl p-2">
                <img
                  src={personal.profileImage || "/myimage.jpg"}
                  alt={personal.name}
                  className="w-full h-full object-cover object-top rounded-2xl transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#070709]/85 backdrop-blur-md border border-white/15 text-center">
                  <span className="text-sm font-mono font-bold text-white tracking-wide">
                    {personal.title}
                  </span>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Timeline Tabs: Work vs Education */}
        <SectionReveal className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  playClickSound?.(700, "sine", 0.04);
                  setActiveTab("experience");
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  activeTab === "experience"
                    ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/30"
                    : "bg-white/5 text-slate-400 hover:text-white"
                }`}
              >
                <Briefcase className="w-4 h-4" />
                Work Experience
              </button>

              <button
                onClick={() => {
                  playClickSound?.(700, "sine", 0.04);
                  setActiveTab("education");
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  activeTab === "education"
                    ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/30"
                    : "bg-white/5 text-slate-400 hover:text-white"
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                Education
              </button>
            </div>

            <span className="text-xs font-mono text-slate-500">
              {activeTab === "experience"
                ? `${experience.length} Positions`
                : `${education.length} Degrees`}
            </span>
          </div>

          {/* Experience List */}
          {activeTab === "experience" && (
            <div className="space-y-8">
              {experience.map((item, idx) => (
                <div
                  key={idx}
                  className="relative pl-8 border-l border-white/15 group"
                >
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-indigo-500 border-2 border-[#08080c] group-hover:scale-150 group-hover:bg-cyan-400 transition-all duration-300" />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.role}{" "}
                      <span className="text-indigo-400 font-normal">
                        @ {item.company}
                      </span>
                    </h3>
                    <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {item.period}
                      </span>
                      <span>•</span>
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-2">
                    {item.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="text-xs text-slate-400 flex items-start gap-2"
                      >
                        <span className="text-cyan-400 font-bold mt-0.5">
                          ›
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Education List */}
          {activeTab === "education" && (
            <div className="space-y-6">
              {education.map((item, idx) => (
                <div
                  key={idx}
                  className="relative pl-8 border-l border-white/15"
                >
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-cyan-400 border-2 border-[#08080c]" />
                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.degree}
                  </h3>
                  <div className="text-sm text-indigo-400 font-semibold mb-2">
                    {item.institution}
                  </div>
                  <div className="text-xs font-mono text-slate-400 mb-3">
                    {item.period}
                  </div>
                  <p className="text-xs text-slate-300">{item.details}</p>
                </div>
              ))}
            </div>
          )}
        </SectionReveal>
      </div>
    </section>
  );
}
