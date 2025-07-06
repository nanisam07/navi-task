'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Header from '@/components/Header';
import Footer from "@/components/Footer";
export default function KadapaProjectPage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      <Header />
      {/* 🔥 Hero Section */}
      <div className="bg-[#1e1e2f] h-[50vh] sm:h-[60vh] flex items-center justify-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl font-extrabold text-center text-white"
        >
          Multiplex Mall – Kadapa
        </motion.h1>
      </div>

      {/* 💡 Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-10 font-[Poppins]">

        {/* 🧾 Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg leading-relaxed mb-6"
        >
          At <strong>Navni Post Tensioning Systems Pvt. Ltd.</strong>, we take pride in redefining skylines and transforming visionary concepts into architectural realities. One of our landmark projects currently underway is the <strong>Multiplex Mall in Kadapa</strong>, set to become one of the largest malls in South India.
        </motion.p>

        {/* 🏗️ Project Highlights */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-pink-400 mb-4">🏗️ Project Highlights:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Project Name:</strong> Multiplex Mall</li>
            <li><strong>Structure:</strong> 2 Basements + Ground + 7 Floors</li>
            <li><strong>Location:</strong> Kadapa, Andhra Pradesh</li>
            <li><strong>Total Area:</strong> 1,10,000 Sq. Ft.</li>
          </ul>
        </section>

        {/* 🖼️ Images Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <Image
            src="/images/projects/kadapa1.png"
            alt="Multiplex Mall Inside View 1"
            width={600}
            height={400}
            className="w-full h-auto rounded-xl shadow-lg"
          />
          <Image
            src="/images/projects/kadapa2.png"
            alt="Multiplex Mall Inside View 2"
            width={600}
            height={400}
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* 📖 About */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">📖 About the Project:</h2>
          <p className="mb-4">
            This prestigious mall project is a testament to our commitment to innovation, precision, and structural excellence. Spanning over 1.10 lakh sq. ft., the Multiplex Mall – Kadapa is designed to be a modern commercial and entertainment hub.
          </p>
          <p>
            It will feature state-of-the-art retail outlets, a grand multiplex, entertainment zones, and premium dining spaces — promising a world-class lifestyle experience for Kadapa’s residents and visitors.
          </p>
        </section>

        {/* 🛠️ Role */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">🛠️ Our Role:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Improved structural strength</li>
            <li>Reduced construction material usage</li>
            <li>Enhanced durability and service life</li>
            <li>Faster and cost-effective construction timelines</li>
          </ul>
        </section>

        {/* 💡 Why it matters */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-pink-400 mb-4">💡 Why This Project Matters:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Maximize architectural flexibility</li>
            <li>Reduce construction time and material costs</li>
            <li>Ensure long-lasting durability and safety</li>
          </ul>
          <p className="mt-4">
            At <strong>Navni Post Tensioning Systems Pvt. Ltd.</strong>, we’re proud to be an integral part of this transformative venture.
          </p>
        </section>

        {/* 🏬 Features */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">🏬 Features:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>2 Spacious Basement Levels for Parking</li>
            <li>Ground Floor for premium showrooms</li>
            <li>7 Floors of retail, food courts, gaming, and multiplex</li>
          </ul>
        </section>

        {/* 🔧 Involvement */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">🔧 Our Involvement Includes:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Advanced post-tensioning for slabs and beams</li>
            <li>Design optimization for material savings</li>
            <li>Technical supervision & quality assurance</li>
            <li>Faster floor-to-floor construction progression</li>
          </ul>
        </section>
      </div>
      <Footer  />
    </div>
  );
}
