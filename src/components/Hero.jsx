import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, FolderGit2, Mail, ArrowDown } from "lucide-react";
import { useMagneticHover } from "../hooks/useMagneticHover";

export default function Hero({ personal, stats, playClickSound }) {
  const canvasRef = useRef(null);
  const { ref: primaryBtnRef, position: primaryBtnPos } = useMagneticHover(0.3);
  const { ref: secondaryBtnRef, position: secondaryBtnPos } =
    useMagneticHover(0.3);

  // Background Interactive Canvas Grid Mesh Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle nodes
    const particleCount = Math.min(Math.floor(width / 25), 45);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
    }));

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle glowing background nodes & connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99, 102, 241, 0.4)";
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connection to mouse position
        const mdx = p.x - mouseX;
        const mdy = p.y - mouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 180) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(6, 182, 212, ${0.25 * (1 - mdist / 180)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const headlineWords =
    "Crafting Digital Experiences with Engineering Rigor & Aesthetic Vision.".split(
      " ",
    );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      {/* Ambient Gradient Mesh Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/10 to-cyan-500/20 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8 shadow-xl shadow-indigo-500/5"
        >
          <img
            src={personal.profileImage || "/myimage.jpg"}
            alt={personal.name}
            className="w-6 h-6 rounded-full object-cover border border-cyan-400/50"
          />
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-xs font-mono font-medium text-slate-300">
            {personal.availability}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 ml-1" />
        </motion.div>

        {/* Hero Main Headline (Word-by-word reveal) */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white max-w-5xl leading-[1.08] mb-8"
        >
          {headlineWords.map((word, idx) => {
            const isGradient =
              word.includes("Engineering") ||
              word.includes("Aesthetic") ||
              word.includes("Vision.");
            return (
              <motion.span
                key={idx}
                variants={wordVariants}
                className={`inline-block mr-[0.25em] ${
                  isGradient
                    ? "bg-gradient-to-r from-cyan-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent drop-shadow-sm"
                    : ""
                }`}
              >
                {word}
              </motion.span>
            );
          })}
        </motion.h1>

        {/* Tagline / Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl font-normal leading-relaxed mb-10"
        >
          Hi, I'm{" "}
          <span className="text-white font-semibold">{personal.name}</span>.{" "}
          {personal.tagline}
        </motion.p>

        {/* Magnetic Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <motion.a
            ref={primaryBtnRef}
            style={{ x: primaryBtnPos.x, y: primaryBtnPos.y }}
            href="#projects"
            onClick={() => playClickSound?.(700, "sine", 0.05)}
            data-cursor="magnetic"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white font-bold text-sm tracking-wide shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 flex items-center gap-2.5 transition-shadow group"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>Explore Featured Work</span>
          </motion.a>

          <motion.a
            ref={secondaryBtnRef}
            style={{ x: secondaryBtnPos.x, y: secondaryBtnPos.y }}
            href="#contact"
            onClick={() => playClickSound?.(500, "sine", 0.05)}
            data-cursor="magnetic"
            className="px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-sm tracking-wide backdrop-blur-xl flex items-center gap-2.5 transition-colors"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Get in Touch</span>
          </motion.a>
        </motion.div>

        {/* Floating Quick Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full"
        >
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-indigo-500/40 transition-colors group text-left"
            >
              <div className="text-2xl sm:text-4xl font-black text-white group-hover:text-cyan-400 transition-colors flex items-baseline">
                {item.value}
                <span className="text-indigo-400 text-lg sm:text-2xl ml-0.5">
                  {item.suffix}
                </span>
              </div>
              <div className="text-xs text-slate-400 font-medium tracking-wide mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1.4, duration: 0.5 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
          }}
          className="mt-16 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors"
          aria-label="Scroll down to About section"
        >
          <span className="text-[10px] uppercase font-mono tracking-widest">
            Scroll
          </span>
          <ArrowDown className="w-4 h-4 text-cyan-400" />
        </motion.a>
      </div>
    </section>
  );
}
