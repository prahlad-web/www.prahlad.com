// src/components/TeamSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const team = [
  {
    name: "Shyam Shukla",
    role: "Frontend Developer",
    desc: "Creates stunning and high-performance user interfaces with React, Vite and Tailwind.",
    img: "/thumbs/team1.jpg", // case-sensitive path
    link: "/team/shyam-shukla",
  },
  {
    name: "Saumya Chandra",
    role: "UGC Content Creator",
    desc: "Crafts powerful visual stories and engaging brand videos with creativity and strategy.",
    img: "/thumbs/team2.jpg",
    link: "/team/saumya-chandra",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-[#f5e7c2]"
          >
            Meet The Team
          </motion.h2>
          <p className="text-gray-300 mt-2">Passionate minds behind the work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/6 shadow-lg cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-[#f5e7c2]"
                />
                <div>
                  <h3 className="text-xl font-semibold text-[#f5e7c2]">{m.name}</h3>
                  <p className="text-sm text-[#d4c7a2]">{m.role}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-300">{m.desc}</p>

              <div className="mt-4">
                {/* Link will use react-router route */}
                <Link
                  to={m.link}
                  className="inline-block px-4 py-2 mt-3 bg-[#f5e7c2] text-[#0a0a23] rounded-full font-semibold"
                >
                  View Profile →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
