import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

export default function TopBar() {
  return (
    <div className="bg-gray-100 dark:bg-black text-sm text-gray-700 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left Side */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-1">
            <MdEmail className="text-blue-600" />
            <a href="mailto:info@navni.in" className="hover:underline">info@navni.in</a>
          </span>
          <span className="flex items-center gap-1">
            <MdPhone className="text-blue-600" />
            <a href="tel:+919100945658" className="hover:underline">+91 9100945658</a> |
            <a href="tel:+919697799229" className="hover:underline">+91 9697799229</a>
          </span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <span>Open Hours: 09:00 AM to 07:00 PM, Sunday - CLOSED</span>
          <div className="flex gap-2">
            <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-600"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-600"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-600"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-blue-600"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
