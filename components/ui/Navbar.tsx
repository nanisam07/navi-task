'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const leftMenu = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'SERVICES', href: '/services' },
  { label: 'OUR PROCESS', href: '/process' },
];

const rightMenu = [
  { label: 'BLOG', href: '/blog' },
  { label: 'CONTACT US', href: '/contact' },
];

export const NavbarMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  return (
    <nav className="w-full bg-white dark:bg-black shadow-md z-50 font-serif">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md border dark:border-white border-black"
          >
            <svg
              className="w-6 h-6 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Left Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {leftMenu.map(({ label, href }) => (
            <Link key={label} href={href}>
              <p className="cursor-pointer text-black dark:text-white hover:text-fuchsia-600 transition">
                {label}
              </p>
            </Link>
          ))}
        </div>

        {/* Logo */}
        <div className="flex justify-center items-center mx-4">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="hover:scale-110 transition-transform duration-300"
              priority
            />
          </Link>
        </div>

        {/* Right Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {/* PORTFOLIO Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsPortfolioOpen(true)}
            onMouseLeave={() => setIsPortfolioOpen(false)}
          >
            <p className="cursor-pointer text-black dark:text-white hover:text-fuchsia-600 transition">
              PORTFOLIO
            </p>
            <AnimatePresence>
              {isPortfolioOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 bg-white dark:bg-black border border-gray-200 dark:border-white/10 shadow-xl rounded-md z-50"
                >
                  <Link href="/portfolio/clients" className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-white/10">
                    Our Clients
                  </Link>
                  <Link href="/portfolio/consultants" className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-white/10">
                    Our Consultants
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Remaining Right Menu */}
          {rightMenu.map(({ label, href }) => (
            <Link key={label} href={href}>
              <p className="cursor-pointer text-black dark:text-white hover:text-fuchsia-600 transition">
                {label}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden px-4 pb-4 space-y-3 bg-white dark:bg-black border-t border-gray-200 dark:border-white/20"
          >
            {[...leftMenu, { label: 'PORTFOLIO / CLIENTS', href: '/portfolio/clients' }, { label: 'PORTFOLIO / CONSULTANTS', href: '/portfolio/consultants' }, ...rightMenu].map(
              ({ label, href }) => (
                <Link key={label} href={href} onClick={() => setIsMobileMenuOpen(false)}>
                  <p className="text-sm text-black dark:text-white hover:text-fuchsia-600 transition">
                    {label}
                  </p>
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavbarMenu;
