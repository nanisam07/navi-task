'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 85, labelTop: 'DESIGN', labelBottom: 'Projects' },
  { value: 99, labelTop: 'OUR HAPPY', labelBottom: 'Clients' },
  { value: 100, labelTop: 'COMPLETED', labelBottom: 'Projects' },
];

const StatCircle = ({ value, labelTop, labelBottom }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const increment = end / (1500 / 30);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.round(start));
    }, 30);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center space-y-2"
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white/10 border border-white/20 shadow-xl backdrop-blur-md flex items-center justify-center overflow-hidden group hover:shadow-white/40 transition-all duration-500">
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-400 via-purple-500 to-indigo-600 blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        />
        <span className="relative text-3xl sm:text-4xl font-extrabold text-white z-10">{count}%</span>
      </div>
      <p className="text-xs sm:text-sm uppercase text-slate-100 tracking-widest font-semibold">{labelTop}</p>
      <p className="text-lg sm:text-xl font-bold text-white">{labelBottom}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white relative font-serif">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 z-10 relative text-center">
        {stats.map((stat, index) => (
          <StatCircle
            key={index}
            value={stat.value}
            labelTop={stat.labelTop}
            labelBottom={stat.labelBottom}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
