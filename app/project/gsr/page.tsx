'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from "@/components/Footer";

export default function GSRResidentialKollur() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white min-h-screen">
        <Header />
      {/* 🔥 Hero Section */}
      <div className="bg-gradient-to-r from-pink-900 via-black to-indigo-900 py-16 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold text-yellow-400"
        >
          GSR Residential Buildings – Kollur, Hyderabad
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-lg sm:text-xl text-gray-200"
        >
          Modern high-rise living, engineered for excellence by Navni Post Tensioning Systems.
        </motion.p>
      </div>

      {/* 🔎 Project Introduction */}
      <section className="max-w-5xl mx-auto py-10 px-6 sm:px-8">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6 text-lg leading-relaxed"
        >
          In the rapidly expanding urban landscape of Hyderabad, <strong>Kollur</strong> has emerged as a significant hub for premium developments. One of its most ambitious residential communities — <strong>GSR Residential Buildings</strong> — offers vertical living redefined through modern architecture, open spaces, and post-tensioning engineering.
        </motion.p>
      </section>

      {/* 🧱 Project Overview */}
      <section className="max-w-5xl mx-auto py-6 px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-pink-400 mb-4"
        >
          🧱 Project Overview & Vision
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <Image
            src="/images/projects/hyd1.png"
            alt="MY HOME 99 Residential View"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/images/projects/hyd2.png"
            alt="Interior View MY HOME"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/images/projects/hyd3.png"
            alt="Interior View MY HOME"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <p className="mb-4">
          Spanning 6,00,000 sq.ft of built-up area, the structure includes 2 basements, a ground floor, and 18 upper residential floors. The design emphasizes column-free spans, reduced slab thickness, and architectural flexibility for modern living.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Project Name:</strong> GSR Residential Buildings</li>
          <li><strong>Structure:</strong> 2 Basements + Ground + 18 Floors</li>
          <li><strong>Location:</strong> Kollur, Hyderabad</li>
          <li><strong>Total Area:</strong> 6,00,000 Sq.ft</li>
        </ul>
      </section>

      {/* 🏗️ Navni’s Role */}
      <section className="max-w-5xl mx-auto py-6 px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-purple-400 mb-4"
        >
          🏗️ Navni&rsquo;s Role
        </motion.h2>
        <p className="mb-4">
          As a leading post-tensioning specialist, <strong>Navni</strong> was responsible for the design, execution, and QA of PT systems for slabs and beams across all floors.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Post-tensioning design optimization for all 18 floors and podiums</li>
          <li>Supply and installation of high-quality PT cables, anchorages, and jacks</li>
          <li>Dedicated supervision and QA during all stages of construction</li>
          <li>Timely completion aligned with the project timeline</li>
        </ul>
      </section>

      {/* 🔧 Technical Highlights */}
      <section className="max-w-5xl mx-auto py-6 px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-blue-400 mb-4"
        >
          🔧 Technical Highlights
        </motion.h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Enhanced Strength:</strong> Longer spans and column-free living areas</li>
          <li><strong>Material Efficiency:</strong> Reduced slab and beam thickness saving concrete & steel</li>
          <li><strong>Faster Floor Cycles:</strong> Shorter curing and efficient formwork reuse</li>
          <li><strong>Durability:</strong> Controlled shrinkage, thermal crack resistance, and seismic readiness</li>
        </ul>
      </section>

      {/* 🚀 Conclusion */}
      <section className="text-center py-12 px-6 sm:px-8">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl font-semibold text-yellow-300 mb-3"
        >
          Building the Future of Kollur
        </motion.h3>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Through innovative engineering and precision post-tensioning systems, Navni is shaping high-rise living in Hyderabad&rsquo;s dynamic Kollur district.
        </p>
      </section>
        <Footer />
    </div>
  );
}
