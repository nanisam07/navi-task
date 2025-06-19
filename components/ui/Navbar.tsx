'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const menuItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'SERVICES', href: '/services' },
  { label: 'OUR PROCESS', href: '/process' },
  { label: 'OUR PROJECTS', href: '/projects' },
  { label: 'CLIENTS', href: '/clients' },
  { label: 'TEAM', href: '/team' },
  { label: 'CONTACT US', href: '/contact' },
  { label: 'BLOG', href: '/blog' },
  { label: 'WISHLIST', href: '/wishlist' },
];

export const NavbarMenu = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle('dark', isDarkMode);
    }
  }, [isDarkMode, mounted]);

  if (!mounted) return null;

  return (
    <nav className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-xl flex justify-center px-10 py-6 transition-all duration-500 ease-in-out">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-xl font-serif font-bold text-black dark:text-white">
            NANVI
          </span>
        </Link>

        {/* Menu Items */}
        <div className="flex items-center space-x-6">
          {menuItems.map(({ label, href }) => (
            <Link key={label} href={href}>
              <motion.p
                whileHover={{ scale: 1.1, color: '#3b82f6' }} // Tailwind blue-500
                transition={{ duration: 0.3 }}
                className="cursor-pointer text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-400"
              >
                {label}
              </motion.p>
            </Link>
          ))}

          {/* Dark Mode Toggle Button */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="ml-4 w-10 h-10 flex items-center justify-center rounded-full border dark:border-white border-black hover:bg-black/10 dark:hover:bg-white/10 transition"
            title="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 3v1m0 16v1m8.66-11.34l-.7.7m-13.92 0l-.7-.7M21 12h-1M4 12H3m15.66 6.34l-.7-.7m-13.92 0l-.7.7M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 3c1.657 0 3.156.672 4.243 1.757A6 6 0 0112 21a9 9 0 000-18z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMenu;
