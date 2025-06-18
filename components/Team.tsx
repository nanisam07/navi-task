'use client';

import { motion } from 'framer-motion';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function ClientLogos() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-800 via-indigo-800 to-purple-900 py-20 px-6">
      <div className="backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl p-10 w-full max-w-7xl">
        <h2 className="text-white text-4xl font-bold text-center mb-12 drop-shadow-lg">Our Trusted Clients</h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="bg-white/20 rounded-xl p-6 flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 backdrop-blur-md"
              variants={logoVariants}
              whileHover={{ scale: 1.1 }}
            >
              <img src={logo} alt={`Logo ${index}`} className="max-h-16 object-contain" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
