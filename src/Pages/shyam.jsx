// src/Pages/shyam.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* react-icons */
import { FaReact, FaFigma, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiFramer, SiGreensock, SiVite } from "react-icons/si";
import { MdSpeed } from "react-icons/md";

/**
 * Ultra-premium Shyam page
 * - Aurora Glow background (CSS + SVG)
 * - 2-line icon-only marquee (responsive)
 * - Hover glow (Framer Motion)
 * - Social links (Instagram + LinkedIn) dummy
 *
 * Paste this file exactly as src/Pages/shyam.jsx
 */

const ICONS = [
  { Comp: FaReact, key: "react" },
  { Comp: SiTailwindcss, key: "tailwind" },
  { Comp: SiJavascript, key: "js" },
  { Comp: SiTypescript, key: "ts" },
  { Comp: SiFramer, key: "framer" },
  { Comp: SiGreensock, key: "gsap" },
  { Comp: SiVite, key: "vite" },
  { Comp: FaFigma, key: "figma" },
  { Comp: FaGithub, key: "github" },
  { Comp: FaHtml5, key: "html5" },
  { Comp: FaCss3Alt, key: "css3" },
  { Comp: MdSpeed, key: "perf" },
];

export default function Shyam() {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#040316] text-white antialiased">
      {/* AURORA BACKGROUND LAYERS */}
      <div aria-hidden className="fixed inset-0 -z-20 pointer-events-none">
        {/* soft radial bokeh */}
        <div className="absolute -left-64 top-10 w-[680px] h-[680px] rounded-full blur-[120px] opacity-30" style={{ background: "radial-gradient(circle at 20% 20%, rgba(60,200,255,0.16), transparent 30%), radial-gradient(circle at 80% 80%, rgba(120,108,255,0.12), transparent 30%)" }} />

        {/* aurora wave 1 */}
        <svg className="absolute inset-0 w-full h-full -z-10" preserveAspectRatio="none" viewBox="0 0 1200 600">
          <defs>
            <linearGradient id="auroraA" x1="0" x2="1">
              <stop offset="0" stopColor="#003f6b" stopOpacity="0.26"/>
              <stop offset="0.5" stopColor="#005c8a" stopOpacity="0.18"/>
              <stop offset="1" stopColor="#1a2a6c" stopOpacity="0.24"/>
            </linearGradient>
            <linearGradient id="auroraB" x1="0" x2="1">
              <stop offset="0" stopColor="#00ffea" stopOpacity="0.06"/>
              <stop offset="1" stopColor="#b07cff" stopOpacity="0.06"/>
            </linearGradient>
          </defs>
          <g>
            <path id="waveA" d="M0,200 C200,120 400,280 600,220 C800,160 1000,240 1200,200 L1200,600 L0,600 Z" fill="url(#auroraA)">
              <animate attributeName="d" dur="12s" repeatCount="indefinite"
                values="
                  M0,200 C200,120 400,280 600,220 C800,160 1000,240 1200,200 L1200,600 L0,600 Z;
                  M0,220 C200,180 400,240 600,200 C800,160 1000,260 1200,220 L1200,600 L0,600 Z;
                  M0,200 C200,120 400,280 600,220 C800,160 1000,240 1200,200 L1200,600 L0,600 Z" />
            </path>
            <path id="waveB" d="M0,260 C200,200 400,320 600,260 C800,200 1000,300 1200,260 L1200,600 L0,600 Z" fill="url(#auroraB)" opacity="0.6">
              <animate attributeName="d" dur="18s" repeatCount="indefinite"
                values="
                  M0,260 C200,200 400,320 600,260 C800,200 1000,300 1200,260 L1200,600 L0,600 Z;
                  M0,240 C200,180 400,300 600,240 C800,180 1000,280 1200,240 L1200,600 L0,600 Z;
                  M0,260 C200,200 400,320 600,260 C800,200 1000,300 1200,260 L1200,600 L0,600 Z" />
            </path>
          </g>
        </svg>
      </div>

      {/* TOP NAV / BACK */}
      <div className="p-5 z-10 relative">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/#team" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/6 border border-white/10 hover:scale-105 transition-transform">
            ← Back
          </Link>

          <div className="hidden md:flex gap-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-full bg-gradient-to-br from-[#ff9db6]/10 to-[#ffd9a8]/8 border border-white/6 hover:scale-105 transition">
              IG
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-full bg-gradient-to-br from-[#7c6cff]/10 to-[#00f0ff]/8 border border-white/6 hover:scale-105 transition">
              IN
            </a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <header className="px-6 z-10 relative">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <div className="relative inline-flex items-center justify-center mx-auto">
              <div className="absolute -z-10 rounded-full w-72 h-72 md:w-96 md:h-96" style={{ boxShadow: "0 50px 140px rgba(30,90,150,0.14)", background: "radial-gradient(circle at 30% 30%, rgba(0,255,220,0.06), transparent 30%)" }} />
              <img src="/src/assets/Team1.jpg" alt="Shyam" className="w-36 h-36 md:w-56 md:h-56 rounded-full object-cover border-4 border-[#7c6cff]/30 shadow-[0_40px_120px_rgba(0,0,0,0.6)]" />
            </div>

            <h1 className="mt-6 text-3xl md:text-5xl font-extrabold tracking-tight">Shyam Shukla</h1>
            <p className="text-[#cfefff] mt-2 md:text-lg">Frontend Developer • Motion & Performance</p>

            <p className="mx-auto max-w-3xl mt-6 text-gray-300 leading-relaxed text-sm md:text-base">
              I build lively, high-performance interfaces with thoughtful motion and clean engineering — interfaces that feel fast and human.
            </p>

            {/* socials small (mobile visible) */}
            <div className="mt-6 flex items-center justify-center gap-3 md:hidden">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-br from-[#ff9db6]/10 to-[#ffd9a8]/8 border border-white/6 hover:scale-105 transition">IG</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-br from-[#7c6cff]/10 to-[#00f0ff]/8 border border-white/6 hover:scale-105 transition">IN</a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ====== UPGRADED SKILLS: 2-LINE ICON MARQUEE ====== */}
      <section className="mt-10 px-4 z-10 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg md:text-2xl font-semibold text-center mb-4">Core Tools & Motion</h2>

          {/* marquee wrapper */}
          <div className="overflow-hidden">
            {/* LINE 1 */}
            <div className="flex gap-4 whitespace-nowrap py-3">
              {[0,1].map(rep => (
                <div key={"r1-"+rep} className="flex gap-4 animate-marquee-fast">
                  {ICONS.map((ic, i) => {
                    const C = ic.Comp;
                    return (
                      <motion.div
                        key={"l1-"+ic.key+i+rep}
                        whileHover={{ scale: 1.16, translateY: -6 }}
                        transition={{ type: "spring", stiffness: 220, damping: 14 }}
                        className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#02102a]/20 to-[#051032]/12 border border-white/6 shadow-md mx-1"
                      >
                        <C className="text-2xl md:text-3xl text-[#dff9ff] drop-shadow-[0_6px_20px_rgba(124,108,255,0.12)]" />
                      </motion.div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* LINE 2 (slower, opposite direction) */}
            <div className="flex gap-4 whitespace-nowrap py-3 mt-4">
              {[0,1].map(rep => (
                <div key={"r2-"+rep} className="flex gap-4 animate-marquee-slower">
                  {ICONS.slice().reverse().map((ic, i) => {
                    const C = ic.Comp;
                    return (
                      <motion.div
                        key={"l2-"+ic.key+i+rep}
                        whileHover={{ scale: 1.16, translateY: -6 }}
                        transition={{ type: "spring", stiffness: 220, damping: 14 }}
                        className="w-16 h-16 md:w-22 md:h-22 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#02102a]/18 to-[#04102c]/10 border border-white/6 shadow-sm mx-1"
                      >
                        <C className="text-xl md:text-2xl text-[#bfefff]" />
                      </motion.div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SMALL CTA + SOCIAL ICONS */}
      <section className="mt-10 px-4 z-10 relative">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex gap-3">
            <a href="mailto:shyamexy061@gmail.com" className="px-5 py-3 rounded-full bg-gradient-to-br from-[#00f0ff]/20 to-[#7c6cff]/20 border border-white/8 hover:scale-105 transition">Contact</a>
            <a href="https://shyam-creation-web.netlify.app/" className="px-5 py-3 rounded-full bg-white/6 border border-white/10 hover:scale-105 transition">Portfolio</a>
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <a href="https://github.com/0x5HY4M" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/6 flex items-center justify-center hover:scale-105 transition">GH</a>
            <a href="https://www.instagram.com/_corematrix_0/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff9db6]/10 to-[#ffd9a8]/8 flex items-center justify-center hover:scale-105 transition">IG</a>
            <a href="www.linkedin.com/in/shyam-shukla-836b77362" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7c6cff]/10 to-[#00f0ff]/8 flex items-center justify-center hover:scale-105 transition">IN</a>
          </div>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="h-28" />

      {/* INLINE CSS: marquee animations + responsive tweaks */}
      <style>{`
        /* fast marquee (line 1) - moves left */
        @keyframes marqueeFast {
          0% { transform: translateX(0) }
          100% { transform: translateX(-50%) }
        }
        .animate-marquee-fast { animation: marqueeFast 12s linear infinite; }

        /* slower marquee (line 2) - moves right (reverse direction by negative translate) */
        @keyframes marqueeSlow {
          0% { transform: translateX(0) }
          100% { transform: translateX(-50%) }
        }
        .animate-marquee-slower { animation: marqueeSlow 10s linear infinite; transform-direction: reverse; }

        /* small screens: reduce icon size and spacing */
        @media (max-width: 640px) {
          .animate-marquee-fast, .animate-marquee-slower { animation-duration: 10s; }
        }

        /* nice glow on icons */
        .icon-glow { filter: drop-shadow(0 8px 30px rgba(124,108,255,0.12)); }

      `}</style>
    </div>
  );
}
