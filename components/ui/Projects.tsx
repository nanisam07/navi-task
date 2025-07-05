"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "@ Ayyapa Socity",
    type: "COMMERCIAL PROJECT",
    color: "white",
    highlight: "#061c3d",
  },
  {
    title: "@ Chanda Nagar",
    type: "RESIDENTIAL BUILDING",
    color: "#7a1c55",
    highlight: "#fff",
  },
  {
    title: "@ Pragathi Nagar",
    type: "COMMERCIAL PROJECT",
    color: "white",
    highlight: "#061c3d",
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative py-20 bg-white overflow-hidden font-serif">
      {/* Blurred Background Heading */}
      <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[120px] font-bold text-gray-100 opacity-30 pointer-events-none select-none z-0">
        SERVICE
      </h1>

      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl font-extrabold text-[#0d355d] tracking-wide">PROJECTS</h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-full md:w-1/3 min-h-[200px] border border-green-950 rounded-md shadow-md hover:shadow-xl cursor-pointer"
            style={{
              backgroundColor: hovered === idx ? project.color : "#ffffff",
              color: hovered === idx ? project.highlight : "#0d355d",
              transition: "all 0.3s ease",
            }}
          >
            <div className="p-8 flex flex-col justify-between h-full gap-6">
              <div className="text-sm uppercase font-medium tracking-wider opacity-70">
                Project: {project.type}
              </div>
              <div className="text-xl font-bold">{project.title}</div>
              <div className="text-3xl font-light">+</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
