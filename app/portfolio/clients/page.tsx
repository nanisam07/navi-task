'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import ClientOnly from '@/components/ClientsOnly';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const clients = [
  '/images/logos/C1.png', '/images/logos/C2.png', '/images/logos/C16.png',
  '/images/logos/C3.png', '/images/logos/C10.png', '/images/logos/C17.png',
  '/images/logos/C4.png', '/images/logos/C11.png', '/images/logos/C18.png',
  '/images/logos/C5.png', '/images/logos/C12.png', '/images/logos/C19.png',
  '/images/logos/C7.png', '/images/logos/C13.png', '/images/logos/C20.png',
  '/images/logos/C8.png', '/images/logos/C14.png', '/images/logos/C21.png',
  '/images/logos/C9.png', '/images/logos/C15.png', '/images/logos/C22.png',
];

export default function OurClientsWithFooter() {
  return (
    <>
      <Header />

      <ClientOnly>
        <section className="relative bg-gradient-to-br from-white via-purple-50 to-blue-50 px-6 pt-24 pb-16 overflow-hidden font-serif">
          {/* Background Blobs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[url('/bg-lines.png')] opacity-10 bg-cover pointer-events-none"></div>

          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <p className="text-fuchsia-600 uppercase font-bold tracking-wider mb-3">
              Trusted Partnerships
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
              Our Esteemed Clients
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              We proudly collaborate with leaders across industries, delivering structural excellence and innovation.
            </p>
          </motion.div>

          {/* Client Logos Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 relative z-10">
            {clients.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-4 bg-white/60 dark:bg-white/10 backdrop-blur-md rounded-2xl shadow-md hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-fuchsia-400 transition-all duration-300"
              >
                <Image
                  src={logo}
                  alt={`Client ${index + 1}`}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </section>
      </ClientOnly>

      {/* Footer - No Top Margin to Eliminate Gap */}
      <Footer />
    </>
  );
}
