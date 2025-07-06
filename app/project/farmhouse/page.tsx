'use client';

import { motion } from 'framer-motion';
import Footer from "@/components/Footer";
import Header from '@/components/Header';

export default function FarmhouseProjectPage() {
  return (
    <div className="bg-gradient-to-b from-green-950 via-black to-green-900 text-white min-h-screen font-serif">
        <Header />
      {/* 🌿 Hero Section */}
      <div className="bg-gradient-to-r from-lime-800 via-green-900 to-emerald-900 py-16 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold text-lime-300"
        >
          Premium Private Farmhouse Development
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-lg sm:text-xl text-gray-200"
        >
          A sustainable, serene, and structurally advanced farmhouse by Navni
        </motion.p>
      </div>

      {/* 🍃 Project Overview */}
      <section className="max-w-5xl mx-auto py-10 px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-lime-400 mb-4"
        >
          🍃 Project Concept & Vision
        </motion.h2>
        <p className="mb-4">
          Located on the tranquil outskirts of the city, this exclusive farmhouse project is designed to offer a luxurious yet nature-integrated retreat. Surrounded by lush landscapes and engineered with modern post-tensioning techniques, it combines comfort, elegance, and sustainability in one masterpiece.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Location: Outskirts of Hyderabad (Exact site under NDA)</li>
          <li>Design: 2-level eco-friendly farmhouse with natural materials and green roofing</li>
          <li>Built-Up Area: ~10,000 Sq.ft (approx.)</li>
          <li>Purpose: Premium weekend getaway and eco-conscious living</li>
        </ul>
      </section>

      {/* 🛠️ Navni's Role */}
      <section className="max-w-5xl mx-auto py-6 px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-green-300 mb-4"
        >
          🛠️ Navni's Engineering Role
        </motion.h2>
        <p className="mb-4">
          Navni Post Tensioning Systems Pvt. Ltd. was engaged to provide a structurally sound and long-lasting solution while maintaining the design’s lightweight and open character.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Post-tensioned slab and roof systems to allow uninterrupted open-plan interiors</li>
          <li>Design optimization to reduce construction cost and enhance energy efficiency</li>
          <li>Minimal concrete footprint with sustainability-focused material planning</li>
          <li>On-site execution with skilled supervision and quick turnaround timelines</li>
        </ul>
      </section>

      {/* 🌿 Natural Integration Highlights */}
      <section className="max-w-5xl mx-auto py-6 px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-emerald-300 mb-4"
        >
          🌿 Eco-Innovation & Design Features
        </motion.h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Natural stone and wooden finishes to blend with surroundings</li>
          <li>Solar panel integration & rainwater harvesting system</li>
          <li>Use of green concrete and energy-efficient HVAC layout</li>
          <li>Private pool, meditation deck, organic garden zones</li>
        </ul>
      </section>

      {/* ✅ Conclusion */}
      <section className="text-center py-12 px-6 sm:px-8">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl font-semibold text-lime-300 mb-3"
        >
          Building Green, Living Better
        </motion.h3>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Navni is proud to engineer spaces where nature meets structure. This farmhouse project is a symbol of architectural freedom, serenity, and precision post-tensioning.
        </p>
      </section>
        <Footer /> 
    </div>
  );
}
