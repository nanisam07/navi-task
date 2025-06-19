'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Footer from '@/components/Footer';

const logos = [
  '/logos/myhome.png',
  '/logos/360life.png',
  '/logos/risinia.png',
  '/logos/gem.png',
  '/logos/sln.png',
  '/logos/abhinandana.png',
  '/logos/niharika.png',
  '/logos/greenleaves.png',
  '/logos/silpa.png',
  '/logos/idhani.png',
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const logoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] },
  },
};

export default function ClientLogos() {
  return (
    <main className="bg-gradient-to-tr from-indigo-900 via-purple-900 to-violet-800 text-white w-full min-h-screen">
      <section className="py-24 px-6 flex flex-col items-center">
        <motion.h2
          className="text-5xl font-extrabold mb-12 drop-shadow-xl bg-gradient-to-r from-yellow-300 via-pink-500 to-red-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Trusted Clients
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-7xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl flex items-center justify-center shadow-xl border border-white/20 transition-transform duration-500 hover:scale-110 hover:rotate-1 hover:bg-white/20"
              variants={logoVariants}
            >
              <Image
                src={logo}
                alt={`Client Logo ${index + 1}`}
                width={120}
                height={60}
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <div className="mt-24 w-full">
        <Footer />
      </div>
    </main>
  );
}
