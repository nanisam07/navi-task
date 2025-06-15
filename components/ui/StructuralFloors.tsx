"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function StructuralFloors() {
  return (
    <section className="relative bg-[#0d466b] text-white overflow-hidden">
      {/* Blueprint Background */}
      <div className="absolute inset-0 opacity-30 z-0">
        <Image
          src="/images/blueprint.jpg" // Place your blueprint background here
          alt="Blueprint"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 py-24 max-w-7xl mx-auto">
        {/* Text Section */}
        <div className="md:w-1/2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase text-sm tracking-widest text-slate-300 mb-2"
          >
            Types Of
          </motion.p>

          <motion.h1
            whileHover={{ scale: 1.05, color: "#ffffff" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-5xl font-extrabold mb-4 cursor-pointer"
          >
            STRUCTURAL FLOORS
          </motion.h1>

          <motion.p
            whileHover={{ scale: 1.02, color: "#e2e8f0" }}
            transition={{ duration: 0.3 }}
            className="text-lg text-slate-200 max-w-md"
          >
            Usually depending on the column layout, one of the above system may be
            considered for the economical reasons.
          </motion.p>
        </div>

        {/* Cartoon Engineer */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-10 md:mt-0 md:w-1/2 flex justify-end"
        >
          <Image
            src="/images/cartoon.png" // Place your cartoon in /public folder
            alt="Engineer Cartoon"
            width={320}
            height={320}
            className="drop-shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
