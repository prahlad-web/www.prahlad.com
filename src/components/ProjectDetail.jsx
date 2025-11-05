import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiVite } from "react-icons/si";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const localProjects = [
      {
        id: 1,
        Title: "Vroom.com – Car Rental Experience",
        Description:
          "Vroom.com is a luxury car rental web experience focused on high-end user interaction and visual storytelling. Built with React + TailwindCSS, the platform delivers real-time motion transitions, gradient overlays, and smooth hover effects for an ultra-modern feel. It was designed to impress visitors within seconds while maintaining fast load times and responsiveness across all screens.",
        Features: [
          "Real-time car listings with category-based filtering",
          "Smooth parallax image scrolling effects",
          "Interactive booking card hover animations",
          "Fully optimized responsive layout",
        ],
        Technologies: [
          "React.js",
          "TailwindCSS",
          "Framer Motion",
          "Vite",
          "Node.js",
        ],
        Challenges:
          "The main challenge was maintaining 60fps animations while loading high-resolution car images. Solved it by optimizing image assets and implementing lazy loading in React components.",
        Learnings:
          "Mastered useEffect and animation timing in Framer Motion, plus improved UI transitions using Tailwind's GPU-accelerated transforms.",
        Img: "/vroom-interface.png",
        Link: "https://precious-kitten-73c9b4.netlify.app/",
        Github: "#", // private repo
      },
      {
        id: 2,
        Title: "ShopSwiftly – E-commerce UI",
        Description:
          "ShopSwiftly is a sleek and performance-optimized e-commerce UI designed to demonstrate professional front-end architecture. With subtle glassmorphism, bold typography, and smooth fade-in animations, it offers a premium retail browsing feel. It’s built entirely with React + Tailwind + Vite for ultra-fast rendering.",
        Features: [
          "Product grid with soft hover zoom effects",
          "Smooth cart button animations",
          "Sticky navigation bar with glass blur",
          "Optimized responsive product images",
        ],
        Technologies: [
          "React.js",
          "TailwindCSS",
          "Framer Motion",
          "Vite",
        ],
        Challenges:
          "Ensuring minimal layout shift (CLS) while dynamically rendering products from JSON. Solved using CSS grid + aspect-ratio utilities.",
        Learnings:
          "Enhanced understanding of responsive scaling and performance-first UI design in e-commerce frontends.",
        Img: "/shophub-interface.png",
        Link: "https://prahlad-web.github.io/ShopSwiftly/",
        Github: "#", // private repo
      },
    ];

    const selected = localProjects.find((p) => String(p.id) === id);
    setProject(selected);
  }, [id]);

  if (!project)
    return (
      <div className="min-h-screen bg-[#030014] flex flex-col items-center justify-center text-white">
        <div className="w-20 h-20 border-4 border-blue-600/30 border-t-blue-500 rounded-full animate-spin mb-6"></div>
        <h2 className="text-2xl font-semibold">Loading Project...</h2>
      </div>
    );

  return (
    <div className="relative min-h-screen bg-[#030014] text-white px-[6%] py-16 overflow-hidden">
      {/* Background light effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-800/10 via-blue-800/10 to-transparent blur-3xl"></div>

      {/* Back Button */}
      <motion.button
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2 mb-10 text-white/70 hover:text-white transition-all"
        whileHover={{ x: -5 }}
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Portfolio</span>
      </motion.button>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8 bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl shadow-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            {project.Title}
          </h1>

          <p className="text-gray-300 leading-relaxed tracking-wide text-lg">
            {project.Description}
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-300">✨ Features</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              {project.Features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-300">
              🧠 Challenges & Learnings
            </h3>
            <p className="text-gray-300">{project.Challenges}</p>
            <p className="text-gray-300">{project.Learnings}</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a
              href={project.Link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 px-5 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/40 hover:border-blue-400 text-blue-200 rounded-xl backdrop-blur-lg shadow-lg transition-all"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Live Demo</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 px-5 py-3 bg-gradient-to-r from-gray-800/40 to-gray-700/30 border border-gray-600/40 text-gray-300 rounded-xl backdrop-blur-lg shadow-md transition-all cursor-not-allowed"
            >
              <Github className="w-5 h-5" />
              <span>Private Source 🔒</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] group"
        >
          <img
            src={project.Img}
            alt={project.Title}
            className="w-full h-auto object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
        </motion.div>
      </div>

      {/* Tech Stack Icons */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <h2 className="text-2xl font-semibold text-blue-300 mb-6">
          🧩 Technologies Used
        </h2>
        <div className="flex flex-wrap justify-center gap-8 text-4xl text-white/80">
          <FaReact className="hover:text-blue-400 transition" />
          <SiTailwindcss className="hover:text-sky-400 transition" />
          <SiFramer className="hover:text-pink-400 transition" />
          <SiVite className="hover:text-yellow-400 transition" />
          <FaNodeJs className="hover:text-green-400 transition" />
          <FaHtml5 className="hover:text-orange-400 transition" />
          <FaCss3Alt className="hover:text-blue-500 transition" />
          <FaJs className="hover:text-yellow-300 transition" />
          <FaGithub className="hover:text-gray-400 transition" />
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;