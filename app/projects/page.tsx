'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const masonryImages = [
  '/images/one11.png',
  '/images/myhome99.png',
  '/images/two.png',
  '/images/vision.png',
];

export default function MasonryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] via-[#dfe9f3] to-[#e0f7fa] text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="text-center pt-24 pb-16 px-4 bg-gradient-to-br from-white/60 to-blue-50/60 backdrop-blur-lg shadow-inner">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-blue-700 uppercase tracking-widest text-sm"
        >
          Explore the Features
        </motion.p>

        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{
            scale: 1.05,
            textShadow: '0px 0px 12px rgba(37, 99, 235, 0.8)',
            color: '#1d4ed8', // blue-700
          }}
          className="text-5xl sm:text-6xl font-extrabold my-4 cursor-pointer text-blue-900 drop-shadow-xl"
        >
          MASONRY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 max-w-xl mx-auto text-md sm:text-lg"
        >
          Explore our high-rise, landscaped, and aesthetic masonry designs that blend durability with architectural elegance.
        </motion.p>
      </section>

      {/* Masonry Grid */}
      <section className="px-6 sm:px-12 md:px-24 py-20 bg-gradient-to-b from-transparent to-white/30">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {masonryImages.map((src, idx) => (
            <motion.div
              key={idx}
              className="rounded-3xl shadow-xl bg-white/30 backdrop-blur-md overflow-hidden border border-white/30 hover:shadow-blue-300 transition-all duration-500 group"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <Image
                src={src}
                alt={`Project ${idx + 1}`}
                width={500}
                height={300}
                className="w-full h-60 object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-in-out"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-blue-800 group-hover:text-blue-600 transition-colors">
                  Project #{idx + 1}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
