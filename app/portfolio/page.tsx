'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PortfolioPage() {
  return (
    <section className="py-20 px-4 sm:px-8 bg-gradient-to-br from-purple-900 via-fuchsia-800 to-pink-700 text-white font-serif min-h-screen">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          Our <span className="text-yellow-300">Portfolio</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-8 text-lg font-medium">
          <Link href="/portfolio/clients">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/10 rounded-xl shadow-md hover:bg-white/20 transition text-white/90 text-center cursor-pointer"
            >
              Clients
            </motion.div>
          </Link>

          <Link href="/portfolio/consultants">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/10 rounded-xl shadow-md hover:bg-white/20 transition text-white/90 text-center cursor-pointer"
            >
              Consultants
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
