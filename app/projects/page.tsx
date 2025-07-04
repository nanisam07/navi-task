'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '@/components/Footer';
import NavbarMenu from '@/components/ui/Navbar';

const masonryProjects = [
  {
    name: 'Kadapa Central ',
    image: '/images/one11.png',
  },
  {
    name: 'MyHome 99',
    image: '/images/myhome99.png',
  },
  {
    name: '360 Life Towers - 1 ',
    image: '/images/two.png',
  },
  {
    name: 'Vision Vista Complex',
    image: '/images/vision.png',
  },
];

export default function MasonryPage() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <NavbarMenu />

      <div className="min-h-screen bg-gradient-to-br from-[#eaf6ff] via-[#d9eaf5] to-[#d3f5ff] text-gray-800">
        {/* Hero Section */}
        <section className="text-center pt-24 pb-16 px-4 bg-gradient-to-br from-white/70 to-blue-50/60 shadow-inner rounded-b-3xl">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-blue-600 uppercase tracking-widest text-sm font-semibold"
          >
            Explore the Features
          </motion.p>

          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{
              scale: 1.05,
              textShadow: '0px 0px 12px rgba(30, 64, 175, 0.8)',
              color: '#1e40af',
            }}
            className="text-5xl sm:text-6xl font-extrabold my-4 cursor-pointer text-blue-900 drop-shadow-xl"
          >
            MASONRY DESIGNS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 max-w-2xl mx-auto text-md sm:text-lg"
          >
            Explore our high-rise, landscaped, and aesthetic masonry designs
            that blend durability with architectural elegance.
          </motion.p>
        </section>

        {/* Masonry Grid */}
        <section className="px-6 sm:px-12 md:px-24 py-20 bg-gradient-to-b from-transparent to-white/40">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {masonryProjects.map((project, idx) => (
              <motion.div
                key={idx}
                className="rounded-3xl shadow-xl bg-white/40 backdrop-blur-md overflow-hidden border border-white/30 hover:shadow-blue-400/40 transition-all duration-500 group"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={500}
                  height={300}
                  className="w-full h-60 object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-in-out"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-blue-800 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-20">
            <Footer />
          </div>
        </section>
      </div>
    </div>
  );
}
