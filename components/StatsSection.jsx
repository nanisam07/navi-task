'use client';

import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: 85, labelTop: 'DESIGN', labelBottom: 'Projects' },
  { value: 99, labelTop: 'OUR HAPPY', labelBottom: 'Clients' },
  { value: 100, labelTop: 'COMPLETED', labelBottom: 'Projects' },
];

const StatCircle = ({ value, labelTop, labelBottom }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // ensure client-only
  }, []);

  useEffect(() => {
    if (isInView && mounted) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 20);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(Math.round(start));
      }, 20);

      return () => clearInterval(timer);
    } else if (!isInView) {
      setCount(0); // reset on scroll out
    }
  }, [isInView, mounted, value]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: value / 100 }}
      viewport={{ once: false }}
    >
      <div className="relative w-32 h-32 rounded-full border-4 border-white flex items-center justify-center">
        <span className="text-3xl font-bold text-white">{mounted ? `${count}%` : null}</span>
      </div>
      <p className="text-sm font-medium text-white mt-3 uppercase tracking-widest">{labelTop}</p>
      <p className="text-lg font-semibold text-white">{labelBottom}</p>
    </motion.div>
  );
};


const StatsSection = () => {
  return (
    <section className="py-20 px-6 bg-[length:200%_200%] bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 animate-gradient-x text-white font-serif">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center font-serif">
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
