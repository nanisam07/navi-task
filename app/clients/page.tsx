'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn,
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock
} from 'react-icons/fa';
import NavbarMenu from '@/components/ui/Navbar';
import ClientOnly from '@/components/ClientsOnly';
import Footer from "@/components/Footer";

const clients = [
  '/images/logos/C1.png', '/images/logos/C2.png', '/images/logos/C16.png',
  '/images/logos/C3.png', '/images/logos/C10.png', '/images/logos/C17.png',
  '/images/logos/C4.png', '/images/logos/C11.png', '/images/logos/C18.png',
  '/images/logos/C5.png', '/images/logos/C12.png', '/images/logos/C19.png',
  '/images/logos/C7.png', '/images/logos/C13.png', '/images/logos/C20.png',
  '/images/logos/C8.png', '/images/logos/C14.png', '/images/logos/C21.png',
  '/images/logos/C9.png', '/images/logos/C15.png', '/images/logos/C22.png', '/images/logos/CGIT 23.png'
];

export default function OurClientsWithFooter() {
  return (
    <>
      <NavbarMenu />

      {/* CLIENTS SECTION WRAPPED IN ClientOnly */}
      <ClientOnly>
        <section className="relative bg-gradient-to-r from-slate-50 to-slate-200 py-20 px-6">
          <div className="absolute inset-0 bg-[url('/bg-lines.png')] opacity-5 bg-cover pointer-events-none"></div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <p className="text-blue-600 uppercase font-semibold tracking-wider mb-3">
              Explore the Features
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
              Our Clients
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Trusted by real estate pioneers, our network reflects success and quality.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-10 relative z-10">
            {clients.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-4 bg-white rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
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
{/* Footer */}
      <div className="mt-24 w-full">
        <Footer />
      </div>
      
    </>
  );
}
