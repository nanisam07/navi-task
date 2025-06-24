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
    <div className="relative overflow-hidden py-20 px-6 sm:px-10 font-serif bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 text-gray-900">
      {/* 🌈 Animated Warm Blobs Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-30%] left-[-20%] w-[90vw] h-[90vw] bg-yellow-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob" />
        <div className="absolute bottom-[-25%] right-[-20%] w-[100vw] h-[100vw] bg-red-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute top-[40%] left-[15%] w-[60vw] h-[60vw] bg-orange-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-14 tracking-wide drop-shadow-xl text-red-700">
          STRATEGIES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl w-full h-auto max-h-[450px]"
          >
            <Image
              src="/images/teamsworker.png"
              width={800}
              height={600}
              alt="Team on Site"
              className="rounded-2xl object-cover w-full h-full"
            />
          </motion.div>

          {/* Strategy Cards */}
          <div className="space-y-6 w-full">
            {strategies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                viewport={{ once: true }}
                className="bg-white bg-opacity-90 backdrop-blur-md border-l-4 border-red-500 rounded-xl p-5 shadow-xl hover:shadow-orange-400/40 transition duration-300"
              >
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleIndex(index)}
                >
                  <h3 className="text-lg md:text-xl font-bold text-red-700">
                    {item.title}
                  </h3>
                  <span className="text-red-500 text-2xl font-bold">
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
