'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import ClientOnly from '@/components/ClientsOnly';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const consultants = [
  '/images/consultant/con1.png', '/images/consultant/con2.png', '/images/consultant/con16.png',
  '/images/consultant/con3.png', '/images/consultant/con10.png', '/images/consultant/con17.png',
  '/images/consultant/con4.png', '/images/consultant/con11.png', '/images/consultant/con18.png',
  '/images/consultant/con5.png', '/images/consultant/con12.png', '/images/consultant/con19.png',
  '/images/consultant/con7.png', '/images/consultant/con13.png', '/images/consultant/con20.png',
  '/images/consultant/con8.png', '/images/consultant/con14.png', '/images/consultant/con21.png',
  '/images/consultant/con9.png', '/images/consultant/con15.png', '/images/consultant/con23.png',
  '/images/consultant/con26.png', '/images/consultant/con25.png', '/images/consultant/con24.png',
  '/images/consultant/con25.png', '/images/consultant/con26.png', '/images/consultant/con27.png', '/images/consultant/con28.png',
];

export default function OurConsultantsWithFooter() {
  return (
    <>
      <Header />

      <ClientOnly>
        <section className="relative bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 px-6 pt-24 pb-16 overflow-hidden font-serif">
          {/* Decorative Background Blobs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute inset-0 bg-[url('/bg-lines.png')] opacity-10 bg-cover pointer-events-none" />

          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <p className="text-fuchsia-600 uppercase font-bold tracking-wider mb-3">
              Strategic Advisors
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
              Our Consultants
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Backed by top-tier consultants across the country, delivering technical excellence and guidance.
            </p>
          </motion.div>

          {/* Consultants Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 relative z-10">
            {consultants.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-4 bg-white/70 dark:bg-white/10 backdrop-blur-md rounded-2xl shadow-md hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-fuchsia-400 transition-all duration-300"
              >
                <Image
                  src={logo}
                  alt={`Consultant ${index + 1}`}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </section>
      </ClientOnly>

      {/* Footer - no margin to avoid spacing gap */}
      <Footer />
    </>
  );
}
