'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from "@/components/Footer";

export default function MyHomeGravaPage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white min-h-screen font-serif">
        <Header />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-black to-gray-800 py-16 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold text-cyan-400"
        >
          My Home Grava – A Lifestyle Legacy
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-lg sm:text-xl text-gray-200"
        >
          Ultra-luxury Living in the Heart of Neopolis, Hyderabad
        </motion.p>
      </div>

      {/* Intro */}
      <section className="max-w-5xl mx-auto py-10 px-6 sm:px-8">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6 text-lg leading-relaxed"
        >
          <strong>My Home Grava</strong> is a prestigious residential enclave nestled within the expansive Neopolis community in Kokapet, Hyderabad. Comprising seven towers crafted for opulence and comfort, this iconic development sets a new benchmark in high‑end urban living.
        </motion.p>
      </section>

      {/* Project Overview */}
      <section className="max-w-5xl mx-auto py-6 px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-purple-500 mb-4"
        >
          📊 Project Overview
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
                  <Image
                    src="/images/projects/grave1.png"
                    alt="MY HOME 99 Residential View"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                  <Image
                    src="/images/projects/grave3.png"
                    alt="Interior View MY HOME"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                  
                </div>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Developer:</strong> My Home Constructions / Hyma Developers</li>
          <li><strong>Site Area:</strong> 17.52 acres (80% open space & landscaping)</li>
          <li><strong>Tower Heights:</strong> Tower 1: G+54 (~211.9 m), Towers 2–7: G+49</li>
          <li><strong>Total Units:</strong> ~1,289 ultra‑luxury 4 BHK apartments (4,365–8,640 sq ft)</li>
          <li><strong>Completion:</strong> Estimated by 2028</li>
        </ul>
      </section>

      {/* Design Section */}
      <section className="max-w-5xl mx-auto py-6 px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-blue-400 mb-4"
        >
          🏛️ Design & Architecture
        </motion.h2>
        <p className="mb-6">
          Inspired by majestic mountain peaks, <strong>Grava</strong> reflects stability, monumentality, and resilience. With cascading balconies, home theatre provisions, and towering ceiling heights (3.45–3.60 m), every residence exudes sophistication.
        </p>
      </section>

      {/* Structural Excellence */}
      <section className="max-w-5xl mx-auto py-6 px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-cyan-400 mb-4"
        >
          🛠️ Navni’s Role & Structural Excellence
        </motion.h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Post‑tensioned slabs & beams enabling large spans and open floor plans</li>
          <li>Optimized thickness and material usage while ensuring strength</li>
          <li>Seamless integration with shear‑wall structures for seismic resistance</li>
          <li>Faster construction timelines through precision tensioning methods</li>
        </ul>
        <p>
          <strong>Navni</strong> delivers engineered solutions for lifestyle legacies, exemplified by My Home Grava.
        </p>
      </section>

      {/* Lifestyle Amenities */}
      <section className="max-w-5xl mx-auto py-6 px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-pink-400 mb-4"
        >
          🌿 Amenities & Lifestyle Offerings
        </motion.h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Clubhouse:</strong> 120,000 sq. ft. with spa, pool, gym, courts, lounge & guest rooms</li>
          <li><strong>Outdoor:</strong> Jogging, skating, amphitheatre, tennis, futsal, cricket nets</li>
          <li><strong>Interiors:</strong> Imported marble, modular kitchens, AV-enabled home theatres</li>
        </ul>
      </section>

      {/* Footer Outro */}
      <section className="text-center py-12 px-6 sm:px-8">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl font-semibold text-purple-300 mb-3"
        >
          A Testament to Tomorrow’s Living
        </motion.h3>
        <p className="text-gray-300 max-w-2xl mx-auto">
          With My Home Grava, <strong>Navni</strong> continues its journey to transform city skylines with engineering finesse, structural resilience, and lifestyle-enhancing technologies.
        </p>
      </section>
        <Footer />
    </div>
  );
}
