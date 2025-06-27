'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const strategies = [
  {
    title: 'Planning',
    description:
      'Optimizing structural integrity and efficiency through expert post-tensioning planning and execution.',
  },
  {
    title: 'Competitive',
    description:
      'Staying ahead of industry standards with innovative post-tensioning techniques and practices.',
  },
  {
    title: 'Analysis',
    description:
      'Conducting thorough analysis to optimize post-tensioning solutions for structural efficiency.',
  },
  {
    title: 'Execution',
    description:
      'Implementing precision and expertise in post-tensioning execution for superior structural performance.',
  },
  {
    title: 'Growth',
    description:
      'Expanding expertise and capabilities to meet evolving project demands and client needs.',
  },
];

export default function StrategiesSection() {
  const [activeIndex, setActiveIndex] = useState(-1); // ✅ JS-safe

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative overflow-hidden py-24 px-6 sm:px-10 font-serif text-white"
    >
      {/* 🌌 Elegant Animated Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(135deg, #2b0057 0%, #3f0d68 50%, #23062b 100%)',
        }}
      />
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(ellipse at 20% 30%, rgba(255, 0, 150, 0.15), transparent 60%), radial-gradient(ellipse at 80% 70%, rgba(0, 204, 255, 0.12), transparent 60%)',
        }}
      />
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-0"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          backgroundImage:
            'repeating-radial-gradient(circle, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 2px, transparent 40px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 tracking-wider drop-shadow-lg text-pink-200"
        >
          <span className="text-white/10 absolute top-[-3rem] left-1/2 -translate-x-1/2 text-[6rem] select-none pointer-events-none z-[-1]">
            NAVNI
          </span>
          STRATEGIES
        </motion.h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="rounded-3xl overflow-hidden shadow-2xl w-full h-auto max-h-[450px] border-4 border-white/40"
          >
            <Image
              src="/images/teamsworker.png"
              width={800}
              height={600}
              alt="Team on Site"
              className="rounded-3xl object-cover w-full h-full"
            />
          </motion.div>

          {/* Strategy Cards */}
          <div className="space-y-6 w-full">
            {strategies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * index }}
                whileHover={{ scale: 1.02, rotate: [-1, 1, 0] }}
                viewport={{ once: true }}
                className="bg-white/20 backdrop-blur-md border-l-4 border-[#e91e63] p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-pink-400/40 transform-gpu"
              >
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleIndex(index)}
                >
                  <h3 className="text-lg md:text-xl font-bold text-pink-100">
                    {item.title}
                  </h3>
                  <span className="text-pink-300 text-2xl font-bold">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-pink-100/80 mt-3 text-sm leading-relaxed"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
