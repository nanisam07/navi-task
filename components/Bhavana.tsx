'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import bgImage from '../public/about-us.jpg'; // Or path to your image

export default function AboutUs() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('/about-us.jpg')` }}>
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
      <div className="relative z-20 px-6 md:px-20 text-white max-w-7xl w-full">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-extrabold leading-tight text-white opacity-20 tracking-widest"
        >
          SCHEDULE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-sm md:text-base font-semibold tracking-widest uppercase text-white"
        >
          Explore the Features
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-white"
        >
          About <span className="text-blue-300">Us</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-4 text-lg md:text-xl text-white max-w-2xl"
        >
          Etiam scelerisque tortor at lectus dapibus, nec fermentum diam feugiat. Morbi rutrum magna et dui.
        </motion.p>
      </div>
    </section>
  );
}