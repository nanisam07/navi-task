'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Left & Right Menus
const leftMenu = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'SERVICES', href: '/services' },
  { label: 'OUR PROCESS', href: '/process' },
];

const rightMenu = [
  { label: 'OUR PROJECTS', href: '/projects' },
  { label: 'CLIENTS', href: '/clients' },
  { label: 'TEAM', href: '/team' },
  { label: 'CONTACT US', href: '/contact' },
  { label: 'BLOG', href: '/blog' },
];

export const NavbarMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 mx-4 my-6 rounded-3xl px-6 py-4 shadow-2xl bg-white/80 dark:bg-black/70 backdrop-blur-md border border-gray-200 dark:border-white/10 font-serif">
      <div className="max-w-7xl mx-auto flex items-center justify-between lg:justify-center gap-8">
        {/* LEFT MENU */}
        <div className="hidden lg:flex items-center gap-6">
          {leftMenu.map(({ label, href }) => (
            <Link key={label} href={href}>
              <p className="cursor-pointer text-black dark:text-white">
                {label}
              </p>
            </Link>
          ))}
        </div>

        {/* LOGO */}
        <div className="mx-4">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={120}
              height={120}
              className="hover:scale-110 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* RIGHT MENU */}
        <div className="hidden lg:flex items-center gap-6">
          {rightMenu.map(({ label, href }) => (
            <Link key={label} href={href}>
              <p className="cursor-pointer text-black dark:text-white">
                {label}
              </p>
            </Link>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
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

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-4 px-2 space-y-3"
          >
            {[...leftMenu, ...rightMenu].map(({ label, href }) => (
              <Link key={label} href={href} onClick={() => setIsMobileMenuOpen(false)}>
                <p className="text-sm text-black dark:text-white">
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
