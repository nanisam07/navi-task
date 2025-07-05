"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const VisionSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-sky-100 py-16 sm:py-20 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Decorative Background SVG */}
      <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
        <svg
          className="absolute bottom-0 right-0 w-full h-full object-cover"
          viewBox="0 0 500 500"
          fill="none"
        >
          <path
            d="M0 400 C150 300, 350 500, 500 400"
            stroke="#3b82f6"
            strokeWidth="50"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 sm:gap-12">
        {/* Left: Image in tablet mockup */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="border-[10px] sm:border-[12px] border-gray-300 rounded-[1.5rem] sm:rounded-[2rem] shadow-lg relative overflow-hidden">
            <Image
              src="/images/vision.png"
              alt="Vision Construction"
              width={500}
              height={350}
              className="rounded-2xl object-cover"
            />
            <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-white h-5 sm:h-6 w-24 sm:w-28 rounded-full shadow" />
          </div>
        </motion.div>

        {/* Right: Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-6 font-serif">
            Our Vision
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-light font-sans">
            At <span className="font-semibold text-blue-800">Navni Post Tensioning Systems Pvt Ltd</span>, our vision is to set the standard in post-tensioning design and execution. We strive for excellence in every aspect of our work to ensure optimal structural performance. Through innovative engineering, meticulous execution, and a commitment to quality, we aim to deliver solutions that surpass industry expectations. By pushing the boundaries of conventional practices and embracing cutting-edge technologies, we aspire to be the preferred partner for clients seeking superior post-tensioning solutions worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
