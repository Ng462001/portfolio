import React from "react";
import { ArrowUp, Code2 } from "lucide-react";
import { useMagneticHover } from "../hooks/useMagneticHover";

export default function Footer({ personal, playClickSound }) {
  const { ref: topBtnRef, position: topBtnPos } = useMagneticHover(0.4);

  const scrollToTop = () => {
    playClickSound?.(800, "sine", 0.05);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 relative z-10 bg-[#040406] border-t border-white/10 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-cyan-400">
            <Code2 className="w-4 h-4" />
          </div>
          <div className="flex flex-col text-xs">
            <span className="font-bold text-white">
              © {new Date().getFullYear()} {personal.name}. All rights reserved.
            </span>
            <span className="text-slate-500 font-mono">
              Designed & Built by Nikhil
            </span>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          ref={topBtnRef}
          style={{ x: topBtnPos.x, y: topBtnPos.y }}
          onClick={scrollToTop}
          data-cursor="magnetic"
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white transition-all hover:scale-110 flex items-center justify-center group"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform text-cyan-400" />
        </button>
      </div>
    </footer>
  );
}
