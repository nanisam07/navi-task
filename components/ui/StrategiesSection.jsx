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
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="relative overflow-hidden min-h-screen py-16 px-6 sm:px-12 font-serif">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 blur-3xl opacity-30 font-serif" />

      <div className="relative z-10 max-w-6xl mx-auto font-serif">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 drop-shadow-md tracking-wide font-serif">
          STRATEGIES
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/teamsworker.png"
              width={800}
              height={600}
              alt="Team on Site"
              className="rounded-xl object-cover"
            />
          </motion.div>

          {/* Strategy Items */}
          <div className="space-y-6 w-full">
            {strategies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="bg-white bg-opacity-90 backdrop-blur-md border-l-4 border-purple-500 rounded-lg p-5 shadow-lg hover:shadow-2xl transition duration-300"
              >
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleIndex(index)}
                >
                  <h3 className="text-lg md:text-xl font-bold text-purple-800">
                    {item.title}
                  </h3>
                  <span className="text-purple-600 text-2xl font-bold">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-gray-800 mt-3 text-sm leading-relaxed"
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
    </div>
  );
}
