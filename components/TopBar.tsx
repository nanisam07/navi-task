'use client';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-800 text-white text-sm font-medium shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-3">
        {/* Contact Info */}
        <div className="flex flex-wrap items-center gap-5 text-white/90">
          <span className="flex items-center gap-2">
            <MdEmail className="text-white" />
            <a href="mailto:info@navni.in" className="hover:underline transition duration-200">
              info@navni.in
            </a>
          </span>
          <span className="flex items-center gap-2">
            <MdPhone className="text-white" />
            <a href="tel:+919100945658" className="hover:underline transition duration-200">
              +91 9100945658
            </a>
            <span className="mx-1">|</span>
            <a href="tel:+919697799229" className="hover:underline transition duration-200">
              +91 9697799229
            </a>
          </span>
        </div>

        {/* Open Hours & Socials */}
        <div className="flex flex-wrap items-center gap-5 justify-center text-white/90 font-semibold">
          <span className="hidden sm:block">
            Open Hours: <strong>09:00 AM to 07:00 PM</strong>, Sunday - <span className="text-red-300 font-semibold">CLOSED</span>
          </span>

          <div className="flex gap-3 text-lg">
            <a href="https://www.facebook.com/profile.php?id=61556963534894" aria-label="Facebook" className="hover:text-blue-500 transition-all duration-200">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-sky-400 transition-all duration-200">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/navni_structural_systems/" aria-label="Instagram" className="hover:text-pink-400 transition-all duration-200">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/96358001" aria-label="LinkedIn" className="hover:text-blue-300 transition-all duration-200">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-red-500 transition-all duration-200">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
