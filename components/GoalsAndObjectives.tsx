"use client";

import { motion, Variants } from "framer-motion";
import React, { useState } from "react";

// ✅ Strongly typed variants for animation
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const objectives = [
  {
    title: "Enhance Structural Efficiency",
    description:
      "Implement innovative post-tensioning techniques to optimize structural design, reducing material usage while maintaining or enhancing performance.",
  },
  {
    title: "Optimize Project Costs",
    description:
      "Develop cost-effective post-tensioning solutions that minimize construction expenses while maximizing structural strength and longevity.",
  },
  {
    title: "Ensure Structural Integrity",
    description:
      "Conduct thorough analyses to ensure that post-tensioned structures meet or exceed safety standards, reducing design and execution risks.",
  },
  {
    title: "Meet Project Deadlines",
    description:
      "Efficiently plan and execute activities to meet project milestones and ensure timely completion of structural components.",
  },
  {
    title: "Ensure Quality Assurance",
    description:
      "Implement rigorous quality control throughout the process including materials testing, inspections, and performance monitoring.",
  },
];

export default function GoalsAndObjectives() {
  return (
    <section className="relative py-24 px-6 sm:px-8 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-pink-500 rounded-full opacity-20 blur-3xl"
        animate={{ x: [0, 50, -30, 0], y: [0, -40, 20, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-cyan-500 rounded-full opacity-20 blur-3xl"
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -20, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-bold text-center mb-16 relative z-10"
      >
        <span className="absolute top-[-2rem] left-1/2 -translate-x-1/2 text-7xl text-white/5 select-none pointer-events-none z-[-1]">
          SERVICE
        </span>
        Goals and Objectives
      </motion.h2>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 z-10 relative">
        {objectives.map((obj, index) => (
          <AnimatedCard
            key={index}
            index={index}
            title={obj.title}
            description={obj.description}
          />
        ))}
      </div>
    </section>
  );
}

type AnimatedCardProps = {
  title: string;
  description: string;
  index: number;
};

// ✅ Mouse-based tilt + hover animated card
function AnimatedCard({ title, description, index }: AnimatedCardProps) {
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -(y - centerY) / 20;
    const rotateY = (x - centerX) / 20;
    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform("rotateX(0deg) rotateY(0deg)");
  };

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-cyan-500/20 hover:scale-[1.03] transform-gpu cursor-pointer"
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
        {title}
      </h3>
      <p className="text-sm text-white/80">{description}</p>
    </motion.div>
  );
}
