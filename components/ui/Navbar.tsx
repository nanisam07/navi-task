'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  
];

export const NavbarMenu = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <nav className="relative z-50 mx-4 my-6 rounded-3xl px-6 py-4 shadow-2xl bg-white/80 dark:bg-black/70 backdrop-blur-md border border-gray-200 dark:border-white/10 font-serif">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold dark:text-white">NANVI</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {menuItems.map(({ label, href }) => (
            <Link key={label} href={href}>
              <motion.p
                whileHover={{ scale: 1.05, color: '#3b82f6' }}
                transition={{ duration: 0.2 }}
                className="cursor-pointer text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-400"
              >
                {label}
              </motion.p>
            </Link>
          ))}

          {/* Dark Mode Toggle */}
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

        {/* Mobile Toggle Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md border dark:border-white border-black"
          >
            <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-4 px-2 space-y-3"
          >
            {menuItems.map(({ label, href }) => (
              <Link key={label} href={href} onClick={() => setIsMobileMenuOpen(false)}>
                <p className="text-sm text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
                  {label}
                </p>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavbarMenu;
