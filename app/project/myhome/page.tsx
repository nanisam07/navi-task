'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from "@/components/Footer";
export default function MyHome99Page() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white min-h-screen">
        <Header />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 via-black to-purple-800 py-16 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold text-pink-400"
        >
          MY HOME 99 – Redefining Luxury Living
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-lg sm:text-xl text-gray-200"
        >
          One of the Largest Post-Tensioning Residential Towers in South India
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
          At <strong>Navni Post Tensioning Systems Pvt. Ltd.</strong>, we take immense pride in being associated with some of the most prestigious and record-breaking projects in the country. Among them stands our flagship residential high-rise project — <strong>MY HOME 99</strong>, a remarkable landmark that’s set to redefine luxury living in Hyderabad.
        </motion.p>
      </section>

      {/* About the Project */}
      <section className="max-w-5xl mx-auto py-6 px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-pink-500 mb-4"
        >
          🏗️ About the Project:
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          MY HOME 99 rises gracefully to 55 floors — envisioned as a statement of architectural brilliance and future-ready urban living. Partnering with <strong>Buro Happold</strong>, this 6M+ sq.ft project leads in scale, elegance, and structural innovation.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <Image
            src="/images/projects/myhome1.png"
            alt="MY HOME 99 Residential View"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/images/projects/myhome2.png"
            alt="Interior View MY HOME"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          
        </div>
      </section>

      {/* Responsibilities */}
      <section className="max-w-5xl mx-auto py-6 px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-purple-400 mb-4"
        >
          🛠️ Our Responsibilities
        </motion.h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Post-tensioning systems across all 55 floors</li>
          <li>Slab thickness and load efficiency optimization</li>
          <li>Collaboration with consultants like Buro Happold</li>
          <li>Accelerated timelines using advanced PT systems</li>
        </ul>
        <p>
          Engineered for maximum strength, minimal material waste, and superior seismic resilience.
        </p>
      </section>

      {/* Why It's Special */}
      <section className="max-w-5xl mx-auto py-6 px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-blue-400 mb-4"
        >
          🌟 Why This Project Is Special
        </motion.h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>55-floor post-tensioning residential landmark</li>
          <li>World-class structural and architectural innovation</li>
          <li>Global collaboration and sustainability-driven execution</li>
          <li>Luxury living with safety, efficiency, and elegance</li>
        </ul>
      </section>

      {/* Outro */}
      <section className="text-center py-10 px-6 sm:px-8">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl font-semibold text-pink-300 mb-3"
        >
          Elevating the Future of Residential Living
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-gray-300"
        >
          At Navni, we redefine skylines with a focus on sustainability, structural integrity, and luxury. <br />
          <strong>MY HOME 99</strong> is our promise to future-ready urban living.
        </motion.p>
      </section>
    <Footer />
    </div>
  );
}
