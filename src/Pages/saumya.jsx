// src/Pages/saumya.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedin,
  FaVideo,
  FaPenFancy,
  FaCameraRetro,
  FaBullhorn,
  FaPlay,
  FaLightbulb,
} from "react-icons/fa";

/**
 * Saumya - Creator Vibes (Option C: Cream + Peach + Light Purple)
 * - Includes modal + video preview for sample work
 * - Put thumbnails in: /src/assets/thumbs/ugc1.jpg ...
 * - Put videos in: /src/assets/videos/ugc1.mp4 ...
 */

const PILLARS = [
  { icon: FaVideo, title: "Short Form Edits", desc: "Fast, platform-optimized edits that hook." },
  { icon: FaPenFancy, title: "Scripting & Hooks", desc: "Viral-first scripts & attention hooks." },
  { icon: FaCameraRetro, title: "Product Shoots", desc: "Aesthetic product visuals for socials." },
];

const SKILLS = [
  { icon: FaPlay, title: "Short Form Video" },
  { icon: FaPenFancy, title: "Storytelling" },
  { icon: FaCameraRetro, title: "Product Shoots" },
  { icon: FaBullhorn, title: "Brand Collabs" },
  { icon: FaLightbulb, title: "Creative Direction" },
  { icon: FaVideo, title: "Ad Creative" },
  { icon: FaPlay, title: "CapCut / Premiere" },
  { icon: FaPenFancy, title: "UGC Scripts" },
];

// SAMPLE WORK DATA - update file names as you add assets
const SAMPLE_WORK = [
  {
    id: 1,
    title: "Sample Video 1",
    desc: "Short description of the asset and result.",
    thumb: "/thumbs/ugc1.jpg",
    video: "/videos/ugc1.mp4",

  },
  {
    id: 2,
    title: "Sample Video 2",
    desc: "Short description of the asset and result.",
    thumb: "/thumbs/ugc2.jpg",
    video: "/videos/ugc1.mp4",

  },
  {
    id: 3,
    title: "Sample Video 3",
    desc: "Short description of the asset and result.",
    thumb: "/thumbs/ugc3.jpg",
    video: "/videos/ugc1.mp4",

  },
  {
    id: 4,
    title: "Sample Video 4",
    desc: "Short description of the asset and result.",
    thumb: "/thumbs/ugc4.jpg",
    video: "/videos/ugc1.mp4",

  },
  {
    id: 5,
    title: "Sample Video 5",
    desc: "Short description of the asset and result.",
    thumb: "/thumbs/ugc5.jpg",
    video: "/videos/ugc1.mp4",

  },
  {
    id: 6,
    title: "Sample Video 6",
    desc: "Short description of the asset and result.",
    thumb: "/thumbs/ugc6.jpg",
    video: "/videos/ugc1.mp4",

  },
];

export default function Saumya() {
  const [modal, setModal] = useState(null); // modal will hold item object or null

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff9f3] via-[#fff2e6] to-[#f5e9ff] text-[#2b1d0f] antialiased relative overflow-x-hidden">

      {/* BACK + TOP */}
      <div className="p-5 z-10 relative">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/#team" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/6 border border-black/8 hover:scale-105 transition">
            ← Back
          </Link>

          <div className="hidden md:flex gap-3">
            <a href="https://www.instagram.com/whizz_creates/" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-full bg-gradient-to-br from-[#ffd9e0]/30 to-[#fff1d2]/30 border border-black/6 hover:scale-105 transition">IG</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-full bg-gradient-to-br from-[#e8d6ff]/30 to-[#fff1d2]/30 border border-black/6 hover:scale-105 transition">IN</a>
          </div>
        </div>
      </div>

      {/* BACKGROUND BLOBS + AURORA WAVES */}
      <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
        <div style={{ background: 'radial-gradient(circle at 20% 30%, rgba(255,204,170,0.18), transparent 30%)' }} className="absolute left-[-120px] top-10 w-[420px] h-[420px] rounded-full blur-3xl opacity-90" />
        <div style={{ background: 'radial-gradient(circle at 80% 70%, rgba(220,190,255,0.12), transparent 30%)' }} className="absolute right-[-100px] bottom-10 w-[560px] h-[560px] rounded-full blur-3xl opacity-80" />

        <svg className="absolute inset-0 w-full h-full -z-10" preserveAspectRatio="none" viewBox="0 0 1200 600">
          <defs>
            <linearGradient id="sa1" x1="0" x2="1">
              <stop offset="0" stopColor="#ffd1b2" stopOpacity="0.10"/>
              <stop offset="1" stopColor="#d8b3ff" stopOpacity="0.10"/>
            </linearGradient>
          </defs>
          <path d="M0,320 C200,260 400,380 600,330 C800,280 1000,360 1200,320 L1200,600 L0,600 Z" fill="url(#sa1)">
            <animate attributeName="d" dur="14s" repeatCount="indefinite"
              values="
                M0,320 C200,260 400,380 600,330 C800,280 1000,360 1200,320 L1200,600 L0,600 Z;
                M0,300 C200,280 400,360 600,300 C800,240 1000,400 1200,300 L1200,600 L0,600 Z;
                M0,320 C200,260 400,380 600,330 C800,280 1000,360 1200,320 L1200,600 L0,600 Z" />
          </path>
        </svg>
      </div>

      {/* HERO */}
      <header className="px-6 z-10 relative">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{opacity:0, y:18}} animate={{opacity:1, y:0}} transition={{duration:0.9}} className="inline-block">
            <div className="relative inline-flex items-center justify-center mx-auto">
              <div className="absolute -z-10 rounded-full w-64 h-64 md:w-96 md:h-96" style={{ boxShadow: "0 40px 120px rgba(214,185,122,0.09)", background: "radial-gradient(circle at 30% 30%, rgba(255,221,180,0.12), transparent 30%)" }} />
              <img src="/thumbs/team2.jpg" alt="Saumya" className="w-36 h-36 md:w-56 md:h-56 rounded-full object-cover border-4 border-[#e7cfa6]/30 shadow-xl" />
            </div>

            <h1 className="mt-6 text-3xl md:text-5xl font-extrabold">Saumya Chandra</h1>
            <p className="mt-2 text-sm md:text-lg opacity-95">UGC Content Creator • Short-form & Brand Storytelling</p>

            <p className="mx-auto max-w-3xl mt-6 text-[15px] opacity-90 leading-relaxed">
              I create scroll-stopping, conversion-focused content — scripted hooks, fast edits and brand-forward visuals tailored for platforms.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3 md:hidden">
              <a href="https://www.instagram.com/whizz_creates/" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-full bg-gradient-to-br from-[#ffd9e0]/30 to-[#fff1d2]/30 border border-black/6 hover:scale-105 transition">IG</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-full bg-gradient-to-br from-[#e8d6ff]/30 to-[#fff1d2]/30 border border-black/6 hover:scale-105 transition">IN</a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* SECTION 2: CONTENT PILLARS */}
      <section className="mt-10 px-4 z-10 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">Content Pillars</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map((p, idx) => {
              const C = p.icon;
              return (
                <motion.article key={p.title} whileHover={{ scale: 1.03 }} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }} className="p-6 rounded-2xl bg-white/60 shadow-md border border-black/6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#fff1d2]/40 to-[#ffd9e0]/40 border border-black/8">
                      <C className="text-2xl text-[#c57f5a]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{p.title}</h3>
                      <p className="text-sm mt-1 opacity-90">{p.desc}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: SKILLS MARQUEE (icons + text) */}
      <section className="mt-10 px-4 z-10 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg md:text-2xl font-semibold text-center mb-4">Skills & Tools</h2>

          <div className="overflow-hidden">
            <div className="flex gap-4 whitespace-nowrap py-3">
              {[0,1].map(rep => (
                <div key={'s1-'+rep} className="flex gap-4 animate-marquee-fast">
                  {SKILLS.map((s, i) => {
                    const C = s.icon;
                    return (
                      <motion.div key={s.title+i+rep} whileHover={{ scale: 1.08, translateY: -4 }} transition={{ type: "spring", stiffness: 200, damping: 14 }} className="px-4 py-2 rounded-full bg-white/40 backdrop-blur border border-black/8 shadow-sm flex items-center gap-3 mx-1">
                        <C className="text-xl text-[#b06d5f]" />
                        <span className="hidden sm:inline text-sm font-medium">{s.title}</span>
                      </motion.div>
                    );
                  })}
                </div>
              ))}
            </div>

            <div className="flex gap-4 whitespace-nowrap py-3 mt-3">
              {[0,1].map(rep => (
                <div key={'s2-'+rep} className="flex gap-4 animate-marquee-slower">
                  {SKILLS.slice().reverse().map((s, i) => {
                    const C = s.icon;
                    return (
                      <motion.div key={s.title+'r'+i+rep} whileHover={{ scale: 1.08, translateY: -4 }} transition={{ type: "spring", stiffness: 200, damping: 14 }} className="px-4 py-2 rounded-full bg-white/40 backdrop-blur border border-black/8 shadow-sm flex items-center gap-3 mx-1">
                        <C className="text-xl text-[#b06d5f]" />
                        <span className="hidden sm:inline text-sm font-medium">{s.title}</span>
                      </motion.div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: METRICS */}
      <section className="mt-10 px-4 z-10 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <motion.div initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} transition={{delay:0}} className="p-6 rounded-2xl bg-white/60 border border-black/6 shadow-md text-center">
            <div className="text-4xl font-bold">120K+</div>
            <div className="mt-2 text-sm opacity-90">Average Monthly Views</div>
          </motion.div>

          <motion.div initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} transition={{delay:0.08}} className="p-6 rounded-2xl bg-white/60 border border-black/6 shadow-md text-center">
            <div className="text-4xl font-bold">40+</div>
            <div className="mt-2 text-sm opacity-90">Brand Collaborations</div>
          </motion.div>

          <motion.div initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} transition={{delay:0.16}} className="p-6 rounded-2xl bg-white/60 border border-black/6 shadow-md text-center">
            <div className="text-4xl font-bold">6+</div>
            <div className="mt-2 text-sm opacity-90">Years Creating</div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: SHOWCASE GRID + CTA */}
      <section className="mt-10 px-4 z-10 relative pb-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">Sample Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SAMPLE_WORK.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.03 }}
                className="block rounded-2xl overflow-hidden shadow-md bg-white/40 border border-black/8 cursor-pointer"
                onClick={() => setModal(item)}
              >
                <div className="w-full h-40 overflow-hidden">
                  <img src={item.thumb} alt={item.title} className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-4">
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-sm mt-1 opacity-90">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href="mailto:pihoo8381@gmail.com" className="px-6 py-3 rounded-full bg-gradient-to-br from-[#ffd9e0] to-[#fbe0b2] border border-black/6">Work together →</a>
          </div>
        </div>
      </section>

      {/* FOOTER SPACE */}
      <div className="h-24" />

      {/* MODAL (video preview) */}
      {modal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.18 }} className="bg-white rounded-2xl shadow-xl max-w-3xl w-full overflow-hidden">
            <div className="relative">
              <button
                onClick={() => setModal(null)}
                className="absolute top-3 right-3 z-50 bg-white/90 rounded-full px-3 py-1 shadow-md"
                aria-label="Close"
              >
                ×
              </button>

              <video className="w-full h-[60vh] md:h-[65vh] bg-black" controls autoPlay>
                <source src={modal.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="p-4">
                <h3 className="font-semibold text-lg">{modal.title}</h3>
                <p className="text-sm mt-1 opacity-80">{modal.desc}</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* INLINE CSS: marquee animations */}
      <style>{`
        @keyframes marqueeFast { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }
        @keyframes marqueeSlow { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }

        .animate-marquee-fast { animation: marqueeFast 14s linear infinite; }
        .animate-marquee-slower { animation: marqueeSlow 22s linear infinite; }

        @media (max-width: 640px) {
          .animate-marquee-fast, .animate-marquee-slower { animation-duration: 10s; }
        }
      `}</style>
    </div>
  );
}
