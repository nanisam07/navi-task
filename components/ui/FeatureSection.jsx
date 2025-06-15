"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FeatureSection() {
  return (
    <section className="bg-gradient-to-br from-white via-slate-50 to-slate-100 py-16 px-4 lg:px-24 font-serif">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image Section */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/team.jpg" // Replace with your optimized image path in public folder
            alt="Team at construction site"
            width={600}
            height={400}
            className="rounded-xl shadow-xl"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm text-slate-500 uppercase tracking-wide mb-2">
            Explore the Features
          </p>
          <h2 className="text-4xl font-bold text-slate-800 leading-tight mb-4">
            Navni Post<br />Tensioning System
          </h2>
          <p className="text-slate-600 mb-6 text-lg">
            Navni Post Tensioning Systems Pvt. Ltd is a specialised post-tensioning
            company which experts in Post tensioning structures Design and Execution.
            Established in 2019, we focus on providing value-added Engineering solutions.
          </p>
          <button className="bg-purple-800 text-white px-6 py-2 rounded-md shadow-md hover:bg-purple-900 transition duration-300">
            Read More
          </button>
        </motion.div>

      </div>
    </section>
  );
}
