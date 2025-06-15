"use client";

import { motion } from "framer-motion";
import React from "react";


const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      type: "spring" as const,
      stiffness: 120,
      damping: 12,
    },
  },
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
    <section className="bg-sky-200 py-16 px-4 md:px-8">
      
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center relative font-serif"
        >
          <span className="opacity-10 absolute -z-10 text-8xl top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none">
            SERVICE
          </span>
          Goals and Objectives
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {objectives.map((obj, index) => (
            
            <motion.div
              key={index}
              className="p-6 border border-zinc-100 rounded-lg shadow-sm bg-slate-600  text-white font-serif"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
                stiffness: 120,
                damping: 12,
              }}
              viewport={{ once: true }}
            >
                <h3 className="text-xl font-semibold mb-2">
                  {obj.title}
                </h3>
                <p className="text-white text-sm">{obj.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
