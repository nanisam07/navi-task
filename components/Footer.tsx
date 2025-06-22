"use client";

import { motion } from "framer-motion";
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-fuchsia-700 to-pink-700 text-white px-4 sm:px-8 py-12 font-serif">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        <div>
          <h3 className="text-xl font-bold mb-4">Build with NAVNI</h3>
          <p className="text-sm text-white/90 leading-relaxed">
            Navni Post Tensioning Systems Pvt. Ltd is a specialised
            post-tensioning company which experts in Post tensioning structures
            Design and Execution which was established in the year 2019 with a
            focus on providing value-added Engineering solutions.
          </p>
          <p className="mt-3 text-sm text-white/70">
            <Clock className="inline-block w-4 h-4 mr-1" />
            09:00 AM to 07:00 PM, Sunday - CLOSED
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Services</li>
            <li className="hover:underline cursor-pointer">Our Clients</li>
            <li className="hover:underline cursor-pointer">Portfolio</li>
            <li className="hover:underline cursor-pointer">Blogs</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Our Offices</h3>
          <div className="text-sm text-white/90 space-y-3">
            <p><MapPin className="inline-block w-4 h-4 mr-1" /> Plot No.9,10, Manikonda, Hyderabad, Telangana – 500089, India</p>
            <p><MapPin className="inline-block w-4 h-4 mr-1" /> 435, OU Colony Main Road, Shaikpet, Telangana - 500089, India</p>
            <p><Phone className="inline-block w-4 h-4 mr-1" /> +91 9100945658, +91 9697799299</p>
            <p><Mail className="inline-block w-4 h-4 mr-1" /> info@navni.in</p>
          </div>
        </div>
      </motion.div>

      <div className="mt-12 border-t border-white/20 pt-6 flex flex-col gap-4 md:flex-row justify-between items-center text-sm text-white/70 text-center md:text-left">
        <p>© 2024 Navni Post Tensioning Systems Pvt. Ltd, All Rights Reserved</p>
        <div className="flex gap-4">
          <Facebook className="hover:text-white cursor-pointer" />
          <Instagram className="hover:text-white cursor-pointer" />
          <Twitter className="hover:text-white cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
