import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Copy,
  Check,
  Send,
  Sparkles,
  Loader2,
  AlertCircle,
} from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  FacebookIcon,
} from "./SocialIcons";
import { useMagneticHover } from "../hooks/useMagneticHover";
import SectionReveal from "./SectionReveal";

export default function ContactSection({ personal, playClickSound }) {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { ref: sendBtnRef, position: sendBtnPos } = useMagneticHover(0.3);

  const handleCopyEmail = () => {
    if (playClickSound) playClickSound(900, "sine", 0.05);
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (playClickSound) playClickSound(1000, "triangle", 0.1);
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const apiKey =
        import.meta.env.VITE_ACCESS_KEY ||
        "ca8c5738-1754-495b-9032-911a4092a577";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: apiKey,
          name: formState.name,
          email: formState.email,
          subject:
            formState.subject || `Portfolio Inquiry from ${formState.name}`,
          message: formState.message,
          from_name: `${formState.name} (Portfolio Website)`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        setErrorMessage(
          result.message || "Failed to submit form. Please check your details.",
        );
      }
    } catch (error) {
      setErrorMessage("Network connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-28 relative z-10 bg-[#070709] border-t border-white/5"
    >
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-600/10 via-indigo-600/10 to-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {personal.availability}
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            Have an ambitious project? <br />
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
              Let's build it together.
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Whether you have a full product roadmap or just an early concept,
            I'm always open to discussing new opportunities and technical
            challenges.
          </p>

          {/* Quick Copy Email Pill */}
          <div className="mt-8 inline-flex items-center gap-3 p-2 pl-5 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-xl">
            <span className="font-mono text-sm text-cyan-300">
              {personal.email}
            </span>
            <button
              onClick={handleCopyEmail}
              data-cursor="magnetic"
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </SectionReveal>

        {/* Form & Socials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Social Links & Info Card */}
          <SectionReveal direction="left" className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Connect & Collaborate
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed">
                Preferred communication channel is email. You can also reach out
                via LinkedIn, GitHub, Instagram, or Facebook.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    playClickSound && playClickSound(600, "sine", 0.04)
                  }
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-sm text-white">GitHub</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 group-hover:text-cyan-300">
                    @Ng462001
                  </span>
                </a>

                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    playClickSound && playClickSound(600, "sine", 0.04)
                  }
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-sm text-white">
                      LinkedIn
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 group-hover:text-cyan-300">
                    in/nikhil-gahane
                  </span>
                </a>

                <a
                  href={personal.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    playClickSound && playClickSound(600, "sine", 0.04)
                  }
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <InstagramIcon className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-sm text-white">
                      Instagram
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 group-hover:text-cyan-300">
                    @nikhilgahane
                  </span>
                </a>

                <a
                  href={personal.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    playClickSound && playClickSound(600, "sine", 0.04)
                  }
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <FacebookIcon className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-sm text-white">
                      Facebook
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 group-hover:text-cyan-300">
                    nikhil.gahane.2001
                  </span>
                </a>
              </div>
            </div>
          </SectionReveal>

          {/* Contact Form */}
          <SectionReveal direction="right" className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-400 max-w-md mx-auto">
                    Thank you for reaching out. Your message has been sent
                    directly to Nikhil's inbox.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs text-cyan-300 font-bold"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="Your Name"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      placeholder="Enter Subject"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Type your message here..."
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm resize-none"
                    />
                  </div>

                  <motion.button
                    ref={sendBtnRef}
                    style={{ x: sendBtnPos.x, y: sendBtnPos.y }}
                    type="submit"
                    disabled={isSubmitting}
                    data-cursor="magnetic"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white font-bold text-sm tracking-wide shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Inquiry Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
