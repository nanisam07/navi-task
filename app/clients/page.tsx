'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn,
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock
} from 'react-icons/fa';
import NavbarMenu from '@/components/ui/Navbar';
import ClientOnly from '@/components/ClientsOnly';

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

      {/* FOOTER SECTION */}
      <footer className="bg-[#8e2a6c] text-white px-8 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Build with NAVNI</h3>
            <p className="mb-4 text-sm leading-relaxed">
              Navni Post Tensioning Systems Pvt. Ltd is a specialised post-tensioning company providing value-added engineering solutions. Established in 2019, Navni quickly became a specialized player in Post Tensioning Design and Execution.
            </p>
            <p className="flex items-center gap-2 text-sm">
              <FaClock /> 09:00 AM to 07:00 PM, Sunday - CLOSED
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Services</li>
              <li>Our Clients</li>
              <li>Portfolio</li>
              <li>Blogs</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Our Offices</h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1" /> Plot No.9,10, Manikonda, Rangareddy Dist,
                Hyderabad, Telangana – 500089, India
              </p>
              <p className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1" /> 435, OU Colony Main Road,
                Shaikpet, Rangareddy, Telangana – 500089, India
              </p>
              <p className="flex items-center gap-2">
                <FaPhoneAlt /> +91 9100945658, +91 9697799299
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope /> info@navni.in
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#0e3c59] mt-8 px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2024 Navni Post Tensioning Systems Pvt. Ltd, All Rights Reserved</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </footer>
    </>
  );
}
